import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Code brackets logo */}
        <div
          style={{
            fontSize: 120,
            color: "#60A5FA",
            fontWeight: 700,
            fontFamily: "monospace",
            marginBottom: 40,
          }}
        >
          {"</>"}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          CodaCrew
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Building high-quality web and mobile applications
        </div>

        {/* Tech stack badges */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 40,
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(96, 165, 250, 0.1)",
                color: "#60A5FA",
                padding: "12px 24px",
                borderRadius: 8,
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
