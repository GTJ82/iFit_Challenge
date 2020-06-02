import React from 'react';
import styles from "../components/footer.modules.css"

const Footer = () => {
    return (

        <div className="shell mt-5">
            <div className="row one justify-content-center p-0 m-0" style={styles.top}>
                <p className="top">hey</p>
            </div>
            <div className="row two justify-content-center p-0 m-0" style={styles.middle}>
                <p className="middle">hey</p>
            </div>
            <div className="row three justify-content-center p-0 m-0" style={styles.bottom}>
                <p className="bottom">&Copyright</p>
            </div>
        </div>

    )
}

export default Footer;