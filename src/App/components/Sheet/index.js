import React from "react";
import PropTypes from "prop-types";

import { Icon } from "@docutils";

const Sheet = ({ id, requireAction, children }) => (
    <div className="sheet" id={id} data-require-action={requireAction ? true : null}>
        <section>{"\n"}
            <a href="#" className="sheet-close">{"\n\t\t\t"}
                <i className="material-icons" aria-label="Close">close</i>{"\n\t\t"}
            </a>
            {children}
        </section>
    </div>
);

Sheet.propTypes = {
    id: PropTypes.string,
    requireAction: PropTypes.bool
};

export default Sheet;
