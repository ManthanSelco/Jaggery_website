// Generated from case-study.html. Page text is unchanged from the static site; t() shows it in the chosen language.
import { Link } from 'react-router-dom';
import MediaSlot from '../components/MediaSlot.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';
import { SlotsProvider } from '../lib/slots.jsx';
import '../styles/pages/case-study.css';

export default function CaseStudy() {
  const t = useT();
  usePageTitle(t("Jaggery · Case study"));
  return (
    <SlotsProvider page="case-study">
    <div className="pg pg-case-study">
      {" "}
      <SiteHeader active="/case-study" />
      {" "}
      <section className="wrap" style={{ paddingTop: "36px", paddingBottom: "28px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between" }}>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: "1 1 560px" }}>
          {" "}
          <div style={{ fontSize: "14px", fontWeight: "600" }}>
            <Link to="/" style={{ color: "#1F2A24" }}>{t("Home")}</Link>
            {t(" / Case study")}
          </div>
          {" "}
          <span className="tag" style={{ background: "#E5ECE3", color: "#33493A", alignSelf: "flex-start" }}>{t("SELCO Foundation case study · 20 May 2026")}</span>
          {" "}
          <h1 style={{ fontSize: "44px", lineHeight: "1.08", fontWeight: "600" }} id="h-solar-powered-organic-jaggery-making">{t("Solar-powered organic jaggery making")}</h1>
          {" "}
          <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#5F6B63" }}>{t("Mini jaggery processing unit · Mrs. Soumya · Pandavapura, Mandya district, Karnataka · 4 pages")}</p>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {" "}
          <a href="/assets/case-study/SELCO_Jaggery_Case_Study.pdf" download="SELCO_Jaggery_Case_Study.pdf" className="btn" style={{ background: "#1F2A24", color: "#fff" }}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
            </svg>
            {t("Download PDF")}
          </a>
          {" "}
          <a href="/assets/case-study/SELCO_Jaggery_Case_Study.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "#fff", color: "#1F2A24", border: "2px solid #1F2A24" }}>{t("Open PDF")}</a>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="wrap" style={{ paddingBottom: "32px" }}>
        <figure className="cs-photo">
          <img src="/uploads/images/pandavapura-unit-team.jpg" alt={t("Mrs. Soumya with the SELCO Foundation team at her solar-powered jaggery unit, Chikkabyadarahalli, Pandavapura")} />
          <figcaption>{t("Mrs. Soumya with the SELCO Foundation team at her solar-powered jaggery unit, Chikkabyadarahalli, Pandavapura")}</figcaption>
        </figure>
      </section>
      {" "}
      <section style={{ background: "#3A4740", paddingTop: "32px", paddingBottom: "56px" }}>
        {" "}
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          {" "}
          <div className="page">
            <a href="/assets/case-study/page-1.jpg" target="_blank" rel="noopener noreferrer" aria-label={t("Open page 1 full size")}><img src="/assets/case-study/page-1.jpg" alt="Case study page 1: title, demographic information, background of the end user, how SELCO identified her and the challenge" loading="eager" /></a>
            <span>{t("Page 1 of 4")}</span>
            <em className="cs-hint">{t("Tap a page to open it full size and zoom in.")}</em>
          </div>
          {" "}
          <div className="page">
            <a href="/assets/case-study/page-2.jpg" target="_blank" rel="noopener noreferrer" aria-label={t("Open page 2 full size")}><img src="/assets/case-study/page-2.jpg" alt="Case study page 2: base ecosystem conditions before intervention, solution and technical specifications, production process" loading="lazy" /></a>
            <span>{t("Page 2 of 4")}</span>
          </div>
          {" "}
          <div className="page">
            <a href="/assets/case-study/page-3.jpg" target="_blank" rel="noopener noreferrer" aria-label={t("Open page 3 full size")}><img src="/assets/case-study/page-3.jpg" alt="Case study page 3: product varieties, financial specifications, business model, revenue and cost breakdown, market linkages" loading="lazy" /></a>
            <span>{t("Page 3 of 4")}</span>
          </div>
          {" "}
          <div className="page">
            <a href="/assets/case-study/page-4.jpg" target="_blank" rel="noopener noreferrer" aria-label={t("Open page 4 full size")}><img src="/assets/case-study/page-4.jpg" alt="Case study page 4: qualitative outcomes, quantitative impacts, testimonial and way forward" loading="lazy" /></a>
            <span>{t("Page 4 of 4")}</span>
          </div>
          {" "}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {" "}
            <a href="/assets/case-study/SELCO_Jaggery_Case_Study.pdf" download="SELCO_Jaggery_Case_Study.pdf" className="btn" style={{ background: "#C97B5E", color: "#1F2A24" }}>{t("Download PDF")}</a>
            {" "}
            <Link to="/plan-your-unit#solar" className="btn" style={{ background: "transparent", color: "#fff", border: "2px solid #F3EAE1" }}>{t("See the solar design explained")}</Link>
            {" "}
            <Link to="/more-case-studies" className="btn" style={{ background: "transparent", color: "#fff", border: "2px solid #F3EAE1" }}>{t("More jaggery case studies")}</Link>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <SiteFooter />
    </div>
    </SlotsProvider>
  );
}
