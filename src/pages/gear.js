
import React from 'react';
import { useRouter } from 'next/navigation';
import '../components/gear.css';

export default function Gear() {
  const router = useRouter();
  return (
    <section className="gear-section">
      <div className="gear-container">
        <h1 className="gear-title">Essential Gear for Hiking the Caucasus</h1>
        <p className="gear-intro">
          From years of trekking experience, this guide puts the right essentials in one place for comfort and safety.
        </p>
        <ul className="gear-list">
          <li>🥾 Sturdy hiking boots</li>
          <li>🧥 Weather-appropriate clothing (layers)</li>
          <li>🌧️ Rain jacket and pants</li>
          <li>🎒 Backpack (30-50L)</li>
          <li>💧 Water bottles or hydration system</li>
          <li>🍫 Snacks and high-energy food</li>
          <li>⛑️ First aid kit</li>
          <li>🗺️ Map, compass, or GPS</li>
          <li>🔦 Headlamp or flashlight</li>
          <li>🧢 Sun protection (hat, sunglasses, sunscreen)</li>
          <li>🦯 Trekking poles (optional but helpful)</li>
        </ul>
        <p className="gear-note">
          For a detailed checklist and more tips, contact our guides or check our blog for updates!
        </p>
        <button
          className="gear-home-btn"
          type="button"
          onClick={() => router.push('/')}
        >
          ⬅️ Back to Home
        </button>
      </div>
    </section>
  );
}
