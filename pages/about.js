import React from "react";
import Footer from "components/layout/Footer";
import Head from "next/head";

function about() {
  return (
    <>
      <Head>
        <title>About Next Js</title>
        <meta name="description" content="This is for next js learning" />
      </Head>
      <h1 className="content">About Page</h1>
    </>
  );
}

export default about;

about.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
