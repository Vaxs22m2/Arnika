import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import './tour.css'; // styles for this page

// Improved, readable style for all tours (keeps your content unchanged)
const tourStyle = `
* {
  font-family: 'Inter', 'Segoe UI', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b2540;
}

.tour-main {
  padding: 28px 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.tour-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

/* Hero card */
.tour-hero-beauty {
  background: linear-gradient(120deg, #f3f7ff 0%, #eef6ff 100%);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(14, 42, 90, 0.06);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
}

.tour-hero-top {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 20px;
  align-items: stretch;
  padding: 22px;
}

@media (max-width: 880px) {
  .tour-hero-top { grid-template-columns: 1fr; }
}

/* Large image left / right card */
.tour-hero-img-beauty {
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(10, 36, 80, 0.06);
}

/* info panel on right */
.tour-highlight {
  background: #fffef9;
  border-left: 6px solid #ffc525;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  min-height: 160px;
}

/* why choose */
.tour-highlight h2 {
  color: #165fa8;
  font-size: 1.1rem;
  margin: 0;
  font-weight: 800;
}

.tour-highlight ul {
  margin: 6px 0 0 18px;
  padding: 0;
  color: #0a2a5a;
  font-size: 0.98rem;
  line-height: 1.45;
}

.tour-highlight li {
  margin-bottom: 6px;
}

/* main content */
.tour-content {
  display: block;
  margin-top: 6px;
}

.title-contnt {
  font-size: 1.35rem;
  color: #08325a;
  margin: 6px 0 10px 0;
  font-weight: 800;
}

/* long tour description box */
.long-tour-description {
  background: white;
  border-radius: 12px;
  padding: 20px 22px;
  box-shadow: 0 8px 22px rgba(12, 38, 80, 0.04);
  line-height: 1.7;
  color: #0b2b4a;
  font-size: 0.98rem;
  overflow-wrap: break-word;
}

.long-tour-description h3 {
  color: #1261b0;
  font-size: 1.03rem;
  margin: 18px 0 8px 0;
  font-weight: 800;
}

.long-tour-description p {
  margin: 8px 0;
}

.long-tour-description ul {
  margin: 8px 0 12px 20px;
}

.long-tour-description li {
  margin: 6px 0;
}

/* small lead paragraph for short tours */
.lead {
  background: white;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(12, 38, 80, 0.04);
  line-height: 1.6;
}

/* actions */
.actions {
  margin-top: 14px;
}

.btn {
  display: inline-block;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 10px;
  border: 1px solid rgba(6, 63, 128, 0.08);
  background: linear-gradient(90deg, #1f6fd6 0%, #67b7ff 100%);
  color: white;
  font-weight: 700;
  transition: transform .12s ease, box-shadow .12s ease;
}
.btn:hover { transform: translateY(-3px); box-shadow: 0 8px 18px rgba(31,111,214,.12); }

.muted { color: #6e8196; }

/* responsive tweaks */
@media (max-width: 640px) {
  .tour-hero-img-beauty { height: 220px; }
  .tour-highlight { padding: 16px; }
  .long-tour-description { padding: 16px; }
}
`;

