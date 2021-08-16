import React, { useEffect } from "react";

import { Datepicker as DatepickerComponent } from "@components/FormComponents";

import { datepicker } from "@src/scripts/main";

const CustomersDetailedDatePickerGroup = () => {

    useEffect(() => {
        datepicker.init();
    });

    return (
        <div className="row">
            <div className="col-sm-6">
                <DatepickerComponent
                    value="2000-01-01"
                    label="From:"
                    prefixType="icon"
                    prefixValue="event"
                    fulldate
                    id="init-value-datepicker-from"
                />
            </div>
            <div className="col-sm-6">
                <DatepickerComponent
                    value="2020-01-01"
                    label="To:"
                    prefixType="icon"
                    prefixValue="event"
                    fulldate
                    id="init-value-datepicker-to"
                />
            </div>
        </div>
    );
};

export default CustomersDetailedDatePickerGroup;
