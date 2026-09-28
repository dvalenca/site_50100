import { colinhaConfig, opcaoSenado, sugestaoFederal, type EscolhasColinha } from "@/content/colinha";

// Renderizador em canvas do santinho, para exportar PNG em alta resolução.
// Espelha o design do ColinhaCard: cargos na ordem da urna, Daniel em destaque.

export type FormatoColinha = "wide" | "story";

const INK = "#16121f";
const PURPLE = "#5d0caa";
const YELLOW = "#ffc900";
const MINT = "#6eec98";
const BRANCO = "#ffffff";
const W = 1080;
const PAD = 48;

type Ctx = CanvasRenderingContext2D;

function familia(cssVar: string): string {
  if (typeof window === "undefined") return "Arial";
  const valor = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  return valor || "Arial";
}

function setFont(ctx: Ctx, size: number, display = true, weight = 800) {
  const fam = display ? familia("--font-bricolage") : familia("--font-inter");
  ctx.font = `${weight} ${size}px ${fam}, Arial, sans-serif`;
}

function drawFitted(
  ctx: Ctx,
  texto: string,
  x: number,
  y: number,
  opts: {
    size: number;
    maxW: number;
    color: string;
    display?: boolean;
    weight?: number;
    align?: CanvasTextAlign;
  },
): { width: number } {
  let size = opts.size;
  for (;;) {
    setFont(ctx, size, opts.display ?? true, opts.weight ?? 800);
    if (ctx.measureText(texto).width <= opts.maxW || size <= 14) break;
    size -= 2;
  }
  ctx.fillStyle = opts.color;
  ctx.textAlign = opts.align ?? "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(texto, x, y);
  return { width: ctx.measureText(texto).width };
}

function larguraCaixas(casas: number, boxW: number, gap: number) {
  return casas * boxW + (casas - 1) * gap;
}

function drawNumberBoxes(
  ctx: Ctx,
  valor: string,
  casas: number,
  xLeft: number,
  yTop: number,
  boxW: number,
  boxH: number,
  gap: number,
  fundo: string,
) {
  const lw = 5;
  ctx.strokeStyle = INK;
  ctx.lineWidth = lw;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < casas; i++) {
    const digito = valor[i] ?? "";
    const x = xLeft + i * (boxW + gap);
    ctx.setLineDash(digito ? [] : [12, 9]);
    ctx.beginPath();
    ctx.roundRect(x + lw / 2, yTop + lw / 2, boxW - lw, boxH - lw, 8);
    ctx.fillStyle = fundo;
    ctx.fill();
    ctx.stroke();
    if (digito) {
      setFont(ctx, Math.round(boxH * 0.56));
      ctx.fillStyle = INK;
      ctx.fillText(digito, x + boxW / 2, yTop + boxH / 2 + boxH * 0.02);
    }
  }
  ctx.setLineDash([]);
}

function drawCover(ctx: Ctx, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const escala = Math.max(w / img.width, h / img.height);
  const dw = img.width * escala;
  const dh = img.height * escala;
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 8;
  ctx.strokeRect(x + 4, y + 4, w - 8, h - 8);
}

function divisoria(ctx: Ctx, y: number) {
  ctx.strokeStyle = "rgba(22,18,31,0.18)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(W, y);
  ctx.stroke();
}

type LinhaVotoOpts = {
  y: number;
  h: number;
  indice: number;
  cargo: string;
  /** null = cargo sem nome (só o número) */
  nome: string | null;
  partido: string;
  valor: string;
  casas: number;
  boxW: number;
  boxH: number;
  gap: number;
  labelSize?: number;
  nomeSize?: number;
  foto?: HTMLImageElement | null;
};

