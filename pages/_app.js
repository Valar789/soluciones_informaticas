import Head from "next/head";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "animate.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <>
          <meta name="title" content="LocalHost" />
          <meta
            name="description"
            content="Servicio de desarrollo web para Empresas y Start-up"
          />
          <meta
            name="keywords"
            content="localhost, crear, sitio, web, pagina, online, desarrollador, "
          />
          <meta name="robots" content="index, follow" />

          <meta name="language" content="Spanish" />
        </>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
