import React from 'react';
import { cx } from '../../utils/classNames';
import styles from './StepIndicator.module.css';

interface StepIndicatorProps {
  labels: string[];
  /** Zero-based index of the current step. */
  current: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ labels, current }) => (
  <ol className={styles.steps} style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }} aria-label="Langkah">
    {labels.map((label, i) => (
      <li key={label} className={cx(i <= current && styles.done, i === current && styles.current)} aria-current={i === current ? 'step' : undefined}>
        <span className={styles.bar} />
        <span className={styles.label}>{label}</span>
      </li>
    ))}
  </ol>
);
