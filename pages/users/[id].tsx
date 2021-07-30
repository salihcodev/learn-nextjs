// pkgs:
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Fragment, VFC } from 'react';

// components:
import Layout from '../../components/base/layout/layout.comp';

// utils:
import { UserDetailsData } from '../../common/interfaces/pages/users/user-details.interface';

// SETUP PATHS::
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map(({ id }: any) => ({ params: { id: id.toString() } }));

  return { paths, fallback: false };
};

// GET PROPS::
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const userData: UserDetailsData[] = await res.json();

  return {
    props: { userData },
  };
};

// COMPONENTS::
const UserInfo: VFC<UserDetailsData> = ({
  userData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { name, username, phone, website, company } = userData;
  return (
    <Layout>
      <Fragment>
        <Head>
          <title>{name}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        {/* the rest of the page */}
        <main className="page users-page">
          <h2 className="heading">{name}</h2>
          <p className="username">{`@${username}`}</p>

          <ul className="users-info">
            <li>
              <a href="#">{phone}</a>
            </li>
            <li>
              <a href="#">{website} </a>
            </li>
            <li>
              <a href="#">{company.name}</a>
            </li>
          </ul>
        </main>
      </Fragment>
    </Layout>
  );
};

export default UserInfo;
