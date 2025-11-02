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

  'About': {
    title: 'about',
    description: `About Arnika Travel

Arnika Travel was born from a very simple love — love for the mountains, and for the people who travel through them.
Twelve years ago, it started as a small family agency, built not on marketing plans or offices, but on friendship, shared hikes, and evenings spent around kitchen tables, dreaming about how to show Georgia as it really is — honest, wild, and beautiful.

Our first travelers were not clients, they were guests — friends who came to walk mountain trails with us, to drink tea in shepherd huts, to feel the wind on the Abano Pass or the silence above Ushguli. From those journeys grew something bigger: a small community of people who carry Georgia in their hearts.

Today, Arnika Travel unites guides, drivers, photographers, and families from every corner of the country — people who still greet travelers the same way we did at the beginning: with open doors, warm bread, and genuine care.

We don’t just organize tours — we create paths of connection. Between travelers and locals, between mountains and stories, between Georgia and the soul that always wants to return here.

Because for us, travel is not business — it’s hospitality, memory, and love.
Always has been. Always will be.

Arnika Travel — created by people who love the mountains, and everyone who comes to walk them.`,
    img: '/logo.jpeg'
  },

     'Svaneti, Georgia': {
    title: ' Svaneti, Georgia',
    description: `Hidden deep in the northwestern Caucasus, Svaneti is a land of towering peaks, ancient stone villages, and proud mountain spirit. Surrounded by some of Europe’s highest summits — Ushba, Tetnuldi, and Shkhara — this remote region preserves Georgia’s oldest traditions, language, and architecture.

Medieval Svan towers rise above green valleys and glacial rivers, while the UNESCO-listed villages of Mestia and Ushguli keep the rhythm of timeless mountain life.
Visitors can hike through alpine meadows, reach crystal-clear Koruldi Lakes, taste homemade cheese and wine, and feel the warmth of authentic Svan hospitality.

Whether you come for trekking, culture, or the breathtaking silence of the high Caucasus — Svaneti is where Georgia’s soul touches the sky.`,
    img: 'https://chasingthedonkey.b-cdn.net/wp-content/uploads/2019/10/Community-Ushguli-Georgia_Main-Caucasian-Ridge_Depositphotos_32763083_l-2015.jpg'
  },

       'Top-ski-resorts': {
    title: 'Top-ski-resorts',
    description: `1. Gudauri Ski Resort

Located just 120 km north of Tbilisi, Gudauri is Georgia’s largest and most developed ski resort. Sitting on a sunny plateau of the Greater Caucasus at 2,200–3,300 m, it offers around 80 km of marked runs and vast freeride terrain above the tree line. Modern lifts, ski schools, equipment rentals, and cozy hotels make it ideal for all levels — from beginners to advanced skiers. Gudauri is also a freerider’s paradise, known for deep powder and heli-skiing opportunities. Easy access from Tbilisi makes it perfect for short getaways or full winter holidays.

⸻

2. Bakuriani Ski Resort

Nestled on the northern slopes of the Trialeti Range at about 1,700 m, Bakuriani is Georgia’s classic family ski resort. The area combines gentle forested slopes with modern lifts in Didveli and Kokhta–Mitarbi ski zones, reaching up to 2,700 m. It’s a favorite for families, beginners, and children thanks to its mild terrain and safe learning environment. The town itself is charming and lively, offering snowboarding, tubing, and various winter activities. While less extreme than Gudauri, Bakuriani remains one of Georgia’s most beloved destinations for relaxed winter vacations.

⸻

3. Hatsvali Ski Resort (Svaneti)

Located 8 km from Mestia, Hatsvali is a scenic ski resort in the cultural heart of Svaneti. The lifts connect directly to Mestia, taking skiers from 1,868 m up to 2,348 m. Hatsvali offers around 7 km of groomed runs and access to endless freeride possibilities under ancient forests and along panoramic ridges. The atmosphere combines mountain adventure with Svaneti’s medieval charm — stone towers, rich culture, and authentic local cuisine. It’s ideal for those seeking a mix of skiing, history, and tranquility away from big crowds.

⸻

4. Tetnuldi Ski Resort (Svaneti)

Situated 15 km from Mestia, Tetnuldi is Georgia’s highest and most spectacular alpine resort. Its top lift reaches 3,165 m, offering over 30 km of long, wide slopes with breathtaking views of Mount Ushba and the Caucasus range. The snow season lasts from November to May, and the vertical drop exceeds 1,200 m — perfect for advanced skiers and freeriders. Tetnuldi is less crowded than Gudauri and features pristine landscapes, deep powder, and pure mountain silence. Combined with Hatsvali, it creates a full Svaneti winter experience.

⸻

5. Goderdzi Ski Resort

In the Adjara Mountains near the Black Sea, Goderdzi offers a unique blend of alpine and maritime climates — meaning heavy, reliable snow and lush forest scenery. The base is at 2,025 m and the top at around 2,350 m. Though smaller (around 8–12 km of slopes), the resort is ideal for powder lovers and off-piste enthusiasts. Goderdzi is less developed and much quieter than Gudauri or Bakuriani, perfect for those who seek adventure, nature, and peace. Access is via Batumi or Kutaisi with a scenic mountain drive.`,
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-12/241217-Gudauri-georgia-mb-0757-eabb2e.jpg'
  },

