import React from "react";
import PropTypes from "prop-types";

const Card = ({ type, title, imgSrc, text, highlight, textSection, smallText, btn, btnClass, footerTxt, footerLink, footerLinkTxt, children }) => (
    <div className={`card${type ? ` card-${type}` : ""}`}>
        {imgSrc ? <div className="card-img">{"\n"}
            <img src={imgSrc} alt=""/>{"\n"}
        </div> : null}
        {title ?
            <header>
                {title}
            </header>
            : null}
        <div className="card-body">
            {children ? children : null }
            {text ? <p>{text}</p> : null}{"\n"}
            {textSection ?
                textSection.map((secText, i) => <p key={`card-p-${i}`}>{secText}</p>)
                : null
            }
            {btn ? <button type="button" className={`btn btn-executive${btnClass ? ` ${btnClass}` : ""}`}>Button</button> : null}
        </div>
        {footerTxt || footerLinkTxt ? <footer>
            {smallText ? <small>{smallText}</small> : null}
            {footerTxt ? <div className="footer-text"><p>{footerTxt}</p></div> : null}
            {footerLinkTxt ? <div className="footer-link"><a href={footerLink || "#"}>{footerLinkTxt}</a></div> : null}
        </footer> : null}
    </div>
);

Card.propTypes = {
    type: PropTypes.oneOf(["primary", "secondary", "plain"]),
    imgSrc: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    smallText: PropTypes.string,
    textSection: PropTypes.array,
    btn: PropTypes.string,
    footerTxt: PropTypes.string,
    footerLink: PropTypes.string,
    footerLinkTxt: PropTypes.string
};

export default Card;
