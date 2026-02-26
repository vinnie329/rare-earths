import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Rare Earth Elements Index";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const [fontMedium, fontLight, fontRegularItalic] = await Promise.all([
    readFile(
      join(process.cwd(), "src/fonts/ABCMonumentGrotesk-Medium-Trial.woff")
    ),
    readFile(
      join(process.cwd(), "src/fonts/ABCMonumentGrotesk-Light-Trial.woff")
    ),
    readFile(
      join(
        process.cwd(),
        "src/fonts/ABCMonumentGrotesk-RegularItalic-Trial.woff"
      )
    ),
  ]);

  const FG = "#1A1A1A";
  const FG_MID = "#6B6760";
  const FG_LIGHT = "#9E9A93";

  const fields = [
    { label: "COUNT", value: "17" },
    { label: "SERIES", value: "Ln + 2 TM" },
    { label: "RANGE", value: "21 — 71" },
    { label: "ORIGIN", value: "CN 70%" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#DDDAD4",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Monument Grotesk",
        }}
      >
        {/* Concentric circles — SVG */}
        <svg
          viewBox="0 0 1200 630"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <circle
            cx="860"
            cy="340"
            r="480"
            stroke="#1a1a1a"
            stroke-width="0.5"
            fill="none"
            opacity="0.14"
          />
          <circle
            cx="860"
            cy="340"
            r="360"
            stroke="#1a1a1a"
            stroke-width="0.5"
            fill="none"
            opacity="0.17"
          />
          <circle
            cx="860"
            cy="340"
            r="240"
            stroke="#1a1a1a"
            stroke-width="0.5"
            fill="none"
            opacity="0.21"
          />
          <circle
            cx="860"
            cy="340"
            r="140"
            stroke="#1a1a1a"
            stroke-width="0.5"
            fill="none"
            opacity="0.26"
          />
          <circle
            cx="860"
            cy="340"
            r="55"
            stroke="#1a1a1a"
            stroke-width="0.6"
            fill="none"
            opacity="0.3"
          />
        </svg>

        {/* Top header row */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 36,
            right: 36,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontFamily: "monospace",
              color: FG_LIGHT,
              textTransform: "uppercase" as const,
              letterSpacing: "0.15em",
              display: "flex",
            }}
          >
            REE-INDEX
          </div>
          <div
            style={{
              fontSize: 10,
              fontFamily: "monospace",
              color: FG_LIGHT,
              letterSpacing: "0.1em",
              display: "flex",
            }}
          >
            026 / 2026
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 36,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 110,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: FG,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>RARE</span>
            <span style={{ display: "flex" }}>EARTHS</span>
          </div>
          <div
            style={{
              fontStyle: "italic",
              fontSize: 28,
              color: FG_MID,
              marginTop: 8,
              display: "flex",
            }}
          >
            ( index )
          </div>
        </div>

        {/* Mid horizontal rule */}
        <div
          style={{
            position: "absolute",
            top: 403,
            left: 36,
            right: 36,
            height: 1,
            background: "rgba(26,26,26,0.15)",
            display: "flex",
          }}
        />

        {/* Accent dot */}
        <div
          style={{
            position: "absolute",
            top: 401,
            left: 36,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: FG,
            opacity: 0.35,
            display: "flex",
          }}
        />

        {/* Data fields */}
        <div
          style={{
            position: "absolute",
            top: 428,
            left: 36,
            right: 36,
            display: "flex",
          }}
        >
          {fields.map((field) => (
            <div
              key={field.label}
              style={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontFamily: "monospace",
                  color: FG_LIGHT,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                  display: "flex",
                }}
              >
                {field.label}
              </div>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 500,
                  color: FG,
                  letterSpacing: "-0.01em",
                  display: "flex",
                }}
              >
                {field.value}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom-right decorative symbols */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 36,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 3,
            opacity: 0.5,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontFamily: "monospace",
              color: FG_LIGHT,
              letterSpacing: "0.12em",
              display: "flex",
            }}
          >
            Nd · Dy · Ce
          </div>
          <div
            style={{
              fontSize: 9,
              fontFamily: "monospace",
              color: FG_LIGHT,
              letterSpacing: "0.12em",
              display: "flex",
            }}
          >
            La · Pr · Sm
          </div>
        </div>

        {/* Bottom-left footer */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 36,
            fontSize: 10,
            fontFamily: "monospace",
            color: FG_LIGHT,
            textTransform: "uppercase" as const,
            letterSpacing: "0.08em",
            display: "flex",
          }}
        >
          Lanthanides + Sc, Y
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Monument Grotesk",
          data: fontMedium.buffer,
          weight: 500 as const,
          style: "normal" as const,
        },
        {
          name: "Monument Grotesk",
          data: fontLight.buffer,
          weight: 300 as const,
          style: "normal" as const,
        },
        {
          name: "Monument Grotesk",
          data: fontRegularItalic.buffer,
          weight: 400 as const,
          style: "italic" as const,
        },
      ],
    }
  );
}
