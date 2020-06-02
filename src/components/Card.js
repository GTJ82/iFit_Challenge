import React from 'react';
import styles from "../components/card.modules.css";

// All large images for each card
import Image1 from "../images/63bd490406a1dff2d0d688c5b1e0ba3ca864e169.png";
import Image2 from "../images/67d14d5b58811ca699e8be3b88dba8bb27470c2c.png";
import Image3 from "../images/6c2d18b3aa80e9c30381cd2d53744d6949fbe78a.png";
import Image4 from "../images/3cb1715a8b306bb1c6d9d3055e6d5dbf49e9d335.png";
import Image5 from "../images/5b8b82af00787e9df9140a926349f9c84fdcc031.png";
import Image6 from "../images/bfeb458807ba82a5818e3c81a7a24b54d54df9b2.png";
import Image7 from "../images/6a005a08792a834366f4d67670114b2816036116.png";
import Image8 from "../images/441ac00fbe3a601310ddee7b258c8a951f1eadd1.png";

// All small avatars fro each card
import avatar1 from "../images/36303a7f2099cad3bd5f3dc6c97c024ff7e27e60.png"
import avatar2 from "../images/832abed763911c30babc278e10af42746c8c05c2.png"
import avatar3 from "../images/768bef002ffcc3d0b5158fb2b8aa49683c200468.png"
import avatar4 from "../images/6598d6175e0793f751a3e5745ae636e7b8b2eea7.png"
import avatar5 from "../images/61f4e9fd55eb2171c12ba5ee2bdf3a3924b87aa9.png"
import avatar6 from "../images/18acb0ffe0417015785dba31f1609f9d0490ef61.png"
import avatar7 from "../images/9bb961077de87f5f634dd861d1eeaec13a3efc24.png"
import avatar8 from "../images/e6406e06a0815b8defc0788569f3904ec3d7bec7.png"


const Card = () => {



    const info = [
        {
            image: Image1,
            avatar: avatar1,
            title: "Lake Innescarla, Ireland-Pyramid",
        },
        {
            image: Image2,
            avatar: avatar2,
            title: "Performance Series",
        },
        {
            image: Image3,
            avatar: avatar3,
            title: "Slow Pulls and Fast Intervals",
        },
        {
            image: Image4,
            avatar: avatar4,
            title: "20 Minutes to Toned",
        },
        {
            image: Image5,
            avatar: avatar5,
            title: "Charles Race, Boston, Massachusetts",
        },
        {
            image: Image6,
            avatar: avatar6,
            title: "Full-Body HIIT Series",
        },
        {
            image: Image7,
            avatar: avatar7,
            title: "Kafue River, Zambia-Power Stroke Pyramid",
        },
        {
            image: Image8,
            avatar: avatar8,
            title: "Shred and Burn Series",
        },
    ]


    const CreateCard = (info, index) => {

        return (
            <div className="card" style={styles.card} key={index}>
                <img style={styles.image} src={info.image} alt="image" className="card-img-top image" />
                <div className="card-body d-flex">
                    <div className="row">
                        <div className="col-9">
                            <h5 className="card-title">{info.title}</h5>
                            <p className="card-text">{info.text}</p>
                        </div>
                        <div className="col-3 p-0">
                            <img src={info.avatar} alt="" className="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return <div className="grid" style={styles.grid}>{info.map(CreateCard)}</div>;

};

export default Card;