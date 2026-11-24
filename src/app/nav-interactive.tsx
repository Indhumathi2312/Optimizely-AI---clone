"use client";

import { useEffect, useState } from "react";

export default function NavInteractive() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // 1. Ensure all autoplay videos start playing
    const videos = document.querySelectorAll<HTMLVideoElement>("video");
    videos.forEach((v) => {
      v.muted = true;
      v.play().catch(() => {});
    });

    // 2. Delegated document click handler for desktop & mobile triggers
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for mobile hamburger trigger click
      const mobileBtn = target.closest<HTMLButtonElement>(
        '[data-site-nav="mobile"] button, button[aria-label="Open menu"]'
      );
      if (mobileBtn) {
        e.preventDefault();
        e.stopPropagation();
        setMobileMenuOpen((prev) => !prev);
        return;
      }

      // Check for desktop nav dropdown buttons
      const desktopBtn = target.closest<HTMLButtonElement>(
        '[data-site-nav="desktop"] button'
      );
      if (desktopBtn) {
        const text = desktopBtn.textContent?.trim() || "";
        if (
          text.includes("Products") ||
          text.includes("Solutions") ||
          text.includes("Resources")
        ) {
          e.preventDefault();
          e.stopPropagation();
          const menuName = text.includes("Products")
            ? "Products"
            : text.includes("Solutions")
            ? "Solutions"
            : "Resources";
          setActiveDropdown((prev) => (prev === menuName ? null : menuName));
          return;
        }
      }

      // Click outside desktop dropdown closes it
      if (
        !target.closest('[data-site-nav="desktop"]') &&
        !target.closest("#desktop-dropdown-menu")
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection((prev) => (prev === section ? null : section));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileSection(null);
  };

  return (
    <>
      {/* Desktop Dropdown Menus */}
      {activeDropdown && (
        <div id="desktop-dropdown-menu">
          {activeDropdown === "Products" && (
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Content Management
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/products/content-management/"
                      className="block p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <div className="font-semibold text-sm text-[#0D3A29]">Agentic CMS</div>
                      <div className="text-xs text-neutral-500">Next-gen AI content authoring</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/content-management/"
                      className="block p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <div className="font-semibold text-sm text-[#0D3A29]">Content Marketing</div>
                      <div className="text-xs text-neutral-500">Plan and coordinate workflows</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Experimentation
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/products/experimentation/"
                      className="block p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <div className="font-semibold text-sm text-[#0D3A29]">Web Experimentation</div>
                      <div className="text-xs text-neutral-500">A/B testing for web apps</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/experimentation/"
                      className="block p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <div className="font-semibold text-sm text-[#0D3A29]">Feature Experimentation</div>
                      <div className="text-xs text-neutral-500">Feature flags & rollouts</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  AI & Personalization
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/products/ai/"
                      className="block p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <div className="font-semibold text-sm text-[#0D3A29]">Optimizely Opal</div>
                      <div className="text-xs text-neutral-500">Embedded agentic intelligence</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/"
                      className="block p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <div className="font-semibold text-sm text-[#0D3A29]">View all products →</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeDropdown === "Solutions" && (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  By Industry
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <a href="#" className="p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Retail & E-commerce</a>
                  <a href="#" className="p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Financial Services</a>
                  <a href="#" className="p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Healthcare</a>
                  <a href="#" className="p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">B2B & SaaS</a>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  By Role
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <a href="#" className="p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Marketers</a>
                  <a href="#" className="p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Product Managers</a>
                  <a href="#" className="p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Engineers</a>
                  <a href="#" className="p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Executive Leaders</a>
                </div>
              </div>
            </div>
          )}

          {activeDropdown === "Resources" && (
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">Learn</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Blog & Insights</a>
                  <a href="#" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Customer Stories</a>
                  <a href="#" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Webinars & Events</a>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">Build</h4>
                <div className="space-y-2 text-sm">
                  <a href="/developers" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Developer Documentation</a>
                  <a href="#" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">API References</a>
                  <a href="#" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">SDKs & GitHub</a>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">Support</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Help Center</a>
                  <a href="#" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Community Forum</a>
                  <a href="#" className="block p-2 rounded hover:bg-neutral-100 text-[#0D3A29] font-medium">Academy & Certifications</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Navigation Drawer Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-drawer-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {/* Header */}
          <div className="mobile-drawer-header">
            <a href="/" onClick={closeMobileMenu} className="flex items-center gap-2 text-white no-underline">
              <span className="font-henrietta font-extrabold text-2xl tracking-tight text-[#abff44]">
                Optimizely
              </span>
            </a>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="mobile-drawer-close-btn"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Navigation Links with smooth accordions */}
          <div className="mobile-drawer-links">
            {/* Products */}
            <div className="mobile-drawer-item">
              <button
                type="button"
                onClick={() => toggleMobileSection("products")}
                className="mobile-drawer-link-btn"
                aria-expanded={expandedMobileSection === "products"}
              >
                <span>Products</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: expandedMobileSection === "products" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedMobileSection === "products" && (
                <div className="mobile-drawer-sublist">
                  <a href="/products/content-management/" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">Agentic CMS</div>
                    <div className="mobile-drawer-sublink-desc">Next-gen AI content authoring</div>
                  </a>
                  <a href="/products/experimentation/" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">Agentic Experimentation</div>
                    <div className="mobile-drawer-sublink-desc">A/B testing & feature rollouts</div>
                  </a>
                  <a href="/products/ai/" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">Agent Platform</div>
                    <div className="mobile-drawer-sublink-desc">AI workflows & agent automation</div>
                  </a>
                  <a href="/products/content-management/" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">Content Marketing Platform</div>
                    <div className="mobile-drawer-sublink-desc">Plan & campaign collaboration</div>
                  </a>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div className="mobile-drawer-item">
              <button
                type="button"
                onClick={() => toggleMobileSection("solutions")}
                className="mobile-drawer-link-btn"
                aria-expanded={expandedMobileSection === "solutions"}
              >
                <span>Solutions</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: expandedMobileSection === "solutions" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedMobileSection === "solutions" && (
                <div className="mobile-drawer-sublist">
                  <a href="#" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">For Marketers</div>
                    <div className="mobile-drawer-sublink-desc">Prove impact & scale campaigns</div>
                  </a>
                  <a href="#" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">For Product Teams</div>
                    <div className="mobile-drawer-sublink-desc">Ship validated features faster</div>
                  </a>
                  <a href="#" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">For Developers</div>
                    <div className="mobile-drawer-sublink-desc">Ultra-fast APIs, SDKs & flags</div>
                  </a>
                  <a href="#" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">For Enterprise</div>
                    <div className="mobile-drawer-sublink-desc">Governance, security & global scale</div>
                  </a>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="mobile-drawer-item">
              <button
                type="button"
                onClick={() => toggleMobileSection("resources")}
                className="mobile-drawer-link-btn"
                aria-expanded={expandedMobileSection === "resources"}
              >
                <span>Resources</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: expandedMobileSection === "resources" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedMobileSection === "resources" && (
                <div className="mobile-drawer-sublist">
                  <a href="/developers" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">Developer Docs & APIs</div>
                    <div className="mobile-drawer-sublink-desc">Quickstarts, SDKs & guides</div>
                  </a>
                  <a href="#" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">Customer Stories</div>
                    <div className="mobile-drawer-sublink-desc">See how leading brands win</div>
                  </a>
                  <a href="#" onClick={closeMobileMenu} className="mobile-drawer-sublink">
                    <div className="mobile-drawer-sublink-title">Blog & Research</div>
                    <div className="mobile-drawer-sublink-desc">Strategy & experimentation insights</div>
                  </a>
                </div>
              )}
            </div>

            {/* Plans */}
            <div className="mobile-drawer-item">
              <a href="/plans" onClick={closeMobileMenu} className="mobile-drawer-link-btn">
                <span>Plans</span>
              </a>
            </div>

            {/* Developers */}
            <div className="mobile-drawer-item">
              <a href="/developers" onClick={closeMobileMenu} className="mobile-drawer-link-btn">
                <span>Developers</span>
              </a>
            </div>

            {/* Partners */}
            <div className="mobile-drawer-item">
              <a href="/partners" onClick={closeMobileMenu} className="mobile-drawer-link-btn">
                <span>Partners</span>
              </a>
            </div>

            {/* Login */}
            <div className="mobile-drawer-item">
              <a href="https://home.optimizely.com/" onClick={closeMobileMenu} className="mobile-drawer-link-btn">
                <span>Login</span>
              </a>
            </div>
          </div>

          {/* Bottom Get Started Button */}
          <div className="mobile-drawer-cta-wrapper">
            <a
              href="/get-started"
              onClick={closeMobileMenu}
              className="mobile-drawer-cta-btn"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
