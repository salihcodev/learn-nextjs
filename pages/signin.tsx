// pkgs:
import Head from 'next/head';
import React from 'react';

// components:
import Layout from '../components/base/layout/layout.comp';

// COMPONENT::
export default function Signin() {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>Signin</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main className="page signin-page">
          <h1>Signin page</h1>
        </main>
      </React.Fragment>
    </Layout>
  );
}
