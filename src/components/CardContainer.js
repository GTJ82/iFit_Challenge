import React from 'react';

import Card from '../components/Card';



const CardContainer = () => {
    return (
        <div className="container-fluid d-flex justify-content-center" style={{ paddingLeft: "108px", paddingRight: "108px" }}>
            <div className="row">
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
            </div>
            {/* <div className="row">
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
            </div> */}
        </div>

    )
};

export default CardContainer;