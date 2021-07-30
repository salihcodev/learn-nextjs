// import pkgs:
import React from 'react';

// components:
import HeaderRoutesList from '../../../common/constants/header/routes-list.const';
import Banner from '../../distributed/banner/banner.comp';
import Header from '../../distributed/header/header.comp';
import Footer from '../../distributed/footer/footer.comp';

// COMPONENT::
const Layout: React.VFC<{ children: JSX.Element }> = ({ children }) => {
  const bannerElem = (
    <p style={{ margin: 0 }}>
      <span>⭐️</span> View this repository on
      <a
        href="https://github.com/salihcodev/learn-nextjs"
        target="_blank noopener noreferer"
        style={{ textDecoration: 'underline' }}
      >
        {' '}
        github
      </a>
      <span> ⭐️</span>
    </p>
  );

  return (
    <React.Fragment>
      <Banner paragraph={bannerElem} />
      <Header routesList={HeaderRoutesList} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
