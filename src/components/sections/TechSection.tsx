'use client'

import { useState } from 'react'
import type { IconType } from "react-icons";
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiMeta,
  SiSemrush,
  SiHubspot,
  SiMailchimp,
  SiHotjar,
  SiGooglesearchconsole,
  SiAnthropic,
  SiLangchain,
  SiPerplexity,
  SiHuggingface,
  SiMake,
  SiN8N,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiFigma,
  SiHtml5,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiLaravel,
  SiFastapi,
  SiGraphql,
  SiExpress,
  SiFastify,
  SiOpenapiinitiative,
  SiFlutter,
  SiExpo,
  SiSwift,
  SiKotlin,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiGooglecloud,
  SiVercel,
  SiCloudflare,
  SiDigitalocean,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiKubernetes,
  SiNginx,
  SiCircleci,
} from "react-icons/si";

type TabItem = { icon: React.ReactNode; label: string }
type Tab = { label: string; items: TabItem[] }

const I = ({ C, color }: { C: IconType; color: string }) => (
  <C size={28} style={{ color }} />
);

// Brand SVGs for logos not in simple-icons
const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="#10A37F">
    <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.896zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 01.071 0l4.83 2.782a4.5 4.5 0 01-.695 8.118V12.56a.79.79 0 00-.383-.81zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const AhrefsIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <rect width="24" height="24" rx="5" fill="#FF7043" />
    <path
      d="M7.2 17L10.4 7h3.2L16.8 17h-2.9l-.6-2H10.6l-.6 2H7.2zm4-4.2h2.6l-1.3-4.3-1.3 4.3z"
      fill="white"
    />
  </svg>
);

const AwsIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
      d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.347.347 0 01.056.184.337.337 0 01-.16.272l-.528.352a.4.4 0 01-.216.072.39.39 0 01-.248-.104 2.552 2.552 0 01-.296-.384 6.33 6.33 0 01-.256-.48c-.64.752-1.448 1.128-2.416 1.128-.688 0-1.24-.196-1.648-.592-.408-.392-.616-.92-.616-1.576 0-.696.248-1.264.744-1.688.496-.424 1.152-.64 1.984-.64.272 0 .56.024.856.064.296.04.6.1.92.168V7.9c0-.616-.128-1.048-.384-1.296-.256-.248-.688-.368-1.296-.368-.28 0-.568.032-.864.1-.296.064-.584.152-.864.264a2.337 2.337 0 01-.296.104.504.504 0 01-.128.016c-.112 0-.168-.08-.168-.24v-.376c0-.12.016-.216.056-.264a.577.577 0 01.224-.16 4.5 4.5 0 011.072-.304 5.4 5.4 0 011.168-.12c.888 0 1.536.2 1.952.6.408.4.616 1.008.616 1.824v2.4zm-3.336 1.248c.264 0 .536-.048.824-.144.288-.096.544-.272.76-.512.128-.152.224-.32.272-.512.048-.192.08-.424.08-.696v-.336a7.014 7.014 0 00-.744-.128 6.14 6.14 0 00-.76-.048c-.544 0-.944.104-1.208.32-.264.216-.392.52-.392.912 0 .368.096.648.288.832.192.192.464.312.88.312zm6.504.88c-.136 0-.224-.024-.28-.072-.056-.04-.104-.136-.144-.264L7.9 6.796a1.19 1.19 0 01-.064-.272c0-.112.056-.168.168-.168h.688c.144 0 .24.024.288.072.056.04.096.136.136.264l1.168 4.608 1.08-4.608c.032-.136.072-.224.128-.264a.467.467 0 01.296-.072h.56c.144 0 .24.024.296.072.056.04.104.136.128.264l1.096 4.664 1.2-4.664c.04-.136.088-.224.136-.264a.447.447 0 01.288-.072h.656c.112 0 .168.056.168.168 0 .032-.008.064-.016.104a.874.874 0 01-.048.176l-1.664 5.032c-.04.136-.08.224-.136.264-.056.04-.152.072-.28.072h-.6a.44.44 0 01-.288-.072c-.056-.04-.104-.136-.128-.272L12.3 7.9l-1.072 4.6c-.032.136-.072.232-.128.272a.449.449 0 01-.296.072h-.672zm8.88.168a4.72 4.72 0 01-1.096-.128 3.264 3.264 0 01-.816-.296.5.5 0 01-.216-.224.56.56 0 01-.04-.216v-.392c0-.16.056-.24.168-.24.04 0 .08.008.12.024.04.016.096.04.16.072.216.096.448.168.696.216.248.048.488.072.736.072.392 0 .696-.064.904-.2.208-.136.32-.328.32-.576 0-.168-.056-.312-.168-.432-.112-.12-.32-.232-.632-.336l-.904-.28c-.456-.144-.792-.36-.992-.648-.2-.28-.304-.592-.304-.928 0-.264.056-.496.168-.696.112-.2.264-.376.456-.52.192-.136.408-.24.656-.312.248-.072.512-.104.784-.104.136 0 .28.008.416.024.144.016.272.04.4.072.12.024.232.056.336.096.104.04.184.08.24.12a.498.498 0 01.168.168.448.448 0 01.04.2v.36c0 .16-.056.248-.16.248-.056 0-.144-.024-.264-.072a3.206 3.206 0 00-1.312-.272c-.352 0-.632.056-.824.176-.192.12-.288.296-.288.544 0 .168.064.312.192.432.128.12.36.24.696.344l.888.28c.448.144.776.344.976.6.2.256.296.552.296.88 0 .272-.056.52-.168.736-.112.216-.264.4-.464.552-.2.152-.432.264-.704.344-.28.08-.576.12-.888.12z"
      fill="#FF9900"
    />
    <path
      d="M20.16 17.208c-2.4 1.776-5.888 2.72-8.888 2.72-4.208 0-7.992-1.552-10.856-4.136-.224-.2-.024-.48.248-.32 3.088 1.792 6.904 2.872 10.848 2.872 2.664 0 5.592-.552 8.288-1.696.408-.176.744.272.36.56z"
      fill="#FF9900"
    />
    <path
      d="M21.12 16.112c-.312-.4-2.048-.184-2.824-.096-.232.024-.272-.176-.056-.328 1.376-.968 3.64-.688 3.904-.368.264.328-.072 2.6-1.36 3.68-.2.168-.384.08-.296-.136.288-.736.936-2.352.632-2.752z"
      fill="#FF9900"
    />
  </svg>
);

const AzureIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
      d="M13.05 4.24L6.56 18.05l5.11.08-4.63 1.87 9.6-.01L13.05 4.24z"
      fill="#0078D4"
    />
    <path
      d="M13.26 4.24L9.03 10.1l3.52 5.71-6.4.09L13.26 4.24z"
      fill="#0078D4"
      opacity="0.5"
    />
  </svg>
);

const PwaIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <rect width="24" height="24" rx="6" fill="#5A0FC8" />
    <text
      x="1.5"
      y="15.5"
      fill="white"
      fontSize="7"
      fontWeight="900"
      fontFamily="Arial"
    >
      PWA
    </text>
  </svg>
);

const tabs: Tab[] = [
  {
    label: "Marketing Tech",
    items: [
      { icon: <I C={SiGoogleads} color="#4285F4" />, label: "Google Ads" },
      {
        icon: <I C={SiGoogleanalytics} color="#E37400" />,
        label: "Google Analytics 4",
      },
      { icon: <I C={SiMeta} color="#0082FB" />, label: "Meta Ads Manager" },
      { icon: <I C={SiSemrush} color="#FF642D" />, label: "SEMrush" },
      { icon: <AhrefsIcon />, label: "Ahrefs" },
      { icon: <I C={SiHubspot} color="#FF7A59" />, label: "HubSpot" },
      { icon: <I C={SiMailchimp} color="#FFE01B" />, label: "Mailchimp" },
      { icon: <I C={SiHotjar} color="#FD3A5C" />, label: "Hotjar" },
      {
        icon: <I C={SiGooglesearchconsole} color="#4285F4" />,
        label: "Google Search Console",
      },
    ],
  },
  {
    label: "AI & GenAI",
    items: [
      { icon: <OpenAIIcon />, label: "OpenAI GPT-4" },
      {
        icon: <I C={SiAnthropic} color="#CC785C" />,
        label: "Anthropic Claude",
      },
      { icon: <I C={SiLangchain} color="#1C3144" />, label: "LangChain" },
      { icon: <I C={SiPerplexity} color="#20808D" />, label: "Perplexity AI" },
      { icon: <I C={SiHuggingface} color="#FFD21E" />, label: "Hugging Face" },
      { icon: <I C={SiMake} color="#6D00CC" />, label: "Make (Integromat)" },
      { icon: <I C={SiN8N} color="#EA4B71" />, label: "n8n Automation" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { icon: <I C={SiReact} color="#61DAFB" />, label: "React.js" },
      { icon: <I C={SiNextdotjs} color="#ffffff" />, label: "Next.js" },
      { icon: <I C={SiTypescript} color="#3178C6" />, label: "TypeScript" },
      { icon: <I C={SiTailwindcss} color="#06B6D4" />, label: "Tailwind CSS" },
      { icon: <I C={SiVuedotjs} color="#42B883" />, label: "Vue.js" },
      { icon: <I C={SiFigma} color="#F24E1E" />, label: "Figma" },
      { icon: <I C={SiHtml5} color="#E34F26" />, label: "HTML / CSS" },
      { icon: <I C={SiFramer} color="#0055FF" />, label: "Framer Motion" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icon: <I C={SiNodedotjs} color="#339933" />, label: "Node.js" },
      { icon: <I C={SiPython} color="#3776AB" />, label: "Python" },
      { icon: <I C={SiLaravel} color="#FF2D20" />, label: "PHP / Laravel" },
      { icon: <I C={SiFastapi} color="#009688" />, label: "FastAPI" },
      {
        icon: <I C={SiOpenapiinitiative} color="#6BA539" />,
        label: "REST APIs",
      },
      { icon: <I C={SiGraphql} color="#E10098" />, label: "GraphQL" },
      { icon: <I C={SiExpress} color="#ffffff" />, label: "Express.js" },
      { icon: <I C={SiFastify} color="#ffffff" />, label: "Fastify" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { icon: <I C={SiReact} color="#61DAFB" />, label: "React Native" },
      { icon: <I C={SiFlutter} color="#54C5F8" />, label: "Flutter" },
      { icon: <I C={SiExpo} color="#ffffff" />, label: "Expo" },
      { icon: <I C={SiSwift} color="#F05138" />, label: "iOS (Swift)" },
      { icon: <I C={SiKotlin} color="#7F52FF" />, label: "Android (Kotlin)" },
      { icon: <PwaIcon />, label: "Progressive Web Apps" },
    ],
  },
  {
    label: "Database",
    items: [
      { icon: <I C={SiPostgresql} color="#336791" />, label: "PostgreSQL" },
      { icon: <I C={SiMongodb} color="#47A248" />, label: "MongoDB" },
      { icon: <I C={SiMysql} color="#00758F" />, label: "MySQL" },
      { icon: <I C={SiRedis} color="#DC382D" />, label: "Redis" },
      { icon: <I C={SiFirebase} color="#FFCA28" />, label: "Firebase" },
      { icon: <I C={SiSupabase} color="#3ECF8E" />, label: "Supabase" },
    ],
  },
  {
    label: "Cloud",
    items: [
      { icon: <AwsIcon />, label: "AWS" },
      { icon: <I C={SiGooglecloud} color="#4285F4" />, label: "Google Cloud" },
      { icon: <I C={SiVercel} color="#ffffff" />, label: "Vercel" },
      { icon: <I C={SiCloudflare} color="#F38020" />, label: "Cloudflare" },
      { icon: <I C={SiDigitalocean} color="#0080FF" />, label: "DigitalOcean" },
      { icon: <AzureIcon />, label: "Azure" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { icon: <I C={SiDocker} color="#2496ED" />, label: "Docker" },
      {
        icon: <I C={SiGithubactions} color="#2088FF" />,
        label: "GitHub Actions",
      },
      { icon: <I C={SiCircleci} color="#343434" />, label: "CI/CD Pipelines" },
      { icon: <I C={SiLinux} color="#FCC624" />, label: "Linux / Bash" },
      { icon: <I C={SiKubernetes} color="#326CE5" />, label: "Kubernetes" },
      { icon: <I C={SiNginx} color="#009639" />, label: "Nginx" },
    ],
  },
];

export default function TechSection() {
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <section className="bg-[#0a0a0a] px-10 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Our Stack
        </span>
        <h2 className="text-[38px] font-bold text-white">
          <span className="text-blue-500">Technologies</span> and Platforms We
          Use
        </h2>
        <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-7">
          We work with the latest tools across marketing, development and AI to
          deliver high-performance digital solutions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-700 overflow-x-auto scrollbar-hide mb-10">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-pointer pb-3 px-4 text-[14px] font-medium whitespace-nowrap transition-colors duration-200 border-b-2 -mb-0.5
              ${
                active === i
                  ? "text-blue-400 border-blue-400"
                  : "text-gray-500 border-transparent hover:text-gray-300"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {current.items.map((item, i) => (
          <div
            key={i}
            className="cursor-pointer flex flex-col items-center gap-3 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 rounded-2xl px-4 py-5 transition-all duration-200 group"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-gray-400 text-[12px] font-medium text-center leading-tight group-hover:text-gray-200 transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