'Mountain Legends Kazbegi Svaneti Expedition 10 Days': {
    title: ' Mountains & Legends Kazbegi & Svaneti Expedition 10 Days',
    description: `Duration: 10 days / 9 nights

A grand mountain adventure connecting Georgia’s two wildest regions — the sacred slopes of Kazbegi and the ancient towers of Svaneti.

Day 1 — Tbilisi
Evening stroll through the old capital, dinner overlooking the Kura River, and briefing about your upcoming Caucasian odyssey.

Day 2 — To Kazbegi
Ride the Georgian Military Highway past the turquoise Zhinvali Reservoir and Ananuri Fortress. Arrive in Stepantsminda and hike up to Gergeti Trinity Church under the snow-crowned peak of Kazbek.

Day 3 — Juta Valley
Drive to the remote village of Juta, hike through alpine meadows framed by the sharp spires of the Chaukhi Massif — Georgia’s own Dolomites. Picnic by a mountain stream, return for dinner by the fireplace.

Day 4 — To Kutaisi
Descend from the highlands, stopping at the ancient cave city of Uplistsikhe and Gori Fortress. Overnight in Kutaisi, the city of the Argonauts.

Day 5 — Into Svaneti
Wind through the Enguri Gorge, where cliffs rise like cathedrals. Arrive in Mestia, explore its medieval watchtowers and visit the Svaneti History Museum.

Day 6 — Koruldi Lakes
Hike to turquoise mountain lakes reflecting twin peaks of Ushba. The air is crisp, the silence absolute — pure Svaneti.

Day 7 — Ushguli
Travel to the highest inhabited village in Europe (2 200 m). Walk its narrow lanes, visit Lamaria Church beneath Mount Shkhara, and share a rustic lunch with villagers.

Day 8 — Descent via Enguri Dam
Stop at one of the world’s tallest arch dams, enjoy the vast mountain panorama. Overnight in Kutaisi.

Day 9 — Return to Tbilisi
Visit Gelati Monastery, the spiritual heart of Georgia. Evening farewell dinner with wine and laughter.

Day 10 — Departure.
`,
img: 'https://storage.georgia.travel/images/mtebi-da-mtsvervalebi-myinvartsveri.webp'
  },

  'Flavors of Georgia — Wine & Culture Tour 5 Days': {
    title: 'Flavors of Georgia — Wine & Culture Tour 5 Days',
    description: `Duration: 5 days / 4 nights

Georgia — the cradle of wine, where every glass tells a story eight millennia old. This journey blends the finest wines, timeless landscapes, and warm Georgian soul.

Day 1 — Tbilisi
Walk the cobbled streets of Old Tbilisi, visit Narikala Fortress and the colorful sulfur baths quarter. At sunset — a welcome dinner with folk music and your first tasting of amber qvevri wine.

Day 2 — To Kakheti
Cross the winding Gombori Pass into Kakheti’s golden hills. Visit Alaverdi Monastery, where monks still make wine using 11th-century methods, and then stroll through Prince Chavchavadze’s romantic gardens at Tsinandali. Evening tasting and overnight in Telavi’s vineyard guesthouse.

Day 3 — Kvareli & Sighnaghi
Descend into the Kindzmarauli wine tunnel, carved deep into the rock, and sample its rich red varieties. Continue to Sighnaghi, “the City of Love,” with pastel balconies and views over the Alazani Valley. Dinner at a family winery where toasts flow like poetry.

Day 4 — Cooking & Return
Join a local hostess to bake khachapuri in a clay oven, roll sweet churchkhela, and prepare mtsvadi on open fire. Laughter, wine, and friendship fill the courtyard before returning to Tbilisi for one last night.

Day 5 — Farewell
Morning coffee on Rustaveli Avenue, souvenir shopping, and airport transfer with a smile that tastes of Saperavi.
`,
    img: '/tbilisi.webp'
  },
  'kazbegi-tour-from-tbilisi': {
    title: 'Kazbegi Tour from Tbilisi',
    description: `With Altihut stay, private chef, and packhorse support

Duration: 6 days / 5 nights
Best season: June – September
Difficulty: Moderate – Challenging

Overview

Designed for adventurers who want to reach the summit of Mount Kazbek (5 047 m) in comfort and safety. You’ll stay in warm guesthouses, spend a night in the modern Altihut 3 014, enjoy freshly prepared meals from a mountain chef, and have your equipment transported by horses. This is the perfect balance of adventure and ease.

⸻

Itinerary

Day 1 – Arrival in Stepantsminda (Kazbegi)
Transfer from Tbilisi or Kutaisi via the Georgian Military Highway. Check into a boutique guesthouse in Stepantsminda (1 700 m). Equipment check, briefing with the guide, dinner and overnight.

Day 2 – Trek to Altihut (3 014 m)
Hike along the Sabertse valley to Gergeti Trinity Church (2 170 m) and continue toward the glacier. Horses carry group equipment. Arrive at Altihut — a modern mountain lodge with warm beds, electricity, showers, and panoramic views. Dinner cooked by the expedition chef.

Day 3 – Acclimatization Day
Short acclimatization hike toward the Gergeti Glacier or up to 3 600 m. Return to Altihut for rest, lunch, and optional workshop on rope techniques.

Day 4 – Move to High Camp (3 700 m)
Morning climb to Bethlemi Hut (Meteorological Station) — the classic high camp. Horses bring food and heavy luggage. Dinner in heated dining area. Early sleep.

Day 5 – Summit Day (5 047 m)
Start around 3:00 AM. Ascend via Gergeti Glacier to the saddle and final ridge. Reach the summit of Mount Kazbek, enjoy views over the Caucasus and Russia. Return to High Camp, rest and descend to Altihut for overnight celebration dinner.

Day 6 – Return to Stepantsminda and Departure
Descend to Stepantsminda, farewell lunch, and transfer to Tbilisi.

⸻

Included
  •	Certified mountain guide(s)
  •	Horses for equipment transport
  •	Accommodation (guesthouse + Altihut + high camp)
  •	Chef-prepared meals (breakfast, lunch, dinner)
  •	Permits and logistics
  •	Safety and glacier equipment (ropes, crampons, harnesses)

Highlights
  •	Stay at Altihut 3 014 — the most comfortable mountain lodge in Georgia.
  •	Delicious hot meals in the mountains.
  •	Breathtaking route across Gergeti Glacier.
  •	Summit one of the most iconic peaks of the Caucasus in style and safety.

⸻

🏕️ 2. Kazbek Ascent — Classic Alpine Style (6 Days)

Independent trekking spirit with tent camps and self-cooking

Duration: 6 days / 5 nights
Best season: July – September
Difficulty: Challenging

Overview

A pure mountaineering experience for those who want to earn every step.
You’ll carry your own gear, set up tent camps, cook meals together, and climb Kazbek in authentic expedition style. Ideal for experienced trekkers seeking full immersion in the wild Caucasus.

⸻

Itinerary

Day 1 – Arrival in Stepantsminda
Transfer from Tbilisi. Equipment check and shopping for provisions. Night in a local guesthouse.

Day 2 – Trek to Base Camp (3 014 m)
Start hike from Gergeti Trinity Church toward the glacier. Set up tent camp near Altihut. Cook dinner at campfire under the stars.

Day 3 – Move to High Camp (3 700 m)
Steady ascent along the glacier path. Establish High Camp near Bethlemi Hut. Prepare meals and rest.

Day 4 – Acclimatization & Glacier Practice
Short climb on the glacier (up to 4 000 m). Practice rope team movement, crampon and ice-axe use. Return to camp and rest.

Day 5 – Summit Attempt (5 047 m)
Alpine start before dawn. Long, steady ascent across the glacier and the final ridge to reach Kazbek Summit. Descent to High Camp for rest or continue down to Base Camp if energy allows.

Day 6 – Return to Stepantsminda
Descend to Stepantsminda, group lunch and transfer to Tbilisi.

⸻

Included
  •	Certified mountain guide
  •	Group safety equipment (ropes, glacier gear)
  •	Tents and cooking equipment
  •	Local transfers
  •	Permits and coordination

Not included
  •	Meals (self-cooked)
  •	Personal climbing gear and backpack load

⸻

Highlights
  •	True expedition atmosphere: full self-sufficiency and teamwork.
  •	Camp under the stars below the glacier.
  •	Master glacier and rope techniques hands-on.
  •	The satisfaction of conquering Kazbek entirely on your own strength.`,
    img: 'https://www.georgianholidays.com/storage/V0vRjIKcmnERZujHCS2v2pPprscjlUr96V91TMGV.jpeg'
  },
  'wine-tasting-tour-kakheti': {
    title: 'Wine Tasting Tour in Kakheti',
    description: 'Visit family cellars, taste qvevri wines and explore the wine region of Kakheti.',
    img: '/svaneti.jpg'
  },
  'Hidden Georgia — Canyons, Caves & Waterfalls (7 Days)': {
    title: 'Hidden Georgia — Canyons, Caves & Waterfalls (7 Days)',
    description: `Duration: 7 days / 6 nights

A journey through Georgia’s secret natural wonders — emerald canyons, echoing caves, and mountain lakes framed by pine forests.

Day 1 — Tbilisi
Arrival and evening walk through the illuminated Old Town. Taste khinkali and local amber wine.

Day 2 — To Kutaisi
Drive across fertile plains to Kutaisi, one of the world’s oldest cities. Visit Bagrati Cathedral and the colorful local bazaar.

Day 3 — Martvili & Okatse Canyons
Drift by boat through the turquoise Martvili Canyon, where waterfalls shimmer in sunlight. Then walk the sky bridge over Okatse Canyon — 140 m above the roaring river.

Day 4 — Prometheus Cave & Shaori Lake
Descend into Prometheus Cave with its glowing stalactites and underground river. Later, picnic by Shaori Lake, surrounded by misty pines.

Day 5 — Racha Region
Discover the mountain villages of Racha, the “Little Switzerland of Georgia.” Visit Nikortsminda Cathedral and taste rare Khvanchkara wine directly from the barrel.

Day 6 — Kinchkha Waterfall → Batumi
Hike to Georgia’s tallest waterfall, feel the spray on your face, then drive through the lush Adjaran mountains to the Black Sea coast. Evening walk along Batumi’s seaside boulevard.

Day 7 — Batumi & Departure
Relax by the sea or visit the Botanical Garden. Transfer to the airport or extend your stay.
`,
    img: 'https://cdn.mygeotrip.com/images/news/1/15577448869758/800x600c-center.jpeg'
  },

  'Ancient Kingdoms — Historical Georgia Discovery (8 Days)': {
    title: 'Ancient Kingdoms — Historical Georgia Discovery (8 Days)',
    description: `Duration: 8 days / 7 nights

A time-travel through Georgia’s 3 000-year history — from pagan cave cities to glittering cathedrals and seaside fortresses.

Day 1 — Arrival in Tbilisi
Settle into your hotel and enjoy a traditional dinner with polyphonic songs.

Day 2 — Tbilisi City Tour
Wander through centuries: Metekhi Church, Narikala Fortress, sulfur baths, Peace Bridge. Discover a city where East meets West.

Day 3 — Mtskheta & Jvari
Visit Georgia’s spiritual capital. Stand on the hill of Jvari Monastery and watch two rivers — Aragvi and Kura — merge below.

Day 4 — Uplistsikhe & Gori
Explore Uplistsikhe, a 3rd-century BC cave city carved in volcanic rock. Learn about Silk Road trade routes and medieval life.

Day 5 — To Kutaisi
Drive west to the lush Imereti region, visit Gelati Monastery and Bagrati Cathedral (UNESCO). Evening wine and folklore dinner.

Day 6 — To Batumi
Stop at Dadiani Palace in Zugdidi, then reach the Black Sea coast. Batumi welcomes you with palm trees and art-deco architecture.

Day 7 — Batumi
Morning at the Botanical Garden, free time at the beach, farewell dinner with seafood and sparkling wine.

Day 8 — Departure.`,
    img: 'https://avezortravel.com/wp-content/uploads/2025/05/gelati-monastery-1024x683.jpg'
  },
  'Georgia Grand Circle — From Mountains to the Sea (14 Days)': {
    title: ' Georgia Grand Circle — From Mountains to the Sea (14 Days)',
    description: `Duration: 14 days / 13 nights

The ultimate journey through Georgia — mountains, monasteries, deserts, and the Black Sea breeze. Two weeks that reveal the soul of the Caucasus.

Day 1 — Arrival in Tbilisi
Evening stroll and welcome dinner with panoramic city views.

Day 2 — Discover Tbilisi
Explore its winding alleys, colorful balconies, and bustling cafés. Visit sulfur baths and take the cable car to Narikala Fortress.

Day 3 — To Kazbegi
Travel the Georgian Military Highway to Stepantsminda. Visit Ananuri Fortress and Gergeti Trinity Church beneath Mount Kazbek.

Day 4 — Juta & Gveleti Waterfalls
Hike through alpine valleys dotted with wildflowers. Picnic by Gveleti’s twin waterfalls.

Day 5 — Kakheti Wine Region
Head east to Georgia’s wine heartland. Taste qvevri wines in Telavi, visit Alaverdi Monastery and sleep in a vineyard hotel.

Day 6 — Mtskheta & Borjomi
Stop at the ancient capital Mtskheta, then continue to Borjomi’s mineral springs and forest park.

Day 7 — Bakuriani Mountains
Ride the ski lifts or explore conifer forests on horseback. Evening by the fire.

Day 8 — Vardzia Caves
Visit the 12th-century rock-hewn city of Vardzia and the mighty Rabati Fortress.

Day 9 — Kutaisi & Prometheus Cave
Marvel at Gelati Monastery and explore the underground world of Prometheus Cave.

Day 10 — To Svaneti
Drive to Mestia through the Enguri Gorge. Towering peaks and ancient villages greet you.

Day 11 — Ushguli
4×4 trip to the UNESCO village of Ushguli. Walk among towers older than kingdoms.

Day 12 — To Batumi
Descend to the Black Sea coast, arriving in subtropical Batumi.

Day 13 — Batumi
Free day: Botanical Garden, art cafés, or just sea and sun.

Day 14 — Departure.`,
    img: 'https://storage.georgia.travel/images/georgia-europe-georgraphy.webp'
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

  '5-Day Trekking Tour Overview': {
    title: '5-Day Trekking Tour Overview',
      description: `This option invites you to hike for several days through the Tusheti highlands, staying in guesthouses and walking between villages, passes and valleys.

5 days
  • Day 1: Tbilisi → drive to Omalo (via Abano Pass) → overnight Omalo.
  • Day 2: Hike from Omalo into the valley, perhaps to village such as Dartlo or Parsma. Explore historic towers, alpine meadows.
  • Day 3: Continue trekking through villages like Kvavlo, Chigo or along Pirikiti Alazani gorge, stay in remote guesthouse.
  • Day 4: Cross a mountain pass (e.g., Nakaicho pass ~2,900 m) descending to another valley; overnight in another village.
  • Day 5: Finish with hike into Omalo, visit Keselo towers, then drive back to Tbilisi.

Highlights
  • Immerse yourself more deeply: each day you move, you see different terrain, villages, passes.
  • Stay in mountain guesthouses: authentic experience of local life.
  • Get real trekking (not just walking) — alpine meadows, ridges, views.

Notes & Tips
  • Requires good fitness; some days may include long walking hours, elevation change.
  • Pack trekking shoes, layers, maybe walking poles.
  • Accommodations in mountain villages may be modest (shared facilities, basic comfort).
  • Because you are staying in remote villages, electricity/wifi may be patchy — for you this might be a bonus (digital detox!).
  • Ideal if you want a bit more time, connect with nature, slower pace.`,
    img: '/svaneti.jpg'
  },

  '7-Day Trekking Tour Overview': {
    title: '7-Day Trekking Tour Overview',
    description: `For a deeper immersion, a 7-day trek in Tusheti allows fuller exploration, more remote valleys, more time to soak in culture, nature and slower pace.

7 days
  •	Day 1: Transfer from Tbilisi to Tusheti (Omalo) – acclimatise.
  •	Day 2: Hike from Omalo to villages such as Dartlo/Parsma – through ridges, meadows.
  •	Day 3: Continue valley trek, visit remote hamlets like Kvavlo, Dochu.
  •	Day 4: Cross a significant pass (e.g., Nakaicho ~2 900 m) into another valley.
  •	Day 5: Explore high-altitude meadows, maybe reach Lake Oreti or other alpine lakes, stay in highest village (e.g., Bochorna).
  •	Day 6: Descent, visit towers at Keselo, cultural villages, relax.
  •	Day 7: Return drive to Tbilisi via Kakheti wine region (optional stop for wine, local food).

Highlights
  •	More complete experience: more villages, passes, remote trails.
  •	Time for slower reflections — fits nicely with your interest in being “on your path”, internal orientation, and allowing space for reflection.
  •	Opportunity to combine nature, culture, self-development, digital detox, and mountain living.
  •	Staying in remote guesthouses adds authenticity.

Notes & Tips
  •	Longer trek means more logistics: pack lighter, be mentally ready for days of walking and perhaps simpler facilities.
  •	Seasonal constraints: roads may close, weather can turn quickly. Best to aim June–September.  ￼`,
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2luZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000'
  },
  '5-Day Trekking Tour — “Peaks & Valleys of Svaneti”': {
    title: '5-Day Trekking Tour — “Peaks & Valleys of Svaneti”',
    description: `Duration: 5 days / 4 nights
Difficulty: Moderate
Best season: June – September

Overview

A compact yet unforgettable adventure through the heart of Svaneti — land of ancient towers, alpine meadows, and glaciers. You’ll hike through UNESCO-listed villages, cross scenic ridges, and experience real mountain hospitality.

Itinerary

Day 1 – Arrival in Mestia
Arrival in Mestia, the cultural center of Svaneti. Explore the Mikheil Khergiani Museum, the Svaneti History Museum, and medieval watchtowers overlooking the valley. Dinner and overnight in a cozy guesthouse.

Day 2 – Mestia → Zhabeshi
Morning trek through the forested slopes of Mulkhra valley. Pass traditional hamlets and alpine meadows. Arrive in Zhabeshi, a charming Svan village surrounded by stone towers. Overnight in guesthouse.

Day 3 – Zhabeshi → Adishi
Climb gradually toward Tetnuldi ski area with stunning views of Mount Tetnuldi (4,858 m). Descend to Adishi, one of the oldest and most isolated settlements in Svaneti.

Day 4 – Adishi → Iprali
Cross the Adishi Glacier River on horseback, then ascend to Chkhunderi Pass (2,700 m) — magnificent panorama of the Adishi valley. Descend to Iprali for dinner and rest.

Day 5 – Iprali → Ushguli → Mestia
Morning hike to Ushguli (2,200 m) — the highest permanently inhabited village in Europe, a UNESCO World Heritage Site. Explore ancient towers and Lamaria Church with views of Mount Shkhara (5,193 m). Transfer back to Mestia by jeep.

⸻

🏞️ 2. 8-Day Trekking Tour — “Across the High Caucasus: Svaneti Expedition”

Duration: 8 days / 7 nights
Difficulty: Moderate to challenging
Best season: June – September

Overview

A full-scale adventure across the Greater Caucasus — from lush valleys to glacier viewpoints and remote alpine passes. This route combines culture, adventure, and solitude, perfect for experienced hikers.

Itinerary

Day 1 – Arrival in Mestia
Welcome to Svaneti! Short walk through old Mestia, visit Ethnographic Museum and Khergiani Tower.

Day 2 – Mestia → Tsvirmi → Zhabeshi
Trek through pine forests and flowered slopes to Tsvirmi village, known for its medieval Svan towers. Continue to Zhabeshi.

Day 3 – Zhabeshi → Adishi
Ascend to the Tetnuldi ridge, enjoy views over the Enguri valley and Tetnuldi Glacier. Descend to Adishi, one of the most picturesque Svan villages.

Day 4 – Adishi → Khalde → Iprali
Morning river crossing (horseback) and climb to Chkhunderi Pass. Continue through Khalde, a village of stone ruins with a tragic 19th-century history. Overnight in Iprali.

Day 5 – Iprali → Ushguli
Follow the Enguri river to Ushguli, the highest village in Europe. Visit Lamaria Church, admire Mount Shkhara, and wander through ancient lanes.

Day 6 – Ushguli → Koruldi Lakes
Drive to Mestia, then hike to the Koruldi Lakes (2,850 m), reflecting peaks of Ushba and Tetnuldi. Overnight in tent or guesthouse in Mestia.

Day 7 – Heshkili Ridge Trail
Panoramic day hike along Heshkili ridge, one of the most scenic trails above Mestia, with full 360° views of the Caucasus range.

Day 8 – Departure
Free morning in Mestia for souvenirs or short walk, then departure toward Kutaisi or Tbilisi.

⸻

🍲 3. 5-Day Cultural Tour — “Svaneti Heritage & Flavors”

Duration: 5 days / 4 nights
Focus: Culture, cuisine, and traditions
Best season: Year-round

Overview

A rich cultural journey through Upper Svaneti combining heritage, village life, and local cuisine. Discover ancient towers, visit remote mountain settlements, and learn to cook kupdari — Svaneti’s famous meat pie — during a hands-on masterclass.

Itinerary

Day 1 – Arrival in Mestia
Welcome to the mountain capital of Svaneti. Visit the Svaneti History and Ethnography Museum and the Mikheil Khergiani House-Museum. Evening walk through old Mestia and dinner with local family.

Day 2 – Mestia → Ushguli Excursion
Travel to Ushguli (UNESCO World Heritage Site) — a village frozen in time at 2,200 m. Explore Lamaria Church, the medieval towers of Chazhashi, and enjoy panoramic views of Mount Shkhara. Lunch in a traditional Svan house. Return to Mestia for overnight & Svan Feast
Jeep excursion to Koruldi Lakes, a spectacular viewpoint over Mount Ushba. Picnic lunch by the lake. Return to Mestia and enjoy an evening Svan feast (supra) with local songs and toasts.

Day 5 – Farewell Morning & Departure
Visit a local market or small cheese farm. Optional light walk to Hatsvali viewpoint for a final panorama of the Svaneti range. Depart for Kutaisi or Tbilisi.`,
    img: 'https://noplacelikeoutside.be/wp-content/uploads/2019/11/1-Op-weg-naar-Guli-pass-Mount-Ushba-op-de-achtergrond-3000x2000.jpg'
  },
  '3-Day Jeep Adventure in Tusheti, Georgia': {
    title: '3-Day Jeep Adventure in Tusheti, Georgia',
    description: `Off-Road Expedition through the Caucasus Mountains

Overview
This 3-day jeep tour is the ultimate way to discover one of Georgia’s most remote and breathtaking regions — Tusheti. You’ll travel in a 4×4 vehicle along the legendary Abano Pass (2 850 m) — one of the most dramatic mountain roads in Europe — and explore ancient stone villages, medieval towers, and untouched alpine landscapes. It’s a perfect blend of adventure, culture, and nature.

⸻

Itinerary

Day 1 – Tbilisi → Abano Pass → Omalo
	•	Early morning departure from Tbilisi.
	•	Scenic drive through Kakheti wine region and up the Abano Pass — breathtaking views over the Greater Caucasus.
	•	Arrival in Omalo, the heart of Tusheti.
	•	Visit Keselo Towers, a symbol of Tushetian defense and spirit.
	•	Dinner and overnight stay in a cozy mountain guesthouse.

Day 2 – Omalo → Dartlo → Shenako → Diklo
	•	Breakfast with panoramic mountain views.
	•	Jeep ride to Dartlo, one of the most picturesque villages in Georgia, famous for its stone towers and terraces.
	•	Continue to Kvavlo and Shenako, where ancient churches and local artisans preserve centuries-old traditions.
	•	Visit Diklo Fortress, perched above the valley at the border with Dagestan.
	•	Return to Omalo for dinner and local wine tasting. Overnight in guesthouse.

Day 3 – Omalo → Alaverdi Monastery → Tbilisi
	•	After breakfast, descend from the mountains via Abano Pass.
	•	Stop at Alaverdi Monastery in Kakheti — an 11th-century cathedral surrounded by vineyards.
	•	Enjoy traditional Georgian lunch with local wine tasting.
	•	Evening arrival in Tbilisi.

⸻

Highlights
	•	Off-road 4×4 adventure through the most remote mountain region of Georgia.
	•	Spectacular scenery: alpine meadows, deep gorges, medieval watchtowers.
	•	Authentic Tushetian culture and hospitality.
	•	Visits to Dartlo, Shenako, Diklo, Omalo, and Alaverdi Monastery.
	•	Comfortable guesthouse stays with homemade meals and local wine.

⸻

Tour Details
	•	Duration: 3 days / 2 nights
	•	Route: Tbilisi – Abano Pass – Omalo – Dartlo – Shenako – Diklo – Alaverdi – Tbilisi
	•	Season: June – September (road open)
	•	Difficulty: Easy / moderate (no long hikes)
	•	Included: Jeep with driver-guide, fuel, accommodation, meals, entrance fees, wine tasting`,
    img: 'https://reiseziel-kaukasus.de/wp-content/uploads/2022/12/Jeep-Tour-Georgien15.jpg'
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
              <a className="btn" href="/destination">Back to destinations</a>
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
    'Ski & Culture Adventure in Georgia — 10 Days',
    '5-Day Trekking Tour Overview',
    '7-Day Trekking Tour Overview',
    'Svaneti, Georgia',
    '5-Day Trekking Tour — “Peaks & Valleys of Svaneti”',
    'kazbegi-tour-from-tbilisi',
    'Top-ski-resorts',
    'Flavors of Georgia — Wine & Culture Tour 5 Days',
    'Mountain Legends Kazbegi Svaneti Expedition 10 Days',
    'Hidden Georgia — Canyons, Caves & Waterfalls (7 Days)',
    'Ancient Kingdoms — Historical Georgia Discovery (8 Days)',
    'Georgia Grand Circle — From Mountains to the Sea (14 Days)',
    'About',
    '3-Day Jeep Adventure in Tusheti, Georgia'
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
            <h1 className="title-contnt">About</h1>

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
