import React from "react";
import PropTypes from "prop-types";

const CustomersDetailedDialog = ({ customer }) => (
    <div className="dialog" id="customers-detailed-dialog" role="dialog" aria-modal="true" aria-labelledby="aria-label-dia" aria-describedby="aria-describe-dia">
        <section>
            <header className="dialog-header" id="aria-label-dia">
                <h4>Delete customer {customer.id} {customer.firstName} {customer.lastName}?</h4>
                <button type="button" className="dialog-close">
                    <i className="material-icons" aria-hidden="true">close</i>
                </button>
            </header>
            <div className="dialog-body" id="aria-describe-dia">
                <p>Are you sure you want to permanently delete the customer {customer.id} {customer.firstName} {customer.lastName}?</p>
            </div>
            <footer className="dialog-footer">
                <button className="btn btn-secondary" type="button" data-dialog-close="true">Cancel</button>
                <button className="btn btn-primary" type="button">Delete</button>
            </footer>
        </section>
    </div>
);

CustomersDetailedDialog.propTypes = {
    customer: PropTypes.exact({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    }).isRequired
};

export default CustomersDetailedDialog;
