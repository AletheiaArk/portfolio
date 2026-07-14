import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const read = (p) => fs.readFileSync(path.join(process.cwd(), p));
const font = (f) => read(`node_modules/@fontsource/${f}`);

// The site's real fonts + avatar, so the share card matches the profile card.
const averia = font("averia-gruesa-libre/files/averia-gruesa-libre-latin-400-normal.woff");
const grotesk400 = font("space-grotesk/files/space-grotesk-latin-400-normal.woff");
const grotesk600 = font("space-grotesk/files/space-grotesk-latin-600-normal.woff");
const avatarBuf = read("public" + site.avatar);
// The avatar file may be a JPEG regardless of its .png name — pick the real MIME.
const avatarMime = avatarBuf[0] === 0xff && avatarBuf[1] === 0xd8 ? "image/jpeg" : "image/png";
const avatar = `data:${avatarMime};base64,${avatarBuf.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(120deg, #eafff4 0%, #f4fbe8 55%, #eefdf6 100%)",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 900,
            padding: "72px 80px",
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(255,255,255,0.75)",
            borderRadius: 36,
            boxShadow: "0 30px 80px -30px rgba(51,79,82,0.35)",
          }}
        >
          <img
            src={avatar}
            width={150}
            height={150}
            style={{
              borderRadius: 32,
              border: "4px solid rgba(255,255,255,0.9)",
              boxShadow: "0 12px 30px -8px rgba(51,79,82,0.4)",
            }}
          />
          <div style={{ display: "flex", fontFamily: "Averia Gruesa Libre", fontSize: 82, color: "#334f52", marginTop: 30 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", fontFamily: "Space Grotesk", fontWeight: 600, fontSize: 30, color: "#7b888e", marginTop: 8 }}>
            {site.role}
          </div>
          <div style={{ display: "flex", width: 70, height: 2, background: "rgba(51,79,82,0.15)", margin: "30px 0" }} />
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk",
              fontSize: 27,
              color: "#334f52",
              maxWidth: 640,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {`“${site.motto}”`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Averia Gruesa Libre", data: averia, weight: 400, style: "normal" },
        { name: "Space Grotesk", data: grotesk400, weight: 400, style: "normal" },
        { name: "Space Grotesk", data: grotesk600, weight: 600, style: "normal" },
      ],
    }
  );
}
