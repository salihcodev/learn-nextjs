// pkgs:
import React from 'react';

// utils
import { FooterProps } from '../../../common/interfaces/components/distributed/footer/footer.interface';

// COMPONENT::
const Footer: React.VFC<FooterProps> = ({ logo }) => {
  return (
    <header>
      <section className="logo">
        <h3>{logo}</h3>
      </section>
      <section className="footer-info">
        <p className="copyrights">
          All rights reserved to
          <a href="https://nextjs.org/">
            <b> @nextjs</b>
          </a>
        </p>
      </section>
    </header>
  );
};

export default Footer;
