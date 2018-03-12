import React from "react";
import PropTypes from "prop-types";

const ModalHeading = ({ title, subTitle }) => (
    <header className="modal-heading">
        {title ? <h2 className="modal-title">{title}</h2> : null}
        {subTitle ? <p className="modal-sub-title">{subTitle}</p> : null}
    </header>
);

const OpenModalButton = ({ id }) => (
    <button data-px-modal-open={id} className="btn btn-brand">Open modal</button>
);

const Modal = ({ title, subTitle, id, footerText, footerAlignment, type, size, visible, isStatic, fade, button, children }) => {
    return (
        <div>
            <section className={`modal modal-${type} modal-${size}${isStatic ? " static" : ""}${fade ? " fade" : ""}${visible ? " in" : ""}`} id={id} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-container">{"\n"}
                        <i className="material-icons modal-close">close</i>
                        {title || subTitle ? <ModalHeading title={title} subTitle={subTitle} /> : null}
                        <div className="modal-body">
                            {children}
                        </div>
                        {footerText ? (
                            <div className={`modal-footer${footerAlignment ? ` modal-footer-${footerAlignment}` : ""}`}>{"\n"}
                                <button type="button" className="btn btn-default" data-px-modal-close={id}>Close</button>{"\n"}
                                <button type="submit" className="btn btn-brand">Submit</button>
                                {/* <p className="text-muted">{footerText}</p> */}
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>{button ? "\n\n" : null}
            {button ? <OpenModalButton id={id} /> : null}
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    id: PropTypes.string,
    footerText: PropTypes.string,
    footerAlignment: PropTypes.oneOf(["centered", "right"]),
    type: PropTypes.oneOf(["brand", "default"]).isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
    visible: PropTypes.bool,
    fade: PropTypes.bool,
    isStatic: PropTypes.bool,
    button: PropTypes.bool
};

export default Modal;
