import Head from "next/head";

function BlogDetail({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        ENV Analytics: {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
}

export default BlogDetail;

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    ` connecting to database with user: ${user}, password: ${password}`
  );
  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
}
