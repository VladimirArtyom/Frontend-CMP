import React from 'react';
import { cx } from '../../utils/classNames';
import styles from './LinkButton.module.css';

export const LinkButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type = 'button',
  className,
  children,
  ...props
}) => (
  <button type={type} className={cx(styles.linkButton, className)} {...props}>
    {children}
  </button>
);
