import React from "react";
import PropTypes from "prop-types";

import { Icon } from "@docutils";

const Dialog = ({ diaId, diaHeader, children }) => (
    <>
        <div className="dialog" id={diaId} role="dialog" aria-modal="true" aria-labelledby="aria-label-dia" aria-describedby="aria-describe-dia">
            <section>
                <header className="dialog-header" id="aria-label-dia">
                    <h4>{diaHeader}</h4>{"\n"}
                    <button type="button" className="dialog-close">{"\n"}
                        <Icon type="close" />{"\n"}
                    </button>
                </header>
                <div className="dialog-body" id="aria-describe-dia">
                    {children}
                </div>
                <footer className="dialog-footer">{"\n"}
                    <button className="btn btn-secondary" type="button" data-dialog-close>Cancel</button>{"\n"}
                    <button className="btn btn-primary" type="button">Delete</button>{"\n"}
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
