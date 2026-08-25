import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "НОРДКОР — промышленная инженерия";
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
          justifyContent: "flex-end",
          background: "#080A0B",
          color: "#F2F3F3",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, color: "#8B9297" }}>
          NORDCORE / ПРОМЫШЛЕННАЯ ИНЖЕНЕРИЯ
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 24,
          }}
        >
          ИНЖЕНЕРНЫЕ РЕШЕНИЯ
          <br />
          ДЛЯ ПРОМЫШЛЕННОСТИ
        </div>
      </div>
    ),
    size,
  );
}
