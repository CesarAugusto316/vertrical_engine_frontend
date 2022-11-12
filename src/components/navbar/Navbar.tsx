import { FC } from 'react';
import { Search } from '../search/Search';
import vertricalLogo from '../../assets/vertrical-logo.svg';
import './navbar.css';


export const Navbar: FC = () => {

  return (
    <nav className="navbar">
      <a className="navbar__logo" href="https://vertrical.com/">
        <img src={vertricalLogo} alt="vertrical-logo" />
      </a>
      <Search />
      <h2 className="navbar__heading">Search Engine</h2>
    </nav>
  );
};
