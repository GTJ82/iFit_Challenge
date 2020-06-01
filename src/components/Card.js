import React from 'react';
import styles from "../components/card.modules.css";

import Image1 from "../images/63bd490406a1dff2d0d688c5b1e0ba3ca864e169.png";
import Image2 from "../images/67d14d5b58811ca699e8be3b88dba8bb27470c2c.png";
import Image3 from "../images/6c2d18b3aa80e9c30381cd2d53744d6949fbe78a.png";
import Image4 from "../images/3cb1715a8b306bb1c6d9d3055e6d5dbf49e9d335.png";
import Image5 from "../images/5b8b82af00787e9df9140a926349f9c84fdcc031.png";
import Image6 from "../images/bfeb458807ba82a5818e3c81a7a24b54d54df9b2.png";
import Image7 from "../images/6a005a08792a834366f4d67670114b2816036116.png";
import Image8 from "../images/441ac00fbe3a601310ddee7b258c8a951f1eadd1.png";





const Card = () => {



    const info = [
        {
            image: Image1,
            title: "Lake Innescarla, Ireland-Pyramid",
            text: ""
        },
        {
            image: Image2,
            title: "Performance Series",
            text: ""
        },
        {
            image: Image3,
            title: "Slow Pulls and Fast Intervals",
            text: ""
        },
        {
            image: Image4,
            title: "20 Minutes to Toned",
            text: ""
        },
        {
            image: Image5,
            title: "Charles Race, Boston, Massachusetts",
            text: ""
        },
        {
            image: Image6,
            title: "Full-Body HIIT Series",
            text: ""
        },
        {
            image: Image7,
            title: "Kafue River, Zambia-Power Stroke Pyramid",
            text: ""
        },
        {
            image: Image8,
            title: "Shred and Burn Series",
            text: ""
        },




    ]


    const CreateCard = (info, index) => {

        return (
            <div className="card" style={styles.card} key={index}>
                <img style={styles.img} src={info.image} alt="image" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{info.title}</h5>
                    <p className="card-text">{info.text}</p>
                </div>
            </div>
        )
    }

    return <div className="grid" style={styles.grid}>{info.map(CreateCard)}</div>;

};

export default Card;