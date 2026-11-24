"use client";

import { useEffect, useState } from "react";

export default function NavInteractive() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    // 1. Ensure all autoplay videos start playing
    const videos = document.querySelectorAll<HTMLVideoElement>("video");
    videos.forEach((v) => {
      v.muted = true;
      v.play().catch(() => {});
    });

    // 2. Wire up desktop nav dropdown triggers
    const desktopNavButtons = document.querySelectorAll<HTMLButtonElement>(
      '[data-site-nav="desktop"] button'
    );

    const handleButtonClick = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLButtonElement;
      const text = btn.textContent?.trim() || "";
      if (text.includes("Products") || text.includes("Solutions") || text.includes("Resources")) {
        e.preventDefault();
        e.stopPropagation();
        const menuName = text.includes("Products")
          ? "Products"
          : text.includes("Solutions")
          ? "Solutions"
          : "Resources";
        setActiveDropdown((prev) => (prev === menuName ? null : menuName));
      }
    };

    desktopNavButtons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

    // Close dropdown when clicking outside
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-site-nav="desktop"]') && !target.closest("#desktop-dropdown-menu")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    // 3. Wire up mobile hamburger button
    const mobileButton = document.querySelector<HTMLButtonElement>(
      '[data-site-nav="mobile"] button[aria-label="Open menu"]'
    );

    const handleMobileClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setMobileMenuOpen((prev) => !prev);
    };

    if (mobileButton) {
      mobileButton.addEventListener("click", handleMobileClick);
    }

    return () => {
      desktopNavButtons.forEach((btn) => {
        btn.removeEventListener("click", handleButtonClick);
      });
      document.removeEventListener("click", handleDocumentClick);
      if (mobileButton) {
        mobileButton.removeEventListener("click", handleMobileClick);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop Dropdown Menus */}
      {activeDropdown && (
        <div
          id="desktop-dropdown-menu"
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl p-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-2xl transition-all duration-200 ease-out"
        >
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-80 bg-[#0D3A29] text-white flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-white/20">
            <span className="font-bold text-xl tracking-tight text-[#ABFF44]">Optimizely</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6 py-8 text-xl font-medium">
            <a href="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ABFF44]">Products</a>
            <a href="/solutions" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ABFF44]">Solutions</a>
            <a href="/resources" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ABFF44]">Resources</a>
            <a href="/plans" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ABFF44]">Plans</a>
            <a href="/developers" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ABFF44]">Developers</a>
            <a href="/partners" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ABFF44]">Partners</a>
            <a href="https://home.optimizely.com/" className="hover:text-[#ABFF44]">Login</a>
          </div>

          <div className="mt-auto pt-6 border-t border-white/20">
            <a
              href="/get-started"
              className="flex items-center justify-center w-full py-4 rounded-xl bg-[#ABFF44] text-[#0D3A29] font-bold text-lg hover:bg-[#9de83a] transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
