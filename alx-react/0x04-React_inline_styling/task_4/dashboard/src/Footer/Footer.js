import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  )
}

export default Footer;
