import React from 'react';

import img1 from "../images/63bd490406a1dff2d0d688c5b1e0ba3ca864e169.png"

const Card = () => {
    return (

        <div className="card" style={{ width: "288px" }}>
            <img src={img1} alt="image-1" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sequi ab exercitationem velit, corrupti repudiandae?</p>
            </div>
        </div>

    )
};

export default Card;