/**
 * Painel de azulejos geométricos — referência ao modernismo de Brasília.
 * As cores vêm das variáveis CSS, então trocar a paleta troca o painel.
 * Gerado de forma determinística (mesmo desenho em todo build).
 */

const SHAPES = ["quarter", "half", "tri", "dot", "quarter", "tri", "plain", "half"] as const;
const FILLS = ["var(--blue)", "var(--blue-deep)", "var(--ipe)", "var(--blue)", "var(--blue-deep)"];

function Tile({ x, y, s, i }: { x: number; y: number; s: number; i: number }) {
  const shape = SHAPES[(i * 5 + 3) % SHAPES.length];
  const rot = ((i * 7) % 4) * 90;
  const fill = FILLS[(i * 3 + 1) % FILLS.length];
  const cx = x + s / 2;
  const cy = y + s / 2;
  let inner = null;
  if (shape === "quarter") inner = <path d={`M${x} ${y} h${s} A${s} ${s} 0 0 1 ${x} ${y + s} Z`} fill={fill} />;
  if (shape === "half") inner = <rect x={x} y={y} width={s} height={s / 2} fill={fill} />;
  if (shape === "tri") inner = <path d={`M${x} ${y} L${x + s} ${y} L${x} ${y + s} Z`} fill={fill} />;
  if (shape === "dot") inner = <circle cx={cx} cy={cy} r={s * 0.28} fill={fill} />;
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <rect x={x} y={y} width={s} height={s} fill="var(--tile-bg)" />
      {inner}
    </g>
  );
}

export function TilePattern({ cols = 6, rows = 6 }: { cols?: number; rows?: number }) {
  const s = 100;
  const tiles = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      tiles.push(<Tile key={`${r}-${c}`} x={c * s} y={r * s} s={s} i={r * cols + c + r} />);
    }
  }
  return (
    <svg
      className="tiles"
      viewBox={`0 0 ${cols * s} ${rows * s}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
      {tiles}
      {/* rejunte */}
      {Array.from({ length: cols - 1 }, (_, i) => (
        <line key={`v${i}`} x1={(i + 1) * s} y1={0} x2={(i + 1) * s} y2={rows * s} stroke="var(--grout)" strokeWidth={3} />
      ))}
      {Array.from({ length: rows - 1 }, (_, i) => (
        <line key={`h${i}`} x1={0} y1={(i + 1) * s} x2={cols * s} y2={(i + 1) * s} stroke="var(--grout)" strokeWidth={3} />
      ))}
    </svg>
  );
}
