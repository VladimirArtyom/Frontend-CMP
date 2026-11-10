import React from 'react';

interface StackProps extends React.HTMLAttributes<HTMLElement> {
  gap?: string;
  as?: 'div' | 'form';
  noValidate?: boolean;
}

export const Stack: React.FC<StackProps> = ({ gap = 'var(--gap)', as: Tag = 'div', style, children, ...props }) => (
  <Tag style={{ display: 'flex', flexDirection: 'column', gap, ...style }} {...(props as object)}>
    {children}
  </Tag>
);
