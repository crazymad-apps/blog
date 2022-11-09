export type ArticleListItem = {
  id: number;
  title: string;
  brief: string;
  createAt: string;
  modifyAt: string;
};

export type ArticleDetail = ArticleListItem & {
  content: string;
};
