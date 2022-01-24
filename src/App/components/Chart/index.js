import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { chart } from "@src/scripts/dashboard";

const Chart = ({ id, options, colorPool, description }) => {
    useEffect(() => {
        chart(id, options, colorPool);
    }, []);

    return (
        <canvas id={id} role="img" aria-label={description}/>
    );
};

export default Chart;

Chart.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    colorPool: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string.isRequired
};
