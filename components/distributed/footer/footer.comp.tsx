// pkgs:
import React from 'react';

// utils
import { FooterProps } from '../../../common/interfaces/components/distributed/footer/footer.interface';
import Identity from '../identity/identity.comp';

// COMPONENT::
const Footer: React.VFC<FooterProps> = () => {
  return (
    <footer>
      <Identity minimum w={64} h={64} />

      {/* the rest of footer context */}
      <section className="footer-info" style={{ marginTop: `2rem` }}>
        <p className="copyrights">
          All rights reserved to
          <a href="https://nextjs.org/" target="_blank noopener noreferer">
            <b> @nextjs</b>
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
