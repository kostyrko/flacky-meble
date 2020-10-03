import React from 'react';

const Footer = () => {
  const year = (new Date()).getFullYear();
  return (
    <footer>
      <p>Flacky Combination {year} </p>
    </footer>
  );
}

export default Footer;
