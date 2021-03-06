// pkgs:
import Head from 'next/head';
import React from 'react';

// components:
import Layout from '../components/base/layout/layout.comp';

// COMPONENT::
export default function Home() {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>Home</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main className="page home-page">
          <h1>APP STARTER</h1>
        </main>
      </React.Fragment>
    </Layout>
  );
}
