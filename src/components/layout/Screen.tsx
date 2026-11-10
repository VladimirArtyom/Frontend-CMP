import { Footer } from './Footer';
import styles from './Screen.module.css'

interface ScreenProps{
    title: string;
    subtitle?: string;
    children: React.ReactNode
}

export const Screen: React.FC<ScreenProps> = ({title, subtitle, children}) => (
    <>
        <header className={styles.hero}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
        <main className={styles.sheet}>
            {children}
            <Footer/>
        </main>
    </>
)