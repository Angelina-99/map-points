import {
  Link
} from "react-router-dom";
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    
    return (
        <div className={styles.navMenu}>
            <div className={location.pathname === '/' ? styles.navItemActive : styles.navItem}>
               <Link to='/'>Карта</Link>
            </div>
            <div className={location.pathname === '/add-point' ? styles.navItemActive : styles.navItem}>
                <Link to='/add-point'>Добавить точку</Link>
            </div>
            <div className={location.pathname === '/points-list' ? styles.navItemActive : styles.navItem}>
                <Link to='/points-list'>Все точки</Link>
            </div>
        </div>
    )
}

export default Header;