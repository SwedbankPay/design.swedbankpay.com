import React from "react";
import PropTypes from "prop-types";
import ColorPreview from "@components/ColorPreview";

const ColorDisplay = ({ id, colorList, head, description, subListNames }) => (
    <>
        <h2 id={id}>{head}</h2>
        {description}

        {subListNames ? subListNames.map((subListName, index) => (
            <div key={index}>
                <h3>{subListName}</h3>
                <ul className="list color-preview">
                    {colorList.filter(elem => elem.inSubLists.includes(subListName)).map((elem, i) => {
                        /* eslint-disable */
                        const { inSubLists, ...elemProps } = elem; // Exclude property not needed by ColorPreview
                        /* eslint-enable */

                        return (
                            <li key={i} >
                                <ColorPreview {...elemProps} />
                            </li>
                        );
                    })}
                </ul>
            </div>))
            :
            <ul className="list color-preview">
                {colorList.map((elem, i) => {
                    /* eslint-disable */
                    const { inSubLists, ...elemProps } = elem; // Exclude property not needed by ColorPreview
                    /* eslint-enable */

                    return (
                        <li key={i} >
                            <ColorPreview {...elemProps} />
                        </li>
                    );
                })}
            </ul>
        }
    </>
);

ColorDisplay.propTypes = {
    id: PropTypes.string.isRequired,
    colorList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        subListNames: PropTypes.arrayOf(PropTypes.string)
    })).isRequired,
    head: PropTypes.string.isRequired,
    description: PropTypes.any,
    subLists: PropTypes.bool
};

export default ColorDisplay;
