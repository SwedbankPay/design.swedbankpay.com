import React from "react";
import PropTypes from "prop-types";

import { Icon } from "#";

const Dialog = ({ diaId, diaHeader, children }) => (
    <>
        <div className="dialog" id={diaId} role="dialog" aria-modal="true">
            <section>
                <header className="dialog-header">
                    <h4>{diaHeader}</h4>
                    <button type="button" className="dialog-close">
                        <Icon type="close" />
                    </button>
                </header>
                <div className="dialog-body">
                    {children}
                </div>
                <footer className="dialog-footer">
                    <button className="btn btn-guiding" type="button" data-dialog-close>Cancel</button>{"\n"}
                    <button className="btn btn-destructive" type="button">Delete</button>{"\n"}
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
