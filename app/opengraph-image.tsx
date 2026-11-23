import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// This image appears when your link is shared on Messenger, LinkedIn, and more.
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#9b9b9b" }}>
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          {profile.statement}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 6, background: "#2f4bff" }} />
          <div style={{ display: "flex", fontSize: 30, color: "#9b9b9b" }}>
            {profile.role}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
