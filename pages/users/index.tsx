// pkgs:
import Head from 'next/head';
import Link from 'next/link';
import { Fragment, VFC } from 'react';

// components:
import Layout from '../../components/base/layout/layout.comp';

// utils:
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const usersList = await res.json();

  return {
    props: {
      usersList,
    },
  };
};

// COMPONENTS::
const Users: VFC<any> = ({ usersList }) => {
  return (
    <Layout>
      <Fragment>
        <Head>
          <title>Users list</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        {/* the rest of the page */}
        <main className="page users-page" style={{ marginBottom: `5rem` }}>
          <h2 className="heading">Users</h2>

          <ul className="users-list" style={{ width: `80vw`, margin: `auto` }}>
            {usersList.map(({ id, name }: { id: number; name: string }) => (
              <Link href={`/users/${id.toString()}`} key={id}>
                <a>
                  <li style={{ padding: `1rem`, background: `#ddd`, margin: `2px 0` }}>
                    <h5 style={{ margin: 0 }}>{name}</h5>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </main>
      </Fragment>
    </Layout>
  );
};

export default Users;

// details;
