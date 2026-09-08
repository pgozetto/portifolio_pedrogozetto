'use client';

import { useEffect } from 'react';

export function SiteMotion() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.hero');
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px 80px' },
    );
    revealItems.forEach((item) => observer.observe(item));

    let animationFrame = 0;
    const updateParallax = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        hero?.style.setProperty(
          '--hero-offset',
          `${Math.min(window.scrollY * 0.18, 96)}px`,
        );
        animationFrame = 0;
      });
    };

    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const movePortrait = (event: PointerEvent) => {
      if (!hero || pointerFrame) return;
      const rect = hero.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
      pointerFrame = window.requestAnimationFrame(() => {
        hero.style.setProperty('--pointer-x', `${pointerX}px`);
        hero.style.setProperty('--pointer-y', `${pointerY}px`);
        pointerFrame = 0;
      });
    };
    const resetPortrait = () => {
      hero?.style.setProperty('--pointer-x', '0px');
      hero?.style.setProperty('--pointer-y', '0px');
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    const allowPointerMotion = window.matchMedia('(pointer: fine)').matches;
    if (allowPointerMotion) {
      hero?.addEventListener('pointermove', movePortrait, { passive: true });
      hero?.addEventListener('pointerleave', resetPortrait);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateParallax);
      hero?.removeEventListener('pointermove', movePortrait);
      hero?.removeEventListener('pointerleave', resetPortrait);
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(pointerFrame);
    };
  }, []);

  return null;
}
