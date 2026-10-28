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
          <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#5F6B63" }}>{t("Mini jaggery processing unit · Mrs. Soumya · Pandavapura, Mandya district, Karnataka · 7 pages")}</p>
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
          <a href="/assets/case-study/SELCO_Jaggery_Case_Study.pdf" className="btn" style={{ background: "#fff", color: "#1F2A24", border: "2px solid #1F2A24" }}>{t("Open PDF")}</a>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section style={{ background: "#3A4740", paddingTop: "32px", paddingBottom: "56px" }}>
        {" "}
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          {" "}
          <div className="page">
            <img src="/assets/case-study/page-1.png" alt="Case study page 1: title, demographic information, background of the end user and livelihood" />
            <span>{t("Page 1 of 7")}</span>
          </div>
          {" "}
          <div className="page">
            <img src="/assets/case-study/page-2.png" alt="Case study page 2: how SELCO identified the end user, the challenge and problem statement" />
            <span>{t("Page 2 of 7")}</span>
          </div>
          {" "}
          <div className="page">
            <img src="/assets/case-study/page-3.png" alt="Case study page 3: base ecosystem conditions before intervention" />
            <span>{t("Page 3 of 7")}</span>
          </div>
          {" "}
          <div className="page">
            <img src="/assets/case-study/page-4.png" alt="Case study page 4: solution, technical specifications and production process" />
            <span>{t("Page 4 of 7")}</span>
          </div>
          {" "}
          <div className="page">
            <img src="/assets/case-study/page-5.png" alt="Case study page 5: financial specifications and business model" />
            <span>{t("Page 5 of 7")}</span>
          </div>
          {" "}
          <div className="page">
            <img src="/assets/case-study/page-6.png" alt="Case study page 6: market linkages, qualitative outcomes and quantitative impacts" />
            <span>{t("Page 6 of 7")}</span>
          </div>
          {" "}
          <div className="page">
            <img src="/assets/case-study/page-7.png" alt="Case study page 7: testimonial and way forward" />
            <span>{t("Page 7 of 7")}</span>
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
