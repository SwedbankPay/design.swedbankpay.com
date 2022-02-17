import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { paginate } from "@src/scripts/main";

const Pagination = ({ length, currentActive, type, id }) => {

    const [current, setCurrent] = useState(currentActive);

    const Arrow = ({ type, mobile }) => {
        let disabled = false;

        if (type === "back" || type === "start") { disabled = current === 1; }

        if (type === "forward" || type === "end") { disabled = current === length; }

        const arrowClasses = classnames(
            `arrow-${type}`,
            mobile ? "d-block d-sm-none" : null,
            disabled ? "disabled" : null
        );

        const navigate = () => {
            if (type === "forward") { setCurrent(current + 1); }

            if (type === "back") { setCurrent(current - 1); }

            if (type === "end") { setCurrent(length); }

            if (type === "start") { setCurrent(1); }
        };

        return (
            <button className={arrowClasses} onClick={() => navigate()}>{"\n"}
                <i className="material-icons" aria-label={type}></i>{"\n"}
            </button>
        );
    };

    const goToPage = (e, page) => {
        e.preventDefault();
        setCurrent(current => current = page);
    };

    return (
        <>
            {type === "example" ?
                <>
                    <nav className="pagination example">
                        <Arrow type="back"/>
                        <div className="example-box"></div>
                        <Arrow type="forward"/>
                    </nav>
                </>
                :
                <>
                    <nav className="pagination" role="navigation" aria-label="Pagination Navigation" id={id}>{"\n"}
                        <Arrow type="start" mobile/>{"\n"}
                        <Arrow type="back"/>
                        <ul>
                            {paginate(length, current).map(({ page, current }, i) => (
                                <li key={i} className={`${current ? "active" : ""}`}>{"\n"}
                                    {page
                                        ? <a href="#" onClick={e => goToPage(e, page)}aria-label={`Go to page ${page}`}>{page}</a>
                                        : <span>...</span>
                                    }
                                </li>
                            ))}
                        </ul>
                        <span className="mobile">
                            Page {current} of {length}
                        </span>
                        <Arrow type="forward" />
                        <Arrow type="end" mobile/>
                    </nav>
                </>
            }
        </>
    );
};

Pagination.propTypes = {
    type: PropTypes.oneOf(["example"]),
    text: PropTypes.string,
    arrows: PropTypes.bool,
    mobileView: PropTypes.bool
};

export default Pagination;

