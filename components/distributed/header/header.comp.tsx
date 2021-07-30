// pkgs:
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// utils
import { HeaderProps } from '../../../common/interfaces/components/distributed/header/header.interface';
Identity;

// components:
import Identity from '../identity/identity.comp';

// COMPONENT::
const Header: React.VFC<HeaderProps> = ({ routesList }) => {
  const router = useRouter();

  const onTheFlyStyles = { display: `flex`, justifyContent: `flex-end` };

  return (
    <header style={{ display: `flex`, justifyContent: `space-between`, padding: `1rem 2rem` }}>
      {/*  */}
      <Identity minimum={false} w={40} h={40} />

      {/* the other side of the header */}
      <section className="routes">
        <ul className="routes-wrapper" style={onTheFlyStyles}>
          {/* the rest of routes */}
          {routesList.map(({ name, path }: any) => (
            <li
              key={name}
              style={{
                padding: `0.5rem`,
                color: `gray`,
                fontWeight: router.pathname === path ? `bold` : `normal`,
              }}
            >
              <Link href={path}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default Header;
