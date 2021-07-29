// pkgs:
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// components:
import Layout from '../components/base/layout/layout.comp';

// COMPONENT::
export default function Home() {
  // builtin hooks:
  const router = useRouter();

  // stating the component:
  const [redirectCount, setRedirectCount] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setRedirectCount(redirectCount - 1);
    }, 1000);

    // redirecting to home
    if (redirectCount === 0) {
      router.replace('/');
    }
  }, [redirectCount, router]);

  return (
    <Layout>
      <main className="page notfound-page">
        <h1>404 something went wrong</h1>
        <p className="dec">May you hits a broken/not existed route, Sadness</p>

        <footer style={{ marginTop: `5rem` }}>
          <Link href="/">
            <a>
              <b>Return back home</b>
            </a>
          </Link>
          <p className="redirecting">
            gonna be redirected to the home page after:
            <b> {redirectCount}</b>
          </p>
        </footer>
      </main>
    </Layout>
  );
}
