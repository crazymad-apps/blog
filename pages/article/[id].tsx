import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import IndexLayout from "../../layouts/IndexLayout";
import { getArticleDetail } from "../../lib/api";
import { ArticleDetail } from "../../lib/types";
import { NextPageWithLayout } from "../_app";
import MarkdownIt from "markdown-it";
import styles from "./index.module.scss";
import dayjs from "dayjs";
import highlight from "highlight.js";

const md = new MarkdownIt({
  highlight: (str, language) => {
    return highlight.highlight(str, { language }).value;
  },
});

interface ArticlePageProps {
  article: ArticleDetail;
}

export const getServerSideProps: GetServerSideProps<
  ArticlePageProps,
  { id: string }
> = async (context: GetServerSidePropsContext<{ id: string }>) => {
  const id = context.query.id as string;
  const article = await getArticleDetail(id);

  return {
    props: { article },
  };
};

const Article: NextPageWithLayout<ArticlePageProps> = ({ article }) => {
  return (
    <div>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.brief} />
      </Head>

      <main className={styles.article_page}>
        <header className={styles.article_header}>
          <p>{article.title}</p>
          <p>{dayjs(article.createAt).format("YYYY-MM-DD")}</p>
          <p><span>gis</span><span>map</span><span>js</span></p>
        </header>
        <article
          className={styles.article_content}
          dangerouslySetInnerHTML={{ __html: md.render(article.content) }}
        ></article>
      </main>
    </div>
  );
};

Article.getLayout = (page) => {
  return <IndexLayout>{page}</IndexLayout>;
};

export default Article;
