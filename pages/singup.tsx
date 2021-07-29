// pkgs:
import Head from 'next/head';
import React from 'react';

// components:
import Layout from '../components/base/layout/layout.comp';

// COMPONENT::
export default function Signup() {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>Signup</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main className="page signup-page">
          <h1>Signup page</h1>
        </main>
      </React.Fragment>
    </Layout>
  );
}
