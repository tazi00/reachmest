'use client'

import { useRef } from "react";

type Industry = {
  label: string;
  bg1: string;
  bg2: string;
  accent: string;
  icon: React.ReactNode;
};

const industries: Industry[] = [
  {
    label: "Healthcare",
    bg1: "#0d1f2d",
    bg2: "#1a3a4f",
    accent: "#38bdf8",
    icon: (
      <g>
        <rect
          x="38"
          y="22"
          width="12"
          height="44"
          rx="4"
          fill="rgba(56,189,248,0.8)"
        />
        <rect
          x="22"
          y="38"
          width="44"
          height="12"
          rx="4"
          fill="rgba(56,189,248,0.8)"
        />
        <circle
          cx="44"
          cy="44"
          r="28"
          fill="none"
          stroke="rgba(56,189,248,0.2)"
          strokeWidth="1.5"
        />
      </g>
    ),
  },
  {
    label: "Finance & Fintech",
    bg1: "#071a10",
    bg2: "#0d3320",
    accent: "#34d399",
    icon: (
      <g>
        <rect
          x="14"
          y="52"
          width="12"
          height="24"
          rx="2"
          fill="rgba(52,211,153,0.5)"
        />
        <rect
          x="30"
          y="38"
          width="12"
          height="38"
          rx="2"
          fill="rgba(52,211,153,0.7)"
        />
        <rect
          x="46"
          y="28"
          width="12"
          height="48"
          rx="2"
          fill="rgba(52,211,153,0.9)"
        />
        <rect
          x="62"
          y="18"
          width="12"
          height="58"
          rx="2"
          fill="rgba(52,211,153,1)"
        />
        <path
          d="M14 55 L30 42 L46 32 L62 22"
          stroke="rgba(52,211,153,0.5)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
      </g>
    ),
  },
  {
    label: "E-commerce & Retail",
    bg1: "#1a0a2e",
    bg2: "#2d1554",
    accent: "#a78bfa",
    icon: (
      <g>
        <path
          d="M18 24 L28 24 L36 56 L62 56 L68 36 L28 36"
          stroke="rgba(167,139,250,0.9)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="40" cy="64" r="4" fill="rgba(167,139,250,0.9)" />
        <circle cx="58" cy="64" r="4" fill="rgba(167,139,250,0.9)" />
        <path
          d="M44 44 L52 44 M48 40 L48 48"
          stroke="rgba(167,139,250,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    label: "Real Estate",
    bg1: "#1a1200",
    bg2: "#3a2800",
    accent: "#fbbf24",
    icon: (
      <g>
        <path
          d="M44 18 L70 38 L70 72 L18 72 L18 38 Z"
          fill="none"
          stroke="rgba(251,191,36,0.7)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M44 18 L18 38 M44 18 L70 38"
          stroke="rgba(251,191,36,0.4)"
          strokeWidth="1.5"
        />
        <rect
          x="34"
          y="50"
          width="10"
          height="22"
          rx="1"
          fill="rgba(251,191,36,0.6)"
        />
        <rect
          x="52"
          y="48"
          width="12"
          height="12"
          rx="1"
          fill="rgba(251,191,36,0.4)"
        />
        <circle cx="58" cy="54" r="2" fill="rgba(251,191,36,0.8)" />
      </g>
    ),
  },
  {
    label: "Education & EdTech",
    bg1: "#001a1a",
    bg2: "#003333",
    accent: "#2dd4bf",
    icon: (
      <g>
        <path
          d="M44 20 L72 34 L44 48 L16 34 Z"
          fill="none"
          stroke="rgba(45,212,191,0.8)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M28 41 L28 60 Q44 68 60 60 L60 41"
          fill="none"
          stroke="rgba(45,212,191,0.6)"
          strokeWidth="2"
        />
        <line
          x1="72"
          y1="34"
          x2="72"
          y2="54"
          stroke="rgba(45,212,191,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="72" cy="57" r="3" fill="rgba(45,212,191,0.7)" />
      </g>
    ),
  },
  {
    label: "Travel & Hospitality",
    bg1: "#001228",
    bg2: "#002650",
    accent: "#60a5fa",
    icon: (
      <g>
        <circle
          cx="44"
          cy="44"
          r="26"
          fill="none"
          stroke="rgba(96,165,250,0.3)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="44"
          cy="44"
          rx="14"
          ry="26"
          fill="none"
          stroke="rgba(96,165,250,0.25)"
          strokeWidth="1.5"
        />
        <line
          x1="18"
          y1="44"
          x2="70"
          y2="44"
          stroke="rgba(96,165,250,0.25)"
          strokeWidth="1"
        />
        <line
          x1="20"
          y1="30"
          x2="68"
          y2="30"
          stroke="rgba(96,165,250,0.15)"
          strokeWidth="1"
        />
        <line
          x1="20"
          y1="58"
          x2="68"
          y2="58"
          stroke="rgba(96,165,250,0.15)"
          strokeWidth="1"
        />
        <circle cx="44" cy="44" r="5" fill="rgba(96,165,250,0.8)" />
        <circle
          cx="44"
          cy="44"
          r="9"
          fill="none"
          stroke="rgba(96,165,250,0.4)"
          strokeWidth="1"
        />
      </g>
    ),
  },
  {
    label: "Sports & Fitness",
    bg1: "#0a1a00",
    bg2: "#1a3300",
    accent: "#86efac",
    icon: (
      <g>
        <circle cx="44" cy="44" r="6" fill="rgba(134,239,172,0.9)" />
        <rect
          x="14"
          y="40"
          width="16"
          height="8"
          rx="4"
          fill="rgba(134,239,172,0.7)"
        />
        <rect
          x="58"
          y="40"
          width="16"
          height="8"
          rx="4"
          fill="rgba(134,239,172,0.7)"
        />
        <rect
          x="20"
          y="36"
          width="8"
          height="16"
          rx="4"
          fill="rgba(134,239,172,0.9)"
        />
        <rect
          x="60"
          y="36"
          width="8"
          height="16"
          rx="4"
          fill="rgba(134,239,172,0.9)"
        />
        <path
          d="M30 44 L38 44 M50 44 L58 44"
          stroke="rgba(134,239,172,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    label: "Technology & SaaS",
    bg1: "#05101f",
    bg2: "#0a2040",
    accent: "#38bdf8",
    icon: (
      <g>
        <rect
          x="18"
          y="28"
          width="52"
          height="34"
          rx="4"
          fill="none"
          stroke="rgba(56,189,248,0.5)"
          strokeWidth="1.5"
        />
        <text
          x="26"
          y="43"
          fill="rgba(56,189,248,0.9)"
          fontSize="10"
          fontFamily="monospace"
        >
          {"</"}
        </text>
        <text
          x="26"
          y="55"
          fill="rgba(56,189,248,0.6)"
          fontSize="9"
          fontFamily="monospace"
        >
          {"{ }"}
        </text>
        <line
          x1="30"
          y1="62"
          x2="58"
          y2="62"
          stroke="rgba(56,189,248,0.3)"
          strokeWidth="1.5"
        />
        <rect
          x="38"
          y="62"
          width="12"
          height="5"
          rx="1"
          fill="rgba(56,189,248,0.3)"
        />
        <rect
          x="30"
          y="67"
          width="28"
          height="3"
          rx="1.5"
          fill="rgba(56,189,248,0.2)"
        />
      </g>
    ),
  },
  {
    label: "Food & Beverage",
    bg1: "#1a0800",
    bg2: "#3a1800",
    accent: "#fb923c",
    icon: (
      <g>
        <path
          d="M34 20 L34 44 Q34 54 44 54 Q54 54 54 44 L54 20"
          stroke="rgba(251,146,60,0.8)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="20"
          x2="44"
          y2="54"
          stroke="rgba(251,146,60,0.5)"
          strokeWidth="1.5"
        />
        <line
          x1="34"
          y1="30"
          x2="54"
          y2="30"
          stroke="rgba(251,146,60,0.4)"
          strokeWidth="1"
        />
        <line
          x1="30"
          y1="58"
          x2="58"
          y2="58"
          stroke="rgba(251,146,60,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="58"
          x2="44"
          y2="70"
          stroke="rgba(251,146,60,0.7)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="36"
          y1="70"
          x2="52"
          y2="70"
          stroke="rgba(251,146,60,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    label: "Manufacturing",
    bg1: "#0d0d0d",
    bg2: "#1f1f1f",
    accent: "#94a3b8",
    icon: (
      <g>
        <circle
          cx="44"
          cy="44"
          r="14"
          fill="none"
          stroke="rgba(148,163,184,0.7)"
          strokeWidth="2"
        />
        <circle cx="44" cy="44" r="5" fill="rgba(148,163,184,0.5)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const r = (deg * Math.PI) / 180;
          const x2 = 44 + 22 * Math.cos(r);
          const y2 = 44 + 22 * Math.sin(r);
          return (
            <rect
              key={i}
              x={x2 - 3}
              y={y2 - 5}
              width="6"
              height="10"
              rx="2"
              fill="rgba(148,163,184,0.6)"
              transform={`rotate(${deg} ${x2} ${y2})`}
            />
          );
        })}
      </g>
    ),
  },
  {
    label: "Professional Services",
    bg1: "#050f28",
    bg2: "#0a1f4f",
    accent: "#818cf8",
    icon: (
      <g>
        <rect
          x="22"
          y="36"
          width="44"
          height="32"
          rx="4"
          fill="none"
          stroke="rgba(129,140,248,0.7)"
          strokeWidth="2"
        />
        <path
          d="M34 36 L34 30 Q34 24 44 24 Q54 24 54 30 L54 36"
          fill="none"
          stroke="rgba(129,140,248,0.5)"
          strokeWidth="1.5"
        />
        <line
          x1="22"
          y1="48"
          x2="66"
          y2="48"
          stroke="rgba(129,140,248,0.3)"
          strokeWidth="1"
        />
        <circle cx="44" cy="48" r="4" fill="rgba(129,140,248,0.8)" />
      </g>
    ),
  },
  {
    label: "Logistics",
    bg1: "#1a1000",
    bg2: "#2e1e00",
    accent: "#f59e0b",
    icon: (
      <g>
        <rect
          x="14"
          y="38"
          width="38"
          height="22"
          rx="3"
          fill="none"
          stroke="rgba(245,158,11,0.7)"
          strokeWidth="2"
        />
        <path
          d="M52 44 L62 44 L70 54 L70 60 L52 60 Z"
          fill="none"
          stroke="rgba(245,158,11,0.7)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle
          cx="26"
          cy="64"
          r="6"
          fill="none"
          stroke="rgba(245,158,11,0.9)"
          strokeWidth="2"
        />
        <circle cx="26" cy="64" r="2" fill="rgba(245,158,11,0.9)" />
        <circle
          cx="60"
          cy="64"
          r="6"
          fill="none"
          stroke="rgba(245,158,11,0.9)"
          strokeWidth="2"
        />
        <circle cx="60" cy="64" r="2" fill="rgba(245,158,11,0.9)" />
        <line
          x1="22"
          y1="44"
          x2="46"
          y2="44"
          stroke="rgba(245,158,11,0.3)"
          strokeWidth="1"
        />
        <line
          x1="22"
          y1="50"
          x2="46"
          y2="50"
          stroke="rgba(245,158,11,0.3)"
          strokeWidth="1"
        />
      </g>
    ),
  },
  {
    label: "Beauty & Wellness",
    bg1: "#1a0a1a",
    bg2: "#330a30",
    accent: "#f0abfc",
    icon: (
      <g>
        <circle cx="44" cy="44" r="8" fill="rgba(240,171,252,0.8)" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const r = (deg * Math.PI) / 180;
          const cx = 44 + 20 * Math.cos(r);
          const cy = 44 + 20 * Math.sin(r);
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="7"
              ry="11"
              fill="rgba(240,171,252,0.35)"
              stroke="rgba(240,171,252,0.5)"
              strokeWidth="1"
              transform={`rotate(${deg} ${cx} ${cy})`}
            />
          );
        })}
      </g>
    ),
  },
];

