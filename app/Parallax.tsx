"use client";

import { useEffect } from "react";

/**
 * Parallax leve: move elementos com [data-parallax="velocidade"] no scroll.
 * Desligado em telas pequenas e para quem prefere movimento reduzido.
 */
export default function Parallax() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 861px)");
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    let ticking = false;

    const reset = () => els.forEach((el) => (el.style.transform = ""));

    const update = () => {
      ticking = false;
      if (reduce.matches || !desktop.matches) return reset();
      const vh = window.innerHeight;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0");
        const rect = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
        el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reset();
    };
  }, []);

  return null;
}
