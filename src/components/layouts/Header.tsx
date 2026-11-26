"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronDown,
  PhoneCall,
  Menu,
  X,
  ArrowRight,
  Phone,
} from "lucide-react";

// ── Types ───────────────────────────────────────────────────────
type SubItem = { label: string; href: string };
type Category = { label: string; items: SubItem[] };
type DropdownData = {
  categories: Category[];
  cta?: { title: string; desc: string; btnLabel: string; href: string };
};
type NavItem = { label: string; href: string; dropdown?: DropdownData };

// ── Nav Data ────────────────────────────────────────────────────
const NAV: NavItem[] = [
  {
    label: "Reachmest AI",
    href: "/ai",
    dropdown: {
      categories: [
        {
          label: "AI Marketing",
          items: [
            { label: "AI Content Generation", href: "/ai/content" },
            { label: "Predictive Analytics", href: "/ai/analytics" },
            { label: "AI-Powered SEO", href: "/ai/seo" },
            { label: "Automated Campaigns", href: "/ai/campaigns" },
          ],
        },
        {
          label: "AI Development",
          items: [
            { label: "AI Chatbots", href: "/ai/chatbots" },
            { label: "ML Model Integration", href: "/ai/ml" },
            { label: "LLM Applications", href: "/ai/llm" },
            { label: "Data Pipelines", href: "/ai/data" },
          ],
        },
      ],
      cta: {
        title: "Exploring Something Unique?",
        desc: "We have a solution, irrespective of your business problem.",
        btnLabel: "Consult Now",
        href: "/contact",
      },
    },
  },
  { label: "About", href: "/about" },
  {
    label: "Service",
    href: "/services",
    dropdown: {
      categories: [
        {
          label: "Digital Marketing",
          items: [
            { label: "Search Engine Optimization", href: "/services/seo" },
            { label: "Pay-Per-Click Advertising", href: "/services/ppc" },
            { label: "Social Media Marketing", href: "/services/smm" },
            { label: "Content Marketing", href: "/services/content" },
            { label: "Email Marketing", href: "/services/email" },
            { label: "Influencer Marketing", href: "/services/influencer" },
          ],
        },
        {
          label: "Software Development",
          items: [
            { label: "Web Application Development", href: "/services/web-app" },
            { label: "Mobile App Development", href: "/services/mobile" },
            { label: "Custom Software Solutions", href: "/services/custom" },
            { label: "API Development", href: "/services/api" },
            { label: "CMS Development", href: "/services/cms" },
            { label: "E-commerce Development", href: "/services/ecommerce" },
          ],
        },
        {
          label: "Design & Branding",
          items: [
            { label: "UI/UX Design", href: "/services/ux" },
            { label: "Brand Identity", href: "/services/branding" },
            { label: "Logo Design", href: "/services/logo" },
            { label: "Motion Graphics", href: "/services/motion" },
          ],
        },
        {
          label: "Analytics & Data",
          items: [
            { label: "Business Intelligence", href: "/services/bi" },
            { label: "Data Visualization", href: "/services/dataviz" },
            { label: "Conversion Optimization", href: "/services/cro" },
            { label: "Market Research", href: "/services/research" },
          ],
        },
      ],
      cta: {
        title: "Exploring Something Unique?",
        desc: "We have a solution, irrespective of your business problem.",
        btnLabel: "Consult Now",
        href: "/contact",
      },
    },
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: {
      categories: [
        {
          label: "Healthcare",
          items: [
            { label: "Hospital Management", href: "/industries/healthcare" },
            {
              label: "Telemedicine Platforms",
              href: "/industries/telemedicine",
            },
            { label: "Pharma Solutions", href: "/industries/pharma" },
          ],
        },
        {
          label: "Education",
          items: [
            { label: "EdTech Platforms", href: "/industries/edtech" },
            { label: "LMS Solutions", href: "/industries/lms" },
            { label: "Online Learning", href: "/industries/elearning" },
          ],
        },
        {
          label: "E-commerce & Retail",
          items: [
            { label: "D2C Brands", href: "/industries/d2c" },
            { label: "Marketplace Solutions", href: "/industries/marketplace" },
            { label: "Retail Analytics", href: "/industries/retail" },
          ],
        },
        {
          label: "Real Estate",
          items: [
            { label: "Property Portals", href: "/industries/real-estate" },
            { label: "PropTech Solutions", href: "/industries/proptech" },
            { label: "Virtual Tours", href: "/industries/virtual-tours" },
          ],
        },
      ],
    },
  },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: {
      categories: [
        {
          label: "Learn",
          items: [
            { label: "Blog", href: "/blog" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Whitepapers", href: "/resources/whitepapers" },
            { label: "Webinars", href: "/resources/webinars" },
          ],
        },
        {
          label: "Tools",
          items: [
            { label: "SEO Audit Tool", href: "/tools/seo-audit" },
            { label: "ROI Calculator", href: "/tools/roi" },
            { label: "Website Grader", href: "/tools/grader" },
          ],
        },
      ],
    },
  },
];

