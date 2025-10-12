"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './slider.css';

export default function Slider({ images = [], autoplay = true, interval = 4000, height = 420 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!autoplay || images.length <= 1) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(timerRef.current);
  }, [autoplay, images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="slider" style={{ maxWidth: 900 }}>
      <div className="slider-viewport" style={{ height }}>
        {images.map((src, i) => (
          <div
            key={i}
            className={`slide ${i === index ? 'active' : ''}`}
            aria-hidden={i !== index}
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <Image src={src} alt={`slide-${i}`} fill style={{ objectFit: 'cover', borderRadius: 12 }} />
          </div>
        ))}
        {images.length > 1 && (
          <>
            <button className="slider-nav prev" onClick={prev} aria-label="Previous">‹</button>
            <button className="slider-nav next" onClick={next} aria-label="Next">›</button>
            <div className="slider-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
