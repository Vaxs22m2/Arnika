'use client';

import React, { useMemo, useRef } from 'react';
import Head from 'next/head';

const DEFAULT_REVIEWS = [
  {
    name: 'Nekolay.i',
    date: '2023-10-14',
    rating: 5,
    text:
      'Incredible! Now I’m sure I’ll be coming there for every vacation! Everyone was so kind and cheerful! 💓💖💓',
    avatar: 'https://i.pravatar.cc/80?img=12'
  },
  {
    name: 'Oksana.v',
    date: '2023-10-04',
    rating: 5,
    text: 'What I thought was just a vacation turned into an incredible adventure ',
    avatar: 'https://i.pravatar.cc/80?img=9'
  },
  {
    name: 'Sergey.k',
    date: '2023-09-22',
    rating: 5,
    text: 'The food was amazing!!!!!',
    avatar: 'https://i.pravatar.cc/80?img=1'
  },
  {
    name: 'Natalia.S',
    date: '2023-09-12',
    rating: 5,
    text: 'I really enjoyed it, it was a lot of fun 👍',
    avatar: 'https://i.pravatar.cc/80?img=5'
  }
];

export default function ReviewsAndFooter({ reviews = DEFAULT_REVIEWS }) {
  const googleLogo = useMemo(
    () => 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    []
  );

  const trackRef = useRef(null);
  const wrapRef = useRef(null);

  // Approximate a slide width to scroll by (card width + gap)
  const cardWidth = () => {
    const first = trackRef.current?.querySelector('.slide');
    return first ? first.getBoundingClientRect().width : 0;
  };

  const scrollByCards = (dir) => {
    const el = wrapRef.current;
    if (!el) return;
    const amount = cardWidth() + 24; // 24 = grid gap
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        {/* Beautiful fonts */}
        <a
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ===== Reviews ===== */}
      <section className="reviews">
        <div className="wrap">
          <div className="track-wrap" ref={wrapRef}>
            <button className="arrow prev" aria-label="Previous" onClick={() => scrollByCards(-1)}>
              ❮
            </button>

            <ul
              className="track"
              ref={trackRef}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  scrollByCards(-1);
                } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  scrollByCards(1);
                }
              }}
              tabIndex={0}
            >
              {reviews.map((r, i) => (
                <li
                  key={i}
                  className="slide"
                  role="group"
                  aria-label={`${i + 1} of ${reviews.length}`}
                >
                  <article className="card">
                    <header className="head">
                      <div className="who">
                        <img className="avatar" src={r.avatar} alt="" />
                        <div className="meta">
                          <div className="name">{r.name}</div>
                          <div className="date">{r.date}</div>
                        </div>
                      </div>
                      <img className="glogo" src={googleLogo} alt="Google" />
                    </header>

                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span key={n} className={`star ${n <= r.rating ? 'on' : ''}`}>
                          ★
                        </span>
                      ))}
                      <span className="verified" title="Verified">
                        ✔
                      </span>
                    </div>

                    <p className="text">{r.text}</p>
                  </article>
                </li>
              ))}
            </ul>

            <button className="arrow next" aria-label="Next" onClick={() => scrollByCards(1)}>
              ❯
            </button>
          </div>
        </div>

        <style jsx>{`
          :global(:root) {
            --font-heading: 'Playfair Display', serif;
            --font-body: 'Poppins', sans-serif;
          }

          .reviews {
            background: #fdfdfd;
            padding: 40px 0 60px;
            font-family: var(--font-body);
          }
          .wrap {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .track-wrap {
            position: relative;
            display: flex;
            align-items: center;
          }
          .track {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: minmax(280px, 1fr);
            gap: 24px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 6px 44px; /* room for arrows */
            list-style: none;
            margin: 0;
            width: 100%;
          }
          .slide {
            scroll-snap-align: start;
          }

          .card {
            background: #ffffff;
            border-radius: 18px;
            padding: 20px;
            min-height: 180px;
            box-shadow: 0 10px 26px rgba(10, 28, 58, 0.07);
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 40px rgba(10, 28, 58, 0.12);
          }

          .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
          }
          .who {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .avatar {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            object-fit: cover;
          }
          .meta {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
          }
          .name {
            font-weight: 700;
            font-family: var(--font-heading);
            color: #042e70;
            font-size: 1rem;
          }
          .date {
            font-size: 0.75rem;
            color: #6b7790;
          }
          .glogo {
            width: 22px;
            height: auto;
            opacity: 0.9;
          }

          .stars {
            display: flex;
            align-items: center;
            gap: 6px;
            margin: 4px 0 8px;
          }
          .star {
            font-size: 18px;
            color: #cfd6e6;
          }
          .star.on {
            color: #ffb703;
          }
          .verified {
            margin-left: 4px;
            font-size: 13px;
            color: #2a7cf7;
            background: #eaf1ff;
            border-radius: 20px;
            padding: 0 6px;
          }
          .text {
            margin: 0;
            color: #111827;
            line-height: 1.65;
            font-family: var(--font-body);
            font-size: 0.95rem;
          }

          .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 0;
            display: grid;
            place-items: center;
            background: #ffffff;
            color: #0a265e;
            box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            transition: background 0.2s;
          }
          .arrow:hover {
            background: #f4f7ff;
          }
          .arrow.prev {
            left: 4px;
          }
          .arrow.next {
            right: 4px;
          }

          @media (min-width: 940px) {
            .track {
              grid-auto-columns: 1fr 1fr 1fr 1fr; /* show up to 4 */
            }
          }
        `}</style>
      </section>

      {/* ===== Footer ===== */}
      <footer className="site-footer">
        <div className="wrap footer-top">
          <div className="brand-block">
            <h3 className="brand">Arnika Travel</h3>
            <address className="addr">
              Tbilisi, Gogolauri str. 87
              <br />
              <a href="tel:+995598767668">+995598767668</a>
              <br />
              <a href="mailto:Info@arnika-marine.com">Info@arnika-marine.com</a>
            </address>
          </div>
        </div>

        <div className="wrap divider" />

        <div className="wrap footer-bottom">
          <div className="copy">© 2025 ArnikaTravel</div>
        </div>

        <style jsx>{`
          .site-footer {
            background: linear-gradient(135deg, #053474 0%, #042a5c 100%);
            color: #e4f1ff;
            padding-top: 40px;
            font-family: var(--font-body);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          .footer-top {
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            gap: 40px;
            align-items: start;
          }
          .brand {
            margin: 0 0 12px;
            font-size: 26px;
            color: #8fd0ff;
            font-family: var(--font-heading);
          }
          .addr a {
            color: #ffffff;
            text-decoration: none;
          }
          .addr a:hover {
            text-decoration: underline;
          }

          .footer-nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
          }
          .footer-nav a {
            color: #d9ecff;
            text-decoration: none;
            font-weight: 500;
          }
          .footer-nav a:hover {
            color: #ffffff;
            text-decoration: underline;
          }

          .divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.15);
            margin: 24px 0;
          }

          .footer-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding-bottom: 24px;
          }
          .copy {
            opacity: 0.9;
            font-weight: 500;
          }

          @media (max-width: 780px) {
            .footer-top {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </footer>
    </>
  );
}
