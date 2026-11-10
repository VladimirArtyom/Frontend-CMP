import React from 'react';
import { TopBar } from './TopBar';
import { StepIndicator } from './StepIndicator';
import styles from './AppShell.module.css';

export type AppRole = 'home' | 'visitor' | 'judge';

interface AppShellProps {
  role: AppRole;
  eventName: string;
  steps?: { labels: string[]; current: number };
  children: React.ReactNode;
}

/** Page frame: role-colored top area (bar + steps), then the page's <Screen />. */
export const AppShell: React.FC<AppShellProps> = ({ role, eventName, steps, children }) => (
  <div className={styles.stage}>
    <div className={`${styles.device} ${styles[role]}`}>
      <TopBar eventName={eventName} />
      {steps && <StepIndicator labels={steps.labels} current={steps.current} />}
      {children}
    </div>
  </div>
);