/* ---------- Keep your TOURS data exactly as provided (no changes) ---------- */
const TOURS = {
  'tbilisi-walking-tour': {
    title: 'Tbilisi Walking Tour',
    description: 'A guided walking tour of Tbilisi — discover the old town, sulfur baths, and hidden courtyards.',
    img: '/tbilisi.webp'
  },
  'kazbegi-tour-from-tbilisi': {
    title: 'Kazbegi Tour from Tbilisi',
    description: 'Day trip to Kazbegi with mountain views, Gergeti Trinity Church and scenic valleys.',
    img: '/kazbegi.jpg'
  },
  'wine-tasting-tour-kakheti': {
    title: 'Wine Tasting Tour in Kakheti',
    description: 'Visit family cellars, taste qvevri wines and explore the wine region of Kakheti.',
    img: '/svaneti.jpg'
  },
  'mtskheta-gori-uplistsikhe-tour': {
    title: 'Mtskheta, Gori & Uplistsikhe Tour',
    description: 'A cultural day trip visiting Georgia\'s ancient capitals and the rock-hewn city of Uplistsikhe — history, monasteries and panoramic views.',
    img: '/tbilisi.webp'
  },
  'david-gareja-signagi-tour': {
    title: 'David Gareja & Signagi Tour',
    description: 'Explore the semi-desert monastery complex of David Gareja and the picturesque hilltop town of Signagi in Kakheti.',
    img: '/tbilisi.webp'
  },
  'best-of-georgia-8-day-tour': {
    title: 'Best of Georgia – 8 Day Tour',
    description: 'An 8-day curated itinerary covering Georgia\'s highlights: Tbilisi, Kazbegi, Svaneti and the wine regions.',
    img: '/svaneti.jpg'
  },
  'around-georgia-14-days-tour': {
    title: 'Around Georgia – 14 Day Tour',
    description: 'A comprehensive 14-day journey through Georgia and its diverse regions: mountains, coast and cultural landmarks.',
    img: '/tusheti.jpg'
  },
  'caucasus-tour-azerbaijan-armenia-georgia': {
    title: 'Caucasus Tour: Azerbaijan, Armenia & Georgia',
    description: 'A multi-country route across the southern Caucasus highlighting landscapes, cuisines and ancient sites.',
    img: '/caucasus.webp'
  },
  // Hiking tours
  'off-season-hiking-georgia': {
    title: 'Off-Season Hiking in Georgia',
    description: 'Guided off-season hikes — enjoy quiet trails, local hospitality and unique landscapes without the crowds.',
    img: '/svaneti.jpg'
  },
  '2-day-hike-borjomi-kharagauli': {
    title: '2 Day Hike in Borjomi-Kharagauli National Park',
    description: 'Two days of forest trails, viewpoints and natural springs in the Borjomi-Kharagauli national park.',
    img: '/tusheti.jpg'
  },
  '2-day-hike-kazbegi': {
    title: '2 Day Hike in Kazbegi',
    description: 'Short overnight hiking trip near Kazbegi with mountain views and local guesthouse stays.',
    img: '/kazbegi.jpg'
  },
  'hike-juta-roshka': {
    title: 'Hike from Juta to Roshka',
    description: 'A scenic route crossing alpine meadows with panoramic views — perfect for a day hike or overnight camp.',
    img: '/svaneti.jpg'
  },
  '3-day-hike-black-rock-lakes': {
    title: '3 Day Hike to Black Rock Lakes',
    description: 'Multi-day trek to remote high-altitude lakes, wild landscapes and starry nights.',
    img: '/svaneti.jpg'
  },
  '3-day-hiking-private-kazbegi': {
    title: '3 Day Hiking Private Tour in Kazbegi',
    description: 'Private hiking tour with local guide, tailored routes and comfortable overnight stays.',
    img: '/kazbegi.jpg'
  },
  '3-day-tour-vashlovani': {
    title: '3 Day Tour to Vashlovani National Park',
    description: 'Explore Vashlovani\'s semi-desert landscapes and rare flora and fauna over three days.',
    img: '/tusheti.jpg'
  },
  '5-day-hiking-svaneti': {
    title: '5 Day Hiking in Svaneti',
    description: 'Five days of alpine trails, ancient towers and traditional villages in the Svaneti region.',
    img: '/svaneti.jpg'
  },
  // Trekking tours
  'trek-kelitsadi-lake': {
    title: 'Trek to Kelitsadi Lake',
    description: 'A scenic trekking route to the high-altitude Kelitsadi lake with pristine views and alpine meadows.',
    img: '/svaneti.jpg'
  },
  '6-day-trekking-racha': {
    title: '6 Day Trekking in Racha',
    description: 'Six days exploring remote Racha: mountain passes, local villages and isolated trails.',
    img: '/tusheti.jpg'
  },
  'mestia-ushguli-trekking': {
    title: 'Mestia Ushguli Trekking Tour',
    description: 'Traverse Svaneti from Mestia to Ushguli — ancient towers, glacial views and traditional homestays.',
    img: '/svaneti.jpg'
  },
  'omalo-shatili-trekking': {
    title: 'Omalo Shatili Trekking Tour',
    description: 'A dramatic route through Tusheti to the fortified village of Shatili, combining culture and highland scenery.',
    img: '/tusheti.jpg'
  },
  '7-day-trekking-tobavarchkhili-lakes': {
    title: '7 Day Trekking to Tobavarchkhili Lakes',
    description: 'Seven-day expedition to the Tobavarchkhili lakes — remote, scenic and rewarding for experienced trekkers.',
    img: '/caucasus.webp'
  },
  'trekking-tusheti': {
    title: 'Trekking in Tusheti',
    description: 'Classic Tusheti treks with alpine pastures, remote villages and panoramic mountain ridges.',
    img: '/tusheti.jpg'
  },
  // Winter tours
  'Ski Tour in Svaneti — 8 Days': {
    title: 'Ski Tour in Svaneti — 8 Days',
    description: `High in the heart of the Greater Caucasus, Svaneti is a legendary land of towering peaks, medieval watchtowers, and deep snowfields untouched by ski lifts. This 8-day journey combines the thrill of ski touring with the charm of Georgian mountain culture. Guests will discover pristine slopes around Mestia, Tetnuldi, Ushguli, and the alpine Koruldi Lakes, climbing on skins and descending on powder lines framed by some of Europe’s highest mountains.

Evenings are spent in cozy guesthouses in Mestia, where the warmth of Svan hospitality meets hearty mountain cuisine: kubdari (meat-filled bread), rich stews, and Georgian wines. This trip is designed for adventurous skiers eager to step beyond the pistes and embrace the freedom of backcountry touring, supported by professional local mountain guides.

⸻

Full Tour Program — Ski Tour Svaneti (8 Days)

Day 1 — Arrival in Tbilisi or Kutaisi → Transfer to Mestia 

•	Warm welcome at the airport
  •	Scenic transfer through the mountains to Mestia (1,400 m)
  •	Check-in at hotel, welcome briefing, equipment check
  •	Evening stroll in Mestia old town and first Georgian dinner

Day 2 — Introduction to Ski Touring in Mestia

  •	Avalanche safety briefing and gear orientation
  •	Short ascent and descent near Hatsvali ski area
  •	Practice with skins, kick turns, and avalanche safety drills
  •	Return to hotel, free evening in Mestia

Day 3 — Ski Touring Around Tetnuldi Slopes

  •	Transfer to Tetnuldi base
  •	Ascent towards freeride zones above the resort (700–1000 m climb)
  •	Long powder descents with views of Tetnuldi (4,858 m)
  •	Evening relaxation and optional sauna

Day 4 — Koruldi Lakes Ascent

  •	Full-day ski tour from Mestia to the frozen Koruldi Lakes (2,740 m)
  •	Panoramic views of Ushba and Tetnuldi peaks
  •	Picnic lunch in the high mountains
  •	Long descent back to Mestia
  •	Evening Georgian dinner and wine tasting

Day 5 — Ski Tour in Ushguli Valley

  •	Transfer to Ushguli, Europe’s highest inhabited village (UNESCO site)
  •	Ski tour routes above the village (600–900 m climb)
  •	Explore dramatic views of Shkhara (5,193 m, Georgia’s highest peak)
  •	Return to Mestia in the evening

Day 6 — Laila Massif Approach

  •	Ascent towards the Laila Ridge, known for big mountain touring
  •	Challenging climbs and thrilling alpine descents
  •	Flexible route selection depending on conditions
  •	Evening cultural program with Svan music and dance (optional)

Day 7 — Flexible Touring Day + Farewell Dinner

•	Depending on group preference and weather:
  * Extra touring day near Tetnuldi or Hatsvali, or
  * Short tour combined with cultural activities in Mestia
•	Evening farewell dinner with traditional Georgian toasts

Day 8 — Departure

  •	Breakfast and check-out
  •	Group transfer back to Kutaisi or Tbilisi airport
  •	Departure

⸻

Program Highlights

  •	Untouched Caucasus Powder: daily ski tours on skins, with climbs of 600–1200 m and long descents on pristine snow.
  •	Koruldi Lakes Tour: the crown jewel of the program — a spectacular full-day tour to frozen alpine lakes beneath Mount Ushba.
  •	Ushguli Experience: ski above one of the highest villages in Europe, surrounded by UNESCO heritage towers.
  •	Culture & Cuisine: stay in family-run Mestia guesthouses, enjoy Svan specialties like kubdari, and share evenings with local hosts.
  •	Guided Adventure: professional mountain guides ensure safety, route choice, and avalanche preparedness.`,
    img: '/winter.webp'
  },

  'Luxury Ski & Spa Experience in Goderdzi — 8 Days': {
    title: 'Luxury Ski & Spa Experience in Goderdzi — 8 Days',
    description: `The hidden gem of Georgia.
This 8-day luxury journey takes travelers to Goderdzi, one of the most pristine and exclusive ski resorts in Georgia, located in the Adjara mountains at 2,000–3000 meters. Unlike the crowded slopes of Europe, Goderdzi offers untouched powder, spectacular panoramic views, and a serene atmosphere that makes it a true retreat for those who seek both skiing and indulgence.

Guests will stay in a 5★ luxury mountain hotel, featuring world-class service, fine dining, and a full spa included in the package — with open-air hot jacuzzis overlooking the snow-covered peaks. This is the ultimate blend of adventure and comfort.

The program combines guided skiing with the unique choice of an optional day: freeride skiing with a local mountain guide or a thrilling snowmobile excursion into the Caucasus mountains. Evenings are for spa relaxation, gourmet dinners, and the refined hospitality Georgia is famous for.

Full Tour Program — Luxury Ski & Spa — 8 Days

Day 1 — Arrival in Batumi → Goderdzi
• VIP welcome at Batumi Airport
• Scenic transfer to Goderdzi Resort through Adjara highlands
• Check-in at a 5★ luxury mountain hotel
• Spa welcome (sauna, jacuzzi), ski pass distribution, welcome cocktail

Day 2 — Skiing in Goderdzi
• Guided skiing with professional instructor (1/3)
• Wide natural slopes and uncrowded pistes

Day 3 — Skiing in Goderdzi
• Guided skiing with instructor (2/3)
• Exploring untouched powder areas and panoramic routes

Day 4 — Skiing in Goderdzi
• Guided skiing with instructor (3/3)
• Optional après-ski spa & wine evening

Day 5 — Freeride or Snowmobile Adventure (by choice)
• Option 1: Full-day freeride skiing with local mountain guide
• Option 2: Guided snowmobile tour in the high Caucasus mountains
• Alternative: independent skiing with ski pass

Day 6 — Independent Skiing + Spa
• Free skiing day
• Afternoon relaxation in spa (indoor pool, hammam, hot jacuzzis under the stars)

Day 7 — Skiing + Farewell Gala Dinner
• Final skiing day
• Evening farewell gala dinner with premium Georgian cuisine & wines

Day 8 — Departure
• Check-out
• Scenic group transfer back to Batumi Airport
• Departure

Program Highlights
• Luxury Experience: 5★ mountain hotel with spa, gourmet dining, and open-air jacuzzis with mountain views.
• Goderdzi Resort: pristine slopes, untouched snow, serene atmosphere, altitude 2,000–2,350 m.
• Adventure Options: freeride skiing or snowmobile excursion (by choice).
• Wellness & Relaxation: daily spa access, hot jacuzzis, sauna, hammam included.
• Fine Georgian Gastronomy: khachapuri, khinkali, mtsvadi, paired with world-class Georgian wines.
• Exclusivity: small-group luxury format, limited availability.`,
    img: '/goderdzi.png'
  },

  'Ski Adventure in Gudauri — 8 Days': {
    title: 'Ski Adventure in Gudauri — 8 Days',
    description: `The Caucasus at its best.
This 8-day journey invites travelers to discover Gudauri, Georgia’s largest and most dynamic ski resort, perched high on the Greater Caucasus Mountains up to 3280 meters. Famous for its wide open slopes, endless sunshine, and powder snow lasting into April, Gudauri is a paradise for skiers of all levels, from beginners to thrill-seekers chasing freeride lines.

Beyond the slopes, guests will be immersed in Georgia’s legendary hospitality: cozy mountain hotels, rich and hearty Georgian cuisine with khachapuri (cheese bread), khinkali (dumplings), and aromatic wines from the world’s oldest winemaking tradition. Evenings can be spent relaxing in alpine restaurants, enjoying traditional music, or sharing toasts with new friends.

This program combines the structure of guided skiing with the freedom of independent days, complemented by an optional freeride day with a local mountain guide (by participants’ choice). It is designed for active travelers who want both adventure and cultural flavor.
Full Tour Program_SKI — 8 Days
Day 1 — Arrival in Tbilisi → Gudauri
• Warm Georgian welcome at Tbilisi Airport
• Group transfer along the scenic Georgian Military Highway with views of the Jinvali Reservoir and Ananuri Fortress
• Arrival in Gudauri, hotel check-in
• Distribution of ski passes, welcome briefing
Day 2 — Skiing in Gudauri
• Guided skiing with professional instructor (1/3)
• Introduction to Gudauri’s wide slopes and breathtaking Caucasus panoramas
Day 3 — Skiing in Gudauri
• Guided skiing with instructor (2/3)
• Long descents, orientation to the best runs, tips for technique
• Après-ski with local cuisine (optional)
Day 4 — Skiing in Gudauri
• Guided skiing with instructor (3/3)
• “Best lines of the resort” depending on snow and weather conditions
Day 5 — Optional Mountain Guide Freeride Day
• By participants’ choice: a full day with a local mountain guide exploring freeride terrain around Gudauri or Kazbegi & Trinity Church tour
• Alternative: free skiing on pistes
Day 6 — Independent Skiing
• Free skiing with 6-day ski pass
• Optional activities: paragliding over the Caucasus, spa & sauna, or wine-tasting evening
Day 7 — Skiing + Farewell Dinner
• Final day of free skiing
• Evening farewell dinner with Georgian dishes, wine, and traditional toasts
Day 8 — Departure
• Check-out
• Scenic group transfer back to Tbilisi Airport
• Departure
Program Highlights
• Gudauri Resort: high-altitude skiing with reliable snow and sunshine, modern lifts, and wide uncrowded pistes.
• Adventure Options: optional freeride day with local guide, paragliding, cultural side-trips to Kazbegi and Gergeti Trinity Church (extra charges apply).
• Georgian Cuisine & Wine: authentic dishes like khachapuri, mtsvadi (grilled meat), churchkhela (walnut sweets), paired with world-renowned Georgian wines.
• Hospitality & Atmosphere: cozy mountain hotels, warm local hosts, and a mix of adventure and comfort.`,
    img: '/ski.png'
  },

  'Ski & Culture Adventure in Georgia — 10 Days': {
    title: 'Ski & Culture Adventure in Georgia — 10 Days',
    description: `This unique 10-day program combines the best of Georgia’s ski resorts and cultural treasures.
Travelers will discover the vibrant Black Sea city of Batumi, the medieval towers of Svaneti and the remote village of Ushguli (UNESCO), the historical gems of Kutaisi and Gelati Monastery, and the breathtaking mountain landscapes of Gudauri and Kazbegi with its iconic Gergeti Trinity Church.
Guests will enjoy guided skiing in Tetnuldi and Gudauri, cultural excursions, scenic drives through the Caucasus, and authentic Georgian hospitality with full-board dining.
The program is flexible: participants may choose more skiing or include cultural exploration, making it ideal for both adventure-seekers and culture lovers.
Full Tour Program_SKI — 10 Days
Day 1
• Arrival in Batumi
• Late dinner
Day 2
• Batumi city tour
• Batumi Botanical Garden and Makhuntseti Waterfall
• Dinner
Day 3
• Transfer: Batumi → Zugdidi → Mestia
• Lunch in Zugdidi
• Sightseeing: Dadiani Palace
• Excursion in Mestia
• Visit to the Mikheil Khergiani Museum
• Dinner
Day 4
• Full-day skiing with a guide in Tetnuldi
• Meals: full board, lunch on the mountain
Day 5
• Excursion to Ushguli
• Lunch
• Short snowshoe hike with a guide (2–3 hours)
• Return to Mestia
• Dinner
Day 6
• Transfer: Mestia → Zugdidi → Kutaisi
• Stop in Zugdidi
• Lunch
• Sightseeing in Kutaisi
• Overnight in Kutaisi
Day 7
• Transfer: Kutaisi → Gelati → Ananuri → Gudauri
• Visit to the Gelati Monastery (UNESCO World Heritage Site)
• Scenic drive through central Georgia
• Excursion to Ananuri Fortress and Jinvali Reservoir
• Arrival and overnight in Gudauri
Day 8
• Full-day skiing with a guide in Gudauri
• Meals: full board, lunch on the mountain
Day 9
• Morning: Half-day skiing with a guide in Gudauri
• Afternoon: Excursion to Kazbegi (Stepantsminda), Gergeti Trinity Church
• Return to Gudauri
Day 10
• Full Tbilisi city tour
• Evening farewell dinner 
• Departure to the airport
Program Options
In Svaneti (Day 5) and Gudauri (Day 9), participants can choose the “Ski-only option” — spending the day skiing with a guide instead of joining snowshoe hikes, cultural walks, or excursions.
As an option, if the guests are more interested in skiing, the Batumi city tour (Day 2) can be skipped and replaced with an extra day of skiing in Svaneti.
This makes the program flexible: travelers can mix cultural discovery with active skiing, or focus entirely on skiing.
Three meals a day are included. On skiing days, lunch is served on the mountain.`,
    img: '/Skicultureadventureingeorgia.png'
  },

  'snowshoe-hike-kazbegi': {
    title: 'Snowshoe Hike in Kazbegi',
    description: 'Guided snowshoe routes in the Kazbegi valleys — a peaceful winter alternative to skiing.',
    img: '/kazbegi.jpg'
  },
  '3-day-winter-tour-georgia': {
    title: '3 Day Winter Tour in Georgia',
    description: 'Three-day winter package exploring ski areas, cultural sites and local cuisine.',
    img: '/winter.webp'
  },
  'ski-touring-gudauri-kazbegi': {
    title: 'Ski Touring in Gudauri & Kazbegi',
    description: 'Backcountry ski touring routes with experienced guides — for advanced skiers seeking wilderness.',
    img: '/kazbegi.jpg'
  },
  'ski-touring-svaneti': {
    title: 'Ski Touring in Svaneti',
    description: 'Remote ski-touring itineraries in Svaneti: long descents, deep snow and wild landscapes.',
    img: '/svaneti.jpg'
  },
  // Horse riding tours
  'horse-riding-borjomi': {
    title: 'Horse Riding in Borjomi',
    description: 'Gentle horse rides through Borjomi\'s forests and valleys — great for families and beginners.',
    img: '/tusheti.jpg'
  },
  'horse-riding-kazbegi': {
    title: 'Horse Riding in Kazbegi',
    description: 'Horseback excursions in the Kazbegi foothills with spectacular mountain views and local guides.',
    img: '/kazbegi.jpg'
  },
  '7-day-horse-riding-tour': {
    title: '7 Day Horse Riding Tour',
    description: 'A week-long riding adventure across varied terrain, staying in guesthouses and remote camps.',
    img: '/svaneti.jpg'
  },
  'horse-riding-tusheti': {
    title: 'Horse Riding in Tusheti',
    description: 'Traditional shepherd routes and highland meadows — immersive riding experiences in Tusheti.',
    img: '/tusheti.jpg'
  },
  // Fallback/demo for other slugs
};

