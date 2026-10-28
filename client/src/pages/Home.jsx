// Generated from index.html. Page text is unchanged from the static site; t() shows it in the chosen language.
import { Link } from 'react-router-dom';
import MediaSlot from '../components/MediaSlot.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';
import { SlotsProvider } from '../lib/slots.jsx';
import '../styles/pages/index.css';

export default function Home() {
  const t = useT();
  usePageTitle(t("Jaggery · Home"));
  return (
    <SlotsProvider page="index">
    <div className="pg pg-index">
      {" "}
      <SiteHeader active="/" transparent />
      {" "}
      <section className="page-hero" data-hero="index">
        <HeroBackdrop slotId="index-1" />
        {" "}
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", paddingTop: "64px", paddingBottom: "72px" }}>
          {" "}
          <div style={{ flex: "1 1 480px", display: "flex", flexDirection: "column", gap: "22px", minWidth: "0" }}>
            {" "}
            <div className="eyebrow">{t("SELCO Foundation · Livelihood value chains · Jaggery")}</div>
            {" "}
            <h1 style={{ fontSize: "62px", lineHeight: "1.02", fontWeight: "600" }} id="h-make-better-jaggery-from-your-sugarcane">{t("Make better jaggery from your sugarcane")}</h1>
            {" "}
            <p style={{ fontSize: "20px", lineHeight: "1.5", maxWidth: "560px" }}>
              {t("Every step from cutting the cane to selling the packet: what to do, which machine to use, the right temperatures and the right numbers. Built for farmers and jaggery makers.")}
            </p>
            {" "}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {" "}
              <Link to="/steps-1-4-cane-to-juice" className="btn" style={{ background: "#C97B5E", color: "#1F2A24" }}>
                {t("Start: the 11 steps ")}
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              {" "}
              <Link to="/plan-your-unit" className="btn" style={{ background: "transparent", color: "#fff", border: "2px solid #F3EAE1" }}>{t("Plan your unit")}</Link>
              {" "}
              <Link to="/case-study" className="btn" style={{ background: "transparent", color: "#fff", border: "2px solid #F3EAE1" }}>{t("Read a farmer's story")}</Link>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section style={{ background: "#C97B5E", height: "163px" }}>
        {" "}
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "24px", paddingTop: "28px", paddingBottom: "28px" }}>
          {" "}
          <div>
            <div className="stat-big" style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: "600" }}>{(() => { const [from, to] = t("100 kg → 12-13 kg").split(" → "); return to ? <><span style={{ whiteSpace: "nowrap" }}>{from} →</span>{" "}<span style={{ whiteSpace: "nowrap" }}>{to}</span></> : from; })()}</div>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>{t("Sugarcane Input, Jaggery Output")}</div>
          </div>
          {" "}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: "600" }}>{"80%"}</div>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>{t("of India's jaggery is made as solid blocks")}</div>
          </div>
          {" "}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: "600" }}>{t("2 years")}</div>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>{t("shelf life of powder dried to 1-2% moisture")}</div>
          </div>
          {" "}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: "600" }}>{t("3 months")}</div>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>{t("shelf life of high-moisture traditional jaggery")}</div>
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="wrap sec">
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {" "}
          <div className="eyebrow">{t("Know the product")}</div>
          {" "}
          <h2 className="h2" id="h-three-forms-of-jaggery">{t("Three forms of jaggery")}</h2>
          {" "}
          <p className="lead muted">
            {t("Sugarcane juice carries mud, wax and other impurities that must be removed. The process changes depending on the form you make, and from state to state and district to district.")}
          </p>
          {" "}
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "18px" }}>
            {" "}
            <MediaSlot id="index-2" kind="photo" style={{ height: "180px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("Solid jaggery blocks (gur): traditional blocks and cubes")}</span>
            </MediaSlot>
            {" "}
            <h3 style={{ fontSize: "24px" }} id="h-solid-block-gur">{t("Solid (block / gur)")}</h3>
            {" "}
            <p className="muted" style={{ lineHeight: "1.5" }}>{t("About 80% of jaggery made in India. Poured into moulds and set.")}</p>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "14px" }}>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>
                <div className="muted">{t("Striking point")}</div>
                <b>{t("118°C")}</b>
              </div>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>
                <div className="muted">{t("Water")}</div>
                <b>{t("3-10 g / 100 g")}</b>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "18px" }}>
            {" "}
            <MediaSlot id="index-3" kind="photo" style={{ height: "180px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("Liquid jaggery in a bottle or jar")}</span>
            </MediaSlot>
            {" "}
            <h3 style={{ fontSize: "24px" }} id="h-liquid">{t("Liquid")}</h3>
            {" "}
            <p className="muted" style={{ lineHeight: "1.5" }}>
              {t("Part of the daily diet in Maharashtra and West Bengal. Used as a sweetener in foods and drinks in Maharashtra, Gujarat, Kerala, Andhra Pradesh, West Bengal and Tamil Nadu.")}
            </p>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "14px" }}>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>
                <div className="muted">{t("Striking point")}</div>
                <b>{t("106-107°C")}</b>
              </div>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>
                <div className="muted">{t("Water")}</div>
                <b>{t("30-35 g / 100 g")}</b>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "18px", border: "2px solid #4E6B55" }}>
            {" "}
            <MediaSlot id="index-4" kind="photo" style={{ height: "180px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("Granular / powder jaggery, loose and in a packet")}</span>
            </MediaSlot>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <h3 style={{ fontSize: "24px" }} id="h-granular-powder">{t("Granular / powder")}</h3>
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A" }}>{t("Longest shelf life")}</span>
            </div>
            {" "}
            <p className="muted" style={{ lineHeight: "1.5" }}>{t("Popular in rural areas. Free-flowing and stores for up to 2 years at 1-2% moisture, even through the monsoon.")}</p>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "14px" }}>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>
                <div className="muted">{t("Striking point")}</div>
                <b>{t("120-122°C")}</b>
              </div>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>
                <div className="muted">{t("Water")}</div>
                <b>{t("1-2 g / 100 g")}</b>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {" "}
          <h3 style={{ fontSize: "22px" }} id="h-what-is-inside-100-g-of-each-form">{t("What is inside 100 g of each form")}</h3>
          {" "}
          <div style={{ overflowX: "auto" }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th>{t("Per 100 g")}</th>
                  <th>{t("Solid (lumped)")}</th>
                  <th>{t("Liquid")}</th>
                  <th>{t("Granular")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("Water")}</td>
                  <td>{t("3-10 g")}</td>
                  <td>{t("30-35 g")}</td>
                  <td>{t("1-2 g")}</td>
                </tr>
                <tr>
                  <td>{t("Sucrose")}</td>
                  <td>{t("65-85 g")}</td>
                  <td>{t("40-60 g")}</td>
                  <td>{t("80-90 g")}</td>
                </tr>
                <tr>
                  <td>{t("Reducing sugars")}</td>
                  <td>{t("9-15 g")}</td>
                  <td>{t("15-25 g")}</td>
                  <td>{t("5-9 g")}</td>
                </tr>
                <tr>
                  <td>{t("Protein")}</td>
                  <td>{t("0.4 g")}</td>
                  <td>{t("0.5 g")}</td>
                  <td>{t("0.4 g")}</td>
                </tr>
                <tr>
                  <td>{t("Fat")}</td>
                  <td>{t("0.1 g")}</td>
                  <td>{t("0.1 g")}</td>
                  <td>{t("0.1 g")}</td>
                </tr>
                <tr>
                  <td>{t("Total minerals")}</td>
                  <td>{t("0.6-1.0 g")}</td>
                  <td>{t("0.75 g")}</td>
                  <td>{t("0.6-1.0 g")}</td>
                </tr>
                <tr>
                  <td>{t("Calcium")}</td>
                  <td>{t("8.0 mg")}</td>
                  <td>{t("300 mg")}</td>
                  <td>{t("9.0 mg")}</td>
                </tr>
                <tr>
                  <td>{t("Phosphorus")}</td>
                  <td>{t("4.0 mg")}</td>
                  <td>{t("3.0 mg")}</td>
                  <td>{t("4.0 mg")}</td>
                </tr>
                <tr>
                  <td>{t("Iron")}</td>
                  <td>{t("11.4 mg")}</td>
                  <td>{t("8.5-11 mg")}</td>
                  <td>{t("12 mg")}</td>
                </tr>
                <tr>
                  <td>{t("Energy")}</td>
                  <td>{t("383 kcal")}</td>
                  <td>{t("300 kcal")}</td>
                  <td>{t("383 kcal")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {" "}
        </div>
        {" "}
        <div className="card" style={{ background: "#E5ECE3", borderColor: "#C3D2C3", display: "flex", flexDirection: "column", gap: "10px" }}>
          {" "}
          <h3 style={{ fontSize: "20px", color: "#33493A" }} id="h-best-quality-granular-jaggery-research-result">{t("Best-quality granular jaggery (research result)")}</h3>
          {" "}
          <ul style={{ margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", lineHeight: "1.5" }}>
            {" "}
            <li>
              {t("Raise juice pH with lime to ")}
              <b>{"6.0-6.2"}</b>
              {t(" and boil to a striking point of ")}
              <b>{t("120°C")}</b>
            </li>
            {" "}
            <li>
              {t("Result: ")}
              <b>{t("88.6% sucrose")}</b>
              {t(", only ")}
              <b>{t("1.65% moisture")}</b>
              {t(", good colour, crumbly and crystalline")}
            </li>
            {" "}
            <li>
              {t("Sieve to about ")}
              <b>{t("3 mm")}</b>
              {t(", sun dry to below ")}
              <b>{t("2% moisture")}</b>
              {t(", pack in polyethylene-polyester bags or polyethylene bottles: stores ")}
              <b>{t("more than 2 years")}</b>
            </li>
            {" "}
          </ul>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section style={{ background: "#EFE7DC" }}>
        {" "}
        <div className="wrap sec" style={{ paddingBottom: "88px" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <div className="eyebrow">{t("What you get")}</div>
            {" "}
            <h2 className="h2" id="h-from-100-kg-of-sugarcane">{t("From 100 kg of sugarcane")}</h2>
            {" "}
            <p className="lead muted">{t("Where every kilo goes. The leftover fibre (bagasse) is not waste: dried, it fuels the fire that boils the juice.")}</p>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
            {" "}
            <div style={{ flex: "1 1 520px", display: "flex", flexDirection: "column", alignItems: "center", gap: "0", minWidth: "0" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
                <div className="flowbox" style={{ background: "#4E6B55", color: "#fff", borderColor: "#4E6B55" }}>{t("Sugarcane · 100 kg")}</div>
              </div>
              {" "}
              <div className="arrow" />
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
                <div className="flowbox">{t("1 · Crushing")}</div>
                <span aria-hidden="true">{"→"}</span>
                <div className="side">{t("Bagasse out: 30-40 kg")}</div>
              </div>
              {" "}
              <div className="arrow" />
              <div style={{ fontSize: "14px", fontWeight: "700" }}>{t("Juice 60-70 kg")}</div>
              <div className="arrow" />
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
                <div className="flowbox">{t("2 · Filtration")}</div>
                <span aria-hidden="true">{"→"}</span>
                <div className="side">{t("Dirt out: 2-3 kg")}</div>
              </div>
              {" "}
              <div className="arrow" />
              <div style={{ fontSize: "14px", fontWeight: "700" }}>{t("Juice 58-67 kg")}</div>
              <div className="arrow" />
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
                <div className="side">{t("In: clarifier 2-4 kg")}</div>
                <span aria-hidden="true">{"→"}</span>
                <div className="flowbox">{t("3 · Clarify and boil")}</div>
                <span aria-hidden="true">{"←"}</span>
                <div className="side">{t("Heat: burning bagasse")}</div>
              </div>
              {" "}
              <div className="arrow" />
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
                <div className="flowbox">{t("4 · Cool and mould")}</div>
              </div>
              {" "}
              <div className="arrow" />
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
                <div className="flowbox" style={{ background: "#C97B5E", borderColor: "#A55D42" }}>{t("Jaggery (gur) · 12-13 kg")}</div>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {" "}
              <div className="card">
                <h3 style={{ fontSize: "20px", marginBottom: "10px" }} id="h-per-tonne-of-cane">{t("Per tonne of cane")}</h3>
                <ul style={{ margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", lineHeight: "1.5" }}>
                  <li>
                    <b>{t("650 kg")}</b>
                    {t(" juice + ")}
                    <b>{t("350 kg")}</b>
                    {t(" wet bagasse (50% moisture)")}
                  </li>
                  <li>
                    {t("Sun dry bagasse to 20% moisture: ")}
                    <b>{t("245-250 kg")}</b>
                    {t(" of fuel")}
                  </li>
                  <li>
                    {t("Case study: 500 kg cane gave ")}
                    <b>{t("400 litres")}</b>
                    {t(" of juice; ")}
                    <b>{t("10 kg cane → 1 kg jaggery")}</b>
                  </li>
                </ul>
              </div>
              {" "}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="wrap sec">
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "20px", flexWrap: "wrap" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "720px" }}>
            {" "}
            <div className="eyebrow">{t("The process")}</div>
            {" "}
            <h2 className="h2" id="h-11-steps-in-3-parts">{t("11 steps, in 3 parts")}</h2>
            {" "}
            <p className="lead muted">{t("Tap any step for the full method, the right machine, numbers to hit and mistakes to avoid.")}</p>
            {" "}
          </div>
          {" "}
          <Link to="/steps-1-4-cane-to-juice" className="btn" style={{ background: "#1F2A24", color: "#fff" }}>{t("Open step 1")}</Link>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span className="tag" style={{ background: "#4E6B55", color: "#fff" }}>{t("Part A · Cane to juice")}</span>
          <span style={{ flex: "1", height: "2px", background: "#C3D2C3" }} />
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
          {" "}
          <Link to="/steps-1-4-cane-to-juice#s1" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"1"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-harvest-the-cane">{t("Harvest the cane")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("Ripe cane above 16% sucrose · cut at ground level")}</span>
          </Link>
          {" "}
          <Link to="/steps-1-4-cane-to-juice#s2" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"2"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-clean-the-cane">{t("Clean the cane")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("Pressure wash · peeler: 100 kg/hr")}</span>
          </Link>
          {" "}
          <Link to="/steps-1-4-cane-to-juice#s3" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"3"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-crush-for-juice">{t("Crush for juice")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("3-roller horizontal crusher · 55-65%+ juice")}</span>
          </Link>
          {" "}
          <Link to="/steps-1-4-cane-to-juice#s4" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"4"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-filter-and-settle">{t("Filter and settle")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("5-layer filter · settle 20 minutes")}</span>
          </Link>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span className="tag" style={{ background: "#A55D42", color: "#fff" }}>{t("Part B · Clarify and boil")}</span>
          <span style={{ flex: "1", height: "2px", background: "#DCC5B2" }} />
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
          {" "}
          <Link to="/steps-5-6-clarify-and-boil#s5" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"5"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-clarify-the-juice">{t("Clarify the juice")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("Natural clarifiers · pH 6.0-6.2 · no hydros")}</span>
          </Link>
          {" "}
          <Link to="/steps-5-6-clarify-and-boil#s6" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px", background: "#F4E6DB", borderColor: "#DCC5B2" }}>
            <span className="num">{"6"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-boil-to-the-striking-point">{t("Boil to the striking point")}</h4>
            <span style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("2.5-3 hours · 106-122°C by form · remove scum")}</span>
          </Link>
          {" "}
          <Link to="/steps-5-6-clarify-and-boil#fuel" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num" style={{ background: "#A55D42" }}>{t("F")}</span>
            <h4 style={{ fontSize: "19px" }} id="h-the-fire-bagasse-fuel">{t("The fire: bagasse fuel")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("Dry, feed and burn efficiently")}</span>
          </Link>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span className="tag" style={{ background: "#1F2A24", color: "#EBC3AE" }}>{t("Part C · Cool to market")}</span>
          <span style={{ flex: "1", height: "2px", background: "#D3C7B8" }} />
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "14px" }}>
          {" "}
          <Link to="/steps-7-11-cool-to-market#s7" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"7"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-cool">{t("Cool")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("10-15 min stirring, then rest")}</span>
          </Link>
          {" "}
          <Link to="/steps-7-11-cool-to-market#s8" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"8"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-shape">{t("Shape")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("Mould blocks, make powder or bottle liquid")}</span>
          </Link>
          {" "}
          <Link to="/steps-7-11-cool-to-market#s9" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"9"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-dry-and-sieve">{t("Dry and sieve")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("To 1-2% moisture · 3 mm sieve")}</span>
          </Link>
          {" "}
          <Link to="/steps-7-11-cool-to-market#s10" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"10"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-pack-and-label">{t("Pack and label")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("Moisture-proof packs · full label")}</span>
          </Link>
          {" "}
          <Link to="/steps-7-11-cool-to-market#s11" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "8px", padding: "18px" }}>
            <span className="num">{"11"}</span>
            <h4 style={{ fontSize: "19px" }} id="h-store-and-sell">{t("Store and sell")}</h4>
            <span className="muted" style={{ fontSize: "14px", lineHeight: "1.45" }}>{t("40-60% humidity · sell off-season")}</span>
          </Link>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="wrap sec">
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {" "}
          <div className="eyebrow">{t("Why change")}</div>
          {" "}
          <h2 className="h2" id="h-traditional-vs-modern-jaggery-making">{t("Traditional vs modern jaggery making")}</h2>
          {" "}
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "20px" }}>
          {" "}
          <div className="card" style={{ background: "#FAEEE8", borderColor: "#E6BFAE", display: "flex", flexDirection: "column", gap: "14px" }}>
            {" "}
            <h3 style={{ fontSize: "22px", color: "#8A3A27" }} id="h-problems-with-the-traditional-method">{t("Problems with the traditional method")}</h3>
            {" "}
            <ul style={{ margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", lineHeight: "1.5" }}>
              {" "}
              <li>{t("Fully manual: unhygienic, quality changes batch to batch")}</li>
              {" "}
              <li>{t("Limited capacity; depends on skilled workers who are often unavailable")}</li>
              {" "}
              <li>{t("Uncontrolled heating and caramelising make dark, bitter jaggery")}</li>
              {" "}
              <li>{t("Too much lime and iron from pans also darken the colour")}</li>
              {" "}
              <li>{t("Hydros (sodium hydrosulphite) used for colour releases sulphur dioxide, harmful to health")}</li>
              {" "}
              <li>
                {t("May contain harmful chemicals like SO")}
                <sub>{"2"}</sub>
                {t(" and polyacrylamides")}
              </li>
              {" "}
              <li>{t("Open pan furnace only 14.75% efficient; smoky, polluting fuel")}</li>
              {" "}
              <li>{t("High-moisture jaggery keeps only about 3 months")}</li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ background: "#E5ECE3", borderColor: "#C3D2C3", display: "flex", flexDirection: "column", gap: "14px" }}>
            {" "}
            <h3 style={{ fontSize: "22px", color: "#33493A" }} id="h-benefits-of-the-modern-method">{t("Benefits of the modern method")}</h3>
            {" "}
            <ul style={{ margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", lineHeight: "1.5" }}>
              {" "}
              <li>{t("No handling except feeding cane to the crusher")}</li>
              {" "}
              <li>{t("Powder keeps 18-24 months")}</li>
              {" "}
              <li>{t("Sulphur-free, chemical-free and hygienic")}</li>
              {" "}
              <li>{t("Same quality every batch")}</li>
              {" "}
              <li>{t("Uses fewer resources, better business viability")}</li>
              {" "}
              <li>{t("Compact plant with food-grade stainless steel contact surfaces")}</li>
              {" "}
              <li>{t("Continuous production")}</li>
              {" "}
              <li>{t("Higher price for farmers and producers")}</li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <Link to="/plan-your-unit#compare" className="btn" style={{ alignSelf: "flex-start", background: "#fff", color: "#1F2A24", border: "2px solid #1F2A24" }}>{t("See photo comparison of all 10 stages")}</Link>
        {" "}
      </section>
      {" "}
      <section style={{ background: "#EFE7DC" }}>
        {" "}
        <div className="wrap sec" style={{ paddingBottom: "88px" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <div className="eyebrow">{t("What you can sell")}</div>
            {" "}
            <h2 className="h2" id="h-jaggery-products">{t("Jaggery products")}</h2>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "14px" }}>
            {" "}
            <div className="card" style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <MediaSlot id="index-6" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Pure jaggery powder")}</span>
              </MediaSlot>
              <b>{t("Pure jaggery powder")}</b>
            </div>
            {" "}
            <div className="card" style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <MediaSlot id="index-7" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Pure jaggery granules")}</span>
              </MediaSlot>
              <b>{t("Pure jaggery granules")}</b>
            </div>
            {" "}
            <div className="card" style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <MediaSlot id="index-8" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Jaggery cubes")}</span>
              </MediaSlot>
              <b>{t("Jaggery cubes")}</b>
            </div>
            {" "}
            <div className="card" style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <MediaSlot id="index-9" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Mini jaggery tablets")}</span>
              </MediaSlot>
              <b>{t("Mini jaggery tablets")}</b>
            </div>
            {" "}
            <div className="card" style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <MediaSlot id="index-10" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Traditional jaggery blocks")}</span>
              </MediaSlot>
              <b>{t("Traditional blocks")}</b>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "16px" }}>
            {" "}
            <div className="card">
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }} id="h-sell-for-more">{t("Sell for more")}</h3>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", lineHeight: "1.5" }}>
                <li>{t("Store well and sell in the off-season for the best price")}</li>
                <li>{t("Print health benefits over sugar on the pack")}</li>
                <li>{t("Make value-added products: bakery items, chocolates, confectionery, drinks")}</li>
                <li>{t("Replace or reduce sugar with jaggery wherever possible")}</li>
              </ul>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "20px" }} id="h-organic-jaggery">{t("Organic jaggery")}</h3>
              <p className="muted" style={{ lineHeight: "1.5" }}>
                {t("Starts in the field: cane grown only with organic manure like cow dung. Only organic clarifiers and a little lime are allowed, so it is darker. It can be labelled organic only if the cane itself is organic.")}
              </p>
              <Link to="/plan-your-unit#organic" style={{ fontWeight: "700" }}>{t("Read more on organic →")}</Link>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="wrap sec">
        {" "}
        <div style={{ background: "#1F2A24", color: "#F3EAE1", borderRadius: "24px", padding: "40px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center" }}>
          {" "}
          <MediaSlot id="index-11" kind="video" style={{ flex: "1 1 320px", minHeight: "240px" }}>
            <span className="mtag">
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4l13 8-13 8z" />
              </svg>
              {t("Insert video / photo")}
            </span>
            <span className="mcap">{t("Mrs. Soumya at her solar-powered jaggery unit, Pandavapura")}</span>
          </MediaSlot>
          {" "}
          <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {" "}
            <span className="eyebrow" style={{ color: "#EBC3AE" }}>{t("Case study · Pandavapura, Mandya, Karnataka")}</span>
            {" "}
            <h2 style={{ fontSize: "34px", fontWeight: "600", color: "#fff", lineHeight: "1.15" }} id="h-a-solar-powered-crusher-took-her-unit-from-0-to-">{t("A solar-powered crusher took her unit from 0 to 1,000-2,000 kg of organic jaggery a month")}</h2>
            {" "}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {" "}
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "600", color: "#EBC3AE" }}>{"₹46,109"}</div>
                <div style={{ fontSize: "13px" }}>{t("net profit / month after EMI")}</div>
              </div>
              {" "}
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "600", color: "#EBC3AE" }}>{"₹0"}</div>
                <div style={{ fontSize: "13px" }}>{t("electricity and fuel cost")}</div>
              </div>
              {" "}
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "600", color: "#EBC3AE" }}>{"3"}</div>
                <div style={{ fontSize: "13px" }}>{t("organic retail chains supplied")}</div>
              </div>
              {" "}
            </div>
            {" "}
            <Link to="/case-study" className="btn" style={{ alignSelf: "flex-start", background: "#C97B5E", color: "#1F2A24" }}>{t("Read the full case study")}</Link>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="wrap sec" style={{ paddingBottom: "80px" }}>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {" "}
          <div className="eyebrow">{t("Watch and learn")}</div>
          {" "}
          <h2 className="h2" id="h-videos-and-further-reading">{t("Videos and further reading")}</h2>
          {" "}
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
          {" "}
          <a href="https://www.youtube.com/watch?v=b7Gh-FQ3AB0" className="card" style={{ textDecoration: "none", color: "#1F2A24", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <MediaSlot id="index-12" kind="video" style={{ height: "130px" }}>
              <span className="mtag">{t("Video 1")}</span>
              <span className="mcap">{t("Add title and thumbnail")}</span>
            </MediaSlot>
            <b style={{ fontSize: "14px" }}>{t("YouTube · b7Gh-FQ3AB0")}</b>
          </a>
          {" "}
          <a href="https://www.youtube.com/watch?v=vgAHiG8Tw8k" className="card" style={{ textDecoration: "none", color: "#1F2A24", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <MediaSlot id="index-13" kind="video" style={{ height: "130px" }}>
              <span className="mtag">{t("Video 2")}</span>
              <span className="mcap">{t("Add title and thumbnail")}</span>
            </MediaSlot>
            <b style={{ fontSize: "14px" }}>{t("YouTube · vgAHiG8Tw8k")}</b>
          </a>
          {" "}
          <a href="https://www.youtube.com/watch?v=fW_8EshmmQU" className="card" style={{ textDecoration: "none", color: "#1F2A24", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <MediaSlot id="index-14" kind="video" style={{ height: "130px" }}>
              <span className="mtag">{t("Video 3")}</span>
              <span className="mcap">{t("Add title and thumbnail")}</span>
            </MediaSlot>
            <b style={{ fontSize: "14px" }}>{t("YouTube · fW_8EshmmQU")}</b>
          </a>
          {" "}
          <a href="https://www.youtube.com/watch?v=IhUdfB2uzgI" className="card" style={{ textDecoration: "none", color: "#1F2A24", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <MediaSlot id="index-15" kind="video" style={{ height: "130px" }}>
              <span className="mtag">{t("Video 4")}</span>
              <span className="mcap">{t("Add title and thumbnail")}</span>
            </MediaSlot>
            <b style={{ fontSize: "14px" }}>{t("YouTube · IhUdfB2uzgI")}</b>
          </a>
          {" "}
          <a href="https://www.youtube.com/watch?v=Fwae9cBE-f4" className="card" style={{ textDecoration: "none", color: "#1F2A24", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <MediaSlot id="index-16" kind="video" style={{ height: "130px" }}>
              <span className="mtag">{t("Video 5")}</span>
              <span className="mcap">{t("Add title and thumbnail")}</span>
            </MediaSlot>
            <b style={{ fontSize: "14px" }}>{t("YouTube · Fwae9cBE-f4")}</b>
          </a>
          {" "}
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "14px" }}>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <b>{t("Mobile jaggery plants")}</b>
            <a href="https://www.iitb.ac.in/breaking-news/iit-bombay-launches-online-mobile-jaggery-plant">{t("IIT Bombay: online mobile jaggery plant")}</a>
            <a href="https://rnd.iitb.ac.in/a_process_of_manufacturing_jaggery">{t("IIT Bombay: a process of manufacturing jaggery")}</a>
            <a href="https://psa.gov.in/CMS/web/sites/default/files/psa_custom_files/A%20MOBILE%20JAGGERY%20FACTORY-converted-compressed.pdf">{t("Office of the PSA: a mobile jaggery factory (PDF)")}</a>
          </div>
          {" "}
          
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <SiteFooter />
      {" "}
    </div>
    </SlotsProvider>
  );
}
