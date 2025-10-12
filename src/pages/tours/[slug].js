import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import './tour.css'; // styles for this page

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
  'ski-snowboard-lessons-gudauri': {
    title: 'Ski & Snowboard Lessons in Gudauri',
    description: 'Private and group lessons for all levels in Gudauri — experienced instructors and gentle slopes.',
    img: '/winter.webp'
  },
  'one-day-ski-tour-gudauri': {
    title: 'One Day Ski Tour in Gudauri',
    description: 'A compact ski day trip from Tbilisi with transfers, lift passes and optional rental equipment.',
    img: '/kazbegi.jpg'
  },
  'transfers-gudauri-from-tbilisi': {
    title: 'Transfers to Gudauri from Tbilisi',
    description: 'Reliable transfers to and from Gudauri — private cars, shared shuttles or bespoke transport.',
    img: '/tbilisi.webp'
  },
  'winter-hike-borjomi': {
    title: 'Winter Hike in Borjomi',
    description: 'Snowshoe hikes and winter trails in Borjomi with picturesque forests and spa town visits.',
    img: '/tusheti.jpg'
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
              <Link className="btn btn-outline" href="/destination">Back to destinations</Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="tour-main">
        <div className="tour-container">
          <header className="page-head">
            <h1 className="title">{tour.title}</h1>
            <span className="accent-bar" aria-hidden="true"></span>
          </header>

          <section className="tour-card">
            <div className="tour-hero">
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="hero-img"
                priority
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>

            <div className="tour-content">
              <p className="lead">{tour.description}</p>

              {/* actions — routes unchanged */}
              <div className="actions">
                <Link className="btn btn-outline" href="/destination">Back to destinations</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
