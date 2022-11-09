import Head from "next/head";
import { useRouter } from "next/router";
import IndexLayout from "../../layouts/IndexLayout";
import { NextPageWithLayout } from "../_app";

const Article: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>{`crazymad - ${id}`}</title>
      </Head>
      I am article page {id}
    </div>
  );
};

Article.getLayout = (page) => {
  return <IndexLayout>{page}</IndexLayout>;
};

export default Article;
