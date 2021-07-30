// pkgs:
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// utils
import Logo from '../../../public/assets/images/nextjs_logo.svg';
import { IdentityProps } from '../../../common/interfaces/components/distributed/identiy/identity.interface';

// COMPONENT::
const Identity: React.VFC<IdentityProps> = ({ minimum, w, h }) => {
  return (
    <section className="identity">
      <Link href="/">
        <a>
          <div className="logo">
            <Image src={Logo} alt="logo" width={w} height={h} />
          </div>
        </a>
      </Link>

      {/* depends where it's been rendered */}
      {minimum ? (
        <div className="slogan" style={{ marginTop: `1rem`, color: `gray` }}>
          The React Framework for Production
        </div>
      ) : null}
    </section>
  );
};

export default Identity;
