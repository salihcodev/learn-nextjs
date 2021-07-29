// pkgs:
import React from 'react';

// utils
import { HeaderProps } from '../../../common/interfaces/components/distributed/header/header.interface';

// COMPONENT::
const Header: React.VFC<HeaderProps> = ({ logo }) => {
  return (
    <header>
      <section className="logo">
        <h3>{logo}</h3>
      </section>
      <section className="routes">
        <ul className="routes-wrapper">
          <li>
            <a href="/about">
              <b>about</b>
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
