import React from "react";
import Background from "gatsby-background-image";


const BackgroundMain = ({ img, styleClass, title, children, }) => {
    return (
        <Background
            className={styleClass}
            fluid={img}>"
            <h1 style={{ fontSize: "72px", width: "50vw" }} className="title text-white text-center">{title}</h1>
            {children}

        </Background>
    )

};

export default BackgroundMain;

