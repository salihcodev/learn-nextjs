// pkgs:
import React from 'react';

// utils
import { FooterProps } from '../../../common/interfaces/components/distributed/footer/footer.interface';

// COMPONENT::
const Footer: React.VFC<FooterProps> = ({ title }) => {
  return (
    <header>
      <section className="logo">
        <h3>{title}</h3>
      </section>
      <section className="footer-info">
        <p className="copyrights">
          All rights reserved to
          <a href="https://nextjs.org/" target="_blank noopener noreferer">
            <b> @nextjs</b>
          </a>
        </p>
      </section>
    </header>
  );
};

export default Footer;
