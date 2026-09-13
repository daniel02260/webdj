// Ilustraciones vectoriales originales de monturas, dibujadas a mano en código.
// Sustituyen fotografía de producto: le dan a Otto & Mora una identidad
// ilustrada propia en vez de fotos de stock.

const LENS_PATHS = {
  redonda: {
    left: "M 40 100 a 34 34 0 1 0 68 0 a 34 34 0 1 0 -68 0",
    right: "M 152 100 a 34 34 0 1 0 68 0 a 34 34 0 1 0 -68 0",
  },
  cuadrada: {
    left: "M 42 70 h 62 a 8 8 0 0 1 8 8 v 44 a 8 8 0 0 1 -8 8 h -62 a 8 8 0 0 1 -8 -8 v -44 a 8 8 0 0 1 8 -8 Z",
    right: "M 148 70 h 62 a 8 8 0 0 1 8 8 v 44 a 8 8 0 0 1 -8 8 h -62 a 8 8 0 0 1 -8 -8 v -44 a 8 8 0 0 1 8 -8 Z",
  },
  gatuna: {
    left: "M 40 108 q -2 -34 40 -38 q 36 -3 38 22 q 2 22 -26 32 q -30 11 -52 -16 Z",
    right: "M 260 108 q 2 -34 -40 -38 q -36 -3 -38 22 q -2 22 26 32 q 30 11 52 -16 Z",
  },
  aviador: {
    left: "M 40 96 q -2 -30 36 -30 q 34 0 36 26 q 2 30 -34 40 q -34 9 -38 -36 Z",
    right: "M 260 96 q 2 -30 -36 -30 q -34 0 -36 26 q -2 30 34 40 q 34 9 38 -36 Z",
  },
  hexagonal: {
    left: "M 60 68 h 40 l 20 32 l -20 32 h -40 l -20 -32 Z",
    right: "M 240 68 h -40 l -20 32 l 20 32 h 40 l 20 -32 Z",
  },
};

const BRIDGE = {
  redonda: "M 108 100 q 22 -10 44 0",
  cuadrada: "M 112 92 q 18 -6 36 0",
  gatuna: "M 118 92 q 32 -14 64 0",
  aviador: "M 112 88 q 28 -8 56 0",
  hexagonal: "M 120 96 q 30 -8 60 0",
};

const TEMPLES = {
  redonda: { left: "M 40 96 L 6 84", right: "M 220 96 L 254 84" },
  cuadrada: { left: "M 34 90 L 2 80", right: "M 226 90 L 258 80" },
  gatuna: { left: "M 38 94 L 4 78", right: "M 262 94 L 296 78" },
  aviador: { left: "M 38 88 L 4 74", right: "M 262 88 L 296 74" },
  hexagonal: { left: "M 40 96 L 6 84", right: "M 260 96 L 294 84" },
};

const VIEWBOX = {
  redonda: "0 0 260 170",
  cuadrada: "0 0 260 170",
  gatuna: "0 0 300 170",
  aviador: "0 0 300 170",
  hexagonal: "0 0 300 170",
};

export default function GlassesIllustration({
  shape = "redonda",
  color = "#1f3d2f",
  background = "#efe9db",
  className = "",
}) {
  const lens = LENS_PATHS[shape] ?? LENS_PATHS.redonda;
  const bridge = BRIDGE[shape] ?? BRIDGE.redonda;
  const temples = TEMPLES[shape] ?? TEMPLES.redonda;
  const viewBox = VIEWBOX[shape] ?? VIEWBOX.redonda;

  return (
    <svg
      viewBox={viewBox}
      className={className}
      role="img"
      aria-label={`Ilustración de montura ${shape}`}
    >
      <rect x="0" y="0" width="100%" height="100%" fill={background} />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d={temples.left} stroke={color} strokeWidth="3" opacity="0.55" />
        <path d={temples.right} stroke={color} strokeWidth="3" opacity="0.55" />
        <path d={bridge} stroke={color} strokeWidth="4" />
        <path d={lens.left} fill={color} fillOpacity="0.14" stroke={color} strokeWidth="4" />
        <path d={lens.right} fill={color} fillOpacity="0.14" stroke={color} strokeWidth="4" />
      </g>
    </svg>
  );
}
