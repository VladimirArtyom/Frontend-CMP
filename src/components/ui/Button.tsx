import React from 'react';
import { cx } from '../../utils/classNames';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'dark' | 'outline';
export type ButtonSize = 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  variant = 'dark',
  size = 'lg',
  fullWidth = true,
  type = 'button',
  className,
  children,
  ...props
}) => (
  <button
    type={type}
    className={cx(styles.button, styles[variant], size === 'lg' && styles.lg, fullWidth && styles.fullWidth, className)}
    {...props}
  >
    {children}
  </button>
);
