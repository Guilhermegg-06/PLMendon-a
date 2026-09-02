import { ImageResponse } from "next/og";

export const alt = "Paulinho Mendonça, candidato a deputado estadual por Alagoas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#071e9c",
          color: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#4be678", fontSize: 34, fontWeight: 800 }}>
          Paulinho Mendonça
        </div>
        <div style={{ display: "flex", maxWidth: 820, fontSize: 82, lineHeight: 0.96, letterSpacing: -5, fontWeight: 800 }}>
          De coração que alimenta.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#dce5ff" }}>
          Candidato a deputado estadual por Alagoas
        </div>
      </div>
    ),
    size,
  );
}
