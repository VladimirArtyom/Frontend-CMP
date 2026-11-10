import React from 'react';
import { cx } from '../../utils/classNames';
import styles from './Panel.module.css';

export type PanelTone = 'neutral' | 'warning' | 'danger';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: PanelTone;
}

export const Panel: React.FC<PanelProps> = ({ tone = 'danger', className, children, ...props }) => (
  <div className={cx(styles.panel, styles[tone], className)} {...props}>
    {children}
  </div>
);
