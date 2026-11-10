import React from 'react'
import { cx } from '../../utils/classNames';
import styles from './Chip.module.css'
export const Chip: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({className, children, ...props}) => (
    <span className={cx(styles.chip, className)} {...props}>
        {children}
    </span>
)