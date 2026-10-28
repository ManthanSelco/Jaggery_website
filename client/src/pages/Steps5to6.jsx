// Generated from steps-5-6-clarify-and-boil.html. Page text is unchanged from the static site; t() shows it in the chosen language.
import { Link } from 'react-router-dom';
import MediaSlot from '../components/MediaSlot.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';
import { SlotsProvider } from '../lib/slots.jsx';
import '../styles/pages/steps-5-6.css';

export default function Steps5to6() {
  const t = useT();
  usePageTitle(t("Jaggery · Steps 5-6 · Clarify and boil"));
  return (
    <SlotsProvider page="steps-5-6">
    <div className="pg pg-steps-5-6">
      {" "}
      <SiteHeader active="/steps">
        <div style={{ borderTop: "1px solid #E4DCD1", background: "#fff" }}>
          {" "}
          <nav aria-label="Steps" className="wrap stepper" style={{ display: "flex", gap: "2px", overflowX: "auto", paddingTop: "6px", paddingBottom: "6px", alignItems: "center" }}>
            {" "}
            <span style={{ fontSize: "12px", fontWeight: "800", color: "#4E6B55", paddingRight: "8px", whiteSpace: "nowrap" }}>{t("PART A")}</span>
            {" "}
            <Link to="/steps-1-4-cane-to-juice#s1">
              <span>{"1"}</span>
              {t("Harvest")}
            </Link>
            {" "}
            <Link to="/steps-1-4-cane-to-juice#s2">
              <span>{"2"}</span>
              {t("Clean")}
            </Link>
            {" "}
            <Link to="/steps-1-4-cane-to-juice#s3">
              <span>{"3"}</span>
              {t("Crush")}
            </Link>
            {" "}
            <Link to="/steps-1-4-cane-to-juice#s4">
              <span>{"4"}</span>
              {t("Filter")}
            </Link>
            {" "}
            <span style={{ fontSize: "12px", fontWeight: "800", color: "#A55D42", padding: "0 8px", whiteSpace: "nowrap" }}>{t("PART B")}</span>
            {" "}
            <a href="#s5">
              <span style={{ background: "#A55D42", borderColor: "#A55D42", color: "#fff" }}>{"5"}</span>
              {t("Clarify")}
            </a>
            {" "}
            <a href="#s6">
              <span style={{ background: "#A55D42", borderColor: "#A55D42", color: "#fff" }}>{"6"}</span>
              {t("Boil")}
            </a>
            {" "}
            <a href="#fuel">
              <span style={{ background: "#A55D42", borderColor: "#A55D42", color: "#fff" }}>{t("F")}</span>
              {t("Fuel")}
            </a>
            {" "}
            <span style={{ fontSize: "12px", fontWeight: "800", color: "#1F2A24", padding: "0 8px", whiteSpace: "nowrap" }}>{t("PART C")}</span>
            {" "}
            <Link to="/steps-7-11-cool-to-market#s7">
              <span>{"7"}</span>
              {t("Cool")}
            </Link>
            {" "}
            <Link to="/steps-7-11-cool-to-market#s8">
              <span>{"8"}</span>
              {t("Shape")}
            </Link>
            {" "}
            <Link to="/steps-7-11-cool-to-market#s9">
              <span>{"9"}</span>
              {t("Dry")}
            </Link>
            {" "}
            <Link to="/steps-7-11-cool-to-market#s10">
              <span>{"10"}</span>
              {t("Pack")}
            </Link>
            {" "}
            <Link to="/steps-7-11-cool-to-market#s11">
              <span>{"11"}</span>
              {t("Store")}
            </Link>
            {" "}
          </nav>
          {" "}
        </div>
      </SiteHeader>
      {" "}
      <section className="page-hero" data-hero="steps-5-6">
        <HeroBackdrop image="/hero/steps-5-6.jpg" />
        {" "}
        <div className="wrap" style={{ paddingTop: "48px", paddingBottom: "48px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {" "}
          <div style={{ fontSize: "14px", fontWeight: "600" }}>
            <Link to="/">{t("Home")}</Link>
            {t(" / 11 Steps / Part B")}
          </div>
          {" "}
          <div className="eyebrow">{t("Part B · Steps 5 and 6")}</div>
          {" "}
          <h1 style={{ fontSize: "54px", lineHeight: "1.05", fontWeight: "600" }} id="h-clarify-and-boil">{t("Clarify and boil")}</h1>
          {" "}
          <p style={{ fontSize: "19px", lineHeight: "1.5", maxWidth: "760px" }}>{t("The most skilled part of jaggery making. Clean the juice without harmful chemicals, then boil it to exactly the right temperature for the form you want.")}</p>
          {" "}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "6px" }}>
            {" "}
            <span className="tag" style={{ background: "#fff", color: "#6E3F2A" }}>{t("Juice pH 6.0-6.2")}</span>
            {" "}
            <span className="tag" style={{ background: "#fff", color: "#6E3F2A" }}>{t("Boil 2.5-3 hours")}</span>
            {" "}
            <span className="tag" style={{ background: "#fff", color: "#6E3F2A" }}>{t("Strike at 106-122°C by form")}</span>
            {" "}
            <span className="tag" style={{ background: "#fff", color: "#6E3F2A" }}>{t("No hydros")}</span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="wrap">
        {" "}
        <section id="s5" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"5"}</span>
            <div>
              <div className="eyebrow">{t("Step 5 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Clarify the juice")}</h2>
            </div>
          </div>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.55", maxWidth: "860px" }}>
            {t("Clarifying removes the fine dirt left in the juice. It decides whether your jaggery is light-coloured, crystalline, hard, hygienic and slow to absorb moisture. Quality, storage life and how buyers accept it all depend on how clear the juice is.")}
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-5-6-1" kind="video" style={{ flex: "2 1 460px", minHeight: "300px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 5 · Adding a natural clarifier and removing scum")}</b>
              <span className="mcap">{t("Preparing bhindi/deola mucilage, adding it to the juice before heating, scum rising and being skimmed off")}</span>
            </MediaSlot>
            {" "}
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {" "}
              <div className="card" style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {" "}
                <b>{t("Juice pH: where it is and where it should be")}</b>
                {" "}
                <div style={{ position: "relative", paddingTop: "28px", paddingBottom: "30px" }}>
                  {" "}
                  <div style={{ display: "flex", height: "18px", borderRadius: "9px", overflow: "hidden" }}>
                    <div style={{ flex: "3", background: "#E3865F" }} />
                    <div style={{ flex: "2", background: "#F2C55E" }} />
                    <div style={{ flex: "3", background: "#7FA383" }} />
                    <div style={{ flex: "2", background: "#C3D2C3" }} />
                  </div>
                  {" "}
                  <div style={{ position: "absolute", left: "12%", top: "0", fontSize: "12px", fontWeight: "800", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>{t("Raw 5.2-5.4")}</div>
                  {" "}
                  <div style={{ position: "absolute", left: "62%", top: "0", fontSize: "12px", fontWeight: "800", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>{t("Target 6.0-6.2")}</div>
                  {" "}
                  <div style={{ position: "absolute", left: "62%", top: "22px", width: "2px", height: "28px", background: "#1F2A24" }} />
                  {" "}
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginTop: "6px" }} className="muted">
                    <span>{t("pH 5.0")}</span>
                    <span>{t("pH 6.6")}</span>
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="muted" style={{ fontSize: "13px", lineHeight: "1.45" }}>{t("Raw pH depends on harvest stage, cane variety and soil. Traditional practice limes to 6.0-6.4; limed to 6.3-6.6 gives good quality hard jaggery.")}</span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "14px", border: "2px solid #4E6B55" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <h3 style={{ fontSize: "24px" }}>{t("Use natural clarifiers")}</h3>
              <span className="pill ok">{t("Recommended")}</span>
            </div>
            {" "}
            <p className="muted" style={{ lineHeight: "1.5" }}>
              {t("Add the plant extract to the juice ")}
              <b>{t("before heating")}</b>
              {t(". Keep pH at ")}
              <b>{"6.0-6.2"}</b>
              {t(". Natural clarifiers avoid going over chemical limits and protect taste and storage life. Quantities are per quintal (100 kg) of juice.")}
            </p>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Plant")}</th>
                    <th>{t("Part used")}</th>
                    <th>{t("How to prepare")}</th>
                    <th>{t("Per quintal juice")}</th>
                    <th>{t("Best for")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("Deola")}</b>
                      {t(" (wild okra)")}
                    </td>
                    <td>{t("Stem and root of green plant")}</td>
                    <td>{t("Pound, extract in water, use the slimy extract")}</td>
                    <td>
                      <b>{t("40-50 g")}</b>
                    </td>
                    <td>{t("General use")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Bhindi")}</b>
                      {t(" (okra)")}
                    </td>
                    <td>{t("Stem and root of green plant")}</td>
                    <td>{t("Pound, extract in water, use the slimy extract")}</td>
                    <td>
                      <b>{t("45-50 g")}</b>
                    </td>
                    <td>{t("Best at removing colour")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Phalsa")}</b>
                    </td>
                    <td>{t("Green bark of the tree")}</td>
                    <td>{t("Pound, extract in water, use the slimy extract")}</td>
                    <td>
                      <b>{t("50-55 g")}</b>
                    </td>
                    <td>{t("General use")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Semul")}</b>
                    </td>
                    <td>{t("Green bark of the tree")}</td>
                    <td>{t("Pound, extract in water, use the slimy extract")}</td>
                    <td>
                      <b>{t("55-60 g")}</b>
                    </td>
                    <td>{t("General use")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Sukhlai")}</b>
                    </td>
                    <td>{t("Dry bark")}</td>
                    <td>{t("Soak in water, pound, rub in water, use the extract")}</td>
                    <td>
                      <b>{t("45-60 g")}</b>
                    </td>
                    <td>{t("General use")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Castor")}</b>
                    </td>
                    <td>{t("Seed")}</td>
                    <td>{t("Grind peeled seed with water, strain, use the milky liquid")}</td>
                    <td>
                      <b>{t("70-75 g")}</b>
                    </td>
                    <td>{t("Juice of immature, waterlogged or pest-hit cane")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Groundnut")}</b>
                    </td>
                    <td>{t("Seed")}</td>
                    <td>{t("Grind peeled seed with water, strain, use the milky liquid")}</td>
                    <td>
                      <b>{t("70-75 g")}</b>
                    </td>
                    <td>{t("Juice of immature, waterlogged or pest-hit cane")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Soybean")}</b>
                    </td>
                    <td>{t("Seed")}</td>
                    <td>{t("Use as flour")}</td>
                    <td>
                      <b>{t("30-40 g")}</b>
                    </td>
                    <td>{t("Juice of immature, waterlogged or pest-hit cane")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px" }}>
              {" "}
              <MediaSlot id="steps-5-6-2" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Deola / bhindi stems and roots")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-5-6-3" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Pounding and soaking to make mucilage")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-5-6-4" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Castor / groundnut seed milk being strained")}</span>
              </MediaSlot>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "18px" }}>
            {" "}
            <div className="card">
              <h3 style={{ fontSize: "20px", marginBottom: "14px" }}>{t("Using lime correctly")}</h3>
              {" "}
              <ol className="steps">
                {" "}
                <li>
                  <span className="n">{"1"}</span>
                  <span>
                    {t("Mix ")}
                    <b>{t("1 kg lime")}</b>
                    {t(" (80-90% pure) with ")}
                    <b>{t("4 litres of water")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"2"}</span>
                  <span>
                    {t("Let it settle; filter the top lime water through a ")}
                    <b>{t("thick cloth")}</b>
                    {t(". This is milk of lime.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"3"}</span>
                  <span>
                    {t("Add ")}
                    <b>{t("60-70 ml")}</b>
                    {t(" of milk of lime for every ")}
                    <b>{t("100 kg of juice")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"4"}</span>
                  <span>
                    {t("Boil about ")}
                    <b>{t("2 hours")}</b>
                    {t(", removing scum each time it forms.")}
                  </span>
                </li>
                {" "}
              </ol>
              {" "}
              <p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", marginTop: "12px" }}>
                {t("Calcium in lime gathers impurities into scum. Lime also helps sucrose crystallise and firms up jaggery from over-matured cane. Too much lime makes it ")}
                <b>{t("dark")}</b>
                {t(". The amount depends on your lime's quality.")}
              </p>
              {" "}
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ fontSize: "20px" }}>{t("Then fine-filter")}</h3>
              {" "}
              <p className="muted" style={{ lineHeight: "1.5" }}>{t("After the clarifier, fine dirt floats up as scum. Skim it, then strain the juice through:")}</p>
              {" "}
              <ul className="li">
                <li>
                  <b>{t("Muslin / cotton cloth bags")}</b>
                  {t(": trap fine mud for clear juice")}
                </li>
                <li>
                  <b>{t("Nylon mesh")}</b>
                  {t(": filters to 50 microns, durable, easy to wash, won't rot")}
                </li>
              </ul>
              {" "}
              <MediaSlot id="steps-5-6-5" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Muslin cloth and nylon mesh filters in use")}</span>
              </MediaSlot>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <h3 style={{ fontSize: "22px" }}>{t("Chemical clarifiers: what they really do")}</h3>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Chemical")}</th>
                    <th>{t("What it does")}</th>
                    <th>{t("Effect on jaggery")}</th>
                    <th>{t("Effect on storage")}</th>
                    <th>{t("Verdict")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("Lime")}</b>
                      {t(" (calcium oxide)")}
                    </td>
                    <td>{t("Removes juice acidity, helps clarify")}</td>
                    <td>{t("Lime to pH 6.3-6.6 for good quality; firms jaggery from waterlogged, lodged cane. Excess: hard and dark")}</td>
                    <td>{t("Hard jaggery, stores better")}</td>
                    <td>
                      <span className="pill ok">{t("Use in right amount")}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Sodium carbonate")}</b>
                    </td>
                    <td>{t("Reduces acidity")}</td>
                    <td>{t("Helps settling; improves jaggery from poor cane")}</td>
                    <td>{t("Hard jaggery, stores better")}</td>
                    <td>
                      <span className="pill ok">{t("Acceptable")}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Phosphoric acid")}</b>
                    </td>
                    <td>{t("Clarifies")}</td>
                    <td>{t("Best golden-yellow colour")}</td>
                    <td>{t("Not stated")}</td>
                    <td>
                      <span className="pill warn">{t("Use with care")}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Alum")}</b>
                    </td>
                    <td>{t("Improves clarification; needs neutralising with lime/soda")}</td>
                    <td>{t("Settles impurities, improves colour for a while")}</td>
                    <td>{t("Reduces shelf life")}</td>
                    <td>
                      <span className="pill warn">{t("Shorter life")}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Super phosphate")}</b>
                    </td>
                    <td>{t("Raises natural acidity, improves colour")}</td>
                    <td>{t("Less crystallisation")}</td>
                    <td>{t("Reduces shelf life")}</td>
                    <td>
                      <span className="pill warn">{t("Shorter life")}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Sajji")}</b>
                      {t(" (50% sodium carbonate, 6.4% sodium sulphate, 4.5% sodium chloride)")}
                    </td>
                    <td>{t("Partly neutralises acidity, bleaches colour")}</td>
                    <td>{t("Brighter colour for a while; spoils taste")}</td>
                    <td>{t("Bad for storage")}</td>
                    <td>
                      <span className="pill bad">{t("Avoid")}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Sodium bicarbonate")}</b>
                    </td>
                    <td>{t("Bleaches colour")}</td>
                    <td>{t("Brighter colour for a while")}</td>
                    <td>{t("Spoils faster")}</td>
                    <td>
                      <span className="pill bad">{t("Avoid")}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Hydros")}</b>
                      {t(" (sodium hydrosulphite)")}
                    </td>
                    <td>{t("Bleaches colour")}</td>
                    <td>{t("Golden colour for a while; releases sulphur dioxide, harmful to health")}</td>
                    <td>{t("Darkens and spoils within a month")}</td>
                    <td>
                      <span className="pill bad">{t("Never use")}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
            <p className="muted" style={{ fontSize: "14px" }}>{t("Chemiflocks are also reported in use. Organic jaggery allows only organic clarifiers and a little lime.")}</p>
            {" "}
          </div>
          {" "}
          <div className="ppl">
            {" "}
            <div className="pplh">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" />
                <circle cx="17" cy="9" r="2.6" />
                <path d="M16.5 14.6c2.6.2 4.4 1.9 5 5.4" />
              </svg>
              {t("People at this step: clarifying")}
            </div>
            {" "}
            <div className="pplg">
              {" "}
              <div>
                <span className="pk">{t("Who does it")}</span>
                <ul>
                  <li>{t("In Karnataka the \"bella\" person watches the boiling vats and adds the clarifiers")}</li>
                  <li>{t("This is a skilled role and is paid more than other workers")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("How they earn")}</span>
                <ul>
                  <li>{t("Paid above the general piece rate of the unit (see Step 6 for wage levels)")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("Doing it best")}</span>
                <ul>
                  <li>{t("Mahalingappa Itnal, Bagalkot: chemical-free jaggery")}</li>
                  <li>{t("Sarvaay, Pune: okra sap and lime only")}</li>
                  <li>{t("IISR: 2 kg bhindi or phalsa juice per 1,000 litres of cane juice")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
            <div className="psrc">
              {t("Sources: ")}
              <a href="https://kavithakuruganti.wordpress.com/2015/09/13/reviving-the-aalemanesjaggery-units-of-karnataka/">{t("Kavitha Kuruganti, 2015 (Mandya)")}</a>
              {" · "}
              <a href="https://english.udayavani.com/article/this-hubli-farmer-produces-11-different-flavors-of-jaggery/903414">{t("Udayavani (Itnal)")}</a>
              {" · "}
              <a href="https://newskarnataka.com/karnataka/iit-ncl-scientists-develop-patented-technology-to-standardise-chemical-free-jaggery/13122025/">{t("News Karnataka (Sarvaay)")}</a>
              {" · "}
              <a href="https://iisr.icar.gov.in/iisr/pages/jaggery.jsp">{t("IISR Jaggery Unit")}</a>
              {" · "}
              <Link to="/more-case-studies">{t("More case studies")}</Link>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Traditional")}</span>
              <MediaSlot id="steps-5-6-6" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("pH balancing: additives stirred into the open pan by hand")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern")}</span>
              <MediaSlot id="steps-5-6-7" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("pH balancing: automatic clarifier dosing tanks")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Traditional")}</span>
              <MediaSlot id="steps-5-6-8" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Clarification: workers skimming scum with long ladles")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern")}</span>
              <MediaSlot id="steps-5-6-9" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Clarification: clarifier unit and process diagram")}</span>
              </MediaSlot>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="s6" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"6"}</span>
            <div>
              <div className="eyebrow">{t("Step 6 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Boil to the striking point")}</h2>
            </div>
          </div>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.55", maxWidth: "860px" }}>
            {t("Boiling drives the water out of the juice. The ")}
            <b>{t("striking point")}</b>
            {t(" is the temperature at which the thick syrup becomes jaggery. Each form of jaggery has its own.")}
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-5-6-10" kind="video" style={{ flex: "2 1 460px", minHeight: "300px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 6 · Boiling, scumming and the water-drop test")}</b>
              <span className="mcap">{t("Juice heated in pans over the furnace, scum skimmed, syrup thickening, a drop of syrup tested in cold water")}</span>
            </MediaSlot>
            {" "}
            <div className="card" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "12px", padding: "18px" }}>
              {" "}
              <b style={{ fontSize: "18px" }}>{t("Striking point thermometer")}</b>
              {" "}
              <div style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
                {" "}
                <div style={{ width: "26px", borderRadius: "13px", background: "linear-gradient(#C2410C,#F2C55E 60%,#F4E6DB)", border: "2px solid #1F2A24", minHeight: "230px" }} />
                {" "}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: "1", gap: "10px" }}>
                  {" "}
                  <div>
                    <b style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}>{t("120-122°C")}</b>
                    <div style={{ fontSize: "14px" }}>{t("Granular / powder")}</div>
                  </div>
                  {" "}
                  <div>
                    <b style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}>{t("118°C")}</b>
                    <div style={{ fontSize: "14px" }}>{t("Solid blocks (some sources say 120-122°C, varies with cane variety, stirring and cooling)")}</div>
                  </div>
                  {" "}
                  <div>
                    <b style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}>{t("106-107°C")}</b>
                    <div style={{ fontSize: "14px" }}>{t("Liquid jaggery")}</div>
                  </div>
                  {" "}
                  <div>
                    <b style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}>{t("80°C")}</b>
                    <div style={{ fontSize: "14px" }}>{t("Heat to here first, then skim the scum")}</div>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "18px" }}>
            {" "}
            <div className="card">
              <h3 style={{ fontSize: "20px", marginBottom: "14px" }}>{t("How to do it")}</h3>
              {" "}
              <ol className="steps">
                {" "}
                <li>
                  <span className="n">{"1"}</span>
                  <span>
                    {t("Move clear juice from the settling tank to the ")}
                    <b>{t("boiling pans")}</b>
                    {t(" over the pit furnace.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"2"}</span>
                  <span>
                    {t("Heat to ")}
                    <b>{t("80°C")}</b>
                    {t(". Impurities float up: remove them with a skimmer.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"3"}</span>
                  <span>
                    {t("Bring to the boil. Keep boiling in a steady, controlled way for ")}
                    <b>{t("2.5-3 hours or more")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"4"}</span>
                  <span>
                    {t("If it froths too much, sprinkle a ")}
                    <b>{t("little groundnut or mustard oil")}</b>
                    {t(". It also helps the hot syrup pour later.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"5"}</span>
                  <span>{t("Stir so it doesn't burn (a motor-driven pan stirrer takes over this hard job).")}</span>
                </li>
                {" "}
                <li>
                  <span className="n">{"6"}</span>
                  <span>
                    {t("As water evaporates, a thick yellow crystalline ")}
                    <b>{t("slurry")}</b>
                    {t(" forms.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"7"}</span>
                  <span>
                    {t("Check the striking point: thermometer, refractometer (58-92% scale), or the ")}
                    <b>{t("water-drop test")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"8"}</span>
                  <span>{t("At the striking point, take the pan off the fire and go to Step 7.")}</span>
                </li>
                {" "}
              </ol>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {" "}
              <div className="do">
                <h3 style={{ fontSize: "20px", color: "#33493A", marginBottom: "10px" }}>{t("The water-drop test")}</h3>
                {" "}
                <p style={{ lineHeight: "1.5" }}>
                  {t("Drop a little hot syrup into a container of cold water. If you can ")}
                  <b>{t("shape it with your fingers")}</b>
                  {t(", it has reached the striking point.")}
                </p>
                {" "}
                <MediaSlot id="steps-5-6-11" kind="photo" style={{ height: "140px", marginTop: "12px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Hand shaping a drop of syrup in cold water")}</span>
                </MediaSlot>
              </div>
              {" "}
              <div className="dont">
                <h3 style={{ fontSize: "20px", color: "#8A3A27", marginBottom: "10px" }}>{t("Why jaggery turns dark or bitter")}</h3>
                {" "}
                <ul className="li">
                  <li>{t("Uncontrolled heating: natural enzymes react and form dark compounds")}</li>
                  <li>{t("Overheating: sugars caramelise; dark colour, bitter taste")}</li>
                  <li>{t("Too much lime")}</li>
                  <li>{t("Iron leaching from iron pans")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {" "}
            <h3 style={{ fontSize: "22px" }}>{t("Choose your boiling pans")}</h3>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Pan system")}</th>
                    <th>{t("How it works")}</th>
                    <th>{t("Good")}</th>
                    <th>{t("Watch out")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("Single pan")}</b>
                    </td>
                    <td>{t("One big shallow pan over a brick fire pit; juice poured in, boiled and finished in the same pan")}</td>
                    <td>{t("Simple, cheap")}</td>
                    <td>{t("Wastes a lot of heat and fuel")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Multi-pan (2, 3 or 4 in a line)")}</b>
                    </td>
                    <td>{t("Fire hottest under the last pan; hot gases flow back to warm the first ones. Fresh juice goes in the first pan and moves forward as it thickens")}</td>
                    <td>{t("Fuel-efficient, faster. Standard for commercial units in India")}</td>
                    <td>{t("Needs a longer furnace and chimney")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Steam-jacketed pan")}</b>
                    </td>
                    <td>{t("Steam from a separate boiler heats the bottom and sides; no open fire")}</td>
                    <td>{t("Lighter, cleaner jaggery; saves up to 36% fuel")}</td>
                    <td>{t("Needs a boiler; for commercial units")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Pan with fins")}</b>
                    </td>
                    <td>{t("Metal ridges welded under the pan; fits traditional or multi-pan furnaces")}</td>
                    <td>{t("Absorbs more heat, less bagasse, faster boiling")}</td>
                    <td>{t("Modification cost")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Vacuum pan / multi-stage evaporator")}</b>
                    </td>
                    <td>{t("Juice boiled by steam in stainless steel stages, finished in a secondary concentrator; evaporated water recovered")}</td>
                    <td>{t("Fewer dark compounds; bagasse runs the steam boiler, surplus sold")}</td>
                    <td>{t("Large plants")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "12px", fontSize: "15px" }}>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "12px", padding: "14px" }}>
                <b>{t("Mild steel (MS)")}</b>
                <div className="muted" style={{ marginTop: "4px" }}>{t("Cheap, durable, traditional. Can rust; iron can darken jaggery")}</div>
              </div>
              {" "}
              <div style={{ background: "#E5ECE3", borderRadius: "12px", padding: "14px" }}>
                <b>{t("Stainless steel (SS 304)")}</b>
                <div style={{ marginTop: "4px" }}>{t("FSSAI-compliant, no rust, food safe. Preferred")}</div>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Cane per day")}</th>
                    <th>{t("Boiling setup")}</th>
                    <th>{t("Checking the end point")}</th>
                    <th>{t("Emptying the pan")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("1 tonne")}</b>
                    </td>
                    <td>{t("Single open pan, 1.2 m across")}</td>
                    <td>{t("Water-drop test, thread texture by hand")}</td>
                    <td>{t("Ladle out, or lift and tilt the hot pan")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("5 tonnes")}</b>
                    </td>
                    <td>{t("2- or 3-pan cascade line")}</td>
                    <td>{t("Hand-held digital refractometer")}</td>
                    <td>{t("Gravity drain valves to cooling")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("10 tonnes")}</b>
                    </td>
                    <td>{t("3- or 4-pan continuous line")}</td>
                    <td>{t("Digital temperature probes + continuous brix meters")}</td>
                    <td>{t("Tilting pans or sanitary discharge pumps")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("20 tonnes")}</b>
                    </td>
                    <td>{t("Multi-pan line or vacuum steam evaporator")}</td>
                    <td>{t("Inline sensors to a control panel")}</td>
                    <td>{t("Automatic pneumatic valves, closed pipes")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
          </div>
          {" "}
          <div className="ppl">
            {" "}
            <div className="pplh">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" />
                <circle cx="17" cy="9" r="2.6" />
                <path d="M16.5 14.6c2.6.2 4.4 1.9 5 5.4" />
              </svg>
              {t("People at this step: boiling")}
            </div>
            {" "}
            <div className="pplg">
              {" "}
              <div>
                <span className="pk">{t("Who does it")}</span>
                <ul>
                  <li>{t("Master boiler: in Kolhapur the gulvya judges the striking point by a palm test, often with 35 years of experience")}</li>
                  <li>{t("Skilled Bihari boiling masters are now scarce")}</li>
                  <li>{t("Helpers: 6 men lift the 300 kg kaahil (pan) and stir for about 15 minutes")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("How they earn")}</span>
                <ul>
                  <li>{t("Mandya (2015): piece rate, averaging about ₹250 a day")}</li>
                  <li>{t("Marayoor travelling teams: about ₹500 a day for men, ₹250 for women")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("Doing it best")}</span>
                <ul>
                  <li>{t("Sarvaay plant: runs without a jaggery expert, using sensors")}</li>
                  <li>{t("IISR three-pan furnace: boils a batch in about 45 minutes vs 1.5-2 hours")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
            <div className="psrc">
              {t("Sources: Kolhapur field study (research doc) · ")}
              <a href="https://kavithakuruganti.wordpress.com/2015/09/13/reviving-the-aalemanesjaggery-units-of-karnataka/">{t("Kavitha Kuruganti, 2015 (Mandya)")}</a>
              {" · "}
              <a href="https://www.thenewsminute.com/article/idukkis-special-marayoor-jaggery-faces-threat-knockoffs-falling-prices-95054">{t("The News Minute (Marayoor)")}</a>
              {" · "}
              <a href="https://newskarnataka.com/karnataka/iit-ncl-scientists-develop-patented-technology-to-standardise-chemical-free-jaggery/13122025/">{t("News Karnataka (Sarvaay)")}</a>
              {" · "}
              <a href="https://eng.kisanofindia.com/agriculture-business-ideas/know-how-you-can-earn-by-modern-jaggery-unit">{t("Kisan of India (IISR model)")}</a>
              {" · "}
              <Link to="/more-case-studies">{t("More case studies")}</Link>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Traditional")}</span>
              <MediaSlot id="steps-5-6-12" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Concentration in a large open pan with steam rising")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern")}</span>
              <MediaSlot id="steps-5-6-13" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Concentration in a stainless steel multi-stage line")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Tool")}</span>
              <MediaSlot id="steps-5-6-14" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Perforated skimmer removing foam")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Tool")}</span>
              <MediaSlot id="steps-5-6-15" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Motor-driven pan stirrer / agitator")}</span>
              </MediaSlot>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "14px" }}>
            {" "}
            <Link to="/machines#pans" className="mach">
              <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 10h18l-2 8H5z" />
                <path d="M8 6c0-1 1-2 1-3M12 6c0-1 1-2 1-3M16 6c0-1 1-2 1-3" />
              </svg>
              <div>
                <div className="eyebrow">{t("Equipment")}</div>
                <b style={{ fontSize: "18px" }}>{t("Boiling pans, skimmers, stirrers")}</b>
                <div className="muted" style={{ fontSize: "14px", marginTop: "4px" }}>{t("Machine guide →")}</div>
              </div>
            </Link>
            {" "}
            <Link to="/machines#refractometer" className="mach">
              <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <path d="M10 3h4v11a4 4 0 1 1-4 0z" />
              </svg>
              <div>
                <div className="eyebrow">{t("Tool")}</div>
                <b style={{ fontSize: "18px" }}>{t("Refractometer and thermometer")}</b>
                <div className="muted" style={{ fontSize: "14px", marginTop: "4px" }}>{t("58-92% scale for syrup →")}</div>
              </div>
            </Link>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="fuel" className="stage" style={{ paddingBottom: "72px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{t("F")}</span>
            <div>
              <div className="eyebrow">{t("Runs alongside Steps 3 to 6")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("The fire: bagasse as fuel")}</h2>
            </div>
          </div>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.55", maxWidth: "860px" }}>
            {t("The crushed cane fibre (bagasse) from Step 3 is the main fuel for boiling. Dried well and burned in an efficient furnace, it can cover all your heating at zero fuel cost.")}
          </p>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px" }}>
            {" "}
            <div className="stat">
              <b>{t("350 kg")}</b>
              <span>{t("wet bagasse per tonne of cane, 50% moisture")}</span>
            </div>
            {" "}
            <div className="stat">
              <b>{"→ 20%"}</b>
              <span>{t("moisture after sun drying")}</span>
            </div>
            {" "}
            <div className="stat">
              <b>{t("245-250 kg")}</b>
              <span>{t("dry fuel per tonne of cane")}</span>
            </div>
            {" "}
            <div className="stat">
              <b>{"14.75%"}</b>
              <span>{t("efficiency of a traditional open furnace")}</span>
            </div>
            {" "}
            <div className="stat" style={{ background: "#E5ECE3", borderColor: "#C3D2C3" }}>
              <b>{"₹0"}</b>
              <span>{t("fuel cost in the case study: bagasse fed back into the fire")}</span>
            </div>
            {" "}
          </div>
          {" "}
          <div className="ppl">
            {" "}
            <div className="pplh">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" />
                <circle cx="17" cy="9" r="2.6" />
                <path d="M16.5 14.6c2.6.2 4.4 1.9 5 5.4" />
              </svg>
              {t("People at this step: fuel")}
            </div>
            {" "}
            <div className="pplg">
              {" "}
              <div>
                <span className="pk">{t("Who does it")}</span>
                <ul>
                  <li>{t("Unit workers dry and feed bagasse")}</li>
                  <li>{t("Local fuel suppliers")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("How they earn")}</span>
                <ul>
                  <li>{t("Phoenix Products (Gokak) buys bagasse from units and sells pellets or wood as fuel")}</li>
                  <li>{t("Surplus bagasse is sold to paper mills (Muzaffarnagar)")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("Doing it best")}</span>
                <ul>
                  <li>{t("TERI Gokak: 5 units share one biomass gasifier, over 70% efficient")}</li>
                  <li>{t("Problem to avoid: units burning old tyres when bagasse runs short")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
            <div className="psrc">
              {t("Sources: ")}
              <a href="https://www.wisions.net/study/setting-up-an-innovative-jaggery-processing-cluster-level-cfc-model-through-a-thermal-biomass-gasifier-system-in-the-state-of-karnataka/">{t("WISIONS (TERI Gokak)")}</a>
              {" · "}
              <a href="https://www.downtoearth.org.in/pollution/hand-holding-must-to-make-india-s-jaggery-units-sustainable-74613">{t("Down To Earth (CSE, 2020)")}</a>
              {" · "}
              <Link to="/more-case-studies">{t("More case studies")}</Link>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {" "}
            <h3 style={{ fontSize: "24px" }}>{t("1 · Dry the bagasse")}</h3>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Traditional")}</span>
                <MediaSlot id="steps-5-6-16" kind="photo" style={{ height: "170px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Bagasse spread in the open field to sun dry")}</span>
                </MediaSlot>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern")}</span>
                <MediaSlot id="steps-5-6-17" kind="photo" style={{ height: "170px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Rotary bagasse dryer")}</span>
                </MediaSlot>
              </div>
              {" "}
              <div className="card" style={{ fontSize: "15px", lineHeight: "1.5" }}>
                {t("Sun dry from 50% to 20% moisture. IISR 2-pan furnaces add a ")}
                <b>{t("Waste Heat Recovery System")}</b>
                {t(" that uses leftover furnace heat to dry bagasse or jaggery. ")}
                <Link to="/plan-your-unit#furnace">{t("IISR furnaces →")}</Link>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {" "}
            <h3 style={{ fontSize: "24px" }}>{t("2 · Feed the fire")}</h3>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Traditional")}</span>
                <MediaSlot id="steps-5-6-18" kind="photo" style={{ height: "170px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Bagasse pushed by hand into the furnace mouth")}</span>
                </MediaSlot>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern")}</span>
                <MediaSlot id="steps-5-6-19" kind="photo" style={{ height: "170px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Bagasse-fired steam boiler with feed system")}</span>
                </MediaSlot>
              </div>
              {" "}
              <MediaSlot id="steps-5-6-20" kind="video" style={{ minHeight: "170px" }}>
                <span className="mtag">
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 4l13 8-13 8z" />
                  </svg>
                  {t("Insert video")}
                </span>
                <span className="mcap">{t("Bagasse feeding and furnace operation")}</span>
              </MediaSlot>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {" "}
            <h3 style={{ fontSize: "24px" }}>{t("3 · Choose the furnace")}</h3>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
              {" "}
              <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <MediaSlot id="steps-5-6-21" kind="photo" style={{ height: "120px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Grate furnace")}</span>
                </MediaSlot>
                <b>{t("Grate furnace")}</b>
                <span className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>{t("Bagasse burns on a grate; air flows from below for better burning")}</span>
              </div>
              {" "}
              <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <MediaSlot id="steps-5-6-22" kind="photo" style={{ height: "120px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Hearth furnace")}</span>
                </MediaSlot>
                <b>{t("Hearth furnace")}</b>
                <span className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>{t("Bagasse burns on the furnace floor; simpler but usually less efficient")}</span>
              </div>
              {" "}
              
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "14px" }}>
              {" "}
              <div className="do">
                <b style={{ color: "#33493A" }}>{t("Good fuels")}</b>
                <p style={{ marginTop: "6px", lineHeight: "1.5" }}>{t("Dried bagasse, dry sugarcane leaves, straw, wood, other farm residues")}</p>
              </div>
              {" "}
              <div className="dont">
                <b style={{ color: "#8A3A27" }}>{t("Avoid")}</b>
                <p style={{ marginTop: "6px", lineHeight: "1.5" }}>{t("Old tyres and other waste: harmful gases and smoke. Inefficient open burning gives smoke full of particles that pollutes the area")}</p>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Traditional")}</span>
              <MediaSlot id="steps-5-6-24" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Heat: worker feeding open fire under a large pan")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern")}</span>
              <MediaSlot id="steps-5-6-25" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Heat: steam lines and closed heating system")}</span>
              </MediaSlot>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginTop: "24px", borderTop: "1px solid #E4DCD1", paddingTop: "24px" }}>
            {" "}
            <Link to="/steps-1-4-cane-to-juice" className="btn" style={{ background: "#fff", color: "#1F2A24", border: "2px solid #1F2A24" }}>{t("← Part A · Cane to juice")}</Link>
            {" "}
            <Link to="/steps-7-11-cool-to-market" className="btn" style={{ background: "#1F2A24", color: "#fff" }}>{t("Next: Part C · Cool to market →")}</Link>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </div>
      {" "}
      <SiteFooter />
    </div>
    </SlotsProvider>
  );
}
