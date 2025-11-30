// interfaces/index.ts
import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}



