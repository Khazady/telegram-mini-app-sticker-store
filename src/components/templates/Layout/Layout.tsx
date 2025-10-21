import { Children } from "react";
import type { ReactNode } from "react";
import styles from "./Layout.module.css";

export interface GeneratorLayoutProps {
  title: string;
  subtitle: string;
  primary: ReactNode | ReactNode[];
  secondary: ReactNode;
}

export const Layout = ({
  title,
  subtitle,
  primary,
  secondary,
}: GeneratorLayoutProps) => {
  const primaryItems = Children.toArray(primary);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.primaryColumn}>{primaryItems}</section>
        <div className={styles.secondaryColumn}>{secondary}</div>
      </main>
    </div>
  );
};