function linhaVoto(ctx: Ctx, opts: LinhaVotoOpts) {
  const { y, h, boxH } = opts;
  const largura = larguraCaixas(opts.casas, opts.boxW, opts.gap);
  const xCaixas = W - PAD - largura;
  const larguraFoto = opts.foto ? boxH + 24 : 0;
  const nomeMaxW = xCaixas - PAD - 24 - larguraFoto;

  drawFitted(ctx, `${opts.indice} • ${opts.cargo.toUpperCase()}`, PAD, y + h * 0.3, {
    size: opts.labelSize ?? h * 0.2,
    maxW: nomeMaxW,
    color: "rgba(22,18,31,0.62)",
    display: false,
    weight: 800,
  });

  const nome = opts.nome;
  const nomeSize = opts.nomeSize ?? h * 0.42;
  if (nome) {
    setFont(ctx, (opts.labelSize ?? h * 0.2), false, 800);
    const rotuloPartido = opts.partido ? ` • ${opts.partido}` : "";
    const wPartido = opts.partido ? ctx.measureText(rotuloPartido).width : 0;
    const r = drawFitted(ctx, nome.toUpperCase(), PAD, y + h * 0.74, {
      size: nomeSize,
      maxW: nomeMaxW - wPartido,
      color: INK,
    });
    if (opts.partido) {
      ctx.fillStyle = "rgba(22,18,31,0.72)";
      ctx.textAlign = "left";
      ctx.fillText(rotuloPartido, PAD + r.width + 4, y + h * 0.74);
    }
  }

  if (opts.foto) {
    drawCover(ctx, opts.foto, xCaixas - larguraFoto + 24, y + (h - boxH) / 2, boxH, boxH);
  }
  drawNumberBoxes(
    ctx,
    opts.valor,
    opts.casas,
    xCaixas,
    y + (h - boxH) / 2,
    opts.boxW,
    opts.boxH,
    opts.gap,
    BRANCO,
  );
  divisoria(ctx, y + h);
}

type DestaqueSpec = {
  h: number;
  label: number;
  nome: number;
  slogan: number;
  labelSize: number;
  nomeSize: number;
  sloganSize: number;
  foto: { x: number; y: number; w: number; h: number };
  caixa: { w: number; h: number; gap: number; margem: number };
};

const DESTAQUE: Record<"wide" | "story", DestaqueSpec> = {
  wide: {
    h: 314,
    label: 46,
    nome: 132,
    slogan: 180,
    labelSize: 24,
    nomeSize: 84,
    sloganSize: 32,
    foto: { x: 808, y: 26, w: 224, h: 260 },
    caixa: { w: 94, h: 108, gap: 12, margem: 18 },
  },
  story: {
    h: 650,
    label: 52,
    nome: 180,
    slogan: 250,
    labelSize: 26,
    nomeSize: 112,
    sloganSize: 38,
    foto: { x: 760, y: 40, w: 272, h: 350 },
    caixa: { w: 112, h: 146, gap: 14, margem: 40 },
  },
};

function linhaDestaque(
  ctx: Ctx,
  y: number,
  formato: "wide" | "story",
  foto: HTMLImageElement | null,
) {
  const c = colinhaConfig.estadual;
  const spec = DESTAQUE[formato];
  ctx.fillStyle = PURPLE;
  ctx.fillRect(0, y, W, spec.h);
  ctx.fillStyle = INK;
  ctx.fillRect(0, y, W, 6);
  ctx.fillRect(0, y + spec.h - 6, W, 6);

  drawFitted(ctx, `2 • ${c.rotulo.toUpperCase()} — ${c.partido}`, PAD, y + spec.label, {
    size: spec.labelSize,
    maxW: spec.foto.x - PAD - 24,
    color: "rgba(255,255,255,0.85)",
    display: false,
    weight: 800,
  });
  drawFitted(ctx, c.nome.toUpperCase(), PAD, y + spec.nome, {
    size: spec.nomeSize,
    maxW: spec.foto.x - PAD - 24,
    color: YELLOW,
  });
  drawFitted(ctx, c.slogan.toUpperCase(), PAD, y + spec.slogan, {
    size: spec.sloganSize,
    maxW: spec.foto.x - PAD - 24,
    color: MINT,
  });
  if (foto) {
    drawCover(ctx, foto, spec.foto.x, y + spec.foto.y, spec.foto.w, spec.foto.h);
  }
  const { w, h, gap, margem } = spec.caixa;
  drawNumberBoxes(
    ctx,
    c.numero,
    5,
    (W - larguraCaixas(5, w, gap)) / 2,
    y + spec.h - margem - h,
    w,
    h,
    gap,
    YELLOW,
  );
}

