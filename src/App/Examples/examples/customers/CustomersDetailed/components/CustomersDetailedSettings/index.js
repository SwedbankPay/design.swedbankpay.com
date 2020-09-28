import React from "react";

import { Togglebox, Checkbox } from "@components/FormComponents";
import InputGroup from "@components/InputGroup";

const CustomersDetailedSettings = () => (
    <>
        <h3>Notifications</h3>
        <div className="row justify-content-around mt-3">
            <div className="col-lg-auto m-2">
                <div className="d-flex flex-column">
                    <Togglebox id="customers-detailed-settings-toggle-1" checked label="Delivery status changes" />
                    <Togglebox id="customers-detailed-settings-toggle-3" label="Critical delivery messages" />
                </div>
            </div>
            <div className="col-lg-auto m-2">
                <Togglebox id="customers-detailed-settings-toggle-2" label="New inquiry messages" />
                <Togglebox id="customers-detailed-settings-toggle-4" checked label="Inquiry status changes" />
            </div>
        </div>
        <h3>Newsletter and information</h3>
        <div className="row mt-4">
            {[...Array(7).keys()].map(item => (
                <div key={item} className="col-lg-3 col-md-4 col-sm-6">
                    <Checkbox id={`customers-detailed-settings-checkbox-${item}`} checked label={`Subscription #${item + 1}`} />
                </div>
            ))}
        </div>

        <h3>Customer type</h3>
        <InputGroup
            type="select"
            selectOptions={["Long-term contract", "Short-term contract", "One time purchase"]}
            prefixValue="Type"
        />

        <button className="btn btn-primary">Save</button>
    </>
);

export default CustomersDetailedSettings;
