import styles from "./Header.module.css";
import { Logo } from "./Logo";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <Logo />
      <div className={styles.titles}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  </header>
);
