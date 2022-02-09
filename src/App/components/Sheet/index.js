import React from "react";
import PropTypes from "prop-types";

import Button from "@components/Button";

const Sheet = ({ id, requireAction, title, footer, children }) => (
    <div className="sheet" id={id} data-require-action={requireAction ? true : null}>
        <section>{"\n"}
            <div className="sheet-header">
                <h2 className="mb-0">{title}</h2>
                <button href="#" id="sheetClose" className="sheet-close">{"\n\t\t\t"}
                    <i className="material-icons" aria-label="Close sheet">close</i>{"\n\t\t"}
                </button>
            </div>
            <div className={`sheet-content ${footer ? "has-footer" : null}`}>
                {children}
            </div>
            {footer ?
                <div className="sheet-footer">
                    <Button type="primary" className="mr-2" label="Primary" />
                    <Button type="secondary" className="ml-2" label="Secondary" />
                </div> : <></>
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
