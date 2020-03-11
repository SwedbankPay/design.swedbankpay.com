import React from "react";

const Link = ({ linkText, withButton }) => (
    <a href="" className={withButton ? "ml-1" : null} onClick={e => e.preventDefault()}>
        {linkText}
    </a>
);

export default Link;
