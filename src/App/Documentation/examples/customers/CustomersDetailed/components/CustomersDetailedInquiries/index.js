import React from "react";
import PropTypes from "prop-types";

import CustomersDetailedDatePickerGroup from "../CustomersDetailedDatePickerGroup";
import MediaObjectComponent from "@components/MediaObject";

const CustomersDetailedInquiryCard = ({ inquiry, size }) => (
    <div className="card card-secondary">
        <header className="card-header">
            <h4>{`Inquiry: ${inquiry.id} | ${inquiry.date}`}</h4>
        </header>
        <div className="card-body">
            <div className="d-none d-sm-block">
                <div className="d-flex justify-content-around">
                    <MediaObjectComponent
                        size={size}
                        icon="message"
                        heading={inquiry.numMessages.toString()}
                        text="messages"
                    />

                    <MediaObjectComponent
                        size={size}
                        icon={inquiry.resolved ? "check_circle" : "feedback"}
                        heading={inquiry.resolved ? "Resolved" : "Unresolved"}

                    />
                </div>
            </div>
            <div className="d-sm-none">
                <div className="d-flex flex-column">
                    <MediaObjectComponent
                        size="sm"
                        icon="message"
                        heading={inquiry.numMessages.toString()}
                        text="messages"
                    />

                    <MediaObjectComponent
                        size="sm"
                        icon={inquiry.resolved ? "check_circle" : "feedback"}
                        heading={inquiry.resolved ? "Resolved" : "Unresolved"}

                    />
                </div>
            </div>
            <h5>Initial message:</h5>
            <p>{inquiry.message}</p>
        </div>
        <div className="card-footer">
            <div className="footer-link"><a href="#">See inquiry thread</a></div>
        </div>
    </div>
);

const CustomersDetailedInquiries = ({ customersDetailedLatestInquiry, customersDetailedPreviousInquiries }) => (
    <>
        <h3>Latest inquiry</h3>
        <CustomersDetailedInquiryCard inquiry={customersDetailedLatestInquiry} size="lg" />

        <h3>Previous inquiries</h3>
        <CustomersDetailedDatePickerGroup />
        <div className="row">
            {customersDetailedPreviousInquiries.map(inquiry => (
                <div key={inquiry.id} className="col-lg-6 d-flex">
                    <CustomersDetailedInquiryCard inquiry={inquiry} size="sm" />
                </div>
            ))}
        </div>
    </>
);

CustomersDetailedInquiryCard.propTypes = {
    inquiry: PropTypes.exact({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        numMessages: PropTypes.number.isRequired,
        resolved: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired,
    size: PropTypes.string.isRequired
};

CustomersDetailedInquiries.propTypes = {
    customersDetailedLatestInquiry: PropTypes.exact({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        numMessages: PropTypes.number.isRequired,
        resolved: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired,
    customersDetailedPreviousInquiries: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        numMessages: PropTypes.number.isRequired,
        resolved: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired
    })).isRequired
};

export default CustomersDetailedInquiries;

export { CustomersDetailedInquiryCard };
