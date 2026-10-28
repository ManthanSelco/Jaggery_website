// Generated from steps-7-11-cool-to-market.html. Page text is unchanged from the static site; t() shows it in the chosen language.
import { Link } from 'react-router-dom';
import MediaSlot from '../components/MediaSlot.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';
import { SlotsProvider } from '../lib/slots.jsx';
import '../styles/pages/steps-7-11.css';

export default function Steps7to11() {
  const t = useT();
  usePageTitle(t("Jaggery · Steps 7-11 · Cool to market"));
  return (
    <SlotsProvider page="steps-7-11">
    <div className="pg pg-steps-7-11">
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
            <a href="#s7">
              <span style={{ background: "#1F2A24", borderColor: "#1F2A24", color: "#EBC3AE" }}>{"7"}</span>
              {t("Cool")}
            </a>
            {" "}
            <a href="#s8">
              <span style={{ background: "#1F2A24", borderColor: "#1F2A24", color: "#EBC3AE" }}>{"8"}</span>
              {t("Shape")}
            </a>
            {" "}
            <a href="#s9">
              <span style={{ background: "#1F2A24", borderColor: "#1F2A24", color: "#EBC3AE" }}>{"9"}</span>
              {t("Dry")}
            </a>
            {" "}
            <a href="#s10">
              <span style={{ background: "#1F2A24", borderColor: "#1F2A24", color: "#EBC3AE" }}>{"10"}</span>
              {t("Pack")}
            </a>
            {" "}
            <a href="#s11">
              <span style={{ background: "#1F2A24", borderColor: "#1F2A24", color: "#EBC3AE" }}>{"11"}</span>
              {t("Store")}
            </a>
            {" "}
          </nav>
          {" "}
        </div>
      </SiteHeader>
      {" "}
      <section className="page-hero" data-hero="steps-7-11">
        <HeroBackdrop image="/hero/steps-7-11.jpg" />
        {" "}
        <div className="wrap" style={{ paddingTop: "48px", paddingBottom: "48px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {" "}
          <div style={{ fontSize: "14px", fontWeight: "600" }}>
            <Link to="/">{t("Home")}</Link>
            {t(" / Process / Part C")}
          </div>
          {" "}
          <div className="eyebrow">{t("Part C · Steps 7 to 11")}</div>
          {" "}
          <h1 style={{ fontSize: "54px", lineHeight: "1.05", fontWeight: "600" }} id="h-from-hot-syrup-to-a-packet-on-the-shelf">{t("From hot syrup to a packet on the shelf")}</h1>
          {" "}
          <p style={{ fontSize: "19px", lineHeight: "1.5", maxWidth: "760px" }}>{t("Cool it right, shape it into the form you sell, dry it, pack it against moisture and store it well. This is where shelf life and price are won or lost.")}</p>
          {" "}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "6px" }}>
            {" "}
            <span className="tag" style={{ background: "#C97B5E", color: "#1F2A24" }}>{t("Powder dried to 1-2% moisture")}</span>
            {" "}
            <span className="tag" style={{ background: "#C97B5E", color: "#1F2A24" }}>{t("Sieve 3 mm")}</span>
            {" "}
            <span className="tag" style={{ background: "#C97B5E", color: "#1F2A24" }}>{t("Store at 40-60% humidity")}</span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="wrap">
        {" "}
        <section id="s7" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"7"}</span>
            <div>
              <div className="eyebrow">{t("Step 7 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Cool the syrup")}</h2>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-7-11-1" kind="video" style={{ flex: "2 1 460px", minHeight: "300px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 7 · Cooling and stirring the slurry")}</b>
              <span className="mcap">{t("Hot slurry poured into the cooling pan, stirred with a flat wooden stirrer until the shine disappears")}</span>
            </MediaSlot>
            {" "}
            <div style={{ flex: "1 1 280px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignContent: "start" }}>
              {" "}
              <div className="stat">
                <b>{t("10-15 min")}</b>
                <span>{t("stir on the platform")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{t("5-10 min")}</b>
                <span>{t("rest, no stirring, for crystals")}</span>
              </div>
              {" "}
              <div className="stat" style={{ gridColumn: "1/-1" }}>
                <b>{"9-10%"}</b>
                <span>{t("moisture of the semi-cooled mass (dry basis)")}</span>
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
                    {t("At the striking point, pour the slurry into a ")}
                    <b>{t("cooling pan")}</b>
                    {t(" of wood or iron, or take the pan off the furnace onto a platform.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"2"}</span>
                  <span>
                    {t("Stir thoroughly with a ")}
                    <b>{t("flat wooden stirrer")}</b>
                    {t(" for ")}
                    <b>{t("10-15 minutes")}</b>
                    {t(" so it cools evenly in the open air.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"3"}</span>
                  <span>{t("Puddle (work) the slurry with a ladle.")}</span>
                </li>
                {" "}
                <li>
                  <span className="n">{"4"}</span>
                  <span>
                    {t("For powder: leave it ")}
                    <b>{t("5-10 minutes without stirring")}</b>
                    {t(" so seed crystals form.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"5"}</span>
                  <span>
                    {t("When the ")}
                    <b>{t("shine on the surface disappears")}</b>
                    {t(", it is ready for moulding or graining (Step 8).")}
                  </span>
                </li>
                {" "}
              </ol>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ fontSize: "20px" }}>{t("Cooling equipment")}</h3>
              {" "}
              <ul className="li">
                {" "}
                <li>
                  <b>{t("Cooling pan (chak)")}</b>
                  {t(": shallow, wide tank, often on wheels; syrup cools in a flat layer")}
                </li>
                {" "}
                <li>
                  <b>{t("Jaggery granulator")}</b>
                  {t(": tank with built-in mixers that stir as it cools, breaking it into granules")}
                </li>
                {" "}
                <li>
                  <b>{t("Tunnel cooling system")}</b>
                  {t(": fans and moving belts set blocks quickly; large plants")}
                </li>
                {" "}
                <li>
                  <b>{t("Motorised agitator arm")}</b>
                  {t(" on the cooling tray (2.2 kW) from 10 tonnes/day; twin-shaft crystallisation scrapers (4 kW) at 20 tonnes/day")}
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <h3 style={{ fontSize: "20px" }}>{t("Cooling floor area by size")}</h3>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Cane per day")}</th>
                    <th>{t("Cooling area")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("1 tonne")}</b>
                    </td>
                    <td>{t("1 platform, 1.5 m × 1.5 m")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("5 tonnes")}</b>
                    </td>
                    <td>{t("2 platforms, 2.5 m × 2.5 m")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("10 tonnes")}</b>
                    </td>
                    <td>{t("3 platforms or 1 rotary table")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("20 tonnes")}</b>
                    </td>
                    <td>{t("4 platforms or twin mechanical tables")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Traditional")}</span>
              <MediaSlot id="steps-7-11-2" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Cooling in an open pan on a platform, hand stirring")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern")}</span>
              <MediaSlot id="steps-7-11-3" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Mechanised cooling tray / tunnel cooler")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="tag" style={{ background: "#EFE7DC", alignSelf: "flex-start" }}>{t("Equipment")}</span>
              <MediaSlot id="steps-7-11-4" kind="photo" style={{ height: "170px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Cooling pan (chak) on wheels")}</span>
              </MediaSlot>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="s8" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"8"}</span>
            <div>
              <div className="eyebrow">{t("Step 8 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Shape it: choose your form")}</h2>
            </div>
          </div>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.55", maxWidth: "860px" }}>{t("The same cooled syrup becomes blocks, powder or liquid. Pick your path below.")}</p>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px" }}>
            {" "}
            <a href="#s8a" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "6px", border: "2px solid #A55D42" }}>
              <span className="tag" style={{ background: "#A55D42", color: "#fff", alignSelf: "flex-start" }}>{t("Path A")}</span>
              <b style={{ fontSize: "20px" }}>{t("Solid blocks and cubes")}</b>
              <span className="muted" style={{ fontSize: "14px" }}>{t("Mould and demould")}</span>
            </a>
            {" "}
            <a href="#s8b" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "6px", border: "2px solid #4E6B55" }}>
              <span className="tag" style={{ background: "#4E6B55", color: "#fff", alignSelf: "flex-start" }}>{t("Path B")}</span>
              <b style={{ fontSize: "20px" }}>{t("Granules and powder")}</b>
              <span className="muted" style={{ fontSize: "14px" }}>{t("Shear, then dry at Step 9")}</span>
            </a>
            {" "}
            <a href="#s8c" className="card" style={{ textDecoration: "none", color: "#1F2A24", display: "flex", flexDirection: "column", gap: "6px", border: "2px solid #1F2A24" }}>
              <span className="tag" style={{ background: "#1F2A24", color: "#EBC3AE", alignSelf: "flex-start" }}>{t("Path C")}</span>
              <b style={{ fontSize: "20px" }}>{t("Liquid jaggery")}</b>
              <span className="muted" style={{ fontSize: "14px" }}>{t("Strike at 106-107°C, then bottle")}</span>
            </a>
            {" "}
          </div>
          {" "}
          <div id="s8a" className="path" style={{ background: "#F4E6DB" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span className="tag" style={{ background: "#A55D42", color: "#fff" }}>{t("Path A")}</span>
              <h3 style={{ fontSize: "26px" }}>{t("Mould solid blocks")}</h3>
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "16px" }}>
              {" "}
              <div className="card">
                <h4 style={{ fontSize: "18px", marginBottom: "12px" }}>{t("How to do it")}</h4>
                {" "}
                <ol className="steps">
                  {" "}
                  <li>
                    <span className="n">{"1"}</span>
                    <span>
                      {t("Pour the cooling syrup into ")}
                      <b>{t("moulding trays")}</b>
                      {"."}
                    </span>
                  </li>
                  {" "}
                  <li>
                    <span className="n">{"2"}</span>
                    <span>{t("Let it set into blocks, cubes or balls.")}</span>
                  </li>
                  {" "}
                  <li>
                    <span className="n">{"3"}</span>
                    <span>
                      <b>{t("Demould")}</b>
                      {t(": pop the set jaggery out (silicone moulds release easiest).")}
                    </span>
                  </li>
                  {" "}
                  <li>
                    <span className="n">{"4"}</span>
                    <span>{t("Move blocks to packing (Step 10).")}</span>
                  </li>
                  {" "}
                </ol>
              </div>
              {" "}
              <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h4 style={{ fontSize: "18px" }}>{t("Pick your mould")}</h4>
                {" "}
                <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <b>{t("Material:")}</b>
                  {t(" food-grade silicone (non-stick, small precise shapes) · wood/teak (big traditional blocks, organic look) · hard plastic (cheap, easy to wash) · stainless steel/aluminium (cools fast, easy to clean)")}
                </div>
                {" "}
                <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <b>{t("Shape:")}</b>
                  {t(" cube/block (stacks and packs easily) · hearts, pyramids, hexagons (gifting, premium organic) · trapezoid/round (everyday loose sales)")}
                </div>
                {" "}
                <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <b>{t("Size:")}</b>
                  {t(" 5-20 g (for tea and coffee) · 100-250 g (household) · 500 g-2 kg (wholesale)")}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#fff", alignSelf: "flex-start" }}>{t("Traditional moulding")}</span>
                <MediaSlot id="steps-7-11-5" kind="photo" style={{ height: "160px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Workers pressing jaggery into moulds by hand")}</span>
                </MediaSlot>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern moulding")}</span>
                <MediaSlot id="steps-7-11-6" kind="photo" style={{ height: "160px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Automated mould depositor on a conveyor")}</span>
                </MediaSlot>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#fff", alignSelf: "flex-start" }}>{t("Traditional demoulding")}</span>
                <MediaSlot id="steps-7-11-7" kind="photo" style={{ height: "160px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Rows of bucket-shaped blocks after demoulding")}</span>
                </MediaSlot>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("Modern demoulding")}</span>
                <MediaSlot id="steps-7-11-8" kind="photo" style={{ height: "160px" }}>
                  <span className="mtag">{t("Insert photo")}</span>
                  <span className="mcap">{t("Machine releasing uniform round blocks")}</span>
                </MediaSlot>
              </div>
              {" "}
            </div>
            {" "}
            <MediaSlot id="steps-7-11-9" kind="video" style={{ minHeight: "200px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Path A · Moulding and demoulding")}</b>
              <span className="mcap">{t("Pouring into moulds, setting and releasing blocks")}</span>
            </MediaSlot>
            {" "}
          </div>
          {" "}
          <div id="s8b" className="path" style={{ background: "#E5ECE3" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span className="tag" style={{ background: "#4E6B55", color: "#fff" }}>{t("Path B")}</span>
              <h3 style={{ fontSize: "26px" }}>{t("Make granules and powder")}</h3>
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "16px" }}>
              {" "}
              <div className="card">
                <h4 style={{ fontSize: "18px", marginBottom: "12px" }}>{t("How to do it by hand")}</h4>
                {" "}
                <ol className="steps">
                  {" "}
                  <li>
                    <span className="n">{"1"}</span>
                    <span>
                      {t("Move the semi-cooled mass with its seed crystals from the pan into an ")}
                      <b>{t("aluminium tray")}</b>
                      {"."}
                    </span>
                  </li>
                  {" "}
                  <li>
                    <span className="n">{"2"}</span>
                    <span>
                      {t("Break it into granules with strong ")}
                      <b>{t("shearing")}</b>
                      {t(": wooden or stainless steel scrapers, sometimes wooden hammers.")}
                    </span>
                  </li>
                  {" "}
                  <li>
                    <span className="n">{"3"}</span>
                    <span>{t("Shearing exposes more surface: it cools faster and more moisture evaporates.")}</span>
                  </li>
                  {" "}
                  <li>
                    <span className="n">{"4"}</span>
                    <span>{t("Work fast. If you stop, the mass sets into lumps of different sizes.")}</span>
                  </li>
                  {" "}
                  <li>
                    <span className="n">{"5"}</span>
                    <span>{t("Send granules to drying (Step 9).")}</span>
                  </li>
                  {" "}
                </ol>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {" "}
                <div className="stat" style={{ background: "#fff" }}>
                  <b>{t("3-4 workers × 15-20 min")}</b>
                  <span>{t("to turn the mass from 350-400 kg of cane into 35-40 kg of granules")}</span>
                </div>
                {" "}
                <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h4 style={{ fontSize: "18px" }}>{t("Machines instead of hands")}</h4>
                  {" "}
                  <ul className="li" style={{ fontSize: "15px" }}>
                    <li>
                      <b>{t("Granular jaggery / powder making machine")}</b>
                    </li>
                    <li>
                      <b>{t("Jaggery granulator")}</b>
                      {t(": stirs as it cools into granules")}
                    </li>
                    <li>
                      <b>{t("Pulveriser / grinder")}</b>
                      {t(" 5 HP (5 tonnes/day; run in shifts so the panel isn't overloaded)")}
                    </li>
                    <li>
                      <b>{t("Hammer mill pulveriser")}</b>
                      {t(" 10-15 HP + vibratory sifter (10 tonnes/day)")}
                    </li>
                    <li>
                      <b>{t("Pin/hammer mill + fluid-bed flash dryer")}</b>
                      {t(" (20 tonnes/day)")}
                    </li>
                  </ul>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
              {" "}
              <MediaSlot id="steps-7-11-10" kind="photo" style={{ height: "160px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Shearing the mass with scrapers in an aluminium tray")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-7-11-11" kind="photo" style={{ height: "160px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Granular jaggery making machine")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-7-11-12" kind="video" style={{ minHeight: "160px" }}>
                <span className="mtag">
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 4l13 8-13 8z" />
                  </svg>
                  {t("Insert video")}
                </span>
                <span className="mcap">{t("Path B · Making granules and powder")}</span>
              </MediaSlot>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div id="s8c" className="path" style={{ background: "#fff", border: "1px solid #E4DCD1" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span className="tag" style={{ background: "#1F2A24", color: "#EBC3AE" }}>{t("Path C")}</span>
              <h3 style={{ fontSize: "26px" }}>{t("Liquid jaggery")}</h3>
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
              {" "}
              <div className="stat">
                <b>{t("106-107°C")}</b>
                <span>{t("striking point")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{"30-35%"}</b>
                <span>{t("water in the final product")}</span>
              </div>
              {" "}
              <div className="stat">
                <b>{t("300 mg")}</b>
                <span>{t("calcium per 100 g")}</span>
              </div>
              {" "}
            </div>
            {" "}
            <ul className="li">
              <li>
                {t("Boil only to ")}
                <b>{t("106-107°C")}</b>
                {t(" so it stays a thick liquid")}
              </li>
              <li>
                {t("Fill into bottles: ")}
                <b>{t("liquid piston bottle filler")}</b>
                {t(" (1.5 kW) at 5 tonnes/day; ")}
                <b>{t("multi-nozzle bottling, capping and labelling line")}</b>
                {t(" (6 kW) at 20 tonnes/day")}
              </li>
              <li>{t("Main markets: Maharashtra, Gujarat, Kerala, Andhra Pradesh, West Bengal, Tamil Nadu")}</li>
            </ul>
            {" "}
            <MediaSlot id="steps-7-11-13" kind="photo" style={{ height: "150px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("Liquid jaggery being bottled")}</span>
            </MediaSlot>
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
              {t("People at these steps: cooling and moulding")}
            </div>
            {" "}
            <div className="pplg">
              {" "}
              <div>
                <span className="pk">{t("Who does it")}</span>
                <ul>
                  <li>{t("Kolhapur: moulders fill cloth-lined moulds of 1, 2, 10 and 30 kg using a haal (scoop)")}</li>
                  <li>{t("Tamil Nadu: men pour into wooden moulds kept in water; women help and pack")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("How they earn")}</span>
                <ul>
                  <li>{t("Paid as part of the unit's piece-rate team")}</li>
                  <li>{t("Smaller blocks sell better: Mahalingpur sizes shrank from 30 kg to 250 g")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("Doing it best")}</span>
                <ul>
                  <li>{t("RuTAG IIT Bombay: hygienic, branded liquid jaggery (kakvi) for small Kolhapur units")}</li>
                  <li>{t("Itnal: flavoured jaggery (ginger, cardamom, pepper and others)")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
            <div className="psrc">
              {t("Sources: Kolhapur field study (research doc) · ")}
              <a href="https://scroll.in/article/869827/in-this-tamil-nadu-village-making-jaggery-is-a-family-affair">{t("Scroll (Neikkarapatti)")}</a>
              {" · "}
              <a href="https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fa-sweet-legacy-3402693">{t("Deccan Herald: A sweet legacy (Mahalingpur)")}</a>
              {" · "}
              <a href="https://www.indiascienceandtechnology.gov.in/technologies/process-and-product-improvements-kolhapur-type-jaggery-making-unit-possibilities-value-addition">{t("RuTAG IIT Bombay (Kolhapur kakvi)")}</a>
              {" · "}
              <a href="https://english.udayavani.com/article/this-hubli-farmer-produces-11-different-flavors-of-jaggery/903414">{t("Udayavani (Itnal)")}</a>
              {" · "}
              <Link to="/more-case-studies">{t("More case studies")}</Link>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="s9" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"9"}</span>
            <div>
              <div className="eyebrow">{t("Step 9 of 11 · for granules and powder")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Dry and sieve")}</h2>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-7-11-14" kind="video" style={{ flex: "2 1 460px", minHeight: "280px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 9 · Drying and sieving powder")}</b>
              <span className="mcap">{t("Granules spread on trays in a solar dryer, then passed through a 3 mm sieve")}</span>
            </MediaSlot>
            {" "}
            <div className="card" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "14px", padding: "18px" }}>
              {" "}
              <b style={{ fontSize: "18px" }}>{t("Moisture: from tray to packet")}</b>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {" "}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                  <span>{t("After shearing")}</span>
                  <b>{"9-12%"}</b>
                </div>
                {" "}
                <div style={{ height: "14px", borderRadius: "7px", background: "#EFE7DC", overflow: "hidden" }}>
                  <div style={{ width: "100%", height: "100%", background: "#E3865F" }} />
                </div>
                {" "}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginTop: "6px" }}>
                  <span>{t("Target for packing")}</span>
                  <b>{"1-2%"}</b>
                </div>
                {" "}
                <div style={{ height: "14px", borderRadius: "7px", background: "#EFE7DC", overflow: "hidden" }}>
                  <div style={{ width: "14%", height: "100%", background: "#4E6B55" }} />
                </div>
                {" "}
              </div>
              {" "}
              <span className="muted" style={{ fontSize: "13px", lineHeight: "1.45" }}>{t("At 1-2% moisture, powder keeps for up to 2 years. Sieve size: 3 mm.")}</span>
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
                    {t("Dry granules from about ")}
                    <b>{"10-12%"}</b>
                    {t(" down to ")}
                    <b>{"1-2%"}</b>
                    {t(" moisture.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"2"}</span>
                  <span>
                    {t("Use ")}
                    <b>{t("tray or solar drying")}</b>
                    {t(" to keep quality intact. Sun drying and polyhouse drying also work.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"3"}</span>
                  <span>
                    {t("Sieve through a ")}
                    <b>{t("3 mm sieve")}</b>
                    {t(". Crystals smaller than 3 mm give better quality; particle size changes the jaggery's chemical properties.")}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="n">{"4"}</span>
                  <span>{t("Pack straight away so it doesn't take up moisture again.")}</span>
                </li>
                {" "}
              </ol>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "20px" }}>{t("Drying options")}</h3>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "14px" }}>
                {" "}
                <div style={{ background: "#F4E6DB", borderRadius: "10px", padding: "12px" }}>
                  <b>{t("Sun drying")}</b>
                  <div className="muted">{t("Free; weather-dependent; dust risk")}</div>
                </div>
                {" "}
                <div style={{ background: "#E5ECE3", borderRadius: "10px", padding: "12px" }}>
                  <b>{t("Solar dryer")}</b>
                  <div>{t("Keeps quality; SELCO plans to explore solar drying next")}</div>
                </div>
                {" "}
                <div style={{ background: "#E5ECE3", borderRadius: "10px", padding: "12px" }}>
                  <b>{t("Tray dryer")}</b>
                  <div>{t("Keeps quality intact")}</div>
                </div>
                {" "}
                <div style={{ background: "#F4E6DB", borderRadius: "10px", padding: "12px" }}>
                  <b>{t("Polyhouse")}</b>
                  <div className="muted">{t("Covered sun drying")}</div>
                </div>
                {" "}
              </div>
              {" "}
              <span className="muted" style={{ fontSize: "14px" }}>{t("Large plants: continuous fluid-bed flash dryers.")}</span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
            {" "}
            <MediaSlot id="steps-7-11-15" kind="photo" style={{ height: "150px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("Solar / tray dryer with granules")}</span>
            </MediaSlot>
            {" "}
            <MediaSlot id="steps-7-11-16" kind="photo" style={{ height: "150px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("3 mm sieve / vibratory sifter")}</span>
            </MediaSlot>
            {" "}
            <MediaSlot id="steps-7-11-17" kind="photo" style={{ height: "150px" }}>
              <span className="mtag">{t("Insert photo")}</span>
              <span className="mcap">{t("Finished powder, close-up of crystal size")}</span>
            </MediaSlot>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="s10" className="stage">
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"10"}</span>
            <div>
              <div className="eyebrow">{t("Step 10 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Pack and label")}</h2>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {" "}
            <MediaSlot id="steps-7-11-18" kind="video" style={{ flex: "2 1 460px", minHeight: "280px" }}>
              <span className="mtag">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                {t("Insert video")}
              </span>
              <b>{t("Step 10 · Weighing, filling and sealing")}</b>
              <span className="mcap">{t("Powder through an auger or cup filler; blocks vacuum-packed; pouches sealed and labelled")}</span>
            </MediaSlot>
            {" "}
            <div className="card" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "10px", padding: "18px" }}>
              {" "}
              <b style={{ fontSize: "18px" }}>{t("A good pack protects from")}</b>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "14px", fontWeight: "700" }}>
                {" "}
                <span style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>{t("Moisture")}</span>
                <span style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>{t("Insects")}</span>
                <span style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>{t("Dust")}</span>
                <span style={{ background: "#F4E6DB", borderRadius: "10px", padding: "10px" }}>{t("Hands touching it")}</span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px" }}>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "20px" }}>{t("Pack materials")}</h3>
              {" "}
              <ul className="li">
                <li>
                  <b>{t("400 gauge polythene")}</b>
                  {t(" sheet")}
                </li>
                <li>
                  <b>{t("PET")}</b>
                  {t(" (polyethylene terephthalate) bottles")}
                </li>
                <li>
                  <b>{t("Polyethylene-polyester bags")}</b>
                  {t(" or polyethylene bottles: powder stores over 2 years, even in monsoon")}
                </li>
              </ul>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "20px" }}>{t("Print on every pack")}</h3>
              {" "}
              <ul className="li">
                <li>{t("Composition")}</li>
                <li>{t("Weight")}</li>
                <li>{t("Name of the maker")}</li>
                <li>{t("Date of manufacture")}</li>
                <li>{t("Date of packing")}</li>
                <li>{t("Health benefits")}</li>
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
              {t("People at this step: packing")}
            </div>
            {" "}
            <div className="pplg">
              {" "}
              <div>
                <span className="pk">{t("Who does it")}</span>
                <ul>
                  <li>{t("Neikkarapatti: women of the family pack the jaggery")}</li>
                  <li>{t("Aggregators who buy from many units and pack under one brand")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("How they earn")}</span>
                <ul>
                  <li>{t("Neikkarapatti: 30 kg bags sold at auction for ₹1,200-1,500 a bag")}</li>
                  <li>{t("Branded packs earn more per kg than loose blocks")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("Doing it best")}</span>
                <ul>
                  <li>{t("Kaushal Singh, CANE FARMS: own unit and brand")}</li>
                  <li>{t("Anthonisamy: organic powder at ₹75/kg vs ₹50/kg, both costing about ₹30/kg to make")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
            <div className="psrc">
              {t("Sources: ")}
              <a href="https://scroll.in/article/869827/in-this-tamil-nadu-village-making-jaggery-is-a-family-affair">{t("Scroll (Neikkarapatti)")}</a>
              {" · "}
              <a href="https://venturelinkup.com/2025/02/26/kaushal-singh-how-a-young-farmer-transformed-jaggery-into-a-golden-business-opportunity/">{t("VentureLinkup (CANE FARMS)")}</a>
              {" · "}
              <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2261676&reg=3&lang=2">{t("PIB, May 2026 (Anthonisamy)")}</a>
              {" · "}
              <Link to="/more-case-studies">{t("More case studies")}</Link>
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <h3 style={{ fontSize: "22px" }}>{t("Packing machines")}</h3>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{t("Machine")}</th>
                    <th>{t("Use it for")}</th>
                    <th>{t("How it works")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{t("Auger filler")}</b>
                    </td>
                    <td>{t("Sticky or powdery jaggery")}</td>
                    <td>{t("A metal screw gently pushes jaggery into the bag so it doesn't stick")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Cup filler")}</b>
                    </td>
                    <td>{t("Dry, loose granules")}</td>
                    <td>{t("Small cups scoop an exact amount and drop it in the bag")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Vacuum packager")}</b>
                    </td>
                    <td>{t("Soft jaggery and blocks")}</td>
                    <td>{t("Sucks air out before sealing; stops hardening and moisture uptake")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Heat bar sealer")}</b>
                      {t(" (0.5 kW)")}
                    </td>
                    <td>{t("Pouches at 1 tonne/day")}</td>
                    <td>{t("Manual sealing")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Semi-automatic shrink wrapper")}</b>
                      {t(" (1.5 kW)")}
                    </td>
                    <td>{t("Blocks at 5 tonnes/day")}</td>
                    <td>{t("Wraps blocks in film")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Multi-head fillers / packing line")}</b>
                      {t(" (3 kW)")}
                    </td>
                    <td>{t("10 tonnes/day")}</td>
                    <td>{t("Semi-automated weighing and filling")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("Mould depositors + shrink-wrap tunnel")}</b>
                      {t(" (5 kW)")}
                    </td>
                    <td>{t("20 tonnes/day")}</td>
                    <td>{t("Fully automated")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
            <p className="muted" style={{ fontSize: "14px" }}>
              {t("Packing machines range from ")}
              <b>{t("₹65,000 to ₹65,00,000")}</b>
              {t(" depending on automation.")}
            </p>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px" }}>
              {" "}
              <MediaSlot id="steps-7-11-19" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Auger filler")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-7-11-20" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Cup filler")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-7-11-21" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Vacuum packager")}</span>
              </MediaSlot>
              {" "}
              <MediaSlot id="steps-7-11-22" kind="photo" style={{ height: "130px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Finished labelled pack (front and back)")}</span>
              </MediaSlot>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="s11" className="stage" style={{ paddingBottom: "72px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span className="bignum">{"11"}</span>
            <div>
              <div className="eyebrow">{t("Step 11 of 11")}</div>
              <h2 style={{ fontSize: "38px", fontWeight: "600" }}>{t("Store and sell")}</h2>
            </div>
          </div>
          {" "}
          <p style={{ fontSize: "18px", lineHeight: "1.55", maxWidth: "860px" }}>
            {t("Jaggery pulls moisture from the air (its salts, proteins and natural sugars absorb it). Without proper storage, ")}
            <b>{"10-25%"}</b>
            {t(" can be lost. Store well and you can sell in the off-season for the best price.")}
          </p>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px" }}>
            {" "}
            <div className="stat">
              <b>{"7-8%"}</b>
              <span>{t("best moisture for storing solid jaggery")}</span>
            </div>
            {" "}
            <div className="stat">
              <b>{"4-11%"}</b>
              <span>{t("moisture of fresh jaggery")}</span>
            </div>
            {" "}
            <div className="stat">
              <b>{"40-60%"}</b>
              <span>{t("relative humidity in the store")}</span>
            </div>
            {" "}
            <div className="stat" style={{ background: "#FAEEE8", borderColor: "#E6BFAE" }}>
              <b>{t("10% + 30°C")}</b>
              <span>{t("danger: microbes grow fastest here")}</span>
            </div>
            {" "}
            <div className="stat">
              <b>{t("1.5-3°C")}</b>
              <span>{t("cold store: can hold even at 92-95% humidity")}</span>
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {" "}
            <h3 style={{ fontSize: "20px" }}>{t("How long it keeps")}</h3>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ width: "220px", fontSize: "14px", fontWeight: "700" }}>{t("Traditional, high moisture")}</span>
                <div style={{ flex: "1", minWidth: "160px", height: "22px", background: "#EFE7DC", borderRadius: "6px", overflow: "hidden" }}>
                  <div style={{ width: "12.5%", height: "100%", background: "#E3865F" }} />
                </div>
                <b style={{ width: "90px" }}>{t("3 months")}</b>
              </div>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ width: "220px", fontSize: "14px", fontWeight: "700" }}>{t("Modern powder")}</span>
                <div style={{ flex: "1", minWidth: "160px", height: "22px", background: "#EFE7DC", borderRadius: "6px", overflow: "hidden" }}>
                  <div style={{ width: "100%", height: "100%", background: "#4E6B55" }} />
                </div>
                <b style={{ width: "90px" }}>{t("18-24 months")}</b>
              </div>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ width: "220px", fontSize: "14px", fontWeight: "700" }}>{t("Granules at below 2%, sealed")}</span>
                <div style={{ flex: "1", minWidth: "160px", height: "22px", background: "#EFE7DC", borderRadius: "6px", overflow: "hidden" }}>
                  <div style={{ width: "100%", height: "100%", background: "#4E6B55" }} />
                </div>
                <b style={{ width: "90px" }}>{t("2+ years")}</b>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px" }}>
            {" "}
            <div className="do">
              <h3 style={{ fontSize: "20px", color: "#33493A", marginBottom: "10px" }}>{t("Store it right")}</h3>
              <ul className="li">
                <li>{t("Cool, dry place, away from direct moisture")}</li>
                <li>{t("Keep humidity between 40% and 60%")}</li>
                <li>{t("Keep packs sealed; use proper storage structures")}</li>
              </ul>
              {" "}
              <MediaSlot id="steps-7-11-23" kind="photo" style={{ height: "130px", marginTop: "12px" }}>
                <span className="mtag">{t("Insert photo")}</span>
                <span className="mcap">{t("Good jaggery storage room")}</span>
              </MediaSlot>
            </div>
            {" "}
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "20px" }}>{t("Sell it right")}</h3>
              <ul className="li">
                <li>
                  {t("Sell in the ")}
                  <b>{t("off-season")}</b>
                  {t(" for maximum returns: prices fall when everyone sells at harvest")}
                </li>
                <li>
                  {t("Promote the ")}
                  <b>{t("health benefits of jaggery over sugar")}</b>
                </li>
                <li>{t("Make value-added products: bakery, chocolates, confectionery, drinks")}</li>
                <li>
                  {t("Case study price: ")}
                  <b>{t("₹90/kg")}</b>
                  {t(" wholesale organic, about 2× conventional jaggery; supplies 3 organic retail chains in Bengaluru")}
                </li>
                <li>
                  {t("Extra income: fresh cane juice at ")}
                  <b>{t("₹10 a glass")}</b>
                </li>
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
              {t("People at this step: selling")}
            </div>
            {" "}
            <div className="pplg">
              {" "}
              <div>
                <span className="pk">{t("Who does it")}</span>
                <ul>
                  <li>
                    {t("Traders and commission agents at the main markets: Muzaffarnagar, Anakapalle, Kolhapur (Shahupuri soudas), Neikkarapatti auctions, Mahalingpur APMC; cash traders in Ayodhya")}
                  </li>
                  <li>{t("Wholesalers and retailers")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("How they earn")}</span>
                <ul>
                  <li>{t("Wholesaler margin about ₹850 per quintal; retailer ₹1,025-1,275 per quintal")}</li>
                  <li>{t("Producer share: 58%, 65% or 99% depending on the channel (direct selling gives the most)")}</li>
                  <li>{t("Other buyers: jaggery tea stalls (15-20 per town), Sathumavu (Tamil Nadu nutrition programme), temples, Ayurvedic firms")}</li>
                </ul>
              </div>
              {" "}
              <div>
                <span className="pk">{t("Doing it best")}</span>
                <ul>
                  <li>{t("Itnal: exports 30 tonnes to six countries")}</li>
                  <li>{t("Kaushal Singh, CANE FARMS: own brand")}</li>
                  <li>{t("Organic Mandya: organic retail outlet")}</li>
                  <li>{t("Anthonisamy: organic powder ₹75/kg vs ₹50/kg")}</li>
                </ul>
              </div>
              {" "}
            </div>
            {" "}
            <div className="psrc">
              {t("Sources: Kolhapur field study (research doc) · ")}
              <a href="https://scroll.in/article/869827/in-this-tamil-nadu-village-making-jaggery-is-a-family-affair">{t("Scroll (Neikkarapatti)")}</a>
              {" · "}
              <a href="https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fa-sweet-legacy-3402693">{t("Deccan Herald: A sweet legacy (Mahalingpur)")}</a>
              {" · "}
              <a href="https://english.udayavani.com/article/this-hubli-farmer-produces-11-different-flavors-of-jaggery/903414">{t("Udayavani (Itnal)")}</a>
              {" · "}
              <a href="https://venturelinkup.com/2025/02/26/kaushal-singh-how-a-young-farmer-transformed-jaggery-into-a-golden-business-opportunity/">{t("VentureLinkup (CANE FARMS)")}</a>
              {" · "}
              <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2261676&reg=3&lang=2">{t("PIB, May 2026 (Anthonisamy)")}</a>
              {" · "}
              <Link to="/more-case-studies">{t("More case studies")}</Link>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginTop: "24px", borderTop: "1px solid #E4DCD1", paddingTop: "24px" }}>
            {" "}
            <Link to="/steps-5-6-clarify-and-boil" className="btn" style={{ background: "#fff", color: "#1F2A24", border: "2px solid #1F2A24" }}>{t("← Part B · Clarify and boil")}</Link>
            {" "}
            <Link to="/plan-your-unit" className="btn" style={{ background: "#C97B5E", color: "#1F2A24" }}>{t("Next: plan your unit →")}</Link>
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
