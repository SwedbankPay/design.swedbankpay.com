import React from "react";
import PropTypes from "prop-types";

import Button from "@components/Button";

const Sheet = ({ id, requireAction, title, footer, children }) => (
    <div className="sheet" id={id} data-require-action={requireAction ? true : null}>{"\n"}
        <section>{"\n"}
            <div className="sheet-header">
                <h2 className="mb-0">{title}</h2>{"\n"}
                <button id="sheetClose" className="sheet-close btn btn-icon btn-xs" aria-label="Close sheet">{"\n\t\t\t"}
                    <i className="material-icons">close</i>{"\n\t\t"}
                </button>
            </div>
            <div className={`sheet-content${footer ? " has-footer" : ""}`}>
                {children}
            </div>
            {footer &&
                <div className="sheet-footer">{"\n"}
                    <button className="btn mr-1 btn-secondary" data-sheet-close={id} type="button">Cancel</button>{"\n"}
                    <Button type="primary" className="ml-1" label="Primary" />{"\n"}
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
