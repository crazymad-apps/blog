import Link from "next/link";
import styles from "./index.module.scss";

export default function PageHeader() {
  return (
    <header className={styles.page_header}>
      <span>
        <Link href="/">INDEX</Link>
      </span>
    </header>
  );
}
