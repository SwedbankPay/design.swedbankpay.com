import React from "react";
import PropTypes from "prop-types";

const Card = ({ type, title, imgSrc, icon, text, smallText, btnTxt, footerTxt, footerLink, footerLinkTxt }) => (
    <li className={`card${type ? ` card-${type}` : ""}`}>
        {title ? <header>
            <h3>
                <a href="#">{title}</a>
            </h3>
        </header> : null}
        {imgSrc ? <div className="img">{"\n"}
            <img src={imgSrc} alt=""/>{"\n"}
        </div> : null}
        <div className="highlight">
            <i className="material-icons">account_balance</i>
            <div className="highlight-wrapper">
                <h4 className="highlight-title">725 NOK</h4>
                <p className="highlight-subtitle">Utestående balanse</p>
            </div>
        </div>
        <div className="body">
            <p>{text}</p>
            <small>{smallText}</small>
        </div>
        <div className="footer">
            <button type="button" className="btn btn-success btn-block">{btnTxt}</button>
            {footerTxt ? <div className="footer-text"><p>{footerTxt}</p></div> : null}
            {footerLinkTxt ? <div className="footer-link"><a href={footerLink || "#"}>{footerLinkTxt}</a></div> : null}
        </div>
    </li>
);

Card.propTypes = {
    type: PropTypes.oneOf(["brand", "default", "light"]),
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    smallText: PropTypes.string,
    btnTxt: PropTypes.string,
    footerTxt: PropTypes.string,
    footerLink: PropTypes.string,
    footerLinkTxt: PropTypes.string
};

export default Card;
