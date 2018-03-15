import React from "react";
import PropTypes from "prop-types";

const Input = props => {
    return (
        <div className="input-group">
            <span className="input-group-addon">Mr.</span>
            <input type="text" className="form-control" placeholder="Name" />
            <span className="input-group-addon">
                <i className="material-icons">face</i>
            </span>
        </div>
    );
};

Input.propTypes = {};

export default Input;
