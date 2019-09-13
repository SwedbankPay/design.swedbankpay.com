import React from "react";
import PropTypes from "prop-types";
import ColorPreview from "@components/ColorPreview";

const ColorDisplay = ({ id, colorList, head, description }) => (
    <>
        <h2 id={id}>{head}</h2>
        {description}
        <ul className="list color-preview">
            {colorList.map((elem, i) => (
                <li key={i} >
                    <ColorPreview name={elem.name} hex={elem.hex} />
                </li>
            ))}
        </ul>
    </>
);

ColorDisplay.propTypes = {
    id: PropTypes.string.isRequired,
    colorList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired
    })).isRequired,
    head: PropTypes.string.isRequired,
    description: PropTypes.any
};

export default ColorDisplay;
