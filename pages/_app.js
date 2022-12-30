import "styles/globals.css";
import "styles/layout.css";
import Header from "@/layout/Header";
import Footer from "components/layout/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Next Js</title>
        <meta name="description" content="This is for next js learning" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
