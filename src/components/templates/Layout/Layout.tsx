import { Children } from "react";
import type { ReactNode } from "react";
import styles from "./Layout.module.css";

export interface LayoutProps {
  primary: ReactNode | ReactNode[];
  header?: ReactNode;
  footer?: ReactNode | ReactNode[];
}

export const Layout = ({ header, primary, footer }: LayoutProps) => {
  const primaryItems = Children.toArray(primary);
  const footerItems = Children.toArray(footer);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>{header}</header>
      <main className={styles.mainContent}>{primaryItems}</main>
      {footer && <footer className={styles.footer}>{footerItems}</footer>}
    </div>
  );
};
