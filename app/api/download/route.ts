import { NextResponse } from "next/server";

const WORKER_URL = "http://127.0.0.1:8000";

type DownloadRequest = {
  platform?: string;
  url?: string;
};

export async function POST(request: Request) {
  try {
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
      },
      body: JSON.stringify({
        url,
        platform,
      }),
      cache: "no-store",
    });

    const workerData = await workerResponse.json();

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
      downloadUrl: `${WORKER_URL}/download-file/${workerData.jobId}`,
      message:
        workerData.message || "Media processed successfully.",
    });
  } catch (error) {
    console.error("Download API error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to connect to the downloader worker. Make sure the Python worker is running.",
      },
      { status: 503 }
    );
  }
}