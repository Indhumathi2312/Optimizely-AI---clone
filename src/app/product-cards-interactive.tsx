"use client";

import { useEffect } from "react";

export default function ProductCardsInteractive() {
  useEffect(() => {
    const section = document.getElementById("product-feature-cards-section");
    if (!section) return;

    // The 3 product card columns ("Agentic CMS", "Agentic Experimentation", "Agent Platform")
    const cardColumns = section.querySelectorAll<HTMLElement>("[data-vcs-col]");
    if (!cardColumns.length) return;

    let hoveredIdx: number | null = null;
    let clickedIdx: number | null = null;

    const applyStates = () => {
      const activeIdx = hoveredIdx !== null ? hoveredIdx : clickedIdx;

      cardColumns.forEach((col, idx) => {
        const img = col.querySelector<HTMLElement>("img");
        const spotlight = col.querySelector<HTMLElement>(".product-card-spotlight");

        if (activeIdx !== null) {
          if (idx === activeIdx) {
            // === ACTIVE CARD (Matching user reference image: ~43% width, top aligned) ===
            col.classList.remove("is-contracted", "is-neutral");
            col.classList.add("is-expanded");
            col.style.flex = "1.38 1 0%";
            col.style.transform = "none";
            col.style.zIndex = "15";
            col.style.opacity = "1";
            col.style.filter = "none";
            col.style.boxShadow =
              "0 12px 28px -6px rgba(13, 58, 41, 0.18), 0 0 0 1.5px rgba(171, 255, 68, 0.55)";

            if (img) {
              img.style.transform = "scale(1.05)";
            }
            if (spotlight) {
              spotlight.style.opacity = "1";
            }
          } else {
            // === SIBLING CARDS (Matching user reference image: ~28% width each, clean & legible) ===
            col.classList.remove("is-expanded", "is-neutral");
            col.classList.add("is-contracted");
            col.style.flex = "0.90 1 0%";
            col.style.transform = "none";
            col.style.zIndex = "5";
            col.style.opacity = "0.88";
            col.style.filter = "none";
            col.style.boxShadow = "none";

            if (img) {
              img.style.transform = "scale(1)";
            }
            if (spotlight) {
              spotlight.style.opacity = "0";
            }
          }
        } else {
          // === NEUTRAL: ALL 3 CARDS EQUAL (33.3% each) ===
          col.classList.remove("is-expanded", "is-contracted");
          col.classList.add("is-neutral");
          col.style.flex = "1 1 0%";
          col.style.transform = "none";
          col.style.zIndex = "10";
          col.style.opacity = "1";
          col.style.filter = "none";
          col.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";

          if (img) {
            img.style.transform = "scale(1)";
          }
          if (spotlight) {
            spotlight.style.opacity = "0";
          }
        }
      });
    };

    // Prepare each card
    cardColumns.forEach((col, idx) => {
      col.classList.add("product-card-3d-wrapper", "is-neutral");
      col.style.transition =
        "flex 0.4s cubic-bezier(0.25, 1, 0.35, 1), opacity 0.35s ease, box-shadow 0.35s ease";
      col.style.willChange = "flex, opacity, box-shadow";
      col.style.cursor = "pointer";

      // Prevent link default navigation on the cards so clicking interacts smoothly
      const links = col.querySelectorAll<HTMLAnchorElement>("a");
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
        });
      });

      // Spotlight overlay
      let spotlight = col.querySelector<HTMLElement>(".product-card-spotlight");
      if (!spotlight) {
        spotlight = document.createElement("div");
        spotlight.className = "product-card-spotlight";
        col.appendChild(spotlight);
      }

      const img = col.querySelector<HTMLElement>("img");
      if (img) {
        img.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.35, 1)";
      }

      col.addEventListener("mouseenter", () => {
        hoveredIdx = idx;
        applyStates();
      });

      col.addEventListener("mouseleave", () => {
        if (hoveredIdx === idx) {
          hoveredIdx = null;
        }
        applyStates();
      });

      col.addEventListener("mousemove", (e: MouseEvent) => {
        const activeIdx = hoveredIdx !== null ? hoveredIdx : clickedIdx;
        if (activeIdx !== idx) return;

        const rect = col.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;

        if (spotlight) {
          spotlight.style.background = `radial-gradient(circle 320px at ${px}px ${py}px, rgba(171, 255, 68, 0.20), rgba(58, 181, 51, 0.06) 45%, transparent 75%)`;
        }
      });

      col.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (clickedIdx === idx) {
          clickedIdx = null; // Toggle off if clicking the already open card
        } else {
          clickedIdx = idx; // Lock this card open
        }
        applyStates();
      });
    });

    // Reset when clicking anywhere outside
    const onDocClick = (e: MouseEvent) => {
      if (!section.contains(e.target as Node)) {
        clickedIdx = null;
        hoveredIdx = null;
        applyStates();
      }
    };
    document.addEventListener("click", onDocClick);

    // Initial state setup
    applyStates();

    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  return null;
}
