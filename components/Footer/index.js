import React from "react";

import './index.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <a className="footer__link">Support</a>
        <a className="footer__link">Learning</a>
        <a className="footer__link">Русская версия</a>
      </div>
      <p className="footer__info">© 2020 Olya Bogdanova</p>
    </footer>
  );
}