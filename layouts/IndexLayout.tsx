import PageFooter from "@/components/PageFooter";
import { PropsWithChildren } from "react";
import PageHeader from "../components/PageHeader";
import styles from "@/styles/IndexLayout.module.scss";

export default function IndexLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.index_layout_container}>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}
