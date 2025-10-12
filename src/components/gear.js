// app/essential-gear-caucasus/page.jsx
'use client';

import '../components/gear.css';
export const metadata = {
  title: 'Essential Gear for Hiking the Caucasus | Arnika Travel',
  description:
    'From years of trekking experience, this guide puts the right essentials in one place for comfort and safety.',
};

export default function Page() {
  return (
    <main className="gear-page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Gear Guide</p>
          <h1>Essential Gear for Hiking the Caucasus</h1>
          <p className="lede">
            From years of trekking experience, this guide puts the right essentials in one place for
            comfort and safety.
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="container section">
        <div className="grid">
          <article className="card">
            <h2>Clothing layers</h2>
            <ul>
              <li>Moisture‑wicking base (top & bottom)</li>
              <li>Fleece or light insulated mid‑layer</li>
              <li>Waterproof / windproof shell (jacket & pants)</li>
              <li>Warm hat, sun cap, buff; gloves</li>
              <li>Extra socks (merino preferred)</li>
            </ul>
          </article>

          <article className="card">
            <h2>Footwear & pack</h2>
            <ul>
              <li>Broken‑in hiking boots or sturdy trail shoes</li>
              <li>Adjustable trekking poles</li>
              <li>20–30L daypack with rain cover</li>
              <li>Blister kit (tape, patches) & gaiters (mud/snow)</li>
            </ul>
          </article>

          <article className="card">
            <h2>Navigation & safety</h2>
            <ul>
              <li>Fully charged phone + offline maps</li>
              <li>Power bank & whistle</li>
              <li>Headlamp with spare batteries</li>
              <li>Basic first‑aid kit & personal meds</li>
              <li>Emergency blanket; knife or multi‑tool</li>
            </ul>
          </article>

          <article className="card">
            <h2>Food & hydration</h2>
            <ul>
              <li>Water bottles or bladder (2L+)</li>
              <li>Electrolytes; high‑energy snacks</li>
              <li>Stove & mug (for overnights)</li>
              <li>Waste bag — pack it out</li>
            </ul>
          </article>

          <article className="card">
            <h2>Sun & weather</h2>
            <ul>
              <li>Sunscreen SPF 30+, lip balm</li>
              <li>Sunglasses (UV protection)</li>
              <li>Lightweight rain cover / poncho</li>
            </ul>
          </article>

          <article className="card">
            <h2>Documents</h2>
            <ul>
              <li>ID / passport & cash</li>
              <li>Travel insurance (mountain activities)</li>
              <li>Permits if required for your route</li>
            </ul>
          </article>
        </div>

        <div className="card tips">
          <h3>Pro tips</h3>
          <ul>
            <li>Check forecasts and trail conditions the day before.</li>
            <li>Layer for quick changes between sun, wind, and shade.</li>
            <li>Tell someone your route and expected return time.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