function IndustryCard({
  industry,
  width,
  height,
}: {
  industry: Industry;
  width: number;
  height: number;
}) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shrink-0"
      style={{ width, height }}
    >
      <svg
        viewBox="0 0 88 88"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient
            id={`g-${industry.label.replace(/\s/g, "")}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor={industry.bg1} />
            <stop offset="100%" stopColor={industry.bg2} />
          </linearGradient>
        </defs>
        <rect
          width="88"
          height="88"
          fill={`url(#g-${industry.label.replace(/\s/g, "")})`}
        />
        {/* subtle dot grid */}
        {[20, 40, 60, 80].flatMap((x) =>
          [20, 40, 60, 80].map((y) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r="0.5"
              fill={`${industry.accent}33`}
            />
          )),
        )}
        {industry.icon}
      </svg>
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
      <span className="absolute bottom-3 left-3 right-3 text-white font-semibold text-[13px] leading-tight">
        {industry.label}
      </span>
    </div>
  );
}

// Groups: 1 large (280×380) + 6 small (180×183) per group
const groups = [
  { large: industries[0], small: industries.slice(1, 7) },
  {
    large: industries[7],
    small: industries.slice(8, 13).concat(industries[0]),
  },
];

export default function IndustriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#0a0a0a] px-10 py-20 overflow-hidden">
      <style>{`
        @keyframes industries-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .industries-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: industries-scroll 32s linear infinite;
        }
        .industries-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
          Industries
        </span>
        <h2 className="text-[38px] font-bold text-white">
          <span className="text-blue-500">Industries</span> We Serve
        </h2>
        <p className="text-gray-400 text-[15px] mt-5 max-w-2xl mx-auto leading-7">
          We work with businesses across a wide range of industries, delivering
          tailored marketing and software solutions built around their specific
          needs.
        </p>
      </div>

      {/* Auto-scrolling track — content duplicated for seamless loop */}
      <div className="industries-track" ref={trackRef}>
        {[...groups, ...groups].map((group, gi) => (
          <div key={gi} className="flex gap-3 shrink-0">
            {/* Large card */}
            <IndustryCard industry={group.large} width={280} height={380} />

            {/* 2×3 small grid */}
            <div className="grid grid-cols-3 grid-rows-2 gap-3 shrink-0">
              {group.small.slice(0, 6).map((item, i) => (
                <IndustryCard
                  key={i}
                  industry={item}
                  width={180}
                  height={183}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
