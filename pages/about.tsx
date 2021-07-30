// pkgs:
import { Fragment } from 'react';
import Head from 'next/head';

// components:
import Layout from '../components/base/layout/layout.comp';

// COMPONENT::
export default function About() {
  return (
    <Layout>
      <Fragment>
        <Head>
          <title>About</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main className="page about-page">
          <h1>About</h1>
        </main>
      </Fragment>
    </Layout>
  );
}
