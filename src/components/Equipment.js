import React from 'react';

import styles from "../components/equipment.modules.css"

// Equipment images
import image1 from "../images/bbf255a004b8124b0cd84fcbd15cdfff7a33894a.png";
import image2 from "../images/89f9f64a5e51a9bbe7135a525f4d0b33224a48df.png";
import image3 from "../images/69cec94591b20bb8e4a01b36f9c713e5ec60ea6c.png";
import image4 from "../images/2f22152692add4fec32467ce27f66b00f05634cd.png";



const Equipment = () => {

    const info = [
        {
            img: image1,
            text: "Treadmills",
        },
        {
            img: image2,
            text: "Bikes",
        },
        {
            img: image3,
            text: "Ellipticals",
        },
        {
            img: image4,
            text: "Strength",
        },
    ]

    const EquipmentCard = (info, index) => {
        return (
            <div className="cardMain" style={styles.cardMain} key={index}>
                <img src={info.img} alt="image" className="card-img-top equipImage" style={styles.equipImage} />
                <div className="card-body">
                    <p className="text">{info.text}</p>
                </div>
            </div>
        )
    }


    return <div className="main">{info.map(EquipmentCard)}</div>
};

export default Equipment;


