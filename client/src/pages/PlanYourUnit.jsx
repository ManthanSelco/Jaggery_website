// Generated from plan-your-unit.html. Page text is unchanged from the static site; t() shows it in the chosen language.
import { Link } from 'react-router-dom';
import MediaSlot from '../components/MediaSlot.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';
import { SlotsProvider } from '../lib/slots.jsx';
import '../styles/pages/plan-your-unit.css';

export default function PlanYourUnit() {
  const t = useT();
  usePageTitle(t("Jaggery · Plan your unit"));
  return (
    <SlotsProvider page="plan-your-unit">
    <div className="pg pg-plan-your-unit">
      {" "}
      <SiteHeader active="/plan-your-unit" />
      {" "}
      <section className="page-hero" data-hero="plan-your-unit">
        <HeroBackdrop image="/hero/plan-your-unit.jpg" />
        {" "}
        <div className="wrap" style={{ paddingTop: "48px", paddingBottom: "44px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {" "}
          <div style={{ fontSize: "14px", fontWeight: "600" }}>
            <Link to="/">{t("Home")}</Link>
            {t(" / Plan your unit")}
          </div>
          {" "}
          <h1 style={{ fontSize: "54px", lineHeight: "1.05", fontWeight: "600" }} id="h-plan-your-jaggery-unit">{t("Plan your jaggery unit")}</h1>
          {" "}
          <p style={{ fontSize: "19px", lineHeight: "1.5", maxWidth: "760px" }}>{t("Pick the size that matches your cane, see the full machine set, space, workers and power it needs, and how solar can run it.")}</p>
          {" "}
          <nav aria-label="On this page" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
            {" "}
            <a href="#scale" className="tag" style={{ background: "#fff", color: "#33493A", textDecoration: "none", padding: "10px 14px" }}>{t("Choose your size")}</a>
            {" "}
            <a href="#power" className="tag" style={{ background: "#fff", color: "#33493A", textDecoration: "none", padding: "10px 14px" }}>{t("Power needs")}</a>
            {" "}
            <a href="#solar" className="tag" style={{ background: "#fff", color: "#33493A", textDecoration: "none", padding: "10px 14px" }}>{t("Run it on solar")}</a>
            {" "}
            <a href="#furnace" className="tag" style={{ background: "#fff", color: "#33493A", textDecoration: "none", padding: "10px 14px" }}>{t("Better furnaces")}</a>
            {" "}
            <a href="#compare" className="tag" style={{ background: "#fff", color: "#33493A", textDecoration: "none", padding: "10px 14px" }}>{t("Traditional vs modern")}</a>
            {" "}
            <a href="#organic" className="tag" style={{ background: "#fff", color: "#33493A", textDecoration: "none", padding: "10px 14px" }}>{t("Organic")}</a>
            {" "}
            <a href="#challenges" className="tag" style={{ background: "#fff", color: "#33493A", textDecoration: "none", padding: "10px 14px" }}>{t("Challenges")}</a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="wrap">
        {" "}
        <section id="scale" className="sec">
          {" "}
          <div className="eyebrow">{t("Step 1 of planning")}</div>
          {" "}
          <h2 className="h2">{t("Choose your size")}</h2>
          {" "}
          <p className="muted" style={{ fontSize: "17px", maxWidth: "760px" }}>{t("Size is measured in tonnes of cane crushed per day (TCD). Output is finished jaggery per day.")}</p>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
            {" "}
            <div className="card scale" style={{ border: "2px solid #4E6B55" }}>
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Micro / cottage")}</span>
              <div className="big">{t("1 TCD")}</div>
              <div className="kv">
                <span className="muted">{t("Jaggery/day")}</span>
                <b>{t("100-120 kg")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Space")}</span>
                <b>{t("500-800 sq ft")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Workers")}</span>
                <b>{"2-3"}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Power")}</span>
                <b>{t("3-5 kW, single-phase")}</b>
              </div>
            </div>
            {" "}
            <div className="card scale">
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Small")}</span>
              <div className="big">{t("5 TCD")}</div>
              <div className="kv">
                <span className="muted">{t("Jaggery/day")}</span>
                <b>{t("500-600 kg")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Space")}</span>
                <b>{t("1,200-1,500 sq ft")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Workers")}</span>
                <b>{"5-7"}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Power")}</span>
                <b>{t("12-18 kW, 3-phase")}</b>
              </div>
            </div>
            {" "}
            <div className="card scale">
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Medium")}</span>
              <div className="big">{t("10 TCD")}</div>
              <div className="kv">
                <span className="muted">{t("Jaggery/day")}</span>
                <b>{t("1,000-1,200 kg")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Space")}</span>
                <b>{t("3,000-4,000 sq ft")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Workers")}</span>
                <b>{"10-12"}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Power")}</span>
                <b>{t("22-35 kW, 3-phase")}</b>
              </div>
            </div>
            {" "}
            <div className="card scale">
              <span className="tag" style={{ background: "#1F2A24", color: "#EBC3AE", alignSelf: "flex-start" }}>{t("Industrial")}</span>
              <div className="big">{t("20 TCD")}</div>
              <div className="kv">
                <span className="muted">{t("Jaggery/day")}</span>
                <b>{t("2,000-2,400 kg")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Space")}</span>
                <b>{t("6,000-8,000 sq ft")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Workers")}</span>
                <b>{t("15-20+ (4-5 if fully automatic)")}</b>
              </div>
              <div className="kv">
                <span className="muted">{t("Power")}</span>
                <b>{t("55-90+ kW, 3-phase")}</b>
              </div>
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ padding: "0", overflowX: "auto" }}>
            {" "}
            <table className="tbl">
              <thead>
                <tr>
                  <th>{t("Full machine set")}</th>
                  <th>{t("1 TCD · micro")}</th>
                  <th>{t("5 TCD · small")}</th>
                  <th>{t("10 TCD · medium")}</th>
                  <th>{t("20 TCD · industrial")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("Finished jaggery")}</td>
                  <td>{t("~100-120 kg/day")}</td>
                  <td>{t("~500-600 kg/day")}</td>
                  <td>{t("~1,000-1,200 kg/day")}</td>
                  <td>{t("~2,000-2,400 kg/day")}</td>
                </tr>
                <tr>
                  <td>{t("Crusher mill")}</td>
                  <td>{t("Single 3-roller (mini)")}</td>
                  <td>{t("Heavy-duty 3-roller")}</td>
                  <td>{t("3- or 4-roller single mill")}</td>
                  <td>{t("4-roller single or 3+3 tandem")}</td>
                </tr>
                <tr>
                  <td>{t("Crusher motor")}</td>
                  <td>{t("3-5 HP")}</td>
                  <td>{t("10-12.5 HP")}</td>
                  <td>{t("15-20 HP")}</td>
                  <td>{t("25-35 HP")}</td>
                </tr>
                <tr>
                  <td>{t("Cane crushed")}</td>
                  <td>{t("~100-150 kg/hr")}</td>
                  <td>{t("~500-600 kg/hr")}</td>
                  <td>{t("~1,000 kg/hr")}</td>
                  <td>{t("~2,000 kg/hr")}</td>
                </tr>
                <tr>
                  <td>{t("Boiling system")}</td>
                  <td>{t("Single open pan, 1.2 m diameter")}</td>
                  <td>{t("2- or 3-pan cascade line")}</td>
                  <td>{t("3- or 4-pan continuous line")}</td>
                  <td>{t("Multi-pan line or vacuum steam evaporator")}</td>
                </tr>
                <tr>
                  <td>{t("Juice tanks")}</td>
                  <td>{t("1 × 200 L stainless steel")}</td>
                  <td>{t("2 × 1,000 L SS304")}</td>
                  <td>{t("2 × 2,000 L SS304")}</td>
                  <td>{t("3 × 3,500 L SS304 jacketed")}</td>
                </tr>
                <tr>
                  <td>{t("Cooling floor")}</td>
                  <td>{t("1 platform, 1.5 × 1.5 m")}</td>
                  <td>{t("2 platforms, 2.5 × 2.5 m")}</td>
                  <td>{t("3 platforms or 1 rotary table")}</td>
                  <td>{t("4 platforms or twin mechanical tables")}</td>
                </tr>
                <tr>
                  <td>{t("Space needed")}</td>
                  <td>{t("~500-800 sq ft")}</td>
                  <td>{t("~1,200-1,500 sq ft")}</td>
                  <td>{t("~3,000-4,000 sq ft")}</td>
                  <td>{t("~6,000-8,000 sq ft")}</td>
                </tr>
                <tr>
                  <td>{t("Workers")}</td>
                  <td>{"2-3"}</td>
                  <td>{"5-7"}</td>
                  <td>{"10-12"}</td>
                  <td>{t("15-20+, or 4-5 if fully automatic")}</td>
                </tr>
                <tr>
                  <td>{t("How it runs")}</td>
                  <td>{t("Batches: everything crushed, boiled and finished in separate steps")}</td>
                  <td>{t("Semi-continuous: crushing fills tanks; boiling in sequence")}</td>
                  <td>{t("Continuous: raw juice in one end, syrup out the other")}</td>
                  <td>{t("Automated closed pipeline with central control valves")}</td>
                </tr>
                <tr>
                  <td>{t("Moving juice")}</td>
                  <td>{t("Buckets or small gravity hoses")}</td>
                  <td>{t("Monoblock centrifugal pumps, PVC/SS pipes")}</td>
                  <td>{t("Level-controlled pumps, SS lines")}</td>
                  <td>{t("PLC-controlled pneumatic valves, sanitary pumps")}</td>
                </tr>
                <tr>
                  <td>{t("Clarifying and skimming")}</td>
                  <td>{t("Manual, long-handled mesh ladles")}</td>
                  <td>{t("Manual skimming + gravity settling")}</td>
                  <td>{t("Vibrating screens + manual fine skimming")}</td>
                  <td>{t("Rotary vacuum filters or automatic clarifiers")}</td>
                </tr>
                <tr>
                  <td>{t("Checking the end point")}</td>
                  <td>{t("Water-drop test, thread texture by hand")}</td>
                  <td>{t("Hand-held digital brix refractometer")}</td>
                  <td>{t("Digital temperature probes + continuous brix meters")}</td>
                  <td>{t("Inline sensors to a central control panel")}</td>
                </tr>
                <tr>
                  <td>{t("Emptying the pans")}</td>
                  <td>{t("Ladling or tilting the hot pan by hand")}</td>
                  <td>{t("Gravity drain valves to cooling")}</td>
                  <td>{t("Tilting pans or sanitary discharge pumps")}</td>
                  <td>{t("Automatic pneumatic valves into closed pipes")}</td>
                </tr>
                <tr>
                  <td>{t("Electricity")}</td>
                  <td>{t("Single-phase 230 V or low 3-phase")}</td>
                  <td>{t("3-phase 415 V, 50 Hz")}</td>
                  <td>{t("3-phase 415 V, 50 Hz")}</td>
                  <td>{t("3-phase 415 V, 50 Hz industrial")}</td>
                </tr>
                <tr>
                  <td>{t("Connected load")}</td>
                  <td>{t("3-5 kW")}</td>
                  <td>{t("12-18 kW")}</td>
                  <td>{t("22-35 kW")}</td>
                  <td>{t("55-90+ kW")}</td>
                </tr>
                <tr>
                  <td>{t("Backup diesel generator")}</td>
                  <td>{t("5-7.5 kVA")}</td>
                  <td>{t("20-25 kVA")}</td>
                  <td>{t("40-50 kVA")}</td>
                  <td>{t("100-125 kVA")}</td>
                </tr>
              </tbody>
            </table>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="power" className="sec">
          {" "}
          <div className="eyebrow">{t("Step 2 of planning")}</div>
          {" "}
          <h2 className="h2">{t("Where the electricity goes")}</h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <b style={{ fontSize: "20px" }}>{t("1 TCD · 3-5 kW")}</b>
              <ul className="li" style={{ fontSize: "14px" }}>
                <li>{t("Crusher: 3.7 kW (5 HP mini crusher)")}</li>
                <li>{t("Moving juice: 0 kW (gravity, buckets)")}</li>
                <li>{t("Small water/juice pump if used: 0.37 kW (0.5 HP)")}</li>
                <li>{t("Heat bar sealer for pouches: 0.5 kW")}</li>
              </ul>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <b style={{ fontSize: "20px" }}>{t("5 TCD · 12-18 kW")}</b>
              <ul className="li" style={{ fontSize: "14px" }}>
                <li>{t("Crusher: 9.3 kW (12.5 HP) + cane belt conveyor 1.5 kW")}</li>
                <li>{t("Two 1 HP juice pumps: 1.5 kW")}</li>
                <li>{t("Vibrating screener (1.5 HP): 1.1 kW")}</li>
                <li>{t("Blocks/liquid: shrink wrapper or piston bottle filler 1.5 kW")}</li>
                <li>{t("Powder: 5 HP pulveriser 3.7 kW, run in shifts so the panel isn't overloaded")}</li>
              </ul>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <b style={{ fontSize: "20px" }}>{t("10 TCD · 22-35 kW")}</b>
              <ul className="li" style={{ fontSize: "14px" }}>
                <li>{t("Crusher: 15 kW (20 HP) + cane cutter 2.2 kW + elevator conveyor 1.5 kW")}</li>
                <li>{t("Stainless steel transfer pumps: 3 kW")}</li>
                <li>{t("Dual-deck vibrating screeners 2.2 kW + cooling-tray agitator arm 2.2 kW")}</li>
                <li>{t("Blocks/liquid: packing lines, multi-head fillers 3 kW")}</li>
                <li>{t("Powder: 10-15 HP hammer mill + vibratory sifter 7.5-11 kW")}</li>
              </ul>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <b style={{ fontSize: "20px" }}>{t("20 TCD · 55-90+ kW")}</b>
              <ul className="li" style={{ fontSize: "14px" }}>
                <li>{t("Crusher: 26 kW (35 HP) + swing-hammer cutter 5.5 kW + leveller and feed gantry 3.7 kW")}</li>
                <li>{t("Pump network for juice, hot syrup, wastewater: 7.5 kW")}</li>
                <li>{t("Rotary vacuum filters / clarifiers 5.5 kW + twin-shaft crystallisation scrapers 4 kW")}</li>
                <li>{t("Solid: mould depositors, shrink-wrap tunnels 5 kW · Liquid: bottling, capping, labelling 6 kW · Powder: pin/hammer mill + fluid-bed dryers 15-22 kW")}</li>
                <li>{t("Automation: air compressors, PLC panels, clean-in-place pumps 4-7 kW")}</li>
              </ul>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="solar" className="sec">
          {" "}
          <div className="eyebrow">{t("Step 3 of planning")}</div>
          {" "}
          <h2 className="h2">{t("Run it on solar: the two-part design")}</h2>
          {" "}
          <p className="muted" style={{ fontSize: "17px", maxWidth: "820px" }}>
            {t("Used at Mrs. Soumya's unit in Pandavapura. The big crusher runs straight off the solar panels in daytime with no grid, diesel or big battery. A small battery system runs everything else.")}
          </p>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "stretch" }}>
            {" "}
            <div style={{ flex: "1 1 440px", display: "flex", flexDirection: "column", gap: "10px", background: "#F4E6DB", borderRadius: "18px", padding: "20px" }}>
              {" "}
              <span className="tag" style={{ background: "#C97B5E", color: "#1F2A24", alignSelf: "flex-start" }}>{t("Part 1 · Heavy load · daytime only")}</span>
              {" "}
              <div className="node" style={{ background: "#C97B5E", borderColor: "#A55D42" }}>
                <b>{t("Solar panels · 6.5 kWp")}</b>
              </div>
              {" "}
              <div style={{ textAlign: "center", fontWeight: "900" }} aria-hidden="true">{"↓"}</div>
              {" "}
              <div className="node">
                <b>{t("AC direct drive")}</b>
                <div className="muted" style={{ fontSize: "14px" }}>{t("for 5 HP, 440 V AC, 3-phase")}</div>
              </div>
              {" "}
              <div style={{ textAlign: "center", fontWeight: "900" }} aria-hidden="true">{"↓"}</div>
              {" "}
              <div className="node">
                <b>{t("Sugarcane crusher · 5 HP")}</b>
                <div className="muted" style={{ fontSize: "14px" }}>{t("250-300 kg cane/hr · 4-5 hours of peak sun a day")}</div>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ flex: "1 1 440px", display: "flex", flexDirection: "column", gap: "10px", background: "#E5ECE3", borderRadius: "18px", padding: "20px" }}>
              {" "}
              <span className="tag" style={{ background: "#4E6B55", color: "#fff", alignSelf: "flex-start" }}>{t("Part 2 · Small loads · battery backed")}</span>
              {" "}
              <div className="node">
                <b>{t("Battery bank")}</b>
                <div className="muted" style={{ fontSize: "14px" }}>{t("150 Ah × 4 (listed as 2.5 kWp in the case study)")}</div>
              </div>
              {" "}
              <div style={{ textAlign: "center", fontWeight: "900" }} aria-hidden="true">{"↓"}</div>
              {" "}
              <div className="node">
                <b>{t("PCU / inverter · 5 kVA, 48 V")}</b>
              </div>
              {" "}
              <div style={{ textAlign: "center", fontWeight: "900" }} aria-hidden="true">{"↓"}</div>
              {" "}
              <div className="node">
                <b>{t("Boiler blowers 0.5 HP + 0.5 HP · juice lifting pump · lights")}</b>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px" }}>
            {" "}
            <div className="card">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "600" }}>{"₹7,20,000"}</div>
              <div className="muted" style={{ fontSize: "14px" }}>{t("solar system (6.5 kWp + PCU)")}</div>
            </div>
            {" "}
            <div className="card">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "600" }}>{"₹0"}</div>
              <div className="muted" style={{ fontSize: "14px" }}>{t("electricity and fuel bill (solar + bagasse)")}</div>
            </div>
            {" "}
            <div className="card">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "600" }}>{t("Weekly")}</div>
              <div className="muted" style={{ fontSize: "14px" }}>{t("panel cleaning by the owner; panels at reachable height")}</div>
            </div>
            {" "}
            <div className="card">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "600" }}>{t("18 t CO₂e")}</div>
              <div className="muted" style={{ fontSize: "14px" }}>{t("avoided per year vs diesel")}</div>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "12px" }}>
            {" "}
            <MediaSlot id="plan-your-unit-1" kind="photo" style={{ height: "150px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("Solar panels at the Pandavapura unit")}</span>
            </MediaSlot>
            {" "}
            <MediaSlot id="plan-your-unit-2" kind="photo" style={{ height: "150px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("AC direct drive panel and 5 HP crusher")}</span>
            </MediaSlot>
            {" "}
            <MediaSlot id="plan-your-unit-3" kind="video" style={{ minHeight: "150px" }}>
              <span className="mtag">{t("Insert video")}</span>
              <span className="mcap">{t("Solar-powered crusher running")}</span>
            </MediaSlot>
            {" "}
          </div>
          {" "}
          <p className="muted" style={{ fontSize: "14px" }}>
            {t("Without solar, this unit needed a ₹60,000 diesel engine or a ₹1-2 lakh three-phase grid connection to run the 5 HP crusher. ")}
            <Link to="/case-study">{t("Read the case study →")}</Link>
          </p>
          {" "}
        </section>
        {" "}
        <section id="furnace" className="sec">
          {" "}
          <div className="eyebrow">{t("Save fuel and time")}</div>
          {" "}
          <h2 className="h2">{t("Improved furnaces by IISR, Lucknow")}</h2>
          {" "}
          <p className="muted" style={{ fontSize: "17px", maxWidth: "820px" }}>
            {t("The Indian Institute of Sugarcane Research designed thermally efficient furnaces. Pans sit in a line, and hot flue gases pass under each pan in turn before leaving by the chimney.")}
          </p>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MediaSlot id="plan-your-unit-4" kind="photo" style={{ height: "150px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("IISR 2-pan furnace")}</span>
              </MediaSlot>
              <b style={{ fontSize: "18px" }}>{t("2-pan furnace")}</b>
              <span className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {t("Extra pan pre-heats juice, so processing time drops. Includes a ")}
                <b>{t("Waste Heat Recovery System")}</b>
                {t(" to dry bagasse or jaggery, or heat space.")}
              </span>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MediaSlot id="plan-your-unit-5" kind="photo" style={{ height: "150px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("IISR improved 3-pan furnace")}</span>
              </MediaSlot>
              <b style={{ fontSize: "18px" }}>{t("3-pan furnace")}</b>
              <span className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>{t("Two pans pre-heat juice; shorter processing than conventional furnaces.")}</span>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MediaSlot id="plan-your-unit-6" kind="photo" style={{ height: "150px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Modified pans for jaggery furnace")}</span>
              </MediaSlot>
              <b style={{ fontSize: "18px" }}>{t("Modified pans")}</b>
              <span className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>{t("Less bagasse per kg of water evaporated and per kg of jaggery; faster production.")}</span>
            </div>
            {" "}
          </div>
          {" "}
          <p className="muted" style={{ fontSize: "14px" }}>{t("Fuels: dried bagasse, dry cane leaves, straw.")}</p>
          {" "}
        </section>
        {" "}
        <section id="compare" className="sec">
          {" "}
          <div className="eyebrow">{t("See the difference")}</div>
          {" "}
          <h2 className="h2">{t("Traditional vs modern, stage by stage")}</h2>
          {" "}
          <div className="card" style={{ overflowX: "auto", padding: "12px 20px" }}>
            {" "}
            <div className="cmprow" style={{ borderTop: "none", fontWeight: "800" }}>
              <span>{t("Stage")}</span>
              <span className="tag" style={{ background: "#EFE7DC", justifySelf: "start" }}>{t("Traditional")}</span>
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", justifySelf: "start" }}>{t("Modern")}</span>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Feeding harvested cane")}</b>
              <MediaSlot id="plan-your-unit-7" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Cane fed by hand beside a heap")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-8" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Multi-roller crushers with conveyor")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("pH balancing with additives")}</b>
              <MediaSlot id="plan-your-unit-9" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Additives stirred into open pan")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-10" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Dosing tanks and pipelines")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Clarification")}</b>
              <MediaSlot id="plan-your-unit-11" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Skimming scum with long ladles")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-12" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Clarifier unit and diagram")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Concentration")}</b>
              <MediaSlot id="plan-your-unit-13" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Large open pan, steam rising")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-14" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Stainless steel evaporator line")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Cooling")}</b>
              <MediaSlot id="plan-your-unit-15" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Cooling in open pans")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-16" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Mechanised cooling trays")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Moulding")}</b>
              <MediaSlot id="plan-your-unit-17" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Hand moulding by workers")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-18" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Automated mould depositor")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Demoulding")}</b>
              <MediaSlot id="plan-your-unit-19" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Rows of bucket blocks")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-20" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Machine-released uniform blocks")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Drying bagasse")}</b>
              <MediaSlot id="plan-your-unit-21" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Bagasse spread in the field")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-22" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Rotary bagasse dryer")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Feeding bagasse")}</b>
              <MediaSlot id="plan-your-unit-23" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Hand-feeding the furnace")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-24" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Bagasse boiler and feed system")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="cmprow">
              <b>{t("Providing heat")}</b>
              <MediaSlot id="plan-your-unit-25" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Open fire under a large pan")}</span>
              </MediaSlot>
              <MediaSlot id="plan-your-unit-26" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Steam heating system")}</span>
              </MediaSlot>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="organic" className="sec">
          {" "}
          <div className="eyebrow">{t("A premium market")}</div>
          {" "}
          <h2 className="h2">{t("Organic jaggery")}</h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "16px" }}>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <b style={{ fontSize: "20px" }}>{t("How it is different")}</b>
              <ul className="li">
                <li>{t("Starts in the field: cane grown only with natural organic manure like cow dung")}</li>
                <li>{t("Main difference is clarification: only organic clarifiers and a little lime to cut acidity")}</li>
                <li>{t("So organic jaggery is darker than commercial jaggery")}</li>
                <li>{t("Sells at a premium: ₹90/kg wholesale in the case study, about 2× conventional")}</li>
              </ul>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#FAEEE8", borderColor: "#E6BFAE" }}>
              <b style={{ fontSize: "20px" }}>{t("The challenge")}</b>
              <ul className="li">
                <li>{t("It can only be labelled organic if the cane itself is organic, even if processing is organic")}</li>
                <li>{t("Most farmers haven't converted, mainly because organic cane gives lower yield per acre")}</li>
                <li>{t("This keeps Indian jaggery out of global organic markets")}</li>
                <li>{t("Government incentives and higher crop prices are needed to encourage organic cane")}</li>
              </ul>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="challenges" className="sec" style={{ paddingBottom: "72px" }}>
          {" "}
          <div className="eyebrow">{t("Know the risks")}</div>
          {" "}
          <h2 className="h2">{t("Challenges in jaggery making and the way forward")}</h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "14px" }}>
            {" "}
            <div className="card">
              <b style={{ fontSize: "18px" }}>{t("1 · Low juice extraction")}</b>
              <p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", marginTop: "6px" }}>{t("Crushers extract under 60%, cutting jaggery per acre. Needed: improved gearbox-type 3-4 roller horizontal crushers above 70%.")}</p>
            </div>
            {" "}
            <div className="card">
              <b style={{ fontSize: "18px" }}>{t("2 · Few jaggery varieties")}</b>
              <p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", marginTop: "6px" }}>{t("Over 600 sugarcane varieties exist, but very few are bred for high jaggery yield. New varieties and hybrids are needed.")}</p>
            </div>
            {" "}
            <div className="card">
              <b style={{ fontSize: "18px" }}>{t("3 · Unstable prices")}</b>
              <p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", marginTop: "6px" }}>{t("High production pushes prices down, so producers sell immediately at any price. Good storage lets you sell off-season.")}</p>
            </div>
            {" "}
            <div className="card">
              <b style={{ fontSize: "18px" }}>{t("4 · Falling consumer awareness")}</b>
              <p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", marginTop: "6px" }}>{t("National awareness campaigns needed. Value-added products (bakery, chocolate, confectionery, drinks) and replacing sugar can grow demand.")}</p>
            </div>
            {" "}
            <div className="card">
              <b style={{ fontSize: "18px" }}>{t("5 · Poor storability")}</b>
              <p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", marginTop: "6px" }}>{t("Jaggery absorbs moisture; 10-25% can be lost in storage. Needed: better production, quality packaging and storage structures.")}</p>
            </div>
            {" "}
            <div className="card">
              <b style={{ fontSize: "18px" }}>{t("6 · Labour shortage")}</b>
              <p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", marginTop: "6px" }}>{t("Many workers needed; scarce and costly. Mechanisation and automation solve this and improve hygiene.")}</p>
            </div>
            {" "}
          </div>
          {" "}
          
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
