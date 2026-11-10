import {cx} from '../../utils/classNames'
import styles from './Badge.module.css'
export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({className, children, ...props}) => (
    <span className={cx(styles.badge, className)} {...props}>
        {children}
    </span>
)