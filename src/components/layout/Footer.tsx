import React from 'react';
import { APP_CONFIG } from '../../config/app';
import styles from './Footer.module.css';

export const Footer: React.FC = () => <footer className={styles.footer}>{APP_CONFIG.copyright}</footer>;
