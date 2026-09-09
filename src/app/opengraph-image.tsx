import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* subtle grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* orange glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: 300,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* small tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid #f97316",
              color: "#f97316",
              fontSize: 20,
              marginBottom: 32,
            }}
          >
            <span>●</span> Available for opportunities
          </div>

          {/* name */}
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-2px",
              display: "flex",
            }}
          >
            Muhammad Salman
          </div>

          {/* role */}
          <div
            style={{
              fontSize: 32,
              color: "#a3a3a3",
              marginTop: 16,
              display: "flex",
            }}
          >
            Laravel Developer{" "}
            <span style={{ color: "#f97316", marginLeft: 10 }}>
              — Building fast web apps
            </span>
          </div>

          {/* bottom tags */}
          <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
            {["Laravel", "Next.js", "PHP", "MySQL"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: "#171717",
                  border: "1px solid #262626",
                  color: "#d4d4d4",
                  fontSize: 18,
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}