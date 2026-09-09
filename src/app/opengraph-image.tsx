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
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Muhammad Salman
        </div>
        <div style={{ fontSize: 28, color: "#f97316" }}>
          Laravel Developer
        </div>
      </div>
    ),
    { ...size }
  );
}