// ── Mega Panel ──────────────────────────────────────────────────
function MegaPanel({
  dropdown,
  onMouseEnter,
  onMouseLeave,
}: {
  dropdown: DropdownData;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [activeCat, setActiveCat] = useState(0);

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-t border-gray-800 shadow-2xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-10 py-8 flex gap-8">
        {/* Left — category tabs + optional CTA card */}
        <div className="w-60 shrink-0 flex flex-col gap-1">
          {dropdown.categories.map((cat, i) => (
            <button
              key={cat.label}
              onMouseEnter={() => setActiveCat(i)}
              className={`cursor-pointer flex items-center justify-between w-full text-left px-4 py-3 rounded-lg text-[14px] font-medium transition-all duration-150 ${
                activeCat === i
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {cat.label}
              <ChevronDown
                size={14}
                className={`-rotate-90 transition-opacity ${
                  activeCat === i ? "opacity-100" : "opacity-40"
                }`}
              />
            </button>
          ))}

          {dropdown.cta && (
            <div className="mt-4 bg-accent hover:bg-accent/85 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4">
              <p className="text-white text-[13px] font-semibold mb-1">
                {dropdown.cta.title}
              </p>
              <p className="text-gray-400 text-[12px] leading-relaxed mb-3">
                {dropdown.cta.desc}
              </p>
              <Link
                href={dropdown.cta.href}
                className="inline-flex items-center gap-1.5 bg-white text-black text-[12px] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {dropdown.cta.btnLabel}
                <ArrowRight size={12} />
              </Link>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-800 shrink-0" />

        {/* Right — sub-items 2-col grid */}
        <ul className="flex-1 grid grid-cols-2 gap-x-10 content-start">
          {dropdown.categories[activeCat]?.items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 text-[14px] py-2.5 transition-colors group"
              >
                <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors shrink-0" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Mobile Menu ─────────────────────────────────────────────────
function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [openCat, setOpenCat] = useState<string | null>(null);

  const toggleItem = (label: string) =>
    setOpenItem((prev) => (prev === label ? null : label));

  const toggleCat = (label: string) =>
    setOpenCat((prev) => (prev === label ? null : label));

  return (
    <div className="px-6 pb-10">
      <ul>
        {NAV.map((item) => (
          <li key={item.label} className="border-b border-gray-800">
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleItem(item.label)}
                  className="w-full flex items-center justify-between text-white text-[16px] font-semibold py-4"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      openItem === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openItem === item.label && (
                  <div className="pb-3 pl-2 space-y-1">
                    {item.dropdown.categories.map((cat) => (
                      <div key={cat.label}>
                        <button
                          onClick={() => toggleCat(cat.label)}
                          className="w-full flex items-center justify-between text-gray-300 text-[14px] font-medium py-2.5 px-3 rounded-lg hover:bg-white/5"
                        >
                          {cat.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${
                              openCat === cat.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openCat === cat.label && (
                          <ul className="pl-5 pb-2 space-y-1">
                            {cat.items.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={onClose}
                                  className="block text-gray-400 hover:text-blue-400 text-[13px] py-2 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-white text-[16px] font-semibold py-4"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile CTAs */}
      <div className="mt-8 flex flex-col gap-3">
        <Link
          href="/about"
          onClick={onClose}
          className="text-center text-white font-semibold border border-gray-700 px-6 py-3.5 rounded-full hover:border-blue-500 transition-colors"
        >
          Explore Reachmest
        </Link>
        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 font-semibold text-white px-6 py-3.5 rounded-full transition-colors"
        >
          <Phone size={16} />
          Contact Us
        </Link>
      </div>
    </div>
  );
}

// ── Header ──────────────────────────────────────────────────────
export default function Header() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveNav(label);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveNav(null), 120);
  }, []);

  const handlePanelEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const activeItem = NAV.find((n) => n.label === activeNav);

  return (
    <>
      <header className="border-b border-gray-900 fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md">
        <div className="px-6 md:px-10 py-5">
          <div className="flex items-center">
            {/* Logo */}
            <a
              href="/"
              className="text-white font-semibold text-[22px] xl:text-[26px] py-1 inline-block shrink-0"
            >
              Reachmest
            </a>

            {/* Desktop Nav — lg+ (1024px+) */}
            <nav className="hidden lg:flex items-center ml-auto">
              {/* Nav links */}
              <ul className="flex items-center gap-0 xl:gap-1">
                {NAV.map((item) => (
                  <li
                    key={item.label}
                    onMouseEnter={() =>
                      item.dropdown
                        ? handleEnter(item.label)
                        : setActiveNav(null)
                    }
                    onMouseLeave={handleLeave}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-0.5 px-2.5 py-2 xl:px-4 xl:py-2 text-[13px] xl:text-[15px] font-semibold transition-colors duration-200 ${
                        activeNav === item.label
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 opacity-70 ${
                            activeNav === item.label
                              ? "rotate-180 opacity-100"
                              : ""
                          }`}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex items-center gap-2 xl:gap-3 ml-3 xl:ml-4">
                {/* "Explore Reachmest" — sirf xl+ pe dikhega */}
                <Link
                  href="/about"
                  className="hidden xl:inline-block text-gray-300 text-[14px] xl:text-[15px] font-semibold border border-gray-700 px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:border-blue-500 hover:text-white transition-colors duration-200 whitespace-nowrap"
                >
                  Explore Reachmest
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 xl:gap-2 bg-blue-600 hover:bg-blue-700 font-semibold text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full transition-colors duration-200 text-[13px] xl:text-[15px] whitespace-nowrap"
                >
                  <PhoneCall size={13} className="xl:hidden" />
                  <PhoneCall size={15} className="hidden xl:block" />
                  Contact Us
                </Link>
              </div>
            </nav>

            {/* Hamburger — below lg (< 1024px) */}
            <button
              className="lg:hidden ml-auto text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega panel */}
        {activeNav && activeItem?.dropdown && (
          <MegaPanel
            dropdown={activeItem.dropdown}
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handleLeave}
          />
        )}
      </header>

      {/* Mobile menu — below lg */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background overflow-y-auto pt-20">
          <MobileMenu onClose={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
}
