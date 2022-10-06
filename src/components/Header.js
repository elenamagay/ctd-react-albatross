import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {    
    return (
        <nav className={styles.navbar}>
            <span className={styles.header}>To-Do List</span>
            <NavLink className={styles.homeLink} to='/'>Home</NavLink>
            <NavLink className={styles.newLink} to='/new'>New List</NavLink>
        </nav>
    )
};

export default Header;