'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const OUTER_SIZE = 32;
const INNER_SIZE = 6;
const LERP_FACTOR = 0.15;
const SCALE_LERP = 0.1;
const HOVER_SCALE = 1.8;
const CLICK_SCALE = 0.85;
const MOBILE_BREAKPOINT = 768;

/* Selectors for interactive elements that trigger the hover scale effect */
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [tabindex], .card, .card-glass, .btn-primary, .btn-secondary, .btn-ghost, .tag';

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  /* Position refs — using refs avoids re-renders on every frame */
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  /* Mutable state for the animation loop */
  const mousePos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });
  const innerPos = useRef({ x: -100, y: -100 });
  const currentScale = useRef(1);
  const targetScale = useRef(1);
  const isHovering = useRef(false);
  const isPressed = useRef(false);
  const rafId = useRef<number>(0);

  /* ---------- Detect touch device ---------- */
  useEffect(() => {
    const mq = window.matchMedia(`(pointer: coarse)`);

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
        setIsVisible(true);
      }
    };

    handleMediaChange(mq);

    if (mq.addEventListener) {
      mq.addEventListener('change', handleMediaChange);
    }
    // Fallback: also listen for first touch event
    const onTouch = () => {
      setIsTouchDevice(true);
    };
    window.addEventListener('touchstart', onTouch, { once: true, passive: true });

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handleMediaChange);
      }
      window.removeEventListener('touchstart', onTouch);
    };
  }, []);

  /* ---------- Mouse event listeners ---------- */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    isHovering.current = false;
    targetScale.current = 1;
  }, []);

  const handleMouseDown = useCallback(() => {
    isPressed.current = true;
    targetScale.current = CLICK_SCALE;
  }, []);

  const handleMouseUp = useCallback(() => {
    isPressed.current = false;
    targetScale.current = isHovering.current ? HOVER_SCALE : 1;
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isTouchDevice, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  /* ---------- Hover detection via event delegation ---------- */
  useEffect(() => {
    if (isTouchDevice) return;

    const handleOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target?.closest?.(INTERACTIVE_SELECTOR)) {
        isHovering.current = true;
        if (!isPressed.current) targetScale.current = HOVER_SCALE;
      }
    };

    const handleOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target?.closest?.(INTERACTIVE_SELECTOR)) {
        isHovering.current = false;
        if (!isPressed.current) targetScale.current = 1;
      }
    };

    document.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseout', handleOut, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [isTouchDevice]);

  /* ---------- Animation loop ---------- */
  useEffect(() => {
    if (isTouchDevice) return;

    const animate = () => {
      /* Lerp outer position (slower, trailing effect) */
      outerPos.current.x = lerp(outerPos.current.x, mousePos.current.x, LERP_FACTOR);
      outerPos.current.y = lerp(outerPos.current.y, mousePos.current.y, LERP_FACTOR);

      /* Lerp inner position (faster, nearly instant) */
      innerPos.current.x = lerp(innerPos.current.x, mousePos.current.x, LERP_FACTOR * 4);
      innerPos.current.y = lerp(innerPos.current.y, mousePos.current.y, LERP_FACTOR * 4);

      /* Lerp scale */
      currentScale.current = lerp(currentScale.current, targetScale.current, SCALE_LERP);

      /* Apply transforms */
      if (outerRef.current) {
        const half = OUTER_SIZE / 2;
        outerRef.current.style.transform = `translate3d(${outerPos.current.x - half}px, ${outerPos.current.y - half}px, 0) scale(${currentScale.current})`;
      }

      if (innerRef.current) {
        const half = INNER_SIZE / 2;
        const innerScale = lerp(1, 0.5, (currentScale.current - 1) / (HOVER_SCALE - 1));
        const effectiveInnerScale = currentScale.current > 1 ? Math.max(0.5, 1 - (currentScale.current - 1) * 0.5) : 1;
        innerRef.current.style.transform = `translate3d(${innerPos.current.x - half}px, ${innerPos.current.y - half}px, 0) scale(${effectiveInnerScale})`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isTouchDevice]);

  /* ---------- Render ---------- */
  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: OUTER_SIZE,
          height: OUTER_SIZE,
          borderRadius: '50%',
          border: '1.5px solid var(--color-accent)',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'opacity 0.3s ease, width 0.2s ease, height 0.2s ease',
        }}
        aria-hidden="true"
      />

      {/* Inner dot */}
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: INNER_SIZE,
          height: INNER_SIZE,
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden="true"
      />
    </>
  );
}