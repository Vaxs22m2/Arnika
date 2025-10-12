'use client';

import Link from 'next/link';
import Image from 'next/image';
import './destination.css';
import Navbar from '@/components/Navbar';

const DESTINATIONS = [
  { id: 'svaneti',   name: 'Svaneti',                     href: '/tours/5-day-hiking-svaneti',   src: '/svaneti.jpg',   alt: 'Alpine meadows and huts in Svaneti mountains' },
  { id: 'kazbegi',   name: 'Kazbegi',                     href: '/tours/kazbegi-tour-from-tbilisi',   src: '/kazbegi.jpg',   alt: 'Mount Kazbegi with hiker in foreground' },
  { id: 'tusheti',   name: 'Tusheti',                     href: '/tours/trekking-tusheti',   src: '/tusheti.jpg',   alt: 'Group hiking along Tusheti ridge' },
  { id: 'caucasus',  name: 'Caucasus Mountains',          href: '/tours/caucasus-tour-azerbaijan-armenia-georgia',  src: '/caucasus.webp',  alt: 'Trail with pine and dramatic Caucasus peaks' },
  { id: 'winter',    name: 'Winter',                      href: '/tours/3-day-winter-tour-georgia',    src: '/winter.webp',    alt: 'Skiers kicking snow under winter sun' },
  { id: 'georgia',   name: 'Georgia & Sightseeings',      href: '/tours/best-of-georgia-8-day-tour',   src: '/tbilisi.webp',   alt: 'Colorful Tbilisi skyline with Narikala' },
];

export default function DestinationsGrid() {
  return (
    <>
    <Navbar />
    <h1>Destinations</h1>
    <section className="dest-wrap" aria-label="Destinations">
      <div className="dest-grid">
        {DESTINATIONS.map(d => (
          <Link
            key={d.id}
            href={d.href}
            className="dest-card"
            aria-label={`${d.name} — view all tours`}
          >
            {/* image */}
            <div className="dest-media">
              <Image
                src={d.src}
                alt={d.alt}
                fill
                className="dest-img"
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                priority={d.id === 'svaneti'}
             
              />
            </div>

            {/* overlay content */}
            <div className="dest-overlay">
              <h3 className="dest-title">{d.name}</h3>
              <span className="dest-btn" aria-hidden="true">VIEW ALL</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
}
