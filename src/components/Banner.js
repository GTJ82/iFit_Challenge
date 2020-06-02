import React from "react";

const Banner = ({ title }) => {
    return (


        <div className="container-fluid mt-3 mb-3" style={{}}>
            <div className="row">

                <div className="col d-flex justify-content-center align-items-center" >
                    <p className="banner-text">{title}</p>
                </div>

            </div>
        </div>



    )
};

export default Banner;