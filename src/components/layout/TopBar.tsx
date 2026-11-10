import { Logo } from './Logo';
import styles from './TopBar.module.css';

export const TopBar : React.FC<{eventName: string}> = ({eventName}) =>(

    <div className={styles.bar}>
        <div className={styles.logoWrap}>
            <Logo/>
        </div>
        <p className={styles.event}>{eventName}</p>
    </div>
)