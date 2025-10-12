
import styles from "./page.module.css";
import Navbar from "@/components/Navbar.js";
import Hero from "@/components/hero.js";
import Evnts from "@/components/evnts.js";
import Journeys from "@/components/journys.js";
import Lastevnt from "@/components/lastevent.js";
import Coments from "@/components/coments.js";
import './globals.css';
export default function Home() {
  return (
    <div className={styles.page}>
<Navbar />
<Hero/>
<Evnts/>
<Journeys/>
<Lastevnt/>
<Coments/>
    </div>
  );
}
