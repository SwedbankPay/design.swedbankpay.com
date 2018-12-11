import React, { Component } from "react";
import PropTypes from "prop-types";

import { chart } from "$/px-script/dashboard";

class Chart extends Component {
    componentDidMount () {
        const { id, options } = this.props;

        chart(id, options);
    }

    render () {
        return (
            <canvas id={this.props.id} />
        );
    }
}

Chart.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired
};

export default Chart;