function faixaTopo(ctx: Ctx, h: number, tamanhoTexto: number) {
  ctx.fillStyle = PURPLE;
  ctx.fillRect(0, 0, W, h);
  ctx.fillStyle = INK;
  ctx.fillRect(0, h - 6, W, 6);
  drawFitted(ctx, `${colinhaConfig.eleicao} • ${colinhaConfig.estado}`, W / 2, h * 0.66, {
    size: tamanhoTexto,
    maxW: W - 96,
    color: YELLOW,
    align: "center",
  });
}

function faixaSlogan(ctx: Ctx, y: number, h: number) {
  ctx.fillStyle = PURPLE;
  ctx.fillRect(0, y, W, h);
  ctx.fillStyle = INK;
  ctx.fillRect(0, y, W, 6);
  ctx.fillRect(0, y + h - 6, W, 6);
  const frase = ` ${colinhaConfig.estadual.slogan.toUpperCase()} •`;
  setFont(ctx, 32);
  let repetida = frase;
  while (ctx.measureText(repetida + frase).width < W - 40) repetida += frase;
  drawFitted(ctx, repetida, W / 2, y + h * 0.66, {
    size: 32,
    maxW: W - 24,
    color: YELLOW,
    align: "center",
  });
}

function rodape(ctx: Ctx, y: number, h: number, tamanho: number, lh: number) {
  ctx.fillStyle = INK;
  ctx.fillRect(0, y, W, h);
  const linhas = colinhaConfig.propagandaEleitoral;
  const bloco = (linhas.length - 1) * lh;
  const primeira = y + (h - bloco) / 2 + tamanho * 0.36;
  linhas.forEach((linha, i) => {
    drawFitted(ctx, linha, PAD, primeira + i * lh, {
      size: tamanho,
      maxW: W - 2 * PAD,
      color: i === 0 ? YELLOW : "rgba(255,255,255,0.82)",
      display: i === 0,
      weight: 800,
    });
  });
}

