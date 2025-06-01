import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>

      <div className={styles.navbarContainer}>

        <div className={styles.navBrand}>
            <Link to="/" className={styles.brandLink}>
                TicketOnline
            </Link>
        </div>

        <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
                <NavLink to="/" className={({ isActive }) => 
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    } end >
                        Inicío
                </NavLink>
            </li>

            <li className={styles.navItem}>
                <NavLink to="/films" className={({ isActive }) => 
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    } end >
                        Filmes
                </NavLink>
            </li>

            <li className={styles.navItem}>
                <NavLink to="/contact" className={({ isActive }) => 
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    } end >
                        Contato
                </NavLink>
            </li>

            <div className={styles.navItem}>
                <button onClick={toggleTheme}>
                    {theme === 'light'  ? <DarkModeIcon /> : <LightModeIcon />}
                </button>
            </div>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;