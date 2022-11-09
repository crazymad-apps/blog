import styles from "./index.module.scss";

export default function PageFooter() {
  return (
    <footer className={styles.page_footer}>
      <span>© 2022 crazymad</span>
      <a href="https://tsm.miit.gov.cn/dxxzsp/" target="blank">
        浙ICP备16039603号-2
      </a>
    </footer>
  );
}
