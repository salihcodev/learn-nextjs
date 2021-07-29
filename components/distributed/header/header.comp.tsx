// pkgs:
import React from 'react';
import Link from 'next/link';

// utils
import { HeaderProps } from '../../../common/interfaces/components/distributed/header/header.interface';

// COMPONENT::
const Header: React.VFC<HeaderProps> = ({ logo, routesList }) => {
  const onTheFlyStyles = { display: `flex`, justifyContent: `space-around` };
  return (
    <header>
      <section className="logo">
        <h3>{logo}</h3>
      </section>
      <section className="routes">
        <ul className="routes-wrapper" style={onTheFlyStyles}>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          {/* the rest of routes */}
          {routesList.map((r) => (
            <li key={r}>
              <Link href={`/${r}`}>
                <a>{r}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default Header;
