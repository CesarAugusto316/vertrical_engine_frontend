import { FC } from 'react';
import { FaStream, FaMoon } from 'react-icons/fa';
// import { useThemeContext } from '../../contexts';
import './navbar.css';


export const Navbar: FC = () => {
  // const { theme, onToggleTheme } = useThemeContext();

  return (
    <nav className="navbar">
      <FaStream className="navbar__icon" />

      <h2 className="navbar__heading">Vertrical Engine</h2>

      <span>
        <FaMoon className="navbar__icon" title="change theme" />
        {/* {true === 'dark' && <FaMoon className="navbar__icon" title="change theme" />} */}
        {/* {false === 'light' && <FaSun className="navbar__icon" title="change theme" />} */}
      </span>
    </nav>
  );
};
