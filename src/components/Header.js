import React from 'react';

import { Link } from 'gatsby';
import logo from "../images/ifit-coach-logo.svg";
import Navbar from "./Navbar";
import Button from "./Button";
import styles from "../components/header.modules.css";


const Header = () => {


    return (

        <header>
            <Navbar />
            <div className="container-fluid mt-3 mb-3">
                <div className="row">
                    <div className="logo col" style={styles.col}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="col" >
                        <div className="links" style={styles.links}>
                            <Link to="/exercise" className="navbar-link mr-3" >EXERCISE</Link>
                            <Link to="/activity" className="navbar-link mr-3">ACTIVITY</Link>
                            <Link to="/nutrition" className="navbar-link mr-3">NUTRITION</Link>
                            <Link to="/sleep" className="navbar-link">SLEEP</Link>
                        </div>
                    </div>
                    <div className="col">
                        <Button />
                    </div>
                </div>
            </div>
        </header>

    )
};

export default Header;