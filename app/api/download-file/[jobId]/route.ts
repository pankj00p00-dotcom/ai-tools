import { NextResponse } from "next/server";

const WORKER_URL = process.env.WORKER_URL?.replace(/\/+$/, "");
const WORKER_API_KEY = process.env.WORKER_API_KEY;

type RouteContext = {
  params: Promise<{
    jobId: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext
) {
  try {
    if (!WORKER_URL) {
      return NextResponse.json(
        {
          error: "Downloader worker URL is not configured.",
        },
        { status: 500 }
      );
    }

    if (!WORKER_API_KEY) {
      return NextResponse.json(
        {
          error: "Downloader worker API key is not configured.",
        },
        { status: 500 }
      );
    }

    const { jobId } = await params;

    if (!jobId) {
      return NextResponse.json(
        {
          error: "Download job ID is required.",
        },
        { status: 400 }
      );
    }

    const workerResponse = await fetch(
      `${WORKER_URL}/download-file/${encodeURIComponent(jobId)}`,
      {
        method: "GET",
        headers: {
          "x-api-key": WORKER_API_KEY,
        },
        cache: "no-store",
      }
    );

    if (!workerResponse.ok) {
      let workerError = "Unable to download the processed file.";

      try {
        const data = await workerResponse.json();

        workerError =
          data?.detail ||
          data?.error ||
          workerError;
      } catch {
        // Keep default error message.
      }

      return NextResponse.json(
        {
          error: workerError,
        },
        { status: workerResponse.status }
      );
    }

    const contentType =
      workerResponse.headers.get("content-type") ||
      "application/octet-stream";

    const contentDisposition =
      workerResponse.headers.get("content-disposition") ||
      'attachment; filename="download.mp4"';

    return new NextResponse(workerResponse.body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": contentDisposition,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Download file proxy error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to retrieve the downloaded file. Please try again.",
      },
      { status: 503 }
    );
  }
}