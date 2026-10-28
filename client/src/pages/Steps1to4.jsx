// Generated from steps-1-4-cane-to-juice.html. Page text is unchanged from the static site; t() shows it in the chosen language.
import { Link } from 'react-router-dom';
import MediaSlot from '../components/MediaSlot.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';
import { SlotsProvider } from '../lib/slots.jsx';
import '../styles/pages/steps-1-4.css';

export default function Steps1to4() {
  const t = useT();
  usePageTitle(t("Jaggery · Steps 1-4 · Cane to juice"));
  return (
    <SlotsProvider page="steps-1-4">
    <div className="pg pg-steps-1-4">
      {" "}
      <SiteHeader active="/steps">
        <div style={{ borderTop: "1px solid #E4DCD1", background: "#fff" }}>
          {" "}
          <nav aria-label="Steps" className="wrap stepper" style={{ display: "flex", gap: "2px", overflowX: "auto", paddingTop: "6px", paddingBottom: "6px", alignItems: "center" }}>
            {" "}
            <span style={{ fontSize: "12px", fontWeight: "800", color: "#4E6B55", paddingRight: "8px", whiteSpace: "nowrap" }}>{t("PART A")}</span>
            {" "}
            <a href="#s1">
              <span style={{ background: "#4E6B55", borderColor: "#4E6B55", color: "#fff" }}>{"1"}</span>
              {t("Harvest")}
            </a>
            {" "}
            <a href="#s2">
              <span style={{ background: "#4E6B55", borderColor: "#4E6B55", color: "#fff" }}>{"2"}</span>
              {t("Clean")}
            </a>
            {" "}
            <a href="#s3">
              <span style={{ background: "#4E6B55", borderColor: "#4E6B55", color: "#fff" }}>{"3"}</span>
              {t("Crush")}
            </a>
            {" "}
            <a href="#s4">
              <span style={{ background: "#4E6B55", borderColor: "#4E6B55", color: "#fff" }}>{"4"}</span>
              {t("Filter")}
            </a>
            {" "}
            <span style={{ fontSize: "12px", fontWeight: "800", color: "#A55D42", padding: "0 8px", whiteSpace: "nowrap" }}>{t("PART B")}</span>
            {" "}
            <Link to="/steps-5-6-clarify-and-boil#s5">
              <span>{"5"}</span>
              {t("Clarify")}
            </Link>
            {" "}
            <Link to="/steps-5-6-clarify-and-boil#s6">
              <span>{"6"}</span>
              {t("Boil")}
            </Link>
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
      <section className="page-hero" data-hero="steps-1-4">
        <HeroBackdrop image="/hero/steps-1-4.jpg" />
        {" "}
        <div className="wrap" style={{ paddingTop: "48px", paddingBottom: "48px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {" "}
          <div style={{ fontSize: "14px", fontWeight: "600" }}>
            <Link to="/">{t("Home")}</Link>
            {t(" / Process / Part A")}
          </div>
          {" "}
          <div className="eyebrow">{t("Part A · Steps 1 to 4")}</div>
          {" "}
          <h1 style={{ fontSize: "54px", lineHeight: "1.05", fontWeight: "600" }} id="h-from-cane-to-clean-juice">{t("From cane to clean juice")}</h1>
          {" "}
          <p style={{ fontSize: "19px", lineHeight: "1.5", maxWidth: "760px" }}>{t("Clean, fully ripe cane and well-filtered juice decide the colour, taste and shelf life of your jaggery before the fire is even lit.")}</p>
          {" "}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "6px" }}>
            {" "}
            <span className="tag" style={{ background: "#fff", color: "#33493A" }}>{t("Ripe cane: above 16% sucrose")}</span>
            {" "}
            <span className="tag" style={{ background: "#fff", color: "#33493A" }}>{t("1 tonne cane → 650 kg juice")}</span>
            {" "}
            <span className="tag" style={{ background: "#fff", color: "#33493A" }}>{t("Settle juice 20 minutes")}</span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="wrap">
        {" "}
        <section id="s1" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"1"}</span>
            <div>
              <div className="eyebrow">{t("Step 1 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Harvest the cane")}</h2>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-1-4-1" kind="video" style={{ flex: "2 1 460px", minHeight: "300px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 1 · Harvesting sugarcane")}</b>
              <span className="mcap">{t("Cutting ripe cane at ground level, stripping dry leaves, setting aside green tops for fodder")}</span>
            </MediaSlot>
            {" "}
            <div style={{ flex: "1 1 280px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignContent: "start" }}>
              {" "}
              <div className="stat">
                <b>{"> 16%"}</b>
                <span>{t("sucrose in cane juice before cutting")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{t("Ground level")}</b>
                <span>{t("cutting height")}</span>
              </div>
              {" "}
              <div className="stat" style={{ gridColumn: "1/-1" }}>
                <b>{t("Refractometer 0-32%")}</b>
                <span>{t("scale to check raw cane juice sugar")}</span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px" }}>
            {" "}
            <div className="card">
              <h3 style={{ fontSize: "20px", marginBottom: "14px" }}>{t("How to do it")}</h3>
              {" "}
              <ol className="steps">
                {" "}
                <li>
                  <span className="n">{"1"}</span>
                  <span>
                    {t("Check ripeness: harvest only fully ripened cane with ")}
                    <b>{t("more than 16% sucrose")}</b>
                    {t(" in the juice.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"2"}</span>
                  <span>
                    {t("Cut at ")}
                    <b>{t("ground level")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"3"}</span>
                  <span>{t("Strip off the dry leaves.")}</span>
                </li>
                {" "}
                <li>
                  <span className="n">{"4"}</span>
                  <span>{t("Keep the green top leaves as fodder for animals.")}</span>
                </li>
                {" "}
                <li>
                  <span className="n">{"5"}</span>
                  <span>{t("Move cane to the unit for cleaning and crushing.")}</span>
                </li>
                {" "}
              </ol>
            </div>
            {" "}
            <div className="dont">
              <h3 style={{ fontSize: "20px", color: "#8A3A27", marginBottom: "12px" }}>{t("Avoid")}</h3>
              {" "}
              <ul className="li">
                {" "}
                <li>
                  <b>{t("Long stubble left in the field")}</b>
                  {t(": less jaggery per acre")}
                </li>
                {" "}
                <li>
                  <b>{t("Cutting below ground level")}</b>
                  {t(": soil gets mixed into the juice")}
                </li>
                {" "}
                <li>
                  <b>{t("Over-matured cane")}</b>
                  {t(": sucrose drops (inversion); jaggery sets poorly. If unavoidable, lime at Step 5 improves consistency")}
                </li>
                {" "}
                <li>
                  <b>{t("Waterlogged, lodged or immature cane")}</b>
                  {t(": needs special clarifiers (castor, groundnut, soybean) at Step 5")}
                </li>
                {" "}
              </ul>
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
              {t("People at this step: harvesting")}
            </div>
            {" "}
            <div className="pplg">
              {" "}
              <div>
                <span className="pk">{t("Who does it")}</span>
                <ul>
                  <li>{t("The cane farmer")}</li>
                  <li>{t("Hired cane-cutting labour; in Kolhapur many cutters come from North Karnataka and other states")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("How they earn")}</span>
                <ul>
                  <li>{t("Mandya (2015): farmers got about ₹1,600-1,800 per tonne of cane")}</li>
                  <li>{t("Kolhapur: up to ₹3,500 per tonne including harvest and transport")}</li>
                  <li>{t("Harvesting and transport labour: up to ₹1,000 per tonne")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("Doing it best")}</span>
                <ul>
                  <li>{t("RSJRS Kolhapur varieties Co 92005 (₹200-550 more per quintal of jaggery) and Co 8014")}</li>
                  <li>{t("IISR advice: crush within 6-12 hours of cutting, at a juice brix of 20-21")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
            <div className="psrc">
              {t("Sources: ")}
              <a href="https://kavithakuruganti.wordpress.com/2015/09/13/reviving-the-aalemanesjaggery-units-of-karnataka/">{t("Kavitha Kuruganti, 2015 (Mandya)")}</a>
              {t(" · Kolhapur field study (research doc) · ")}
              <a href="https://iisr.icar.gov.in/iisr/pages/jaggery.jsp">{t("IISR Jaggery Unit")}</a>
              {" · "}
              <Link to="/more-case-studies">{t("More case studies")}</Link>
            </div>
            {" "}
          </div>
          {" "}
          <Link to="/machines#refractometer" className="mach">
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 20l6-6M10 14l8-8 2 2-8 8zM14 6l4 4" />
            </svg>
            <div>
              <div className="eyebrow">{t("Tool for this step")}</div>
              <b style={{ fontSize: "18px" }}>{t("Brix meter / refractometer")}</b>
              <div className="muted" style={{ fontSize: "14px", marginTop: "4px" }}>{t("Handheld optical, 0-32% scale for raw juice. No batteries. See the machine guide →")}</div>
            </div>
          </Link>
          {" "}
        </section>
        {" "}
        <section id="s2" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"2"}</span>
            <div>
              <div className="eyebrow">{t("Step 2 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Clean the cane")}</h2>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-1-4-2" kind="video" style={{ flex: "2 1 460px", minHeight: "300px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 2 · Washing and peeling cane")}</b>
              <span className="mcap">{t("High-pressure water gun cleaning stalks; saw-tooth peeling unit in operation")}</span>
            </MediaSlot>
            {" "}
            <div style={{ flex: "1 1 280px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignContent: "start" }}>
              {" "}
              <div className="stat">
                <b>{t("100 kg/hr")}</b>
                <span>{t("peeler capacity")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{"85%"}</b>
                <span>{t("peeler efficiency")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{t("≤ 3.5 cm")}</b>
                <span>{t("cane diameter it can peel")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{t("0.2 cm")}</b>
                <span>{t("peeling depth")}</span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px" }}>
            {" "}
            <div className="card">
              <h3 style={{ fontSize: "20px", marginBottom: "14px" }}>{t("How to do it")}</h3>
              {" "}
              <ol className="steps">
                {" "}
                <li>
                  <span className="n">{"1"}</span>
                  <span>
                    {t("Wash cane thoroughly with a ")}
                    <b>{t("high-pressure water gun")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"2"}</span>
                  <span>{t("This removes soil, dust, wax, insects and other dirt stuck to the stalk.")}</span>
                </li>
                {" "}
                <li>
                  <span className="n">{"3"}</span>
                  <span>
                    {t("For the cleanest juice, peel the cane with a power-driven ")}
                    <b>{t("abrasive saw-tooth peeler")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"4"}</span>
                  <span>{t("Send clean cane straight to the crusher.")}</span>
                </li>
                {" "}
              </ol>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ fontSize: "20px" }}>{t("The cane peeler, inside")}</h3>
              {" "}
              <ul className="li">
                {" "}
                <li>
                  {t("4 peeling blades, each ")}
                  <b>{t("15 cm long")}</b>
                  {t(" with ")}
                  <b>{t("22-25 tapered teeth")}</b>
                </li>
                {" "}
                <li>
                  {t("Blades fixed at equal spacing inside a ")}
                  <b>{t("15 cm square frame")}</b>
                </li>
                {" "}
                <li>
                  {t("Peels cane up to ")}
                  <b>{t("3.5 cm")}</b>
                  {t(" thick, ")}
                  <b>{t("0.2 cm")}</b>
                  {t(" deep")}
                </li>
                {" "}
                <li>
                  <b>{"85%"}</b>
                  {t(" efficient at ")}
                  <b>{t("100 kg of cane per hour")}</b>
                </li>
                {" "}
              </ul>
              {" "}
              <MediaSlot id="steps-1-4-3" kind="photo" style={{ height: "150px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Saw-tooth cane peeling unit, close-up of blades")}</span>
              </MediaSlot>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="trad">
            <b>{t("The traditional way:")}</b>
            {t(" cane goes to the crusher unwashed, so mud, wax and insects end up in the juice and darken the jaggery.")}
          </div>
          {" "}
        </section>
        {" "}
        <section id="s3" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"3"}</span>
            <div>
              <div className="eyebrow">{t("Step 3 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Crush the cane for juice")}</h2>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-1-4-4" kind="video" style={{ flex: "2 1 460px", minHeight: "300px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 3 · Crushing in a 3-roller horizontal crusher")}</b>
              <span className="mcap">{t("Cane fed between rollers, juice flowing into the collection tray, bagasse leaving through the chute")}</span>
            </MediaSlot>
            {" "}
            <div style={{ flex: "1 1 280px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignContent: "start" }}>
              {" "}
              <div className="stat">
                <b>{t("650 kg")}</b>
                <span>{t("juice from 1 tonne cane")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{t("350 kg")}</b>
                <span>{t("wet bagasse (50% moisture)")}</span>
              </div>
              {" "}
              <div className="stat" style={{ gridColumn: "1/-1" }}>
                <b>{t("3-roller horizontal")}</b>
                <span>{t("best choice for most units: juice extraction above 65%")}</span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px" }}>
            {" "}
            <div className="card">
              <h3 style={{ fontSize: "20px", marginBottom: "14px" }}>{t("How to do it")}</h3>
              {" "}
              <ol className="steps">
                {" "}
                <li>
                  <span className="n">{"1"}</span>
                  <span>{t("Feed cleaned cane steadily into the crusher.")}</span>
                </li>
                {" "}
                <li>
                  <span className="n">{"2"}</span>
                  <span>
                    {t("Collect juice in ")}
                    <b>{t("clean stainless steel or plastic containers")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"3"}</span>
                  <span>
                    {t("Let bagasse fall out of the ")}
                    <b>{t("bagasse chute")}</b>
                    {t("; collect it for drying as fuel.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"4"}</span>
                  <span>{t("Send juice straight to filtering (Step 4).")}</span>
                </li>
                {" "}
                <li>
                  <span className="n">{"5"}</span>
                  <span>
                    {t("Spread the wet bagasse in the sun until it drops from ")}
                    <b>{t("50% to 20% moisture")}</b>
                    {t(": 350 kg becomes ")}
                    <b>{t("245-250 kg")}</b>
                    {t(" of fuel. ")}
                    <Link to="/steps-5-6-clarify-and-boil#fuel">{t("Fuel guide →")}</Link>
                  </span>
                </li>
                {" "}
              </ol>
            </div>
            {" "}
            <div className="dont">
              <h3 style={{ fontSize: "20px", color: "#8A3A27", marginBottom: "12px" }}>{t("Safety and avoid")}</h3>
              {" "}
              <ul className="li">
                {" "}
                <li>{t("Manual cane feeding is hard, tiring work: plan breaks and shifts")}</li>
                {" "}
                <li>{t("Keep electrical wiring covered; keep guards in place near rollers")}</li>
                {" "}
                <li>{t("Don't add hot water while crushing as sugar factories do (77-80% extraction): it needs extra energy to heat and extra boiling to evaporate")}</li>
                {" "}
                <li>{t("Don't collect juice in rusty or dirty vessels")}</li>
                {" "}
              </ul>
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <h3 style={{ fontSize: "22px" }}>{t("Which crusher to use")}</h3>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Crusher")}</th>
                    <th>{t("Juice extracted")}</th>
                    <th>{t("Best for")}</th>
                    <th>{t("Notes")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("3-roller vertical")}</b>
                    </td>
                    <td>{"50-55%"}</td>
                    <td>{t("Small, traditional units")}</td>
                    <td>{t("Smaller footprint, less cane per hour")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("3-roller horizontal")}</b>
                    </td>
                    <td>{t("55-60%, up to 65%+")}</td>
                    <td>{t("Most village and small units")}</td>
                    <td>{t("2-4% more juice than vertical; handles continuous feeding. Recommended")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("4-roller (modified)")}</b>
                    </td>
                    <td>{t("Up to 80%")}</td>
                    <td>{t("Commercial farmers")}</td>
                    <td>{t("Double pressing; more juice, less waste")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Planetary gear")}</b>
                    </td>
                    <td>{t("High")}</td>
                    <td>{t("Large plants")}</td>
                    <td>{t("Very slow 7-8 RPM, motors up to 25 HP; no excess heat to spoil juice")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px" }}>
              {" "}
              <MediaSlot id="steps-1-4-5" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Traditional: manual cane feeding into crusher")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-1-4-6" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Modern: multi-roller crusher units with conveyor feeding")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-1-4-7" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Bagasse chute and collection")}</span>
              </MediaSlot>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <h3 style={{ fontSize: "22px" }}>{t("Crusher size by daily cane")}</h3>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Cane per day")}</th>
                    <th>{t("Crusher")}</th>
                    <th>{t("Motor")}</th>
                    <th>{t("Cane per hour")}</th>
                    <th>{t("Feeding help")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("1 tonne")}</b>
                    </td>
                    <td>{t("Single 3-roller (mini)")}</td>
                    <td>{t("3-5 HP")}</td>
                    <td>{t("100-150 kg")}</td>
                    <td>{t("Manual")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("5 tonnes")}</b>
                    </td>
                    <td>{t("Heavy-duty 3-roller")}</td>
                    <td>{t("10-12.5 HP")}</td>
                    <td>{t("500-600 kg")}</td>
                    <td>{t("Belt conveyor (1.5 kW)")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("10 tonnes")}</b>
                    </td>
                    <td>{t("3- or 4-roller single mill")}</td>
                    <td>{t("15-20 HP")}</td>
                    <td>{t("~1,000 kg")}</td>
                    <td>{t("Cane cutter (2.2 kW) + elevator conveyor (1.5 kW)")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("20 tonnes")}</b>
                    </td>
                    <td>{t("4-roller or 3+3 tandem mill")}</td>
                    <td>{t("25-35 HP")}</td>
                    <td>{t("~2,000 kg")}</td>
                    <td>{t("Swing-hammer cutter (5.5 kW) + leveller and feed gantry (3.7 kW)")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", fontSize: "14px" }}>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB" }}>{t("Electric: 10-25 HP, cleanest and steadiest")}</span>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB" }}>{t("Diesel: remote farms without stable power")}</span>
              {" "}
              <span className="tag" style={{ background: "#F4E6DB" }}>{t("Animal-driven: rare, heritage use")}</span>
              {" "}
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A" }}>{t("Solar direct drive: 5 HP crusher on 6.5 kWp (case study)")}</span>
              {" "}
            </div>
            {" "}
            <p className="muted" style={{ fontSize: "14px" }}>{t("When buying, check: extraction rate, roller material, and the bagasse chute.")}</p>
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
              {t("People at this step: crushing")}
            </div>
            {" "}
            <div className="pplg">
              {" "}
              <div>
                <span className="pk">{t("Who does it")}</span>
                <ul>
                  <li>{t("The unit owner, or a crushing service the farmer pays")}</li>
                  <li>{t("In Kolhapur, 2 workers feed cane into the crusher")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("How they earn")}</span>
                <ul>
                  <li>{t("Marayoor: a cooperative bank rents its unit to farmers for a small fee")}</li>
                  <li>{t("Energy cost to crush: about ₹100 per tonne on electricity, ₹150-200 per tonne on diesel")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("Doing it best")}</span>
                <ul>
                  <li>{t("IIT Bombay mobile plant takes the crusher to the field")}</li>
                  <li>{t("IISR 10 HP crusher: 60-65 kg juice per 100 kg cane vs 45 kg on old machines")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
            <div className="psrc">
              {t("Sources: ")}
              <a href="https://www.thenewsminute.com/article/idukkis-special-marayoor-jaggery-faces-threat-knockoffs-falling-prices-95054">{t("The News Minute (Marayoor)")}</a>
              {t(" · Kolhapur field study (research doc) · ")}
              <a href="https://iitb.ac.in/breaking-news/iit-bombay-launches-online-mobile-jaggery-plant">{t("IIT Bombay mobile plant")}</a>
              {" · "}
              <a href="https://eng.kisanofindia.com/agriculture-business-ideas/know-how-you-can-earn-by-modern-jaggery-unit">{t("Kisan of India (IISR model)")}</a>
              {" · "}
              <Link to="/more-case-studies">{t("More case studies")}</Link>
            </div>
            {" "}
          </div>
          {" "}
          <Link to="/machines#crusher" className="mach">
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8">
              <circle cx="7" cy="9" r="4" />
              <circle cx="17" cy="9" r="4" />
              <circle cx="12" cy="17" r="4" />
            </svg>
            <div>
              <div className="eyebrow">{t("Machine for this step")}</div>
              <b style={{ fontSize: "18px" }}>{t("Sugarcane crusher")}</b>
              <div className="muted" style={{ fontSize: "14px", marginTop: "4px" }}>{t("All types, power options and buying checklist in the machine guide →")}</div>
            </div>
          </Link>
          {" "}
        </section>
        {" "}
        <section id="s4" className="stage" style={{ paddingBottom: "72px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"4"}</span>
            <div>
              <div className="eyebrow">{t("Step 4 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Filter and settle the juice")}</h2>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-1-4-8" kind="video" style={{ flex: "2 1 460px", minHeight: "300px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 4 · Filtering and settling juice")}</b>
              <span className="mcap">{t("Juice passing through the 5-layer filter, flowing into the stainless steel settling tank, clear juice drawn off")}</span>
            </MediaSlot>
            {" "}
            <div style={{ flex: "1 1 280px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignContent: "start" }}>
              {" "}
              <div className="stat">
                <b>{t("5 layers")}</b>
                <span>{t("filter")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{t("~20 min")}</b>
                <span>{t("settling time")}</span>
              </div>
              {" "}
              <div className="stat" style={{ gridColumn: "1/-1" }}>
                <b>{t("2-3 kg")}</b>
                <span>{t("dirt removed per 100 kg of cane")}</span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px" }}>
            {" "}
            <div className="card">
              <h3 style={{ fontSize: "20px", marginBottom: "14px" }}>{t("How to do it")}</h3>
              {" "}
              <ol className="steps">
                {" "}
                <li>
                  <span className="n">{"1"}</span>
                  <span>
                    <b>{t("Coarse strain")}</b>
                    {t(" right under the crusher: stainless steel wire mesh or a perforated metal sheet catches cane bits.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"2"}</span>
                  <span>
                    {t("Pass the juice through a ")}
                    <b>{t("five-layered filter")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"3"}</span>
                  <span>
                    {t("Let it run through underground pipes into a ")}
                    <b>{t("stainless steel settling tank")}</b>
                    {"."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"4"}</span>
                  <span>
                    <b>{t("Settle for about 20 minutes")}</b>
                    {t(". Bagasse bits, leaves and dust are removed.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"5"}</span>
                  <span>{t("Draw off the clear juice and send it to the boiling pan (Step 5).")}</span>
                </li>
                {" "}
              </ol>
            </div>
            {" "}
            <div className="trad">
              <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{t("The traditional way")}</h3>
              {" "}
              <ul className="li">
                {" "}
                <li>
                  {t("Juice collected in a ")}
                  <b>{t("masonry (brick and cement) settling tank")}</b>
                </li>
                {" "}
                <li>{t("Rested only a few minutes for light and heavy particles to separate")}</li>
                {" "}
                <li>
                  {t("Clear juice drawn from a ")}
                  <b>{t("middle port")}</b>
                  {t(" of the tank")}
                </li>
                {" "}
                <li>
                  {t("Moved to an iron open boiling pan filled to only ")}
                  <b>{t("one-third")}</b>
                  {t(" of its capacity")}
                </li>
                {" "}
              </ul>
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {" "}
            <h3 style={{ fontSize: "22px" }}>{t("Two rounds of straining")}</h3>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "14px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#1F2A24", color: "#EBC3AE", alignSelf: "flex-start" }}>{t("Round 1 · Coarse · here")}</span>
                <b>{t("Under the crusher")}</b>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <b>{t("Stainless steel wire mesh")}</b>
                  {t(": sturdy, rust-free, handles sticky juice. ")}
                  <b>{t("Perforated sheet")}</b>
                  {t(": like a colander; stops clumps, juice pours through fast.")}
                </span>
              </div>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "14px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#A55D42", color: "#fff", alignSelf: "flex-start" }}>{t("Round 2 · Fine · at Step 5")}</span>
                <b>{t("After the clarifier in the pan")}</b>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <b>{t("Muslin/cotton cloth")}</b>
                  {t(" bags trap fine mud. ")}
                  <b>{t("Nylon mesh")}</b>
                  {t(" filters to 50 microns, washes easily and does not rot.")}
                </span>
              </div>
              {" "}
              <div style={{ background: "#F4E6DB", borderRadius: "14px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#4E6B55", color: "#fff", alignSelf: "flex-start" }}>{t("Larger units")}</span>
                <b>{t("Gravity-flow filter boxes")}</b>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>{t("Several screens built in; juice gets cleaner at each level before the pan. Vibrating screeners (1.5 HP) from 5 tonnes/day.")}</span>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px" }}>
              {" "}
              <MediaSlot id="steps-1-4-9" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Stainless steel wire mesh strainer under crusher")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-1-4-10" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Five-layer filter and SS settling tank")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-1-4-11" kind="photo" style={{ height: "140px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Traditional masonry settling tank with middle port")}</span>
              </MediaSlot>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <h3 style={{ fontSize: "22px" }}>{t("Tanks and juice transfer by size")}</h3>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Cane per day")}</th>
                    <th>{t("Juice storage tanks")}</th>
                    <th>{t("Moving the juice")}</th>
                    <th>{t("Straining")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("1 tonne")}</b>
                    </td>
                    <td>{t("1 × 200 L stainless steel")}</td>
                    <td>{t("Buckets or small gravity hoses")}</td>
                    <td>{t("Manual, long-handled mesh ladles")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("5 tonnes")}</b>
                    </td>
                    <td>{t("2 × 1,000 L SS304")}</td>
                    <td>{t("Monoblock centrifugal pumps (2 × 1 HP), PVC/SS pipes")}</td>
                    <td>{t("Manual skimming + gravity settling; vibrating screener")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("10 tonnes")}</b>
                    </td>
                    <td>{t("2 × 2,000 L SS304")}</td>
                    <td>{t("Level-controlled pumps, stainless steel lines")}</td>
                    <td>{t("Vibrating screens + manual fine skimming")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("20 tonnes")}</b>
                    </td>
                    <td>{t("3 × 3,500 L SS304 jacketed")}</td>
                    <td>{t("PLC-controlled pneumatic valves, sanitary pumps")}</td>
                    <td>{t("Rotary vacuum filters or automatic clarifiers")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
          </div>
          {" "}
          <Link to="/machines#strainers" className="mach">
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A4B12" strokeWidth="1.8" strokeLinecap="round">
              <path d="M3 5h18l-7 8v6l-4 2v-8z" />
            </svg>
            <div>
              <div className="eyebrow">{t("Equipment for this step")}</div>
              <b style={{ fontSize: "18px" }}>{t("Juice strainers and settling tanks")}</b>
              <div className="muted" style={{ fontSize: "14px", marginTop: "4px" }}>{t("See all strainer types in the machine guide →")}</div>
            </div>
          </Link>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginTop: "24px", borderTop: "1px solid #E4DCD1", paddingTop: "24px" }}>
            {" "}
            <Link to="/" className="btn" style={{ background: "#fff", color: "#1F2A24", border: "2px solid #1F2A24" }}>{t("← Home")}</Link>
            {" "}
            <Link to="/steps-5-6-clarify-and-boil" className="btn" style={{ background: "#A55D42", color: "#fff" }}>{t("Next: Part B · Clarify and boil →")}</Link>
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
