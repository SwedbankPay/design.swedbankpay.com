import React from "react";
import PropTypes from "prop-types";

const Cards = ({ type, titleTxt, imgSrc, icon, text, children, horizontal }) => (
    <>
        <a href="#" className={`cards${type ? ` cards-${type}` : ""}${horizontal ? " cards-horizontal" : ""}`}>{"\n"}
            {icon && <div className="cards-icon">
                {icon}
            </div>}
            {imgSrc && <img src={imgSrc} />}
            <div className="cards-content">{"\n"}
                {titleTxt && <span className="h4">{titleTxt}</span>}
                {text && <span>{text}</span>}{"\n"}
                {children && children }
            </div>{"\n"}
            <i className="material-icons">arrow_forward</i>{"\n"}
        </a>{"\n"}
    </>
);

Cards.propTypes = {
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    imgSrc: PropTypes.string,
    titleTxt: PropTypes.string,
    titleMarkup: PropTypes.object,
    icon: PropTypes.object,
    text: PropTypes.string,
    children: PropTypes.object,
    horizontal: PropTypes.bool
};

export default Cards;
