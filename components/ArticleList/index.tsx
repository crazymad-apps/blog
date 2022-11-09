import dayjs from "dayjs";
import Link from "next/link";
import { ArticleListItem } from "../../lib/types";
import styles from "./index.module.scss";

export interface ArticleListProps {
  articles: ArticleListItem[];
}

export default function ArticleList(props: ArticleListProps) {
  return (
    <ul className={styles.article_list}>
      {props.articles.map((article, idx) => (
        <li key={idx}>
          <Link href={`/article/${article.id}`}>
            <label>{article.title}</label>
            <span>{dayjs(article.createAt).format("YYYY-MM-DD")}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
