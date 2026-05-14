import { ImageResponse } from "next/og";

export const alt =
  "Комплектация коммерческих объектов сантехникой и керамогранитом | STURM";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#3a3a3e",
          color: "#ffffff",
          padding: "64px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 8,
          }}
        >
          <span>STURM</span>
          <span style={{ fontSize: 18, color: "#c8a16e", letterSpacing: 3 }}>
            PROJECT
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h1
            style={{
              margin: 0,
              maxWidth: 940,
              fontSize: 72,
              lineHeight: 0.98,
              fontWeight: 400,
              textTransform: "uppercase",
              color: "#c8a16e",
            }}
          >
            Комплектация коммерческих объектов
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 900,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#f2f0ec",
            }}
          >
            Сантехника, плитка, керамогранит и интерьерные решения для
            гостиниц, ресторанов, бизнес-центров и общественных пространств.
          </p>
        </div>
      </div>
    ),
    size,
  );
}
