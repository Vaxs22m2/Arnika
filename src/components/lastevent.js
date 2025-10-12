'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const DEFAULT_POSTS = [
  {
    title: 'Gudauri: Beyond Skiing',
    excerpt:
      'Try snowboarding, hiking, paragliding, horseback riding, or a snowmobile ride.',
    image:
      'https://fantastic-jelly-f08e64.netlify.app/www.trekgeorgia.com/index_files/PXL_20230219_1016177843-400x300.webp',
    href: '/contact'
  },
  {
    title: 'Essential Gear for Hiking the Caucasus',
    excerpt:
      'From years of trekking experience, this guide puts the right essentials in one place for comfort and safety.',
    image:
      'https://fantastic-jelly-f08e64.netlify.app/www.trekgeorgia.com/index_files/hiking-packing-1-400x300.jpg',
    href: '/gear'
  },
  {
    title: 'Georgia’s Top Ski Resorts',
    excerpt:
      'Discover Georgia’s best ski destinations and find the resort that matches your style of adventure.',
    image:
      'https://fantastic-jelly-f08e64.netlify.app/www.trekgeorgia.com/index_files/PXL_20230221_1215544644-400x300.webp',
    href: '/contact'
  }
];

const DEFAULT_FEATURES = [
  { label: 'Reasons to Choose Us', href: '#reasons' },
  { label: 'Thousands of happy travelers', href: '#reviews' },
  { label: 'Expert you can trust', href: '#experts' }
];

export default function Blogs({ posts = DEFAULT_POSTS, features = DEFAULT_FEATURES }) {
  const router = useRouter();
  return (
    <section className="blogs">
      <div className="wrap">
        <h3 className="eyebrow">Explore our latest blogs</h3>

        {/* Cards */}
        <ul className="grid" role="list">
          {posts.map((p, i) => (
            <li key={i} className="card">
              <article className="card-inner">
                <a className="media" href={p.href || '#'} aria-label={p.title}>
                  <img src={p.image} alt={p.alt || p.title} loading="lazy" decoding="async" />
                </a>

                <div className="body">
                  <h4 className="title">
                    <a href={p.href || '#'} aria-label={p.title}>
                      {p.title}
                    </a>
                  </h4>

                  <hr className="rule" />

                  <p className="excerpt">{p.excerpt}</p>

                  <hr className="rule" />

                  <div className="cta-row">
                    {p.title === 'Essential Gear for Hiking the Caucasus' ? (
                      <button
                        className="btn"
                        type="button"
                        onClick={() => router.push('/gear')}
                      >
                        More info
                      </button>
                    ) : (
                      <a className="btn" href={p.href || '#'} role="button">
                        More info
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Teal CTAs */}
        <div className="cta-bars">
          {features.map((f, i) => (
            <a key={`feat-${i}`} className="cta-bar" href={f.href || '#'}>
              {f.label}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blogs {
          background: #f6f8fb;
          padding: clamp(18px, 4vw, 40px) 0;
          color: #0a2a5a;
        }
        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .eyebrow {
          margin: 0 0 14px;
          font-size: clamp(18px, 2.2vw, 22px);
          font-weight: 800;
        }

        /* Grid of cards */
        .grid {
          --min: 320px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
          gap: clamp(14px, 2vw, 22px);
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 26px rgba(10, 28, 58, 0.07);
          overflow: hidden;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(10, 28, 58, 0.12);
        }
        .card-inner {
          display: grid;
          grid-template-rows: auto 1fr;
          height: 100%;
        }

        /* Media */
        .media {
          position: relative;
          display: block;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 0.5s ease;
          display: block;
        }
        .card:hover .media img {
          transform: scale(1.06);
        }

        /* Body */
        .body {
          padding: 18px;
          display: grid;
          align-content: start;
          gap: 12px;
        }
        .title {
          margin: 0;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.2;
        }
        .title a {
          color: #6ab3cf;
          text-decoration: none;
        }
        .title a:hover {
          text-decoration: underline;
        }

        .rule {
          height: 1px;
          border: 0;
          background: #e9eef6;
          margin: 2px 0 0;
        }

        .excerpt {
          margin: 0;
          color: #1a2a3a;
          line-height: 1.65;
        }

        /* Button */
        .cta-row {
          padding-top: 6px;
        }
        .btn {
          display: inline-block;
          background: #ffc525;
          color: #053474;
          font-weight: 800;
          letter-spacing: 0.3px;
          border-radius: 8px;
          padding: 10px 18px;
          text-decoration: none;
          box-shadow: 0 6px 14px rgba(255, 197, 37, 0.35);
          transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(255, 197, 37, 0.45);
        }
        .btn:active {
          transform: translateY(0);
        }
        .btn:focus-visible {
          outline: 3px solid #86d2ff;
          outline-offset: 2px;
        }

        /* CTA bars */
        .cta-bars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 2vw, 18px);
          margin-top: clamp(18px, 3vw, 26px);
        }
        .cta-bar {
          display: block;
          text-align: center;
          background: #1fbccd;
          color: #fff;
          padding: 16px 14px;
          border-radius: 10px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(31, 188, 205, 0.3);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }
        .cta-bar:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(31, 188, 205, 0.38);
        }
        .cta-bar:active {
          transform: translateY(0);
        }
        .cta-bar:focus-visible {
          outline: 3px solid #85e8ff;
          outline-offset: 2px;
        }

        @media (max-width: 980px) {
          .cta-bars {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 680px) {
          .grid {
            --min: 280px;
          }
        }
      `}</style>
    </section>
  );
}
