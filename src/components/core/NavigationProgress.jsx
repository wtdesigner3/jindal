"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * NavigationProgress — Global top progress bar.
 *
 * Listens to route changes via usePathname() and renders a thin
 * animated bar at the very top of the viewport during navigation.
 * Disappears smoothly once the new page settles.
 *
 * Uses CSS transitions only — no dependencies required.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Same path — do nothing
    if (pathname === prevPathname.current) return;

    prevPathname.current = pathname;

    // Clear any existing timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // Start the bar
    setVisible(true);
    setProgress(15);

    // Simulate incremental progress
    const steps = [40, 65, 80, 90];
    steps.forEach((val, i) => {
      timerRef.current = setTimeout(() => setProgress(val), (i + 1) * 180);
    });

    // Complete and fade out
    timerRef.current = setTimeout(() => {
      setProgress(100);
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 400);
    }, steps.length * 180 + 120);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "3px",
        background: "linear-gradient(90deg, var(--primary-color1, #c8a84b), var(--primary-color2, #e8c96a))",
        zIndex: 99999,
        transition: progress === 100
          ? "width 0.2s ease-out, opacity 0.35s ease 0.08s"
          : "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: progress === 100 ? 0 : 1,
        borderRadius: "0 3px 3px 0",
        boxShadow: "0 0 8px var(--primary-color1, #c8a84b), 0 0 16px rgba(200,168,75,0.3)",
        pointerEvents: "none",
      }}
    />
  );
}
