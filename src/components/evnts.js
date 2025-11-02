'use client';

import React from 'react';
import Link from 'next/link';
import './event.css';

const DEFAULT_ITEMS = [
  {
    title: 'Winter',
    subtitle: 'Ski resorts, snowshoeing & alpine views',
    image:
      'https://chimerical-narwhal-a4a3e8.netlify.app/jojo%20sucks/www.trekgeorgia.com/index_files/PXL_20240119_1300431313-400x300.webp',
    href: '/tours/3-day-winter-tour-georgia',
  },

    {
    title: 'Svaneti',
    subtitle: 'Medieval towers & mountain villages',
    image:
      'https://glistening-khapse-bb8fd7.netlify.app/jojo%20sucks/www.trekgeorgia.com/index_files/PXL_20230812_0743142094-400x300.webp',
    href: '/tours/Svaneti, Georgia',
  },
  {
    title: 'Tusheti',
    subtitle: 'Remote roads & horse trails',
    image:
      'https://fantastic-jelly-f08e64.netlify.app/www.trekgeorgia.com/index_files/IMG-20220826-WA0038-400x300.webp',
    href: 'tours/3-Day Jeep Adventure in Tusheti, Georgia',
  },

  {
    title: 'Kazbegi',
    subtitle: 'Gergeti, gorges & valleys',
    image:
      'https://glistening-khapse-bb8fd7.netlify.app/jojo%20sucks/www.trekgeorgia.com/index_files/PXL_20231021_084847604-400x300.webp',
    href: '/tours/kazbegi-tour-from-tbilisi',
  },
];

export default function Highlights({ items = DEFAULT_ITEMS, actions }) {
  return (
    <section className="highlights">
      <div className="hl-container">
        <header className="hl-hdr">
          <h2>Georgia’s highlights</h2>
          {actions ? <div className="hl-actions">{actions}</div> : null}
        </header>

        <ul className="hl-grid" role="list">
          {items.map((item, i) => (
            <li key={i} className="hl-card">
              {/* media link (image + caption) */}
              <a
                className="hl-media"
                href={item.href || '#'}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="hl-overlay" />
                <div className="hl-caption">
                  <h3>{item.title}</h3>
                  {item.subtitle ? <p>{item.subtitle}</p> : null}
                </div>
              </a>

              {/* separate action a (not nested) */}
              <div className="hl-meta">
                <a className="hl-btn" href={item.href || '#'}>
                  View all
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
