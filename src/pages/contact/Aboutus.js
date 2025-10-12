'use client';

import Image from 'next/image';
import './about.css';
import Navbar from '@/components/Navbar';

const GUIDES = [
  {
    id: 'Idris',
    name: 'Idris Khergiani',
    title: 'Mountain & Ski Guide',
bio: `Guide. 1st-category instructor. Candidate for the Master of Sport. Former Georgian national team. Peaks: Lenina 🇰🇬 (7134), Denali 🇺🇸 (6190), Ismoil Somoni 🇹🇯 (7495), Ushba 🇬🇪, Korzhenevskaya 🇹🇯 (7105) ,
and many more  speaks: English, Russian`,
    src: '/idris.jpeg',
    alt: 'Nugo guiding in snowy mountains',
  },
  {
    id: 'Eka',
    name: 'Eka Nikuradze',
    title: 'Trekking & Hiking Guide',
    bio: 'Deeply in love with Georgia and its mountains, she guides with heart and authenticity. Every trip is an invitation to slow down, breathe, and feel the joy of life surrounded by breathtaking landscapes and genuine hospitality. speaks: English, Russian,  french',
    src: '/Eka.jpeg',
  },
  {
    id: 'Ninio',
    name: 'Ninio Petruzashvili',
    title: 'Hiking & Culture Guide',
    bio: 'Nino is an expert in cultural tours, deeply passionate about sharing the spirit of Georgia. With her, every journey becomes a story — filled with history, traditions, and the warmth of Georgian hospitality. She helps travelers not only see Georgia, but truly feel it. speaks: English, korean',
    src: '/Nino.jpeg',
  },
  {
    id: 'Vakho',
    name: 'Vakho Khergiani',
    title: 'Alpine Trekking Guide',
    bio: 'Expert on remote trails; logistics for multi-day expeditions in Racha and Svaneti. speaks: English, Russian',
    src: '/Sigma.jpeg',
  }
];

export default function GuidesGrid() {
  return (
    <>
    <Navbar />
    <h1>Our Guides</h1>

    <section className="guides-wrap" aria-label="Our Guides">
          <div className="guides-grid">
              {GUIDES.map(g => (
                  <article key={g.id} className="guide-card" tabIndex={0}>
                      {/* Image */}
                      <div className="guide-media">
                          <Image
                              src={g.src}
                              alt={g.alt ?? g.name}
                              fill
                              className="guide-img"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              priority />
                          {/* Name label (like your screenshot) */}
                          <span className="guide-name">{g.name}</span>
                      </div>

                      {/* Info panel (shown on hover/focus/tap) */}
                      <div className="guide-info">
                          <h3>{g.title}</h3>
                          <p>{g.bio}</p>
                      </div>
                  </article>
              ))}
          </div>
      </section></>
  );
}
