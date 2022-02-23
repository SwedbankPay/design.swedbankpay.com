import React from "react";
import PropTypes from "prop-types";

import Button from "@components/Button";

const Sheet = ({ id, requireAction, title, footer, children }) => (
    <div className="sheet" id={id} data-require-action={requireAction ? true : null}>
        <section>{"\n"}
            <div className="sheet-header">
                <h2 className="mb-0">{title}</h2>
                <button id="sheetClose" className="sheet-close">{"\n\t\t\t"}
                    <i className="material-icons" aria-label="Close sheet">close</i>{"\n\t\t"}
                </button>
            </div>
            <div className={`sheet-content${footer ? " has-footer" : ""}`}>
                {children}
            </div>
            {footer &&
                <div className="sheet-footer">{"\n"}
                    <Button type="secondary" className="mr-2" label="Secondary" />{"\n"}
                    <Button type="primary" className="ml-2" label="Primary" />{"\n"}
                </div>
            }
        </section>
    </div>
);

Sheet.propTypes = {
    id: PropTypes.string,
    requireAction: PropTypes.bool,
    title: PropTypes.string.isRequired,
    footer: PropTypes.bool
};

export default Sheet;
