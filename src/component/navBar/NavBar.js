import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className={styles.navBarContainer}>
            <NavLink className={styles.navButton} activeClassName={styles.activeNavButton} exact to="/">Products</NavLink>
            <NavLink className={styles.navButton} activeClassName={styles.activeNavButton} to="/cart">Cart</NavLink>
        </div>
    )
}

export default NavBar
