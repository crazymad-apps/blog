import Head from "next/head";
import IndexLayout from "../layouts/IndexLayout";
import styles from "@/styles/Home.module.scss";
import { NextPageWithLayout } from "./_app";
import { ArticleListItem } from "../lib/types";
import ArticleList from "@/components/ArticleList";

interface IndexPageProps {
  articles: ArticleListItem[];
}

export const getServerSideProps = async () => {
  const { state, data } = await fetch(
    "http://localhost:8081/api/article/wholeList"
  ).then((res) => res.json());

  if (state === 1) {
    return {
      props: {
        articles: data,
      },
    };
  } else {
    return {
      props: {
        articles: [],
      },
    };
  }
};

const IndexPage: NextPageWithLayout<IndexPageProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>crazymad&apos;s blog</title>
        <meta
          name="description"
          content="crazymad的个人博客网站，前端、rust、java啥都会一点，啥都不精通"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ArticleList articles={articles} />
      </main>
    </div>
  );
};

IndexPage.getLayout = (page) => {
  return <IndexLayout>{page}</IndexLayout>;
};

export default IndexPage;
