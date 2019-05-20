import React from "react";
import PropTypes from "prop-types";

const Card = ({ type, title, imgSrc, text, textSection, smallText, btnTxt, footerTxt, footerLink, footerLinkTxt, children }) => (
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
            {children ?
                <div className="highlight">
                    {children}
                </div>
                : null
            }
            {text ? <p>{text}</p> : null}{"\n"}
            {textSection ?
                textSection.map((secText, i) => <p key={`card-p-${i}`}>{secText}</p>)
                : null
            }
            {smallText ? <small>{smallText}</small> : null}
        </div>
        {btnTxt || footerTxt || footerLinkTxt ? <footer>
            {btnTxt ? <button type="button" className="btn btn-executive btn-block">{btnTxt}</button> : null}
            {footerTxt ? <div className="footer-text"><p>{footerTxt}</p></div> : null}
            {footerLinkTxt ? <div className="footer-link"><a href={footerLink || "#"}>{footerLinkTxt}</a></div> : null}
        </footer> : null}
    </div>
);

Card.propTypes = {
    type: PropTypes.oneOf(["brand", "default", "light"]),
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    smallText: PropTypes.string,
    textSection: PropTypes.array,
    btnTxt: PropTypes.string,
    footerTxt: PropTypes.string,
    footerLink: PropTypes.string,
    footerLinkTxt: PropTypes.string
};

export default Card;
