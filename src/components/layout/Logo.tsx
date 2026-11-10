import React, { useState } from 'react';
import styles from './Logo.module.css';
import { APP_CONFIG } from '../../config/app';

/** Shows the logo image; falls back to a text mark if the file is missing. */
export const Logo: React.FC = () => {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return <img src={APP_CONFIG.logoSrc} alt={APP_CONFIG.logoAlt} className={styles.logo} onError={() => setFailed(true)} />;
  }

  return (
    <div className={styles.fallback} role="img" aria-label={APP_CONFIG.logoAlt}>
      <span className={styles.mark}>U</span>
      <span className={styles.text}>
        <strong>Bachelor of Informatics</strong>
        <span>School of Computing</span>
        <span>Telkom University</span>
      </span>
    </div>
  );
};