// pkgs:
import React from 'react';
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

// components:
import Layout from '../components/base/layout/layout.comp';

// COMPONENT::
export default function About({ things }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>About</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main className="page about-page">
          <h1>About</h1>
        </main>
      </React.Fragment>
    </Layout>
  );
}

type Thing = {
  name: string;
  age: number;
};

// Just an example about how to SSG in typescript
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const data: Thing[] = [
    { name: 'salih', age: 22 },
    { name: 'nasser', age: 28 },
  ];

  return {
    props: {
      things: data,
    },
  };
};
