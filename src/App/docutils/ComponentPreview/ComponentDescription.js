import React from "react";

export const ComponentDescription = ({ title, description, }) => (
    <div className="component-description">
        {title && <h3>{title}</h3>}
        {description}
        {/* TODO: when the options have their own description to be added to the end of the tab description */}

        {/*         {this.state.activeOptions
            .filter(currentOption => currentOption.description)
            .reduce((acc, currentOption) => ([
                ...acc,
                currentOption.description
            ]), [])
            .map((currentOptionDescription, i) => <React.Fragment key={i}>{currentOptionDescription}</React.Fragment>)
        } */}
    </div>
);
