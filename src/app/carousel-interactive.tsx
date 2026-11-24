"use client";

import { useEffect } from "react";

export default function CarouselInteractive() {
  useEffect(() => {
    // Only select tracks inside .carousel-media-block (Illustrations carousel)
    const mediaBlock = document.querySelector<HTMLElement>(".carousel-media-block");
    if (!mediaBlock) return;

    const setAFirstItems = mediaBlock.querySelectorAll<HTMLElement>(
      '[data-carousel-set="a"]'
    );
    if (!setAFirstItems.length) return;

    const uniqueTracks: HTMLElement[] = [];
    setAFirstItems.forEach((item) => {
      const parent = item.parentElement;
      if (parent && !uniqueTracks.includes(parent)) {
        uniqueTracks.push(parent);
      }
    });

    interface TrackRunner {
      track: HTMLElement;
      setWidth: number;
      currentX: number;
      targetX: number;
      isDragging: boolean;
      isHovered: boolean;
      startX: number;
      dragStartX: number;
      lastPointerX: number;
      lastPointerTime: number;
      dragVelocity: number;
      autoSpeed: number; // pixels per second
      cleanup: () => void;
    }

    const runners: TrackRunner[] = [];

    uniqueTracks.forEach((track) => {
      // Prevent browser default touch panning interfering with horizontal swipe
      track.style.touchAction = "pan-y";
      track.style.userSelect = "none";
      track.style.cursor = "grab";

      // Prevent native ghost image drag on all child images
      const images = track.querySelectorAll<HTMLImageElement>("img");
      images.forEach((img) => img.setAttribute("draggable", "false"));

      const isMediaBlock = track.closest(".carousel-media-block") !== null;
      // Illustrations carousel scrolls smoothly at ~55px/s, stories at ~45px/s
      const autoSpeed = isMediaBlock ? 60 : 45;

      const runner: TrackRunner = {
        track,
        setWidth: 0,
        currentX: 0,
        targetX: 0,
        isDragging: false,
        isHovered: false,
        startX: 0,
        dragStartX: 0,
        lastPointerX: 0,
        lastPointerTime: performance.now(),
        dragVelocity: 0,
        autoSpeed,
        cleanup: () => {},
      };

      const measureSetWidth = () => {
        const setAItems = track.querySelectorAll<HTMLElement>(
          '[data-carousel-set="a"]'
        );
        if (!setAItems.length) return;

        let total = 0;
        const computedStyle = window.getComputedStyle(track);
        const gap = parseFloat(computedStyle.gap) || 24;

        setAItems.forEach((item) => {
          total += item.offsetWidth + gap;
        });

        runner.setWidth = total;
      };

      measureSetWidth();

      // Pointer drag handlers (Mouse and Touch)
      const onPointerDown = (e: PointerEvent) => {
        runner.isDragging = true;
        runner.startX = e.clientX;
        runner.dragStartX = runner.currentX;
        runner.lastPointerX = e.clientX;
        runner.lastPointerTime = performance.now();
        runner.dragVelocity = 0;
        track.style.cursor = "grabbing";

        try {
          track.setPointerCapture(e.pointerId);
        } catch {}
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!runner.isDragging) return;

        const now = performance.now();
        const dt = Math.max(0.001, (now - runner.lastPointerTime) / 1000);
        const dx = e.clientX - runner.lastPointerX;

        // Instant velocity tracking for smooth flick release
        runner.dragVelocity = dx / dt;
        runner.lastPointerX = e.clientX;
        runner.lastPointerTime = now;

        const delta = e.clientX - runner.startX;
        runner.currentX = runner.dragStartX + delta;

        // Wrap around during drag
        if (runner.setWidth > 0) {
          while (runner.currentX <= -runner.setWidth) {
            runner.currentX += runner.setWidth;
            runner.dragStartX += runner.setWidth;
          }
          while (runner.currentX > 0) {
            runner.currentX -= runner.setWidth;
            runner.dragStartX -= runner.setWidth;
          }
        }

        track.style.transform = `translate3d(${runner.currentX.toFixed(2)}px, 0, 0)`;
      };

      const onPointerUp = (e: PointerEvent) => {
        if (!runner.isDragging) return;
        runner.isDragging = false;
        track.style.cursor = "grab";

        try {
          track.releasePointerCapture(e.pointerId);
        } catch {}
      };

      const onMouseEnter = () => {
        runner.isHovered = true;
      };

      const onMouseLeave = () => {
        runner.isHovered = false;
      };

      track.addEventListener("pointerdown", onPointerDown);
      track.addEventListener("pointermove", onPointerMove);
      track.addEventListener("pointerup", onPointerUp);
      track.addEventListener("pointercancel", onPointerUp);
      track.addEventListener("mouseenter", onMouseEnter);
      track.addEventListener("mouseleave", onMouseLeave);

      const onResize = () => {
        measureSetWidth();
      };
      window.addEventListener("resize", onResize);

      runner.cleanup = () => {
        track.removeEventListener("pointerdown", onPointerDown);
        track.removeEventListener("pointermove", onPointerMove);
        track.removeEventListener("pointerup", onPointerUp);
        track.removeEventListener("pointercancel", onPointerUp);
        track.removeEventListener("mouseenter", onMouseEnter);
        track.removeEventListener("mouseleave", onMouseLeave);
        window.removeEventListener("resize", onResize);
      };

      runners.push(runner);
    });

    // Global Animation Frame Loop
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min(0.05, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      runners.forEach((runner) => {
        if (!runner.isDragging) {
          // If flick velocity exists, apply inertia friction
          if (Math.abs(runner.dragVelocity) > 10) {
            runner.currentX += runner.dragVelocity * dt;
            runner.dragVelocity *= Math.pow(0.92, dt * 60); // friction
          } else {
            runner.dragVelocity = 0;
            // Auto-scroll forward continuously
            if (!runner.isHovered) {
              runner.currentX -= runner.autoSpeed * dt;
            }
          }

          // Seamless infinite wrap around
          if (runner.setWidth > 0) {
            while (runner.currentX <= -runner.setWidth) {
              runner.currentX += runner.setWidth;
            }
            while (runner.currentX > 0) {
              runner.currentX -= runner.setWidth;
            }
          }

          runner.track.style.transform = `translate3d(${runner.currentX.toFixed(
            2
          )}px, 0, 0)`;
        }
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      runners.forEach((r) => r.cleanup());
    };
  }, []);

  return null;
}
