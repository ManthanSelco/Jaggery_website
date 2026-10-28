// Generated from machines.html. Page text is unchanged from the static site; t() shows it in the chosen language.
import { Link } from 'react-router-dom';
import MediaSlot from '../components/MediaSlot.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';
import { SlotsProvider } from '../lib/slots.jsx';
import '../styles/pages/machines.css';

export default function Machines() {
  const t = useT();
  usePageTitle(t("Jaggery · Machine guide"));
  return (
    <SlotsProvider page="machines">
    <div className="pg pg-machines">
      {" "}
      <SiteHeader active="/machines" />
      {" "}
      <section className="page-hero" data-hero="machines">
        <HeroBackdrop image="/hero/machines.jpg" />
        {" "}
        <div className="wrap" style={{ paddingTop: "48px", paddingBottom: "40px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {" "}
          <div style={{ fontSize: "14px", fontWeight: "600" }}>
            <Link to="/">{t("Home")}</Link>
            {t(" / Machine guide")}
          </div>
          {" "}
          <h1 style={{ fontSize: "54px", lineHeight: "1.05", fontWeight: "600" }} id="h-machine-guide">{t("Machine guide")}</h1>
          {" "}
          <p style={{ fontSize: "19px", lineHeight: "1.5", maxWidth: "760px" }}>{t("Every machine and tool used in jaggery making: what it does, the types available, and which step it belongs to.")}</p>
          {" "}
          <nav aria-label="Machines" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
            {" "}
            <a href="#crusher" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Crushers")}</a>
            {" "}
            <a href="#strainers" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Strainers")}</a>
            {" "}
            <a href="#pans" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Boiling pans")}</a>
            {" "}
            <a href="#furnace" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Furnaces")}</a>
            {" "}
            <a href="#skimmer" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Skimmers and stirrers")}</a>
            {" "}
            <a href="#refractometer" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Refractometers")}</a>
            {" "}
            <a href="#cooling" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Cooling")}</a>
            {" "}
            <a href="#moulds" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Moulds")}</a>
            {" "}
            <a href="#powder" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Powder and drying")}</a>
            {" "}
            <a href="#packaging" className="tag" style={{ background: "#1F2A24", color: "#fff", textDecoration: "none", padding: "10px 14px" }}>{t("Packaging")}</a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="wrap">
        {" "}
        <section className="msec">
          {" "}
          <h2 style={{ fontSize: "32px", fontWeight: "600" }} id="h-which-machine-at-which-step">{t("Which machine at which step")}</h2>
          {" "}
          <div className="card" style={{ padding: "0", overflowX: "auto" }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th>{t("Step")}</th>
                  <th>{t("Small unit (about 1 tonne cane/day)")}</th>
                  <th>{t("Bigger unit (5-20 tonnes/day)")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>{t("1 · Harvest")}</b>
                  </td>
                  <td>{t("Hand refractometer (0-32%)")}</td>
                  <td>{t("Same")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("2 · Clean")}</b>
                  </td>
                  <td>{t("Water hose / pressure gun")}</td>
                  <td>{t("Saw-tooth cane peeler (100 kg/hr), cane cutter")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("3 · Crush")}</b>
                  </td>
                  <td>{t("Mini 3-roller crusher, 3-5 HP")}</td>
                  <td>{t("Heavy 3-roller or 4-roller, 10-35 HP; conveyor feed")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("4 · Filter")}</b>
                  </td>
                  <td>{t("SS mesh strainer, 200 L SS tank")}</td>
                  <td>{t("5-layer filter, vibrating screener, SS304 tanks, pumps")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("5 · Clarify")}</b>
                  </td>
                  <td>{t("Cloth / nylon filters, long-handled ladle")}</td>
                  <td>{t("Gravity filter boxes, dosing tanks, rotary vacuum filters")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("6 · Boil")}</b>
                  </td>
                  <td>{t("Single open pan 1.2 m, perforated skimmer, water-drop test")}</td>
                  <td>{t("2-4 pan line or steam-jacketed / vacuum pans, pan stirrers, digital brix meter")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("F · Fuel")}</b>
                  </td>
                  <td>{t("Grate or hearth furnace on dry bagasse")}</td>
                  <td>{t("IISR multi-pan furnace or bagasse steam boiler")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("7 · Cool")}</b>
                  </td>
                  <td>{t("Cooling pan (chak), wooden stirrer")}</td>
                  <td>{t("Granulator, mechanical tables, tunnel cooler")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("8 · Shape")}</b>
                  </td>
                  <td>{t("Wooden, plastic or silicone moulds; scrapers")}</td>
                  <td>{t("Mould depositors; powder machine, pulveriser, hammer mill")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("9 · Dry")}</b>
                  </td>
                  <td>{t("Sun / solar / tray dryer, 3 mm sieve")}</td>
                  <td>{t("Vibratory sifter, fluid-bed dryer")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("10 · Pack")}</b>
                  </td>
                  <td>{t("Heat bar sealer")}</td>
                  <td>{t("Auger / cup filler, vacuum packager, shrink wrapper")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {" "}
        </section>
        {" "}
        <section id="crusher" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8">
                <circle cx="7" cy="9" r="4" />
                <circle cx="17" cy="9" r="4" />
                <circle cx="12" cy="17" r="4" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Step 3")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Sugarcane crushers")}</h2>
            </div>
          </div>
          {" "}
          <p className="muted" style={{ lineHeight: "1.55", maxWidth: "860px" }}>{t("Heavy machine with metal rollers that squeezes juice out of cane. Grouped by roller count, roller direction and power source.")}</p>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-1" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("3-roller conventional crusher")}</span>
              </MediaSlot>
              <b>{t("3-roller conventional")}</b>
              <span className="d">{t("Heavy cast-iron or steel rollers set horizontally. Budget-friendly, about 50-55% juice. For small village units.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-2" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("4-roller modified crusher")}</span>
              </MediaSlot>
              <b>{t("4-roller modified")}</b>
              <span className="d">{t("Four or more rollers, double pressing. Up to 80% juice. For commercial farmers wanting the most juice and least waste.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-3" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Planetary gear crusher")}</span>
              </MediaSlot>
              <b>{t("Planetary gear")}</b>
              <span className="d">{t("Slow, 7-8 RPM, motors up to 25 HP. Crushes large amounts fast without heating the juice. For large plants.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-4" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Horizontal vs vertical rollers side by side")}</span>
              </MediaSlot>
              <b>{t("Horizontal vs vertical")}</b>
              <span className="d">
                {t("Horizontal: rollers side by side, handles large quantities and continuous feeding, 2-4% more juice. Vertical: upright rollers, smaller footprint, less cane per hour.")}
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <div className="grid">
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <b>{t("Power options")}</b>
              <span className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>
                <b>{t("Electric")}</b>
                {t(" 10-25 HP: steadiest and cleanest · ")}
                <b>{t("Diesel")}</b>
                {t(": remote farms without stable power · ")}
                <b>{t("Animal-driven")}</b>
                {t(": rare, heritage only · ")}
                <b>{t("Solar direct drive")}</b>
                {t(": 5 HP crusher on 6.5 kWp (")}
                <Link to="/case-study">{t("case study")}</Link>
                {")"}
              </span>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <b>{t("Check before you buy")}</b>
              <span className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>{t("Extraction rate · roller material · bagasse chute")}</span>
            </div>
            {" "}
            <MediaSlot id="machines-5" kind="video" style={{ minHeight: "120px" }}>
              <span className="mtag">{t("Insert video")}</span>
              <span className="mcap">{t("Crusher demonstration")}</span>
            </MediaSlot>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="strainers" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 5h18l-7 8v6l-4 2v-8z" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Steps 4 and 5")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Juice strainers")}</h2>
            </div>
          </div>
          {" "}
          <p className="muted" style={{ lineHeight: "1.55", maxWidth: "860px" }}>
            {t("Remove fibre, soil and cane mud right after crushing so jaggery comes out clean and golden-brown. Two stages: a rough strain for cane bits, then a fine strain for tiny mud particles.")}
          </p>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Coarse · Step 4")}</span>
              <MediaSlot id="machines-6" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Stainless steel wire mesh")}</span>
              </MediaSlot>
              <b>{t("SS wire mesh")}</b>
              <span className="d">{t("Sturdy, rust-free sieve for heavy, sticky juice. Placed under the crusher.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <span className="tag" style={{ background: "#F4E6DB", alignSelf: "flex-start" }}>{t("Coarse · Step 4")}</span>
              <MediaSlot id="machines-7" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Perforated metal sheet")}</span>
              </MediaSlot>
              <b>{t("Perforated sheet")}</b>
              <span className="d">{t("Heavy plate with small holes, like a colander. Stops clumps; liquid pours through fast.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Fine · Step 5")}</span>
              <MediaSlot id="machines-8" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Muslin / cotton filter bag")}</span>
              </MediaSlot>
              <b>{t("Muslin / cotton cloth")}</b>
              <span className="d">{t("Tightly woven bags that trap fine mud for clear juice.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Fine · Step 5")}</span>
              <MediaSlot id="machines-9" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Nylon mesh filter")}</span>
              </MediaSlot>
              <b>{t("Nylon mesh")}</b>
              <span className="d">{t("Filters to 50 microns. Durable, easy to wash, won't rot like cloth.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <span className="tag" style={{ background: "#1F2A24", color: "#EBC3AE", alignSelf: "flex-start" }}>{t("Larger units")}</span>
              <MediaSlot id="machines-10" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Multi-level gravity filter box")}</span>
              </MediaSlot>
              <b>{t("Gravity-flow filter box")}</b>
              <span className="d">{t("Several screens built in; juice gets cleaner at each level before the pan.")}</span>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="pans" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 10h18l-2 8H5z" />
                <path d="M8 6c0-1 1-2 1-3M12 6c0-1 1-2 1-3M16 6c0-1 1-2 1-3" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Step 6")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Boiling pans")}</h2>
            </div>
          </div>
          {" "}
          <p className="muted" style={{ lineHeight: "1.55", maxWidth: "860px" }}>{t("Large, shallow pans where juice is boiled down. The number of pans, their material and shape change both fuel use and jaggery quality.")}</p>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-11" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Single pan on a brick fire pit")}</span>
              </MediaSlot>
              <b>{t("Single pan")}</b>
              <span className="d">{t("Juice boiled and finished in one pan. Cheap and simple, wastes heat and fuel.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-12" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("2-4 pans in a line")}</span>
              </MediaSlot>
              <b>{t("Multi-pan line")}</b>
              <span className="d">{t("Hottest fire under the last pan; gases warm earlier pans. Juice moves forward as it thickens. Standard for commercial units.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-13" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Steam-jacketed pan")}</span>
              </MediaSlot>
              <b>{t("Steam-jacketed")}</b>
              <span className="d">{t("Boiler steam heats bottom and sides. Lighter, cleaner jaggery; saves up to 36% fuel.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-14" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Pan bottom with welded fins")}</span>
              </MediaSlot>
              <b>{t("Pan with fins")}</b>
              <span className="d">{t("Ridges under the pan absorb more heat. Less bagasse, faster boiling.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-15" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Vacuum pan / multi-stage evaporator")}</span>
              </MediaSlot>
              <b>{t("Vacuum / multi-stage")}</b>
              <span className="d">{t("Steam, stainless steel, closed. Fewer dark compounds; recovers evaporated water.")}</span>
            </div>
            {" "}
          </div>
          {" "}
          <div className="grid">
            {" "}
            <div className="card">
              <b>{t("Mild steel (MS)")}</b>
              <p className="muted" style={{ fontSize: "14px", marginTop: "4px" }}>{t("Traditional, cheap, durable. Can rust; iron can darken jaggery.")}</p>
            </div>
            {" "}
            <div className="card" style={{ background: "#E5ECE3", borderColor: "#C3D2C3" }}>
              <b>{t("Stainless steel SS 304")}</b>
              <p style={{ fontSize: "14px", marginTop: "4px" }}>{t("FSSAI-compliant, hygienic, no rust. Preferred by modern units.")}</p>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="furnace" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-8z" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Fuel · Step 6")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Bagasse furnaces")}</h2>
            </div>
          </div>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-16" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Grate furnace")}</span>
              </MediaSlot>
              <b>{t("Grate")}</b>
              <span className="d">{t("Bagasse on a grate; air from below improves burning.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-17" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Hearth furnace")}</span>
              </MediaSlot>
              <b>{t("Hearth")}</b>
              <span className="d">{t("Bagasse on the floor; simpler, usually less efficient.")}</span>
            </div>
            {" "}
            
            <div className="card mcard">
              <MediaSlot id="machines-19" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("IISR 2-pan / 3-pan furnace")}</span>
              </MediaSlot>
              <b>{t("IISR improved furnaces")}</b>
              <span className="d">
                {t("2 or 3 pans in series with modified pans and waste heat recovery. ")}
                <Link to="/plan-your-unit#furnace">{t("Details →")}</Link>
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="skimmer" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="8" cy="8" r="5" />
                <path d="M12 12l9 9" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Steps 5 and 6")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Skimmers and stirrers")}</h2>
            </div>
          </div>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-20" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Perforated skimmer")}</span>
              </MediaSlot>
              <b>{t("Perforated skimmer")}</b>
              <span className="d">{t("Long-handled flat metal spoon with small holes to scoop foam off hot juice.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-21" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Automatic scum remover")}</span>
              </MediaSlot>
              <b>{t("Automatic scum remover")}</b>
              <span className="d">{t("Motorised arms clear the foam. No skilled labour needed; safer.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-22" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Pan stirrer")}</span>
              </MediaSlot>
              <b>{t("Pan stirrer")}</b>
              <span className="d">{t("Motor-driven metal paddles on open pans move in circles so syrup doesn't burn.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-23" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Vacuum pan agitator")}</span>
              </MediaSlot>
              <b>{t("Vacuum pan agitator")}</b>
              <span className="d">{t("Closed, automatic; mixes syrup under pressure to keep colour and nutrition.")}</span>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="refractometer" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <path d="M10 3h4v11a4 4 0 1 1-4 0z" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Steps 1 and 6")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Brix meter / refractometer")}</h2>
            </div>
          </div>
          {" "}
          <p className="muted" style={{ lineHeight: "1.55", maxWidth: "860px" }}>{t("Checks the sugar level so you know exactly when cane is ripe and when syrup is ready.")}</p>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-24" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Optical handheld refractometer")}</span>
              </MediaSlot>
              <b>{t("Optical handheld")}</b>
              <span className="d">
                {t("Affordable, no batteries; look through it against light. Raw juice: ")}
                <b>{"0-32%"}</b>
                {t(" scale. Thick syrup: ")}
                <b>{"58-92%"}</b>
                {t(" scale.")}
              </span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-25" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Digital refractometer with LCD")}</span>
              </MediaSlot>
              <b>{t("Digital")}</b>
              <span className="d">
                {t("Shows the exact number on a screen; faster. Pick one with ")}
                <b>{t("ATC")}</b>
                {t(" (automatic temperature compensation) for accurate readings on hot syrup.")}
              </span>
            </div>
            {" "}
            <MediaSlot id="machines-26" kind="video" style={{ minHeight: "130px" }}>
              <span className="mtag">{t("Insert video")}</span>
              <span className="mcap">{t("How to take a refractometer reading")}</span>
            </MediaSlot>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="cooling" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <rect x="3" y="9" width="18" height="8" rx="1" />
                <path d="M6 17v3M18 17v3" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Step 7")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Cooling trays and tanks")}</h2>
            </div>
          </div>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-27" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Cooling pan (chak) on wheels")}</span>
              </MediaSlot>
              <b>{t("Cooling pan (chak)")}</b>
              <span className="d">{t("Shallow, wide, often on wheels; syrup cools in a flat layer.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-28" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Jaggery granulator")}</span>
              </MediaSlot>
              <b>{t("Granulator")}</b>
              <span className="d">{t("Tank with mixers; stirs while cooling to break syrup into granules.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-29" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Tunnel cooling system")}</span>
              </MediaSlot>
              <b>{t("Tunnel cooler")}</b>
              <span className="d">{t("Fans and moving belts cool liquid into solid blocks quickly. Large plants.")}</span>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="moulds" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="M9 5v14M15 5v14M3 12h18" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Step 8 · Path A")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Moulding trays")}</h2>
            </div>
          </div>
          {" "}
          <p className="muted" style={{ lineHeight: "1.55", maxWidth: "860px" }}>{t("Shape hot syrup as it cools. From tiny 5 g candies to 2 kg blocks: the mould decides the final look and weight.")}</p>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-30" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Food-grade silicone mould")}</span>
              </MediaSlot>
              <b>{t("Silicone")}</b>
              <span className="d">{t("Flexible, non-stick; small precise shapes pop out easily.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-31" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Wooden / teak mould")}</span>
              </MediaSlot>
              <b>{t("Wood / teak")}</b>
              <span className="d">{t("Large traditional blocks; slowly absorbs heat for an organic look.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-32" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Hard plastic multi-cavity tray")}</span>
              </MediaSlot>
              <b>{t("Plastic")}</b>
              <span className="d">{t("Many small cavities; cheaper, easy to wash.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-33" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Stainless steel / aluminium mould")}</span>
              </MediaSlot>
              <b>{t("Metal")}</b>
              <span className="d">{t("Cools syrup fast, very easy to clean. Larger modern setups.")}</span>
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ padding: "0", overflowX: "auto" }}>
            <table className="tbl" style={{ minWidth: "560px" }}>
              <thead>
                <tr>
                  <th>{t("Size")}</th>
                  <th>{t("Piece weight")}</th>
                  <th>{t("Sold for")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>{t("Small")}</b>
                  </td>
                  <td>{t("5-20 g")}</td>
                  <td>{t("Adding to tea or coffee")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("Medium")}</b>
                  </td>
                  <td>{t("100-250 g")}</td>
                  <td>{t("Daily household use")}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("Large")}</b>
                  </td>
                  <td>{t("500 g-2 kg")}</td>
                  <td>{t("Wholesale and bulk buyers")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {" "}
          <p className="muted" style={{ fontSize: "14px" }}>{t("Shapes: cube/block (most common, easy to stack) · hearts, pyramids, hexagons (gifting, premium organic) · trapezoid/round (everyday loose sales).")}</p>
          {" "}
        </section>
        {" "}
        <section id="powder" className="msec">
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="6" cy="16" r="1.5" />
                <circle cx="12" cy="18" r="1.5" />
                <circle cx="18" cy="15" r="1.5" />
                <circle cx="9" cy="11" r="1.5" />
                <circle cx="15" cy="9" r="1.5" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Steps 2, 8 and 9")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Peeling, powder and drying")}</h2>
            </div>
          </div>
          {" "}
          <div className="grid">
            {" "}
            
            
            <div className="card mcard">
              <MediaSlot id="machines-36" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Pulveriser / hammer mill")}</span>
              </MediaSlot>
              <b>{t("Pulveriser / hammer mill")}</b>
              <span className="d">{t("5 HP (5 TCD) to 10-15 HP (10 TCD); pin mills at 20 TCD.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-37" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Solar / tray dryer")}</span>
              </MediaSlot>
              <b>{t("Solar / tray dryer")}</b>
              <span className="d">{t("Dries granules to 1-2% while keeping quality.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-38" kind="photo" style={{ height: "110px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Vibratory sifter, 3 mm")}</span>
              </MediaSlot>
              <b>{t("Sieve / vibratory sifter")}</b>
              <span className="d">{t("Keeps particles under 3 mm.")}</span>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="packaging" className="msec" style={{ paddingBottom: "72px" }}>
          {" "}
          <div className="mhead">
            <div className="ico">
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
                <path d="M3 7l9 4 9-4M12 11v10" />
              </svg>
            </div>
            <div>
              <span className="stepchip">{t("Step 10")}</span>
              <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "4px" }}>{t("Packaging machines")}</h2>
            </div>
          </div>
          {" "}
          <p className="muted" style={{ lineHeight: "1.55", maxWidth: "860px" }}>
            {t("Weigh, fill and seal jaggery into pouches or boxes. ")}
            <b>{t("₹65,000 to ₹65,00,000")}</b>
            {t(" depending on automation.")}
          </p>
          {" "}
          <div className="grid">
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-39" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Auger filler machine")}</span>
              </MediaSlot>
              <b>{t("Auger filler")}</b>
              <span className="d">{t("A metal screw pushes sticky or powdery jaggery into bags, like a gentle meat grinder, so it doesn't jam.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-40" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Cup filler machine")}</span>
              </MediaSlot>
              <b>{t("Cup filler")}</b>
              <span className="d">{t("Small cups scoop exact amounts. Best for dry, loose granules.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-41" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Vacuum packager")}</span>
              </MediaSlot>
              <b>{t("Vacuum packager")}</b>
              <span className="d">{t("Removes air before sealing; keeps soft or block jaggery from hardening or taking up moisture.")}</span>
            </div>
            {" "}
            <div className="card mcard">
              <MediaSlot id="machines-42" kind="photo" style={{ height: "120px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Pouch packer / heat sealer")}</span>
              </MediaSlot>
              <b>{t("Pouch packer / sealer")}</b>
              <span className="d">{t("From a 0.5 kW heat bar sealer to shrink-wrap tunnels on large lines.")}</span>
            </div>
            {" "}
          </div>
          {" "}
          <Link to="/plan-your-unit" className="btn" style={{ alignSelf: "flex-start", background: "#1F2A24", color: "#fff", marginTop: "12px" }}>{t("See full machine sets by unit size →")}</Link>
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
