import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { paginate } from "@src/scripts/main";

const Pagination = ({ length,
    currentActive,
    id,
    anchorArrows,
    short = false }) => {

    const [current, setCurrent] = useState(currentActive);

    const Arrow = ({ type, mobile }) => {
        let disabled = false;

        if (type === "back" || type === "start") { disabled = current === 1; }

        if (type === "forward" || type === "end") { disabled = current === length; }

        const arrowClasses = classnames(
            `arrow-${type}`,
            mobile ? "d-sm-none" : null,
            disabled ? "disabled" : null
        );

        const navigate = e => {
            e.preventDefault();

            if (type === "forward") { setCurrent(current + 1); }

            if (type === "back") { setCurrent(current - 1); }

            if (type === "end") { setCurrent(length); }

            if (type === "start") { setCurrent(1); }
        };

        return (
            <>
                {anchorArrows ?
                    <a className={arrowClasses} href="#" onClick={e => navigate(e)}>{"\n"}
                        <i className="material-icons" aria-label={type}></i>{"\n"}
                    </a>
                    :
                    <button className={arrowClasses} onClick={e => navigate(e)}>{"\n"}
                        <i className="material-icons" aria-label={type}></i>{"\n"}
                    </button>
                }
            </>

        );
    };

    const goToPage = (e, page) => {
        e.preventDefault();
        setCurrent(current => current = page);
    };

    return (
        <>
            <nav id={id} className={`pagination ${short ? "short" : ""}`} role="navigation" aria-label="Pagination Navigation">{"\n"}
                <Arrow type="start" mobile={!short ? true : null}/>{"\n"}
                <Arrow type="back"/>
                {!short &&
                <>
                    <ul>
                        {paginate(length, current).map(({ page, current }, i) => (
                            <li key={i} className={`${current ? "active" : ""}`}aria-label={`Go to page ${page}`}>{"\n"}
                                {page
                                    ? <a href="#" onClick={e => goToPage(e, page)}>{page}</a>
                                    : <span>...</span>
                                }
                            </li>
                        ))}
                    </ul>{"\n"}
                </>}
                <span className={!short ? "mobile" : "short"}>Page {current} of {length}</span>{"\n"}
                <Arrow type="forward" />{"\n"}
                <Arrow type="end" mobile={!short ? true : null}/>
            </nav>
        </>

    );
};

Pagination.propTypes = {
    text: PropTypes.string,
    arrows: PropTypes.bool,
    mobileView: PropTypes.bool,
    id: PropTypes.string.isRequired,
    anchorArrows: PropTypes.bool,
    short: PropTypes.bool
};

export default Pagination;

