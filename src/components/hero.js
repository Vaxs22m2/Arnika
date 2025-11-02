'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import './hero.css';

// Slide and Props type definitions removed for JavaScript compatibility

const DEFAULT_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Mountain sunrise',
    title: 'Explore Georgia',
    subtitle: 'Caucasus peaks, ancient towns, and warm hospitality.',
    cta: { label: 'View Tours', href: '/destination' },
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    alt: 'City by night',
    title: 'Mestia by Night',
    subtitle: 'Take a walk in the old mountains and feel the vibe.',
    cta: { label: 'Location', href: 'https://www.google.com/maps?sca_esv=db58c19f0507c741&rlz=1C1GCEA_enGE956GE956&output=search&q=mestia+svaneti&source=lnms&fbs=AIIjpHxWR13VZHdog-mruzasRlGH2PwIStBxdWUv76o6QBsZaFw7ewsy1BXcIetWHBNJCJNv4g1HWc3R95Kq2gq9Oi1m7Sj8YVicjKtBIzw4fX76XBgusOGLHPIZf8NEBNihzFoZiXW0--CzEkfFQtbPqqrntJbX8jpJnwEbPfLVBL4di9PGUTdI_RzdVp6m5V_GLOqz3Ccdh8K0c5chVVCMDxJ5YyyX2XfC2FBDYSudu-BxGalUwun5Dbo5ZeNDBrAJki0F7_BK&entry=mc&ved=1t:200715&ictx=111' },
  },
  {
    src: 'https://wander-lush.org/wp-content/uploads/2021/07/Emily-Lush-Kakheti-wine-tour-from-Tbilisi-Akido-pouring.jpg',
    alt: 'Vineyards at sunset',
    title: 'Taste Kakheti',
    subtitle: 'Wine routes & authentic cellars.',
    cta: { label: 'Wine Tours', href: '/destination' },
  },
];

export default function Hero({
  slides = DEFAULT_SLIDES,
  autoplay = true,
  intervalMs = 3000,
  height = '80vh',
}) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // drag/swipe
const draggingRef = useRef(false);
const startXRef = useRef(0);
const deltaXRef = useRef(0);


const prev = useCallback(() => {
  setCurrent((c) => (c - 1 + slides.length) % slides.length);
}, [slides.length]);

const next = useCallback(() => {
  setCurrent((c) => (c + 1) % slides.length);
}, [slides.length]);

  const go = (i) => setCurrent(i);

  const play = useCallback(() => {
    if (!autoplay || timerRef.current) return;
    timerRef.current = setInterval(next, intervalMs);
  }, [autoplay, intervalMs, next]);

  const pause = useCallback(() => {
    if (!timerRef.current) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  useEffect(() => {
    play();
    return pause;
  }, [play, pause]);

  useEffect(() => {
    // if interval changes, restart
    pause();
    play();
  }, [intervalMs, autoplay, play, pause]);

  // Touch/Mouse handlers
  const handleSwipe = () => {
    const threshold = 60;
    if (deltaXRef.current > threshold) prev();
    else if (deltaXRef.current < -threshold) next();
    deltaXRef.current = 0;
    play();
  };

  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    deltaXRef.current = 0;
    pause();
  };
  const onTouchMove = (e) => {
    deltaXRef.current = e.touches[0].clientX - startXRef.current;
  };
  const onTouchEnd = () => handleSwipe();

  const onMouseDown = (e) => {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    deltaXRef.current = 0;
    pause();
  };
  const onMouseMove = (e) => {
    if (!draggingRef.current) return;
    deltaXRef.current = e.clientX - startXRef.current;
  };
  const onMouseUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    handleSwipe();
  };

  return (
    <section
      className="hero"
      onMouseEnter={pause}
      onMouseLeave={play}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      }}
      tabIndex={0}
      aria-label="Hero image slider"
    >
      {/* Slides */}
      <div
        className="track"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={(e) => { e.preventDefault(); onMouseDown(e); }}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {slides.map((s, i) => (
          <article
            key={i}
            className="slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {/* Use <img> for simplicity; swap to next/image if you want optimization */}
            <img className="bg" src={s.src} alt={s.alt || ''} />
            <div className="overlay" />
            <div className="content">
              {s.title && <h1>{s.title}</h1>}
              {s.subtitle && <p>{s.subtitle}</p>}
              {s.cta && (
                <a className="btn" href={s.cta.href}>
                  {s.cta.label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <button className="nav prev" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="nav next" onClick={next} aria-label="Next slide">›</button>

      {/* Dots */}
      <div className="dots" role="tablist">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            className={`dot ${i === current ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === current}
            role="tab"
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
