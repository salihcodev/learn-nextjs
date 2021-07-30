// pkgs:
import React from 'react';

// utils
import { BannerProps } from '../../../common/interfaces/components/distributed/banner/banner.interface';

// COMPONENT::
const Banner: React.VFC<BannerProps> = ({ paragraph }) => {
  return (
    <section className="banner" style={{ padding: `0.7rem`, background: `#111`, color: `#fff` }}>
      {paragraph}
    </section>
  );
};

export default Banner;
