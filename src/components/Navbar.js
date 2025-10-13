'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);      // mobile sheet
  const [openMain, setOpenMain] = useState(false);  // Tours in Georgia
  const [openAbout, setOpenAbout] = useState(false);// About us
  const [openSub, setOpenSub] = useState(null);     // which sub list
  const navRef = useRef(null);

  const closeAll = () => {
    setOpenMain(false);
    setOpenAbout(false);
    setOpenSub(null);
  };

  // Close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) closeAll();
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  // Close on Esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        closeAll();
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Click/keyboard toggle helper
  const toggleWithKeys = (fn) => (e) => {
    if (e.type === 'click') {
      e.stopPropagation();
      fn();
    }
    if (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      e.stopPropagation();
      fn();
    }
  };

  const handleNavLink = () => {
    closeAll();
    setIsOpen(false);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="inner">
        {/* Left: Logo */}
        <div className="brand">
          <img src="/logo.jpeg" alt="Arnika Travel Logo" />
          Arnika Travel
        </div>

        {/* Center: Menu */}
        <ul className={`menu ${isOpen ? 'open' : ''}`} role="menubar" aria-label="Main">
          <li><Link href="/" onClick={handleNavLink}>Home</Link></li>

          {/* Tours in Georgia (click to open) */}
          <li className={`has-dropdown ${openMain ? 'open' : ''}`}>
            <span
              className="parent"
              tabIndex={0}
              role="button"
              aria-expanded={openMain}
              aria-controls="tours-dd"
              onClick={toggleWithKeys(() => {
                setOpenMain(v => !v);
                setOpenAbout(false);
              })}
              onKeyDown={toggleWithKeys(() => {
                setOpenMain(v => !v);
                setOpenAbout(false);
              })}
            >
              Tours in Georgia <span className="caret" aria-hidden="true" />
            </span>

            <ul id="tours-dd" className="dropdown" role="menu" aria-label="Tours in Georgia">
              {/* Cultural Tours */}
              <li className={`has-sub ${openSub === 'cultural' ? 'open' : ''}`}>
                <span
                  className="sub-parent"
                  tabIndex={0}
                  role="button"
                  aria-expanded={openSub === 'cultural'}
                  aria-controls="sub-cultural"
                  onClick={toggleWithKeys(() => setOpenSub(s => s === 'cultural' ? null : 'cultural'))}
                  onKeyDown={toggleWithKeys(() => setOpenSub(s => s === 'cultural' ? null : 'cultural'))}
                >
                  Cultural Tours ▸
                </span>
                <ul id="sub-cultural" className="sub-dropdown" role="menu" aria-label="Cultural Tours">
                  <li><Link href="/tours/tbilisi-walking-tour" onClick={handleNavLink}>Tbilisi Walking Tour</Link></li>
                  <li><Link href="/tours/kazbegi-tour-from-tbilisi" onClick={handleNavLink}>Kazbegi Tour from Tbilisi</Link></li>
                  <li><Link href="/tours/wine-tasting-tour-kakheti" onClick={handleNavLink}>Wine Tasting Tour in Kakheti</Link></li>
                  <li><Link href="/tours/mtskheta-gori-uplistsikhe-tour" onClick={handleNavLink}>Mtskheta, Gori & Uplistsikhe Tour</Link></li>
                  <li><Link href="/tours/david-gareja-signagi-tour" onClick={handleNavLink}>David Gareja & Signagi Tour</Link></li>
                  <li><Link href="/tours/best-of-georgia-8-day-tour" onClick={handleNavLink}>BEST OF GEORGIA – 8 DAY TOUR IN GEORGIA</Link></li>
                  <li><Link href="/tours/around-georgia-14-days-tour" onClick={handleNavLink}>AROUND GEORGIA – 14 DAYS TOUR IN GEORGIA</Link></li>
                  <li><Link href="/tours/caucasus-tour-azerbaijan-armenia-georgia" onClick={handleNavLink}>Caucasus Tour : Azerbaijan, Armenia, and Georgia</Link></li>
                </ul>
              </li>

              {/* Hiking Tours */}
              <li className={`has-sub ${openSub === 'hiking' ? 'open' : ''}`}>
                <span
                  className="sub-parent"
                  tabIndex={0}
                  role="button"
                  aria-expanded={openSub === 'hiking'}
                  aria-controls="sub-hiking"
                  onClick={toggleWithKeys(() => setOpenSub(s => s === 'hiking' ? null : 'hiking'))}
                  onKeyDown={toggleWithKeys(() => setOpenSub(s => s === 'hiking' ? null : 'hiking'))}
                >
                  Hiking Tours ▸
                </span>
                <ul id="sub-hiking" className="sub-dropdown" role="menu" aria-label="Hiking Tours">
                  <li><Link href="/tours/off-season-hiking-georgia" onClick={handleNavLink}>Off-Season Hiking in Georgia | TrekGeorgia</Link></li>
                  <li><Link href="/tours/2-day-hike-borjomi-kharagauli" onClick={handleNavLink}>2 Day Hike in Borjomi-Kharagauli National Park</Link></li>
                  <li><Link href="/tours/2-day-hike-kazbegi" onClick={handleNavLink}>2 Day Hike in Kazbegi</Link></li>
                  <li><Link href="/tours/hike-juta-roshka" onClick={handleNavLink}>Hike from Juta to Roshka</Link></li>
                  <li><Link href="/tours/3-day-hike-black-rock-lakes" onClick={handleNavLink}>3 Day Hike to Black Rock Lakes</Link></li>
                  <li><Link href="/tours/3-day-hiking-private-kazbegi" onClick={handleNavLink}>3 Day Hiking Private Tour in Kazbegi</Link></li>
                  <li><Link href="/tours/3-day-tour-vashlovani" onClick={handleNavLink}>3 Day Tour to Vashlovani National Park</Link></li>
                  <li><Link href="/tours/5-day-hiking-svaneti" onClick={handleNavLink}>5 Day Hiking in Svaneti</Link></li>
                </ul>
              </li>

              {/* Trekking Tours */}
              <li className={`has-sub ${openSub === 'trekking' ? 'open' : ''}`}>
                <span
                  className="sub-parent"
                  tabIndex={0}
                  role="button"
                  aria-expanded={openSub === 'trekking'}
                  aria-controls="sub-trekking"
                  onClick={toggleWithKeys(() => setOpenSub(s => s === 'trekking' ? null : 'trekking'))}
                  onKeyDown={toggleWithKeys(() => setOpenSub(s => s === 'trekking' ? null : 'trekking'))}
                >
                  Trekking Tours ▸
                </span>
                <ul id="sub-trekking" className="sub-dropdown" role="menu" aria-label="Trekking Tours">
                  <li><Link href="/tours/trek-kelitsadi-lake" onClick={handleNavLink}>Trek to Kelitsadi Lake</Link></li>
                  <li><Link href="/tours/6-day-trekking-racha" onClick={handleNavLink}>6 Day Trekking in Racha</Link></li>
                  <li><Link href="/tours/mestia-ushguli-trekking" onClick={handleNavLink}>Mestia Ushguli Trekking Tour</Link></li>
                  <li><Link href="/tours/omalo-shatili-trekking" onClick={handleNavLink}>Omalo Shatili Trekking Tour</Link></li>
                  <li><Link href="/tours/7-day-trekking-tobavarchkhili-lakes" onClick={handleNavLink}>7 DAY TREKKING TO TOBAVARCHKHILI LAKES</Link></li>
                  <li><Link href="/tours/trekking-tusheti" onClick={handleNavLink}>Trekking in Tusheti</Link></li>
                </ul>
              </li>

              {/* Trekking Group Tours */}
              <li className={`has-sub ${openSub === 'group' ? 'open' : ''}`}>
                <span
                  className="sub-parent"
                  tabIndex={0}
                  role="button"
                  aria-expanded={openSub === 'group'}
                  aria-controls="sub-group"
                  onClick={toggleWithKeys(() => setOpenSub(s => s === 'group' ? null : 'group'))}
                  onKeyDown={toggleWithKeys(() => setOpenSub(s => s === 'group' ? null : 'group'))}
                >
                  Trekking Group Tours ▸
                </span>
                <ul id="sub-group" className="sub-dropdown" role="menu" aria-label="Trekking Group Tours">
                  <li><Link href="/tours/3-day-hiking-group-kazbegi" onClick={handleNavLink}>3 Day Hiking Group Tour in Kazbegi</Link></li>
                  <li><Link href="/tours/8-day-trekking-group-svaneti" onClick={handleNavLink}>8 Day Trekking Group Tour in Svaneti</Link></li>
                  <li><Link href="/tours/trekking-tusheti-khevsureti" onClick={handleNavLink}>Trekking from Tusheti to Khevsureti</Link></li>
                </ul>
              </li>

              {/* Winter Tours */}
              <li className={`has-sub ${openSub === 'winter' ? 'open' : ''}`}>
                <span
                  className="sub-parent"
                  tabIndex={0}
                  role="button"
                  aria-expanded={openSub === 'winter'}
                  aria-controls="sub-winter"
                  onClick={toggleWithKeys(() => setOpenSub(s => s === 'winter' ? null : 'winter'))}
                  onKeyDown={toggleWithKeys(() => setOpenSub(s => s === 'winter' ? null : 'winter'))}
                >
                  Winter Tours ▸
                </span>
                <ul id="sub-winter" className="sub-dropdown" role="menu" aria-label="Winter Tours">
                  <li><Link href="/tours/Ski Tour in Svaneti — 8 Days" onClick={handleNavLink}>Ski Tour in Svaneti - 8 Days</Link></li>
                  <li><Link href="/tours/Luxury Ski & Spa Experience in Goderdzi — 8 Days" onClick={handleNavLink}>Luxury Ski & Spa Experience in Goderdzi — 8 Days</Link></li>
                  <li><Link href="/tours/Ski Adventure in Gudauri — 8 Days" onClick={handleNavLink}>Ski Adventure in Gudauri — 8 Days</Link></li>
                  <li><Link href="/tours/Ski & Culture Adventure in Georgia — 10 Days" onClick={handleNavLink}>Ski & Culture Adventure in Georgia — 10 Days</Link></li>
                  <li><Link href="/tours/snowshoe-hike-kazbegi" onClick={handleNavLink}>Snowshoe Hike in Kazbegi : Snowshoeing</Link></li>
                  <li><Link href="/tours/3-day-winter-tour-georgia" onClick={handleNavLink}>3 Day Winter Tour in Georgia</Link></li>
                  <li><Link href="/tours/ski-touring-gudauri-kazbegi" onClick={handleNavLink}>Ski Touring in Gudauri & Kazbegi</Link></li>
                  <li><Link href="/tours/ski-touring-svaneti" onClick={handleNavLink}>Ski Touring in Svaneti</Link></li>
                </ul>
              </li>

              {/* Horse Riding Tours */}
              <li className={`has-sub ${openSub === 'horse' ? 'open' : ''}`}>
                <span
                  className="sub-parent"
                  tabIndex={0}
                  role="button"
                  aria-expanded={openSub === 'horse'}
                  aria-controls="sub-horse"
                  onClick={toggleWithKeys(() => setOpenSub(s => s === 'horse' ? null : 'horse'))}
                  onKeyDown={toggleWithKeys(() => setOpenSub(s => s === 'horse' ? null : 'horse'))}
                >
                  Horse Riding Tours ▸
                </span>
                <ul id="sub-horse" className="sub-dropdown" role="menu" aria-label="Horse Riding Tours">
                  <li><Link href="/tours/horse-riding-borjomi" onClick={handleNavLink}>Horse Riding in Borjomi</Link></li>
                  <li><Link href="/tours/horse-riding-kazbegi" onClick={handleNavLink}>Horse Riding in Kazbegi</Link></li>
                  <li><Link href="/tours/7-day-horse-riding-tour" onClick={handleNavLink}>7 Day Horse Riding Tour in</Link></li>
                  <li><Link href="/tours/horse-riding-tusheti" onClick={handleNavLink}>Tusheti</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* ✅ Destinations stays exactly here */}
          <li><Link href="/destination" onClick={handleNavLink}>Destinations</Link></li>

          {/* About us (click to open) */}
          <li className={`has-dropdown ${openAbout ? 'open' : ''}`}>
            <span
              className="parent"
              tabIndex={0}
              role="button"
              aria-expanded={openAbout}
              aria-controls="about-dd"
              onClick={toggleWithKeys(() => {
                setOpenAbout(v => !v);
                setOpenMain(false);
                setOpenSub(null);
              })}
              onKeyDown={toggleWithKeys(() => {
                setOpenAbout(v => !v);
                setOpenMain(false);
                setOpenSub(null);
              })}
            >
              About us <span className="caret" aria-hidden="true" />
            </span>
            <ul id="about-dd" className="dropdown" role="menu" aria-label="About us">
              <li><Link href="/contact/Aboutus" onClick={handleNavLink}>Guides</Link></li>
            </ul>
          </li>

          {/* Contact */}
          <li><Link href="/contact" onClick={handleNavLink}>Contact</Link></li>
        </ul>

        {/* Right: Contact pill */}
        <div className="contact">
          <div className="pill" aria-hidden="true"><div className="tel">✆</div></div>
          <div className="who">
            <span className="name">Arnika Travel</span>
            <span className="phone">+995598767668</span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          type="button"
          aria-label="Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(v => !v)}
        >
          ≡
        </button>
      </div>
    </nav>
  );
}
