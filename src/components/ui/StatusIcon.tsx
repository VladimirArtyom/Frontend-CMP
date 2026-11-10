import styles from './StatusIcon.module.css';

export const StatusIcon: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div className={styles.icon} aria-hidden="true">
        {children}
    </div>
);