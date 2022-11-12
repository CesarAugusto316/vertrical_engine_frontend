import { FC, ReactNode } from 'react';
import './layout.css';


export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};
