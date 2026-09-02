import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "#071e9c",
          color: "#4be678",
          fontSize: 25,
          fontWeight: 900,
          letterSpacing: -2,
        }}
      >
        PM
      </div>
    ),
    size,
  );
}
