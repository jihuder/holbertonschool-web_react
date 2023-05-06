import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  let isIndex = true;

  return (
      <div className="footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      </div>
  );
}

export default Footer;
