import React from "react";
import PropTypes from "prop-types";

const ModalHeading = ({ title, subTitle }) => (
    <header>
        {title ? <h2 className="modal-title">{title}</h2> : null}
        {subTitle ? <p className="modal-sub-title">{subTitle}</p> : null}
    </header>
);

const OpenModalButton = ({ id }) => (
    <button data-modal-open={id} className="btn btn-brand">Open modal</button>
);

const Modal = ({ title, subTitle, id, footerText, footerAlignment, type, size, visible, isStatic, button, children }) => {
    return (
        <>
            <section className={`modal modal-${type} modal-${size}${isStatic ? " static" : ""}${visible ? " d-block" : ""}`} id={id} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-container">{"\n"}
                        <i className="material-icons modal-close">close</i>
                        {title || subTitle ? <ModalHeading title={title} subTitle={subTitle} /> : null}
                        <div className="modal-body">
                            {children}
                        </div>
                        {footerText ? (
                            <footer className={`${footerAlignment ? `modal-footer-${footerAlignment}` : ""}`}>{"\n"}
                                <button type="button" className="btn btn-default" data-modal-close={id}>Close</button>{"\n"}
                                <button type="submit" className="btn btn-brand">Submit</button>
                                {/* <p className="text-muted">{footerText}</p> */}
                            </footer>
                        ) : null}
                    </div>
                </div>
            </section>{button ? "\n\n" : null}
            {button ? <OpenModalButton id={id} /> : null}
        </>
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
    isStatic: PropTypes.bool,
    button: PropTypes.bool
};

export default Modal;
