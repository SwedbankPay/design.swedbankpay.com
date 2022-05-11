import React from "react";
import PropTypes from "prop-types";

const ColorDisplay = ({ title, subTitle, hex, rgb, fontColor, border, noWhiteExample, noBlackExample }) => (
    <div className="d-flex flex-column mb-2">
        <div className={`color-box ${border ? border : ""}`}>
            <svg>
                <rect fill={hex} />
            </svg>
        </div>
        <div className="text-box d-flex flex-column">
            <p className="font-weight-bold mb-0">{title}</p>
            <small className="small mb-0">{subTitle}</small>
            <small className="small mb-0 text-uppercase">{hex}</small>
            <div className="contrast-box">
                <div className="contrast-white-container">
                    <svg className="white-box">
                        <rect fill={"#FFFFFF"}/>
                    </svg>
                    <svg className="second-svg">
                        <rect fill={hex}/>
                    </svg>
                    <i className="material-icons">check_circle</i>
                </div>
                <div className="contrast-black-container">
                    <svg className="first-svg">
                        <rect fill={"#000000"}/>
                    </svg>
                    <svg className="second-svg">
                        <rect fill={hex}/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
);

ColorDisplay.propTypes = {
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.string.isRequired,
    fontColor: PropTypes.string,
    border: PropTypes.string
};

export default ColorDisplay;
