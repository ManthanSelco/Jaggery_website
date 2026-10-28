// Generated from more-case-studies.html. Page text is unchanged from the static site; t() shows it in the chosen language.
import { Link } from 'react-router-dom';
import MediaSlot from '../components/MediaSlot.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';
import { SlotsProvider } from '../lib/slots.jsx';
import '../styles/pages/more-case-studies.css';

export default function MoreCaseStudies() {
  const t = useT();
  usePageTitle(t("Jaggery · More case studies"));
  return (
    <SlotsProvider page="more-case-studies">
    <div className="pg pg-more-case-studies">
      {" "}
      <SiteHeader active="/more-case-studies" />
      {" "}
      <section className="page-hero" data-hero="more-case-studies">
        <HeroBackdrop image="/hero/more-case-studies.jpg" />
        {" "}
        <div className="wrap" style={{ paddingTop: "48px", paddingBottom: "44px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {" "}
          <div style={{ fontSize: "14px", fontWeight: "600" }}>
            <Link to="/">{t("Home")}</Link>
            {t(" / More case studies")}
          </div>
          {" "}
          <div className="eyebrow">{t("Case studies similar to SELCO's")}</div>
          {" "}
          <h1 style={{ fontSize: "52px", lineHeight: "1.05", fontWeight: "600" }} id="h-more-jaggery-stories-from-across-india">{t("More jaggery stories from across India")}</h1>
          {" "}
          <p style={{ fontSize: "19px", lineHeight: "1.5", maxWidth: "780px" }}>
            {t("Technologies built for small producers, farmers who built their own brands, and the traditional clusters where most jaggery is still made. Each story lists the source it comes from.")}
          </p>
          {" "}
          <nav aria-label="Story groups" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
            {" "}
            <a href="#tech" className="tag" style={{ background: "#C97B5E", color: "#1F2A24", textDecoration: "none", padding: "10px 14px" }}>{t("Technology for small producers · 6")}</a>
            {" "}
            <a href="#producers" className="tag" style={{ background: "#C97B5E", color: "#1F2A24", textDecoration: "none", padding: "10px 14px" }}>{t("Producers and entrepreneurs · 4")}</a>
            {" "}
            <a href="#clusters" className="tag" style={{ background: "#C97B5E", color: "#1F2A24", textDecoration: "none", padding: "10px 14px" }}>{t("Traditional clusters · 4")}</a>
            {" "}
            <Link to="/case-study" className="tag" style={{ background: "transparent", color: "#fff", border: "2px solid #F3EAE1", textDecoration: "none", padding: "8px 14px" }}>{t("SELCO case study: Mrs. Soumya →")}</Link>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="wrap" style={{ paddingBottom: "80px" }}>
        {" "}
        <section id="tech" className="grp">
          {" "}
          <div className="eyebrow">{t("Group 1")}</div>
          {" "}
          <h2 style={{ fontSize: "36px", fontWeight: "600" }}>{t("Technology for small producers")}</h2>
          {" "}
          <p style={{ color: "#5F6B63", fontSize: "17px" }}>{t("Closest to SELCO's model.")}</p>
          {" "}
          <div className="grid">
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-1" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Sarvaay REJP plant, Pune")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Pune, Maharashtra")}</span>
              {" "}
              <h3>{t("Sarvaay (REJP)")}</h3>
              {" "}
              <p style={{ fontSize: "15px" }}>{t("Built by Dr Vishal Sardeshpande (IIT Bombay) and Madhavi Sardeshpande.")}</p>
              {" "}
              <ul>
                {" "}
                <li>{t("Skid-mounted, semi-automatic plant making 500-600 kg of jaggery a day, designed to run without a jaggery expert")}</li>
                {" "}
                <li>{t("Uses natural clarifiers (okra sap, lime), a redesigned furnace and a sensor controller")}</li>
                {" "}
                <li>{t("Research from 2010, pilots by 2016, patent in 2020, full plant running since 2021")}</li>
                {" "}
                <li>{t("Funded with about ₹3 crore of own savings; claims over 50% repeat buyers and payback under 2.5 years")}</li>
                {" "}
                <li>{t("Closest example of technology replacing the scarce skilled worker")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Sources: ")}
                <a href="https://newskarnataka.com/karnataka/iit-ncl-scientists-develop-patented-technology-to-standardise-chemical-free-jaggery/13122025/">{t("News Karnataka, Dec 2025")}</a>
                {" · "}
                <a href="https://www.venturecenter.co.in/socialinnovations/wp-content/uploads/2020/12/Presentation-Vishal.pdf">{t("REJP presentation, Venture Center (PDF)")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-2" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("IIT Bombay mobile jaggery plant on a tractor trolley")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Maharashtra · 2021")}</span>
              {" "}
              <h3>{t("IIT Bombay mobile jaggery plant")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Mounted on a tractor trolley so it goes to the cane field")}</li>
                {" "}
                <li>{t("Built for consistent quality with little manual work")}</li>
                {" "}
                <li>{t("Co-funded by the Maharashtra Rajiv Gandhi S&T Commission and IIT Bombay's Tata Centre")}</li>
                {" "}
                <li>{t("No capacity, cost or field results published")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Source: ")}
                <a href="https://iitb.ac.in/breaking-news/iit-bombay-launches-online-mobile-jaggery-plant">{t("IIT Bombay news release, Feb 2021")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-3" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Liquid jaggery (kakvi) bottles, Kolhapur")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Kolhapur, Maharashtra")}</span>
              {" "}
              <h3>{t("IIT Bombay RuTAG (Prof. Narendra Shah)")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Improved process, hygiene and packaging of liquid jaggery (kakvi) so small units could sell it as a branded product")}</li>
                {" "}
                <li>{t("A typical Kolhapur unit crushes 1-3 tonnes of cane a day; one producer makes about 1.5 tonnes of kakvi a season")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Source: ")}
                <a href="https://www.indiascienceandtechnology.gov.in/technologies/process-and-product-improvements-kolhapur-type-jaggery-making-unit-possibilities-value-addition">{t("India Science & Technology portal, RuTAG IIT Bombay project")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-4" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Biomass gasifier at the Gokak common facility")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Gokak, Belagavi, Karnataka")}</span>
              {" "}
              <h3>{t("TERI gasifier common facility")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Five jaggery units share one biomass gasifier, over 70% efficient vs under 30% for a bagasse fire")}</li>
                {" "}
                <li>{t("Local company Phoenix Products buys the units' bagasse and supplies pellets or wood as fuel")}</li>
                {" "}
                <li>{t("Problem solved: units were burning old tyres because their bagasse wasn't enough")}</li>
                {" "}
                <li>{t("Context: about 2,500 units in Gokak, 7,000 in Karnataka, 40,000 in India")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Source: ")}
                <a href="https://www.wisions.net/study/setting-up-an-innovative-jaggery-processing-cluster-level-cfc-model-through-a-thermal-biomass-gasifier-system-in-the-state-of-karnataka/">{t("WISIONS project page, TERI Gokak gasifier CFC")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-5" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("IISR modern jaggery unit with three-pan furnace")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Lucknow, Uttar Pradesh")}</span>
              {" "}
              <h3>{t("IISR Lucknow modern unit model (Dr Dilip Kumar)")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("₹15 lakh investment, 10 quintals of jaggery a day for 200 days")}</li>
                {" "}
                <li>{t("Claimed ₹35-40 lakh a year after expenses (no selling price given to check this)")}</li>
                {" "}
                <li>{t("Three-pan furnace cuts boiling from 1.5-2 hours to about 45 minutes")}</li>
                {" "}
                <li>{t("10 HP crusher gets 60-65 kg juice per 100 kg cane, vs 45 kg on old machines")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Sources: ")}
                <a href="https://eng.kisanofindia.com/agriculture-business-ideas/know-how-you-can-earn-by-modern-jaggery-unit">{t("Kisan of India: modern jaggery unit")}</a>
                {" · "}
                <a href="https://iisr.icar.gov.in/iisr/pages/jaggery.jsp">{t("IISR Jaggery Unit page")}</a>
                {" · "}
                <a href="https://icar.org.in/en/node/10241">{t("ICAR: Piprakothi unit, Bihar")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc" style={{ border: "2px solid #E3865F" }}>
              {" "}
              <MediaSlot id="more-case-studies-6" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Mandya or Mudhol jaggery park")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#FAEEE8", color: "#8A3A27", alignSelf: "flex-start" }}>{t("Mandya and Mudhol, Karnataka · lesson learned")}</span>
              {" "}
              <h3>{t("Jaggery parks: a cautionary tale")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Mandya (2011): ₹8 crore, 60-70 quintals a day, run by UAS Bangalore")}</li>
                {" "}
                <li>
                  {t("Mudhol (2011): organic jaggery park that later shut; farmers couldn't afford crushing charges or meet minimum volumes, and staffing and maintenance broke down")}
                </li>
                {" "}
                <li>{t("Supports SELCO's small, owner-run model over large shared parks")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Sources: ")}
                <a href="https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fjaggery-park-opened-mandya-2410134">{t("Deccan Herald: Mandya jaggery park, 2011")}</a>
                {" · "}
                <a href="https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fa-sweet-legacy-3402693">{t("Deccan Herald: A sweet legacy (Mudhol park)")}</a>
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="producers" className="grp">
          {" "}
          <div className="eyebrow">{t("Group 2")}</div>
          {" "}
          <h2 style={{ fontSize: "36px", fontWeight: "600" }}>{t("Producer and entrepreneur stories")}</h2>
          {" "}
          <div className="grid">
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-7" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Mahalingappa Itnal with flavoured jaggery")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Sanganatti, Bagalkot, Karnataka")}</span>
              {" "}
              <h3>{t("Mahalingappa Itnal")}</h3>
              {" "}
              <ul>
                {" "}
                <li>
                  {t("Class 10 dropout who ran a cycle repair shop; switched to chemical-free jaggery after seeing a child treated in hospital for eating chemical-laced jaggery")}
                </li>
                {" "}
                <li>{t("Buys cane from several farmers; produces about 2.5 tonnes a day")}</li>
                {" "}
                <li>{t("Sells flavoured jaggery (ginger, cardamom, pepper, ashwagandha and others); supplies 30 tonnes to six countries including the Gulf")}</li>
                {" "}
                <li>{t("Now testing jaggery from jowar stalks")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Sources: ")}
                <a href="https://english.udayavani.com/article/this-hubli-farmer-produces-11-different-flavors-of-jaggery/903414">{t("Udayavani: flavoured jaggery")}</a>
                {" · "}
                <a href="https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fa-sweet-legacy-3402693">{t("Deccan Herald: A sweet legacy")}</a>
                {" · "}
                <a href="https://www.etvbharat.com/en/!offbeat/karnataka-farmer-makes-jaggery-from-corn-stalks-a-first-in-india-enn25100405195">{t("ETV Bharat: jowar stalk jaggery")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-8" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("CANE FARMS products")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Gurdaspur, Punjab")}</span>
              {" "}
              <h3>{t("Kaushal Singh, CANE FARMS")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Grows organic cane and runs his own unit and brand, mentored by Punjab Agricultural University")}</li>
                {" "}
                <li>{t("Self-reported sales: ₹1.5-2 lakh a day, up to ₹8 crore in peak season")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Source: ")}
                <a href="https://venturelinkup.com/2025/02/26/kaushal-singh-how-a-young-farmer-transformed-jaggery-into-a-golden-business-opportunity/">{t("VentureLinkup: Kaushal Singh, CANE FARMS")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-9" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Organic jaggery powder, Tirunelveli")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Tirunelveli, Tamil Nadu")}</span>
              {" "}
              <h3>{t("Anthonisamy (cited by PIB, 2026)")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Organic powder sells at about ₹75/kg vs ₹50/kg for conventional")}</li>
                {" "}
                <li>{t("Both cost about ₹30/kg to make")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Source: ")}
                <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2261676&reg=3&lang=2">{t("PIB: Jaggery production and processing, May 2026")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc" style={{ background: "#E5ECE3", borderColor: "#C3D2C3" }}>
              {" "}
              <span className="tag" style={{ background: "#4E6B55", color: "#fff", alignSelf: "flex-start" }}>{t("Pandavapura, Mandya, Karnataka · SELCO")}</span>
              {" "}
              <h3>{t("Mrs. Soumya (SELCO)")}</h3>
              {" "}
              <p style={{ fontSize: "15px", lineHeight: "1.5" }}>{t("The SELCO case study, for comparison: a solar-powered crusher took her unit from not running to 1,000-2,000 kg of organic jaggery a month.")}</p>
              {" "}
              <Link to="/case-study" className="btn" style={{ background: "#4E6B55", color: "#fff", alignSelf: "flex-start" }}>{t("Read the full case study")}</Link>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="clusters" className="grp">
          {" "}
          <div className="eyebrow">{t("Group 3")}</div>
          {" "}
          <h2 style={{ fontSize: "36px", fontWeight: "600" }}>{t("Traditional clusters")}</h2>
          {" "}
          <p style={{ color: "#5F6B63", fontSize: "17px" }}>{t("How the real ecosystem runs.")}</p>
          {" "}
          <div className="grid">
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-10" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Neikkarapatti jaggery auction / family unit")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Neikkarapatti, Dindigul, Tamil Nadu")}</span>
              {" "}
              <h3>{t("Neikkarapatti family units")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("75 family-run units; work runs 2 am to 4 pm, seven batches a day")}</li>
                {" "}
                <li>{t("Sold in 30 kg bags at five auction centres for ₹1,200-1,500 a bag")}</li>
                {" "}
                <li>{t("Buyers: Kerala traders, hotels, temples, Ayurvedic makers")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Source: ")}
                <a href="https://scroll.in/article/869827/in-this-tamil-nadu-village-making-jaggery-is-a-family-affair">{t("Scroll: In this Tamil Nadu village, making jaggery is a family affair")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-11" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Marayoor jaggery balls and farm shed")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Marayoor, Idukki, Kerala · GI-tagged")}</span>
              {" "}
              <h3>{t("Marayoor")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Made on the farm in a temporary shed")}</li>
                {" "}
                <li>{t("Travelling teams from Onakkallur (Udumalpet, Tamil Nadu) set up, make the jaggery, dismantle the shed and move to the next farm for a fee")}</li>
                {" "}
                <li>{t("A cooperative bank runs a unit where farmers bring cane and pay a small rent")}</li>
                {" "}
                <li>{t("Losing to knock-offs")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Source: ")}
                <a href="https://www.thenewsminute.com/article/idukkis-special-marayoor-jaggery-faces-threat-knockoffs-falling-prices-95054">{t("The News Minute: Marayoor jaggery, Jan 2019")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-12" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Muzaffarnagar kolhu")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Muzaffarnagar, Uttar Pradesh")}</span>
              {" "}
              <h3>{t("Muzaffarnagar kolhus")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Kolhu operator Abrar Ahmad (older article, date not given): 10 workers, about ₹1.5 lakh setup, about ₹5 lakh earned over an 8-month season")}</li>
                {" "}
                <li>{t("A 2020 CSE visit counted about 800 kolhus; a typical one uses 15,000 kg cane a day for 2,000 kg jaggery and costs about ₹4 lakh to set up")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Sources: ")}
                <a href="https://www.downtoearth.org.in/coverage/jaggery-made-using-timetested-method-is-more-wholesome-5501">{t("Down To Earth: Abrar Ahmad's kolhu")}</a>
                {" · "}
                <a href="https://www.downtoearth.org.in/pollution/hand-holding-must-to-make-india-s-jaggery-units-sustainable-74613">{t("Down To Earth: CSE visit, Dec 2020")}</a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="sc">
              {" "}
              <MediaSlot id="more-case-studies-13" kind="photo">
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Mandya aalemane")}</span>
              </MediaSlot>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Mandya, Karnataka · 2015 report")}</span>
              {" "}
              <h3>{t("Mandya aalemanes")}</h3>
              {" "}
              <ul>
                {" "}
                <li>{t("Down from about 5,000 units to about 500")}</li>
                {" "}
                <li>{t("About 10 workers per unit, 25 with two shifts")}</li>
                {" "}
                <li>{t("Margin about ₹300 per quintal, about ₹1.8-2.1 lakh a season")}</li>
                {" "}
              </ul>
              {" "}
              <div className="src">
                {t("Source: ")}
                <a href="https://kavithakuruganti.wordpress.com/2015/09/13/reviving-the-aalemanesjaggery-units-of-karnataka/">{t("Kavitha Kuruganti: Reviving the Aalemanes of Karnataka, Sept 2015")}</a>
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        
        {" "}
      </div>
      {" "}
      <SiteFooter />
    </div>
    </SlotsProvider>
  );
}
