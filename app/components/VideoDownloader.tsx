"use client";

import { useState } from "react";

type Platform =
  | "instagram"
  | "facebook"
  | "youtube"
  | "tiktok";

type VideoDownloaderProps = {
  platform: Platform;
  title: string;
  description: string;
  placeholder: string;
};

const platformNames: Record<Platform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
};

type DownloadResponse = {
  success?: boolean;
  jobId?: string;
  title?: string;
  downloadUrl?: string;
  message?: string;
  error?: string;
};

export default function VideoDownloader({
  platform,
  title,
  description,
  placeholder,
}: VideoDownloaderProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const platformName = platformNames[platform];

  const handleDownload = async () => {
    setError("");

    const cleanUrl = url.trim();

    if (!cleanUrl) {
      setError(`Please paste a ${platformName} video URL.`);
      return;
    }

    try {
      new URL(cleanUrl);
    } catch {
      setError("Please enter a valid video URL.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          platform,
          url: cleanUrl,
        }),
      });

      let data: DownloadResponse;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The downloader returned an invalid response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to process this URL."
        );
      }

      let downloadUrl = data?.downloadUrl;

      // Fallback for deployments where the API only returns a jobId.
      if (!downloadUrl && data?.jobId) {
        downloadUrl = `/api/download-file/${encodeURIComponent(
          data.jobId
        )}`;
      }

      if (!downloadUrl) {
        throw new Error(
          data?.message ||
            "No downloadable media was returned."
        );
      }

      window.location.href = downloadUrl;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">
            {platform === "instagram" && "📸"}
            {platform === "facebook" && "📘"}
            {platform === "youtube" && "▶️"}
            {platform === "tiktok" && "🎵"}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-3 text-gray-400 text-sm sm:text-base leading-7">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleDownload();
              }
            }}
            placeholder={placeholder}
            aria-label={`${platformName} video URL`}
            className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-white/30"
          />

          <button
            onClick={handleDownload}
            disabled={loading}
            className="rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing..." : "Download"}
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <div className="mt-6 text-center text-xs text-gray-500">
          Download only publicly accessible content or content
          you own or have permission to save.
        </div>
      </div>
    </section>
  );
}