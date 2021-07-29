import '../styles/globals.css';
import type { AppProps } from 'next/app';

function LearningNestApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
  /*
  Layout in usual cases should be wrapping all pages here,
  But i decided not to, coz i gonna change layout in within some phases.
  */
}
export default LearningNestApp;
