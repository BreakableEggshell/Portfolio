// Each wave is "M0 y0 C x1 y1 x2 y2 x3 y3 S x4 y4 x5 y5 V844 H0Z".
// `xs` are the fixed x coordinates, `ys` the six y coordinates that get swayed.
const waves = [
  { fill: "#d2ecfb", xs: [160, 300, 620, 1150, 1440], ys: [158, 190, 140, 152, 128, 150], amp: 26, dur: 6 },
  { fill: "#a5d8f5", xs: [200, 380, 700, 1180, 1440], ys: [312, 335, 296, 310, 340, 322], amp: 34, dur: 7.5 },
  { fill: "#6fbbee", xs: [220, 420, 760, 1200, 1440], ys: [462, 490, 448, 466, 480, 462], amp: 38, dur: 8.5 },
  { fill: "#3a95dd", xs: [240, 460, 760, 1200, 1440], ys: [622, 606, 650, 636, 604, 626], amp: 38, dur: 7 },
  { fill: "#1c5a9e", xs: [260, 520, 800, 1220, 1440], ys: [800, 788, 812, 794, 780, 790], amp: 22, dur: 8 },
];

function pathFor(xs: number[], ys: number[], shift = 0, amp = 0) {
  // Alternate the offset direction so crests and troughs trade places.
  const [y0, a, b, c, d, e] = ys.map((y, i) => Math.round(y + (i % 2 ? -1 : 1) * shift * amp));
  const [x1, x2, x3, x4, x5] = xs;
  return `M0 ${y0} C${x1} ${a} ${x2} ${b} ${x3} ${c} S${x4} ${d} ${x5} ${e} V844 H0Z`;
}

export function Background() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 1440 844"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect width="1440" height="844" fill="#e9f5fd" />
      <path d="M0 0 H1440 V6 C1200 24 1000 -4 720 12 S260 18 0 8Z" fill="#fffbf3" />
      {waves.map(({ fill, xs, ys, amp, dur }, i) => {
        const rest = pathFor(xs, ys);
        return (
          <path key={fill} d={rest} fill={fill}>
            <animate
              attributeName="d"
              values={`${rest};${pathFor(xs, ys, 1, amp)};${rest};${pathFor(xs, ys, -1, amp)};${rest}`}
              dur={`${dur}s`}
              begin={`-${i * 2.3}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
            />
          </path>
        );
      })}
    </svg>
  );
}
