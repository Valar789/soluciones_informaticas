import Head from "next/head";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
