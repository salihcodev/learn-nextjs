// pkgs:
import Head from 'next/head';
import React from 'react';

// components:
import Layout from '../components/base/layout/layout.comp';

// COMPONENT::
export default function Contact() {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>Contact</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main className="page contact-page">
          <h1>Contacts page</h1>
        </main>
      </React.Fragment>
    </Layout>
  );
}
