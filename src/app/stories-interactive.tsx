"use client";

import { useEffect } from "react";

export default function StoriesInteractive() {
  useEffect(() => {
    const track = document.getElementById("stories-carousel-track") as HTMLElement | null;
    const prevBtn = document.getElementById("stories-prev-btn") as HTMLButtonElement | null;
    const nextBtn = document.getElementById("stories-next-btn") as HTMLButtonElement | null;
    const dots = document.querySelectorAll<HTMLElement>(".stories-dot");

    if (!track) return;

    // Get all Set A customer story cards (total 4 cards: Royal Mint, Cox Automotive, Diligent, L'Oréal)
    const cards = track.querySelectorAll<HTMLElement>('[data-carousel-set="a"]');
    if (!cards.length) return;

    let currentIndex = 0;
    const totalStories = cards.length; // 4

    // Prevent default touch dragging interfering
    track.style.touchAction = "pan-y";
    track.style.userSelect = "none";
    track.style.cursor = "grab";
    track.style.overflow = "visible";

    // Disable image ghost drags
    track.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
      img.setAttribute("draggable", "false");
    });

    const updateDots = (index: number) => {
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("is-active");
        } else {
          dot.classList.remove("is-active");
        }
      });
    };

    const goToIndex = (targetIndex: number, smooth = true) => {
      // Wrap around between 0 and totalStories - 1
      currentIndex = ((targetIndex % totalStories) + totalStories) % totalStories;

      const firstCard = cards[0];
      const currentCard = cards[currentIndex];
      if (!firstCard || !currentCard) return;

      const offset = currentCard.offsetLeft - firstCard.offsetLeft;

      if (smooth) {
        track.style.transition = "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1)";
      } else {
        track.style.transition = "none";
      }

      track.style.transform = `translate3d(-${offset.toFixed(2)}px, 0, 0)`;
      updateDots(currentIndex);
    };

    // Initial positioning
    goToIndex(0, false);

    // Arrow click handlers
    const handlePrev = (e: MouseEvent) => {
      e.preventDefault();
      goToIndex(currentIndex - 1);
    };

    const handleNext = (e: MouseEvent) => {
      e.preventDefault();
      goToIndex(currentIndex + 1);
    };

    prevBtn?.addEventListener("click", handlePrev);
    nextBtn?.addEventListener("click", handleNext);

    // Dot click handlers
    const dotHandlers: Array<{ dot: HTMLElement; fn: () => void }> = [];
    dots.forEach((dot, idx) => {
      const fn = () => goToIndex(idx);
      dot.addEventListener("click", fn);
      dotHandlers.push({ dot, fn });
    });

    // Pointer drag / swipe support
    let isDragging = false;
    let startX = 0;
    let currentDragOffset = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      const firstCard = cards[0];
      const currentCard = cards[currentIndex];
      currentDragOffset = currentCard.offsetLeft - firstCard.offsetLeft;
      track.style.transition = "none";
      track.style.cursor = "grabbing";
      try {
        track.setPointerCapture(e.pointerId);
      } catch {}
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - startX;
      const currentPos = -currentDragOffset + delta;
      track.style.transform = `translate3d(${currentPos.toFixed(2)}px, 0, 0)`;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      track.style.cursor = "grab";
      try {
        track.releasePointerCapture(e.pointerId);
      } catch {}

      const delta = e.clientX - startX;
      if (delta < -60) {
        // Swiped left -> next story
        goToIndex(currentIndex + 1);
      } else if (delta > 60) {
        // Swiped right -> prev story
        goToIndex(currentIndex - 1);
      } else {
        // Snap back to current
        goToIndex(currentIndex);
      }
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);

    // Window resize handler
    const onResize = () => {
      goToIndex(currentIndex, false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      prevBtn?.removeEventListener("click", handlePrev);
      nextBtn?.removeEventListener("click", handleNext);
      dotHandlers.forEach(({ dot, fn }) => dot.removeEventListener("click", fn));
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