function carregarImagem(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function renderColinhaCanvas(
  escolhas: EscolhasColinha,
  formato: FormatoColinha,
): Promise<HTMLCanvasElement> {
  const H = formato === "wide" ? 1080 : 1920;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas não suportado neste navegador");

  await document.fonts.ready;
  try {
    const fDisplay = familia("--font-bricolage");
    const fCorpo = familia("--font-inter");
    await Promise.all([
      document.fonts.load(`800 84px ${fDisplay}`),
      document.fonts.load(`800 24px ${fCorpo}`),
    ]);
  } catch {
    // segue com as fontes que já estiverem carregadas
  }

  const senado = escolhas.senado.map((id) => opcaoSenado(id) ?? null);
  const federal = sugestaoFederal(escolhas.federal);
  const carregar = (src?: string) => (src ? carregarImagem(src) : Promise.resolve(null));
  const [fotoDaniel, fotoS1, fotoS2, fotoGov, fotoPres] = await Promise.all([
    carregar(colinhaConfig.estadual.foto),
    carregar(senado[0]?.foto),
    carregar(senado[1]?.foto),
    carregar(colinhaConfig.governo.foto),
    carregar(colinhaConfig.presidencia.foto),
  ]);

  // fundo e moldura
  ctx.fillStyle = BRANCO;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 12;
  ctx.strokeRect(6, 6, W - 12, H - 12);

  if (formato === "wide") {
    faixaTopo(ctx, 96, 34);

    linhaVoto(ctx, {
      y: 96,
      h: 136,
      indice: 1,
      cargo: colinhaConfig.federal.rotulo,
      nome: federal?.nome ?? null,
      partido: federal?.partido ?? "",
      valor: escolhas.federal,
      casas: 4,
      boxW: 62,
      boxH: 86,
      gap: 10,
      labelSize: 27,
      nomeSize: 46,
    });

    linhaDestaque(ctx, 232, "wide", fotoDaniel);

    [0, 1].forEach((i) => {
      const op = senado[i];
      if (!op) return;
      linhaVoto(ctx, {
        y: 546 + i * 108,
        h: 108,
        indice: 3 + i,
        cargo: `Senado — ${colinhaConfig.senado.vagas[i]?.rotulo ?? ""}`,
        nome: op.nome,
        partido: op.partido,
        valor: op.numero,
        casas: 3,
        boxW: 54,
        boxH: 76,
        gap: 10,
        foto: i === 0 ? fotoS1 : fotoS2,
      });
    });

    linhaVoto(ctx, {
      y: 762,
      h: 108,
      indice: 5,
      cargo: colinhaConfig.governo.rotulo,
      nome: colinhaConfig.governo.nome,
      partido: colinhaConfig.governo.partido,
      valor: colinhaConfig.governo.numero,
      casas: 2,
      boxW: 54,
      boxH: 76,
      gap: 10,
      foto: fotoGov,
    });
    linhaVoto(ctx, {
      y: 870,
      h: 108,
      indice: 6,
      cargo: colinhaConfig.presidencia.rotulo,
      nome: colinhaConfig.presidencia.nome,
      partido: colinhaConfig.presidencia.partido,
      valor: colinhaConfig.presidencia.numero,
      casas: 2,
      boxW: 54,
      boxH: 76,
      gap: 10,
      foto: fotoPres,
    });

    rodape(ctx, 978, 102, 17, 24);
  } else {
    faixaTopo(ctx, 110, 38);

    linhaVoto(ctx, {
      y: 110,
      h: 190,
      indice: 1,
      cargo: colinhaConfig.federal.rotulo,
      nome: federal?.nome ?? null,
      partido: federal?.partido ?? "",
      valor: escolhas.federal,
      casas: 4,
      boxW: 74,
      boxH: 100,
      gap: 12,
      labelSize: 26,
      nomeSize: 56,
    });

    linhaDestaque(ctx, 300, "story", fotoDaniel);

    [0, 1].forEach((i) => {
      const op = senado[i];
      if (!op) return;
      linhaVoto(ctx, {
        y: 950 + i * 160,
        h: 160,
        indice: 3 + i,
        cargo: `Senado — ${colinhaConfig.senado.vagas[i]?.rotulo ?? ""}`,
        nome: op.nome,
        partido: op.partido,
        valor: op.numero,
        casas: 3,
        boxW: 64,
        boxH: 88,
        gap: 10,
        labelSize: 24,
        nomeSize: 52,
        foto: i === 0 ? fotoS1 : fotoS2,
      });
    });

    linhaVoto(ctx, {
      y: 1270,
      h: 160,
      indice: 5,
      cargo: colinhaConfig.governo.rotulo,
      nome: colinhaConfig.governo.nome,
      partido: colinhaConfig.governo.partido,
      valor: colinhaConfig.governo.numero,
      casas: 2,
      boxW: 64,
      boxH: 88,
      gap: 10,
      labelSize: 24,
      nomeSize: 52,
      foto: fotoGov,
    });
    linhaVoto(ctx, {
      y: 1430,
      h: 160,
      indice: 6,
      cargo: colinhaConfig.presidencia.rotulo,
      nome: colinhaConfig.presidencia.nome,
      partido: colinhaConfig.presidencia.partido,
      valor: colinhaConfig.presidencia.numero,
      casas: 2,
      boxW: 64,
      boxH: 88,
      gap: 10,
      labelSize: 24,
      nomeSize: 52,
      foto: fotoPres,
    });

    faixaSlogan(ctx, 1590, 82);
    rodape(ctx, 1672, 248, 21, 36);
  }

  return canvas;
}

export async function colinhaBlob(
  escolhas: EscolhasColinha,
  formato: FormatoColinha,
): Promise<Blob> {
  const canvas = await renderColinhaCanvas(escolhas, formato);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("Não foi possível gerar a imagem.");
  return blob;
}

export async function baixarColinha(
  escolhas: EscolhasColinha,
  formato: FormatoColinha,
): Promise<void> {
  const blob = await colinhaBlob(escolhas, formato);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `colinha-daniel-valenca-50100-${formato === "wide" ? "feed" : "stories"}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