/* ---------- Helper to render long descriptions without modifying content ---------- */
function renderLongDescription(text) {
  // Split into lines and render with simple rules:
  // - blank line -> <br/>
  // - lines that start with "Day " -> <h3>
  // - lines that start with any bullet char (• or * or '-') -> inside a <ul>
  // - other lines -> <p>
  const lines = text.split('\n');
  const elements = [];
  let currentList = null;

  const flushList = () => {
    if (currentList && currentList.length) {
      elements.push(
        <ul key={`ul-${elements.length}`}>
          {currentList.map((li, i) => <li key={`li-${i}`}>{li}</li>)}
        </ul>
      );
    }
    currentList = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.replace(/\t/g, '    '); // keep tabs readable
    const trimmed = line.trim();

    if (trimmed === '') {
      flushList();
      elements.push(<br key={`br-${i}`} />);
      continue;
    }

    // Day headings
    if (/^Day\s+\d+\s*—/.test(trimmed) || /^Full Tour Program/.test(trimmed)) {
      flushList();
      elements.push(<h3 key={`h-${i}`}>{trimmed}</h3>);
      continue;
    }

    // Program Highlights header-like separator
    if (/^Program Highlights/.test(trimmed) || /^⸻/.test(trimmed) || /^Full Tour Program/.test(trimmed)) {
      flushList();
      elements.push(<p key={`psep-${i}`} style={{ fontWeight: 700 }}>{trimmed}</p>);
      continue;
    }

    // bullet lines (starting with • or * or '-')
    if (/^[•\*\-\u2022]/.test(trimmed) || /^\u2022/.test(trimmed) || /^[•]/.test(trimmed) || /^[\u2022]/.test(trimmed)) {
      const content = trimmed.replace(/^[•\*\-\u2022]\s?/, '');
      if (!currentList) currentList = [];
      currentList.push(content || trimmed);
      continue;
    }

    if (/^[\s]*[•\*]\s+/.test(line)) {
      const content = line.replace(/^[\s]*[•\*]\s+/, '').trim();
      if (!currentList) currentList = [];
      currentList.push(content || line.trim());
      continue;
    }

    if (/^\s*•\s*/.test(line)) {
      const content = line.replace(/^\s*•\s*/, '');
      if (!currentList) currentList = [];
      currentList.push(content || line.trim());
      continue;
    }

    // default paragraph
    flushList();
    elements.push(<p key={`p-${i}`}>{trimmed}</p>);
  }

  flushList();
  return elements;
}

