// import pkgs:
import React from 'react';

// components:
import Header from '../../distributed/header/header.comp';
import Footer from '../../distributed/footer/footer.comp';
import HeaderRoutesList from '../../../common/constants/header/routes-list.const';

// COMPONENT::
const Layout: React.VFC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <React.Fragment>
      <Header logo="Logo" routesList={HeaderRoutesList} />
      {children}
      <Footer title="Learning @Nextjs" />
    </React.Fragment>
  );
};

export default Layout;
