import React from 'react';

const Footer = () => {
  const year = (new Date()).getFullYear();
  return (
    <footer className="main-footer">
      <p className="footer-desc"> &copy; Flacky Combination {year} </p>
      <p className="footer-author">projekt i wykonanie: Kostyrko</p>
    </footer>
  );
}

export default Footer;
