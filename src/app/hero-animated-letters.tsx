"use client";

import React, { useEffect, useRef, useState, Fragment } from "react";
import { createPortal } from "react-dom";

interface CharData {
  char: string;
  isSpace: boolean;
  width: number;
  flatX: number;
  rotationDeg: number;
  stepAngle: number;
  index: number;
  droopY: number;
}

interface LineData {
  characters: CharData[];
  radius: number;
  totalWidth: number;
  totalAngle: number;
  height: number;
  maxDroop: number;
  lineHeight: number;
  fontSize: number;
  layerOffset: number;
}

// 6 authentic Optimizely green extrusion layers (from base to front face)
const EXTRUSION_COLORS = [
  "var(--color-extrusion-6)", // depth 0: #166e49 (Deepest forest green base)
  "var(--color-extrusion-5)", // depth 1: #227d47
  "var(--color-extrusion-4)", // depth 2: #2e8c45
  "var(--color-extrusion-3)", // depth 3: #40a142
  "var(--color-extrusion-2)", // depth 4: #3ab533
  "var(--color-extrusion-1)", // depth 5: #abff44 (Top bright neon lime front face)
];

const FACING_INTENSITY = 1.25;

export default function HeroAnimatedLetters() {
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  const [lines, setLines] = useState<LineData[]>([]);
  const [, setRenderTick] = useState(0);

  // Springs
  const morphProgress = useRef(0);
  const morphVelocity = useRef(0);

  const entranceProgress = useRef(0);
  const entranceVelocity = useRef(0);

  // Cursor follow (-1.2 to +1.2)
  const targetCursorX = useRef(0);
  const targetCursorY = useRef(0);
  const cursorFollowX = useRef(0);
  const cursorFollowY = useRef(0);
  const cursorVelX = useRef(0);
  const cursorVelY = useRef(0);

  // Extrusion tilt inputX (-20 to +20)
  const targetInputX = useRef(0);
  const currentInputX = useRef(0);
  const inputXVelocity = useRef(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  // 1. Mount slot & hide static fallback
  useEffect(() => {
    const slotEl = document.getElementById("hero-animated-letters-slot");
    const fallbackEl = document.getElementById("hero-static-fallback");

    if (slotEl) {
      setSlot(slotEl);
      if (fallbackEl) {
        fallbackEl.style.display = "none";
      }
    }
  }, []);

  // 2. Measure font & layout characters with exact responsive geometry
  useEffect(() => {
    if (!slot) return;

    const measureAndLayout = () => {
      // Determine viewport & slot width
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth || 1200;
      const slotWidth = slot.clientWidth || viewportWidth;
      const effectiveWidth = Math.min(viewportWidth, slotWidth);

      // Responsive breakpoints:
      // Desktop: >= 1024px -> 1 line: ["You're free to grow"]
      // Tablet / Medium: 680px - 1023px -> 2 lines: ["You're free", "to grow"]
      // Mobile / Small: < 680px -> 2 lines: ["You're free", "to grow"]
      const isDesktop = effectiveWidth >= 1024;
      const isTablet = effectiveWidth >= 680 && effectiveWidth < 1024;

      let fontSize: number;
      let lineStrings: string[];

      if (isDesktop) {
        lineStrings = ["You're free to grow"];
        // Scale dynamically so 1-line text never overflows across any desktop resolution
        fontSize = Math.min(117, Math.max(76, (effectiveWidth - 80) / 10.5));
      } else if (isTablet) {
        lineStrings = ["You're free", "to grow"];
        // For tablet (e.g. 768px - 1023px), comfortable generous 2-line sizing
        fontSize = Math.min(84, Math.max(62, (effectiveWidth - 64) / 9.2));
      } else {
        // Mobile (e.g. 320px - 679px)
        lineStrings = ["You're free", "to grow"];
        // On mobile, ensure "You're free" fits with plenty of breathing room
        fontSize = Math.min(56, Math.max(36, (effectiveWidth - 32) / 6.4));
      }

      const lineHeight = fontSize * 1.05;
      const layerOffset = (fontSize / 120) * 8.5; // Scaled 3D extrusion depth

      // Arch curvature parameter: gentle dome curve arching over the portrait
      const arcAmount = isDesktop ? 0.125 : 0.145;

      // Measurer container with exact font settings
      const measurer = document.createElement("div");
      measurer.className =
        "font-henrietta font-extrabold leading-none absolute pointer-events-none opacity-0 whitespace-pre";
      measurer.style.fontSize = `${fontSize}px`;
      document.body.appendChild(measurer);

      // Measure character widths for each line
      const linesMeasurements = lineStrings.map((str) => {
        const chars = Array.from(str);
        const spans = chars.map((c) => {
          const s = document.createElement("span");
          s.textContent = c === " " ? "\u00A0" : c;
          measurer.appendChild(s);
          return s;
        });

        const widths = spans.map((s, i) => {
          if (chars[i] === " ") {
            return Math.round(fontSize * 0.22);
          }
          const measured = s.offsetWidth;
          return measured > 0 ? measured : Math.round(fontSize * 0.42);
        });

        while (measurer.firstChild) {
          measurer.removeChild(measurer.firstChild);
        }

        const totalWidth = widths.reduce((sum, w) => sum + w, 0);
        return { str, chars, widths, totalWidth };
      });

      document.body.removeChild(measurer);

      // Find widest line to establish shared dome radius across both lines in 2-line mode
      const primaryWidth = Math.max(
        ...linesMeasurements.map((m) => m.totalWidth)
      );
      const sharedRadius = primaryWidth / (2 * Math.PI * arcAmount);

      const computedLines: LineData[] = linesMeasurements.map(
        ({ chars, widths, totalWidth }) => {
          const radius = sharedRadius;
          const totalAngle = widths.reduce(
            (sum, w) => sum + (0.95 * w) / radius,
            0
          );
          const startAngle = -totalAngle / 2;

          let currAngle = 0;
          let currFlatX = 0;
          let maxDroop = 0;

          const charDataList: CharData[] = chars.map((char, i) => {
            const w = widths[i];
            const isSpace = char === " ";
            const stepAngle = (0.95 * w) / radius;
            const centerAngle = startAngle + currAngle + stepAngle / 2;
            currAngle += stepAngle;

            const flatX = currFlatX + w / 2 - totalWidth / 2;
            currFlatX += w;

            const rotationDeg = (centerAngle * 180) / Math.PI;
            const droopY = (1 - Math.cos(centerAngle)) * radius;
            if (droopY > maxDroop) maxDroop = droopY;

            return {
              char,
              isSpace,
              width: w,
              flatX,
              rotationDeg,
              stepAngle,
              index: i,
              droopY,
            };
          });

          // The line container height covers font height + arch droop + 3D layers + padding
          const extrusionHeight = (EXTRUSION_COLORS.length - 1) * layerOffset;
          const height = lineHeight + maxDroop + extrusionHeight + 8;

          return {
            characters: charDataList,
            radius,
            totalWidth,
            totalAngle,
            height,
            maxDroop,
            lineHeight,
            fontSize,
            layerOffset,
          };
        }
      );

      setLines(computedLines);
    };

    measureAndLayout();

    if (document.fonts?.ready) {
      document.fonts.ready.then(measureAndLayout);
    }

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measureAndLayout, 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [slot]);

  // 3. Screen-wide mouse listener & touch listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const screenHalfW = window.innerWidth / 2 || 1;
      const screenHalfH = window.innerHeight / 2 || 1;

      const normX = Math.max(
        -1.2,
        Math.min(1.2, (e.clientX - centerX) / screenHalfW)
      );
      const normY = Math.max(
        -1.2,
        Math.min(1.2, (e.clientY - centerY) / screenHalfH)
      );

      targetCursorX.current = normX;
      targetCursorY.current = normY;
      targetInputX.current = normX * 18; // Drives perspective extrusion tilt
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return;
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const screenHalfW = window.innerWidth / 2 || 1;
      const screenHalfH = window.innerHeight / 2 || 1;

      const normX = Math.max(
        -1.2,
        Math.min(1.2, (touch.clientX - centerX) / screenHalfW)
      );
      const normY = Math.max(
        -1.2,
        Math.min(1.2, (touch.clientY - centerY) / screenHalfH)
      );

      targetCursorX.current = normX;
      targetCursorY.current = normY;
      targetInputX.current = normX * 14;
    };

    const handleMouseLeave = () => {
      targetCursorX.current = 0;
      targetCursorY.current = 0;
      targetInputX.current = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchend", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  // 4. Smooth Spring Loop
  useEffect(() => {
    const kMorph = 70;
    const dMorph = 16;
    const mMorph = 0.9;

    const kEntr = 60;
    const dEntr = 12;
    const mEntr = 0.8;

    const kCursor = 85;
    const dCursor = 14;
    const mCursor = 0.7;

    const kInput = 80;
    const dInput = 8;
    const mInput = 0.5;

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min(0.033, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      // Morph spring
      const morphDisp = morphProgress.current - 1;
      const morphAccel =
        (-kMorph * morphDisp - dMorph * morphVelocity.current) / mMorph;
      morphVelocity.current += morphAccel * dt;
      morphProgress.current += morphVelocity.current * dt;

      // Entrance spring
      const entrDisp = entranceProgress.current - 1;
      const entrAccel =
        (-kEntr * entrDisp - dEntr * entranceVelocity.current) / mEntr;
      entranceVelocity.current += entrAccel * dt;
      entranceProgress.current += entranceVelocity.current * dt;

      // Cursor follow X & Y
      const dispX = cursorFollowX.current - targetCursorX.current;
      const accelX =
        (-kCursor * dispX - dCursor * cursorVelX.current) / mCursor;
      cursorVelX.current += accelX * dt;
      cursorFollowX.current += cursorVelX.current * dt;

      const dispY = cursorFollowY.current - targetCursorY.current;
      const accelY =
        (-kCursor * dispY - dCursor * cursorVelY.current) / mCursor;
      cursorVelY.current += accelY * dt;
      cursorFollowY.current += cursorVelY.current * dt;

      // InputX spring
      const dispInput = currentInputX.current - targetInputX.current;
      const accelInput =
        (-kInput * dispInput - dInput * inputXVelocity.current) / mInput;
      inputXVelocity.current += accelInput * dt;
      currentInputX.current += inputXVelocity.current * dt;

      setRenderTick(currentTime);
      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (!slot || lines.length === 0) return null;

  const morph = Math.max(0, morphProgress.current);
  const entrance = Math.max(0, entranceProgress.current);
  const curX = cursorFollowX.current;
  const curY = cursorFollowY.current;
  const inputX = currentInputX.current;
  const now = performance.now() / 1000;

  // Dampen follow movement slightly on smaller screens
  const isSmallScreen = (lines[0]?.fontSize || 100) < 70;
  const followMult = isSmallScreen ? 0.35 : 1.0;
  const containerFollowX = curX * 24 * followMult;
  const containerFollowY = curY * 14 * followMult;
  const containerTiltRot = curX * 4.5 * followMult;

  const content = (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center select-none cursor-default py-1 overflow-visible"
      style={{
        transform: `translate(${containerFollowX.toFixed(
          2
        )}px, ${containerFollowY.toFixed(2)}px) rotate(${containerTiltRot.toFixed(
          2
        )}deg)`,
        transformOrigin: "center center",
        transition: "none",
      }}
    >
      {lines.map((line, lineIdx) => {
        return (
          <span
            key={lineIdx}
            className="relative block w-full leading-none overflow-visible text-center"
            style={{
              height: `${line.height.toFixed(2)}px`,
              minHeight: `${line.height.toFixed(2)}px`,
              marginTop: lineIdx > 0 ? "4px" : "0px",
            }}
          >
            {/* The line containing all character layers */}
            <span
              className="absolute inset-x-0 top-0 overflow-visible"
              style={{
                height: `${line.lineHeight.toFixed(2)}px`,
              }}
            >
              {line.characters.map((charData, charIdx) => {
                if (charData.isSpace) {
                  return null;
                }

                // Breathing wave
                const idleWaveY =
                  Math.sin(now * 2.2 + charIdx * 0.35) *
                  1.5 *
                  Math.min(1, entrance);
                const idleWaveRot =
                  Math.cos(now * 1.8 + charIdx * 0.35) *
                  0.6 *
                  Math.min(1, entrance);

                // Base transformation along the circular arc:
                // X: flatX
                // Y: droopY * morph (curves downward from center apex)
                // Rot: rotationDeg * morph
                const charX = charData.flatX;
                const charY = charData.droopY * morph + idleWaveY;
                const charRot = charData.rotationDeg * morph + idleWaveRot;

                const outerTransform = `translateX(-50%) translate3d(${charX.toFixed(
                  2
                )}px, ${charY.toFixed(2)}px, 0) rotate(${charRot.toFixed(3)}deg)`;

                return (
                  <Fragment key={charIdx}>
                    {EXTRUSION_COLORS.map((color, layerIdx) => {
                      const depth = layerIdx; // 0 (base forest green) to 5 (top neon lime face)
                      const isTopLayer =
                        layerIdx === EXTRUSION_COLORS.length - 1;
                      const zIndex = 10 + depth;

                      // 3D extrusion physics calculations
                      const w = depth * line.layerOffset;
                      const b = -(depth * line.layerOffset * 1);
                      const isZero = depth === 0;
                      const y = Math.abs(depth) * line.layerOffset;
                      const E = (val: number) =>
                        y > 0 ? Math.tanh(val / y) * y : 0;

                      const angleRad =
                        ((charData.rotationDeg * Math.PI) / 180) * morph;
                      const cosTheta = Math.cos(angleRad);
                      const sinTheta = Math.sin(angleRad);

                      // Mouse perspective tilt
                      const facingVal =
                        w + inputX * depth * FACING_INTENSITY * entrance;

                      const xOffset = isZero
                        ? 0
                        : (cosTheta * E(facingVal) + sinTheta * E(b)) * entrance;
                      const yOffset = isZero
                        ? 0
                        : (-sinTheta * E(facingVal) + cosTheta * E(b)) *
                          entrance;

                      return (
                        <span
                          key={`${charIdx}-${layerIdx}`}
                          className={
                            "absolute top-0 left-1/2 inline-block origin-top " +
                            (!isTopLayer ? "pointer-events-none select-none" : "")
                          }
                          style={{
                            transform: outerTransform,
                            zIndex: zIndex,
                          }}
                          aria-hidden={!isTopLayer}
                        >
                          <span
                            className="inline-block whitespace-pre"
                            style={{
                              color: color,
                              transform: `translate(${xOffset.toFixed(
                                2
                              )}px, ${yOffset.toFixed(2)}px)`,
                              WebkitTextStroke:
                                "0.025em var(--color-fir-darkfir)",
                              paintOrder: "stroke fill",
                              fontSize: `${line.fontSize}px`,
                              lineHeight: `${line.lineHeight}px`,
                            }}
                          >
                            {charData.char}
                          </span>
                        </span>
                      );
                    })}
                  </Fragment>
                );
              })}
            </span>
          </span>
        );
      })}
    </div>
  );

  return createPortal(content, slot);
}