export default function TourPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Wait until router is ready (query populated on client-side navigation)
  if (!router.isReady) {
    return (
      <main className="tour-main">
        <div className="tour-container">
          <div className="loading">Loading…</div>
        </div>
      </main>
    );
  }

  const key = Array.isArray(slug) ? slug[0] : slug;
  const tour = TOURS[key];

  if (!tour) {
    return (
      <>
        <Navbar />
        <main className="tour-main">
          <div className="tour-container">
            <div className="card">
              <h1 className="title">Tour not found</h1>
              <p className="muted">We don't have details for <strong>{key}</strong> yet.</p>
              <Link className="btn" href="/destination">Back to destinations</Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Apply long, split-by-days style to these tours (matching key or title to be safe)
  const longTourKeys = [
    'Ski Tour in Svaneti — 8 Days',
    'Luxury Ski & Spa Experience in Goderdzi — 8 Days',
    'Ski Adventure in Gudauri — 8 Days',
    'Ski & Culture Adventure in Georgia — 10 Days'
  ];

  const isLongTour = longTourKeys.includes(key) || longTourKeys.includes(tour.title);

  return (
    <>
      <Navbar />
      <style>{tourStyle}</style>

      <main className="tour-main">
        <div className="tour-container">
          <div className="tour-hero-beauty">
            <div className="tour-hero-top">
              <div>
                {/* Use simple <img> to respect original usage; swap to next/image if desired */}
                <img src={tour.img} alt={tour.title} className="tour-hero-img-beauty" />
              </div>

              <aside className="tour-highlight" aria-labelledby="why-title">
                <h2 id="why-title">Why Choose This Tour?</h2>
                <ul>
                  <li>🏔️ Stunning landscapes & unique experiences</li>
                  <li>🏘️ Authentic villages & local culture</li>
                  <li>🍲 Delicious regional cuisine</li>
                  <li>👣 Guided by local experts</li>
                  <li>🗺️ Flexible routes for all levels</li>
                </ul>
              </aside>
            </div>
          </div>

          <div className="tour-content">
            <h1 className="title-contnt">About Tour</h1>

            {isLongTour ? (
              <article className="long-tour-description" aria-live="polite">
                {renderLongDescription(tour.description)}
              </article>
            ) : (
              <div className="lead">{tour.description}</div>
            )}

            <div className="actions">
              <Link className="btn" href="/destination">Back to destinations</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
