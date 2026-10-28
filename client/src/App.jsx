import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash.jsx';
import { useT } from './lib/i18n.jsx';
import Home from './pages/Home.jsx';
const Steps1to4 = lazy(() => import('./pages/Steps1to4.jsx'));
const Steps5to6 = lazy(() => import('./pages/Steps5to6.jsx'));
const Steps7to11 = lazy(() => import('./pages/Steps7to11.jsx'));
const Machines = lazy(() => import('./pages/Machines.jsx'));
const PlanYourUnit = lazy(() => import('./pages/PlanYourUnit.jsx'));
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'));
const MoreCaseStudies = lazy(() => import('./pages/MoreCaseStudies.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

const Admin = lazy(() => import('./admin/Admin.jsx'));

// Old links like /machines.html keep working.
function LegacyRedirect() {
  const { pathname, hash } = useLocation();
  const name = pathname.replace(/^\//, '').replace(/\.html$/, '');
  return <Navigate to={(name === 'index' ? '/' : '/' + name) + hash} replace />;
}

function NotFound() {
  const t = useT();
  const { pathname } = useLocation();
  if (/\.html$/.test(pathname)) return <LegacyRedirect />;
  return (
    <div style={{ fontFamily: 'var(--font-body)', padding: 48, color: '#2B1B0F' }}>
      <h1 style={{ fontFamily: 'var(--font-display)' }}>{t('Page not found')}</h1>
      <p><Link to="/" style={{ color: '#8A4B12' }}>{t('Go to the home page')}</Link></p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#FBF6EE' }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps-1-4-cane-to-juice" element={<Steps1to4 />} />
        <Route path="/steps-5-6-clarify-and-boil" element={<Steps5to6 />} />
        <Route path="/steps-7-11-cool-to-market" element={<Steps7to11 />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/plan-your-unit" element={<PlanYourUnit />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/more-case-studies" element={<MoreCaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  );
}
