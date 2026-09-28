import { ImageResponse } from "next/og";
import { colinhaConfig } from "@/content/colinha";

export const alt = "Monte sua colinha — Daniel Valença 50.100, deputado estadual";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagem() {
  const digitos = colinhaConfig.estadual.numero.split("");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#5d0caa",
        padding: 56,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ color: "#ffc900", fontSize: 28, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", margin: 0 }}>
          {colinhaConfig.eleicao} • {colinhaConfig.estado}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ color: "#ffffff", fontSize: 60, fontWeight: 800, textTransform: "uppercase", margin: 0 }}>
          Monte sua colinha
        </p>
        <p style={{ color: "#ffc900", fontSize: 86, fontWeight: 800, textTransform: "uppercase", margin: "8px 0 0" }}>
          {colinhaConfig.estadual.nome}
        </p>
        <div style={{ display: "flex", gap: 10, margin: "24px 0" }}>
          {digitos.map((digito) => (
            <div
              key={digito}
              style={{
                display: "flex",
                width: 74,
                height: 96,
                alignItems: "center",
                justifyContent: "center",
                background: "#ffc900",
                border: "6px solid #16121f",
                color: "#16121f",
                fontSize: 54,
                fontWeight: 800,
              }}
            >
              {digito}
            </div>
          ))}
        </div>
        <p style={{ color: "#6eec98", fontSize: 34, fontWeight: 800, textTransform: "uppercase", margin: 0 }}>
          {colinhaConfig.estadual.slogan}
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 22, fontWeight: 700, margin: 0 }}>
          {colinhaConfig.estadual.rotulo} • {colinhaConfig.estadual.partido} • danielvalenca.com.br/colinha
        </p>
      </div>
    </div>,
    { ...size },
  );
}
