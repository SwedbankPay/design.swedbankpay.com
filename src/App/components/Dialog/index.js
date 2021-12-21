import React from "react";
import PropTypes from "prop-types";

import { Icon } from "@docutils";

const Dialog = ({ diaId, diaHeader, children, className }) => (
    <>
        <div className={`dialog ${className}`} id={diaId} role="dialog" aria-modal="true" aria-labelledby="aria-label-dia" aria-describedby="aria-describe-dia">
            <section>
                <header className="dialog-header" id="aria-label-dia">
                    <h4>{diaHeader}</h4>{"\n"}
                    {className ? <button type="button" className="btn btn-secondary" data-dialog-close><i className="material-icons pr-1" aria-hidden="true">fullscreen</i>Close demo</button> : <button type="button" className="dialog-close">{"\n"}
                        <Icon type="close" />{"\n"}
                    </button>}
                </header>
                <div className="dialog-body" id="aria-describe-dia">
                    {children}
                </div>
                <footer className="dialog-footer">{"\n"}
                    {className ? "" : <button className="btn btn-secondary" type="button" data-dialog-close>Cancel</button> }
                    {className ? "" : <button className="btn btn-primary" type="button">Delete</button>}
                </footer>
            </section>
        </div>
    </>
);

Dialog.propTypes = {
    diaId: PropTypes.string,
    diaHeader: PropTypes.string
};

export default Dialog;
