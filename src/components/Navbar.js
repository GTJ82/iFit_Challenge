import React from 'react';

import { Link } from 'gatsby';
import styles from "../components/navbar.modules.css";


const Navbar = () => {


    return (

        <nav className="navbar navbar-expand-sm navbar-light p-0 m-0" style={styles.link}>
            <Link to="/blog" className="link-one" >BLOG</Link>
            <Link to="/nourish" className="link-two">NOURISH</Link>
            <Link to="/shop" className="link-three">SHOP</Link>
        </nav>

    )
};

export default Navbar;