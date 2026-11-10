import React from 'react';
import { cx } from '../../utils/classNames';
import styles from './Card.module.css';

export const Card: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, children, ...props }) => (
  <section className={cx(styles.card, className)} {...props}>
    {children}
  </section>
);

interface CardHeaderProps {
  title: string;  subtitle?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle }) => (
  <header className={styles.header}>
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </header>
);
