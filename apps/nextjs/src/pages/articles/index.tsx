import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

const ArticlePage: NextPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <pre>{JSON.stringify(articles, null, 2)}</pre>;
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = [] as never[];
  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
};

export default ArticlePage;
