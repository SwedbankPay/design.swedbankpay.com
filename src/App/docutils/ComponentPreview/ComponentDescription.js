import React from "react";

export const ComponentDescription = ({ title, description, activeOptions }) => (
    <div className="component-description">
        {title && <h3>{title}</h3>}
        {description}
        {activeOptions
            .filter(currentOption => currentOption.description)
            .reduce((acc, currentOption) => ([
                ...acc,
                currentOption.description
            ]), [])
            .map((currentOptionDescription, i) => <React.Fragment key={i}>{currentOptionDescription}</React.Fragment>)
        }
    </div>
);
