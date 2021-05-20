import React from "react";
import PropTypes from "prop-types";

const SelectList = ({ id, defaultOption, optional, tooltip, options, disabled }) => {
    const attrs = {
        disabled
    };

    return (
        <>
            <label htmlFor="dd">Dropdown</label>
            <div className="dropdown">{"\n"}
                <select id="dd" className="dropdown-content">
                    <option value="">Select option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>{"\n"}
            </div>
        </>
    );
};

SelectList.propTypes = {
};

export default SelectList;
