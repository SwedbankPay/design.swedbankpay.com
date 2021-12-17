import React from "react";

export const filtersShowCase = {
    id: "overview-filters",
    hideOptions: true,
    tabsId: "overview-filters-tabs",
    elements: [
        {
            tab: "Horizontal topbar",
            component:
            <div className="overview-container">
                <h1>HORIZONTAL</h1>
                <button id="open-demo" className="btn btn-secondary view-demo-button" onClick={() => console.log("HEY")} name="View demo" label="View demo" icon="open_in_new" type="secondary" size="lg"> <i className="material-icons pr-1" aria-hidden="true">fullscreen</i>
                    View demo</button>
            </div>,
            title: "Horizontal topbar",
            description: "A horizontal topbar is a good option for filtering tables and also for pages made up of sections where the filter should affect local sections. Filter inputs are hidden in popover menus to limit vertical space, this means that the filters are a bit less accessible than in a sidebar and selected values should preferably be shown using tags."
        },
        {
            tab: "Vertical sidebar",
            component:
            <div className="overview-container">
                <h1>VERTICAL</h1>
                <button id="open-demo" className="btn btn-secondary view-demo-button" onClick={() => console.log("HEY")} name="View demo" label="View demo" icon="open_in_new" type="secondary" size="lg"> <i className="material-icons pr-1" aria-hidden="true">open_in_new</i>
                    View demo</button>
            </div>,
            title: "Vertical sidebar",
            description: "Suited for data presented in lists or cards and when the filters should affect the page as a whole and not a specific section. Downside is that it occupies horizontal space and might not be optimal for filtering a table with many columns that needs the horizontal space."
        },
        {
            tab: "Sheet",
            component:
            <div className="overview-container">
                <h1>$HEET</h1>
                <button id="open-demo" className="btn btn-secondary view-demo-button" onClick={() => console.log("HEY")} name="View demo" label="View demo" icon="open_in_new" type="secondary" size="lg"> <i className="material-icons pr-1" aria-hidden="true">open_in_new</i>
                    View demo</button>
            </div>,
            title: "Sheet",
            description: "For small screen sizes and/or if the filters will be used sparingly, consider putting the filters in a Sheet component triggered by a button. You could also combine a topbar and a Sheet to show promoted filters in the topbar and have the sheet containing more filters."
        }
    ]
};
