import React, { Component } from "react";
import PropTypes from "prop-types";

import { chart } from "@src/scripts/dashboard";

class Chart extends Component {
    componentDidMount () {
        const { id, options, colorPool } = this.props;

        chart(id, options, colorPool);
    }

    render () {
        return (
            <canvas id={this.props.id} />
        );
    }
}

Chart.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    colorPool: PropTypes.arrayOf(PropTypes.string)
};

export default Chart;
