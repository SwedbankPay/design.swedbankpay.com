import React from "react";
import PropTypes from "prop-types";

const Cards = ({ type, titleTxt, imgSrc, icon, text, children, wide }) => (
    <>
        {!wide ?
            <div>{"\n"}
                <a href="#" onClick={e => e.preventDefault()} className={`cards cards-${type}`}>{"\n"}
                    {icon && <div className="cards-icon">{"\n"}
                        {icon}{"\n"}
                    </div>}
                    {imgSrc && <img src={imgSrc} />}
                    <div className="cards-content">{"\n"}
                        {titleTxt && <span className="h4">{titleTxt}</span>}
                        {text && <span>{text}</span>}{"\n"}
                        {children && children }
                    </div>{"\n"}
                    <i className="material-icons">arrow_forward</i>{"\n"}
                </a>{"\n"}
            </div>
            :
            <>
                <a href="#" className={`cards cards-${type} cards-wide`}>{"\n"}
                    {icon && <div className="cards-icon">{"\n"}
                        {icon}{"\n"}
                    </div>}
                    <div className="cards-content">{"\n"}
                        {titleTxt && <span className="h4">{titleTxt}</span>}
                        {text && <span>{text}</span>}{"\n"}
                        {children && children }
                    </div>{"\n"}
                    <i className="material-icons">arrow_forward</i>{"\n"}
                </a>{"\n"}
            </>
        }
    </>
);

Cards.propTypes = {
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
    titleTxt: PropTypes.string,
    imgSrc: PropTypes.string,
    icon: PropTypes.object,
    text: PropTypes.string,
    children: PropTypes.object,
    wide: PropTypes.bool
};

export default Cards;
