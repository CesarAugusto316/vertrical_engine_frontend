import { FC } from 'react';
import vertricalLogo from '../../assets/vertrical-logo.svg';
import './navbar.css';


export const Navbar: FC = () => {

  return (
    <nav className="navbar">
      <img src={vertricalLogo} alt="" />
      <h2 className="navbar__heading">Search Engine</h2>
    </nav>
  );
};
