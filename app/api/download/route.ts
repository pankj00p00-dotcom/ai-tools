import { NextResponse } from "next/server";

const WORKER_URL = process.env.WORKER_URL?.replace(/\/+$/, "");
const WORKER_API_KEY = process.env.WORKER_API_KEY;

type DownloadRequest = {
  platform?: string;
  url?: string;
};

export async function POST(request: Request) {
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

    const body = (await request.json()) as DownloadRequest;

    const platform = body.platform?.trim() || "";
    const url = body.url?.trim() || "";

    if (!url) {
      return NextResponse.json(
        {
          error: "Video URL is required.",
        },
        { status: 400 }
      );
    }

    if (!platform) {
      return NextResponse.json(
        {
          error: "Platform is required.",
        },
        { status: 400 }
      );
    }

    const workerResponse = await fetch(`${WORKER_URL}/download`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": WORKER_API_KEY,
      },
      body: JSON.stringify({
        url,
        platform,
      }),
      cache: "no-store",
    });

    let workerData: {
      success?: boolean;
      jobId?: string;
      title?: string;
      message?: string;
      detail?: string;
      error?: string;
    };

    try {
      workerData = await workerResponse.json();
    } catch {
      return NextResponse.json(
        {
          error: "Downloader worker returned an invalid response.",
        },
        { status: 502 }
      );
    }

    if (!workerResponse.ok) {
      return NextResponse.json(
        {
          error:
            workerData?.detail ||
            workerData?.error ||
            "Downloader worker failed.",
        },
        {
          status: workerResponse.status,
        }
      );
    }

    if (!workerData?.success || !workerData?.jobId) {
      return NextResponse.json(
        {
          error: "Worker did not return a valid download job.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      jobId: workerData.jobId,
      title: workerData.title || "download",
      message:
        workerData.message || "Media processed successfully.",
    });
  } catch (error) {
    console.error("Download API error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to connect to the downloader worker. Please try again later.",
      },
      { status: 503 }
    );
  }
}