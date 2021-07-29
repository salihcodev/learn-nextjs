// import pkgs:
import React from 'react';

// components:
import Header from '../../distributed/header/header.comp';
import Footer from '../../distributed/footer/footer.comp';

// COMPONENT::
const Layout: React.VFC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <React.Fragment>
      <Header logo="Logo" />
      {children}
      <Footer title="Footer" />
    </React.Fragment>
  );
};

export default Layout;
