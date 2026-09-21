'use client';

import { useEffect, useRef, useState } from 'react';

const firstLine = 'Tem uma boa ideia?';
const secondLine = 'Vamos dar forma a ela.';

export function FooterTypewriter() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [started, setStarted] = useState(false);
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer = window.setTimeout(() => {
        setFirstCount(firstLine.length);
        setSecondCount(secondLine.length);
      }, 0);

      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || firstCount >= firstLine.length) return;

    const timer = window.setTimeout(
      () => setFirstCount((count) => count + 1),
      42,
    );

    return () => window.clearTimeout(timer);
  }, [firstCount, started]);

  useEffect(() => {
    if (
      !started ||
      firstCount !== firstLine.length ||
      secondCount >= secondLine.length
    ) {
      return;
    }

    const timer = window.setTimeout(
      () => setSecondCount((count) => count + 1),
      secondCount === 0 ? 280 : 42,
    );

    return () => window.clearTimeout(timer);
  }, [firstCount, secondCount, started]);

  const isTyping =
    started &&
    (firstCount < firstLine.length || secondCount < secondLine.length);

  return (
    <h2
      ref={headingRef}
      aria-label={firstLine + ' ' + secondLine}
      className="mt-7 min-h-[2.5em] text-[clamp(3.45rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-white"
    >
      <span aria-hidden>{firstLine.slice(0, firstCount)}</span>
      <em
        aria-hidden
        className="block font-serif font-normal tracking-[-0.08em] text-[#C3D2FF]"
      >
        {secondLine.slice(0, secondCount)}
        <span
          className={
            isTyping
              ? 'typewriter-caret inline-block h-[0.8em] w-[0.055em] translate-y-[0.08em] bg-[#D7E3FF]'
              : 'hidden'
          }
        />
      </em>
    </h2>
  );
}
