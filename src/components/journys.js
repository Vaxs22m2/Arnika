'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const DEFAULT_ITEMS = [
  {
    title: '8-Day Trekking in Svaneti',
    location: 'Guli Pass',
    description:
      'An adventure through Svaneti’s towering peaks, scenic trails, and timeless stone towers—an experience unlike any other.',
    image:
      'https://fantastic-jelly-f08e64.netlify.app/www.trekgeorgia.com/index_files/PXL_20230812_1105426153-400x300.webp',
    ribbon: 'GUARANTEED DEPARTURE',
    href: '/contact'
  },

    {
    title: 'Kazbegi climbing ',
    location: 'Kazbegi region',
    description:
      'Kazbegi climbing tours You’re capable of more than you think — even climbing a 5,050-meter volcano.',
    image:
      'https://fantastic-jelly-f08e64.netlify.app/www.trekgeorgia.com/index_files/PXL_20230624_063122442-400x300.webp',
    href: '/contact'
  },

    {
    title: 'Trekking in Tusheti',
    location: 'Tusheti & Khevsureti protected areas',
    description:
      'Join a guided adventure starting in Tusheti, trekking over Atsunta Pass toward Khevsureti. Along the way you’ll discover Omalo, Dartlo, Shatili.',
    image:
      'https://fantastic-jelly-f08e64.netlify.app/www.trekgeorgia.com/index_files/PXL_20221008_113016973-400x300.webp',
    href: '/contact'
  }


];

export default function Journeys({ items = DEFAULT_ITEMS }) {
  const router = useRouter();
  return (
    <section className="journeys">
      <div className="wrap">
        <header className="header">
          <h2>Scheduled Group Journeys</h2>
          <p className="subtitle">choose your adventure</p>
        </header>

        <ul className="grid" role="list">
          {items.map((j, i) => (
            <li key={i} className="card">
              <article className="card-inner">
                {/* Media */}
                <figure className="media">
                  <img
                    src={j.image}
                    alt={j.alt || j.title}
                    loading="lazy"
                    decoding="async"
                  />
                  {j.ribbon ? <div className="ribbon">{j.ribbon}</div> : null}
                  {j.gallery ? (
                    <div className="gallery">
                      <span className="ico">▣</span>
                      {j.gallery}
                    </div>
                  ) : null}
                </figure>

                {/* Text */}
                <div className="body">
                  <h3 className="title">
                    <button
                      className="link-btn"
                      style={{ background: 'none', border: 0, padding: 0, margin: 0, color: '#1976d2', cursor: 'pointer', textDecoration: 'underline', font: 'inherit' }}
                      aria-label={`Open ${j.title}`}
                      onClick={() => j.href && router.push(j.href)}
                    >
                      {j.title}
                    </button>
                  </h3>
                  {j.location ? (
                    <div className="location">{j.location}</div>
                  ) : null}

                  <p className="desc">{j.description}</p>

                  <hr className="rule" />

                  <div className="cta-row">
                    <button
                      className="btn"
                      type="button"
                      onClick={() => j.href && router.push(j.href)}
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        /* Section shell */
        .journeys {
          background: #f6f8fb;
          padding: clamp(24px, 5vw, 56px) 0;
          color: #0a2a5a;
        }
        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header {
          text-align: center;
          margin-bottom: clamp(18px, 3vw, 28px);
        }
        .header h2 {
          font-size: clamp(28px, 4vw, 44px);
          margin: 0 0 6px;
          letter-spacing: 0.3px;
        }
        .subtitle {
          margin: 0;
          font-style: italic;
          color: #0b3c7d;
          font-size: clamp(14px, 1.6vw, 20px);
        }

        /* Grid */
        .grid {
          --min: 320px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
          gap: clamp(14px, 2vw, 22px);
          list-style: none;
          padding: 0;
          margin: 0;
        }

        /* Card */
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(10, 28, 58, 0.07);
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
          aspect-ratio: 16/9;
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

        /* Ribbon */
        .ribbon {
          position: absolute;
          top: 14px;
          right: -44px;
          background: #6ec1ff;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.5px;
          padding: 8px 60px;
          transform: rotate(35deg);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
          pointer-events: none;
        }

        /* Gallery counter (bottom-right) */
        .gallery {
          position: absolute;
          right: 10px;
          bottom: 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.45);
          color: #fff;
          font-size: 12px;
        }
        .gallery .ico {
          font-size: 13px;
          opacity: 0.9;
        }

        /* Body */
        .body {
          padding: 18px;
          display: grid;
          align-content: start;
          gap: 10px;
        }
        .title {
          margin: 0;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.2;
        }
        .title a {
          color: #1976d2;
          text-decoration: none;
        }
        .title a:hover {
          text-decoration: underline;
        }

        .location {
          color: #7aa6d8;
          font-size: 14px;
        }

        .desc {
          margin: 6px 0 0;
          color: #1a2a3a;
          line-height: 1.6;
        }

        .rule {
          height: 1px;
          border: 0;
          background: #e9eef6;
          margin: 8px 0 0;
        }

        .cta-row {
          padding-top: 10px;
        }
        .btn {
          display: inline-block;
          background: #ffc525;
          color: #053474;
          font-weight: 800;
          letter-spacing: 0.3px;
          border-radius: 10px;
          padding: 12px 22px;
          text-decoration: none;
          box-shadow: 0 6px 14px rgba(255, 197, 37, 0.35);
          transition: transform 0.15s ease, box-shadow 0.2s ease,
            background 0.2s ease;
        }
        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(255, 197, 37, 0.45);
        }
        .btn:active {
          transform: translateY(0);
        }
        .btn:focus-visible {
          outline: 3px solid #94d8ff;
          outline-offset: 2px;
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
