import { Link } from 'react-router-dom';
import { LOGO } from '../lib/siteConfig.js';

// Site logo (client/public/jaggery-logo.svg). Change LOGO in src/lib/siteConfig.js to swap it.
export default function Brand({ light = false, onClick }) {
  return (
    <Link to="/" className={'brand' + (light ? ' light' : '')} aria-label="Jaggery value chain · home" onClick={onClick}>
      <img src={LOGO} alt="Better Jaggery logo" width="52" height="52" />
    </Link>
  );
}
