import { useId } from "react";
import { cx } from "../../utils/classNames";
import styles from './Input.module.css'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    mono?: boolean;
}

export const Input: React.FC<InputProps> = ({label, error, mono=false, className, id, ...props}) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const errorId = `${inputId}-error`
    return (
        <div className={styles.field}>
            {label && (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                </label>
            )}
            <input 
                id={inputId}
                className={cx(styles.input, mono && styles.mono, error && styles.error, className)} 
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId:undefined}
                {...props}
            />
            {error && (
                <p id={errorId} className={styles.error} role="alert">{error}</p>
            )}

        </div>
    )
}