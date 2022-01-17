import React from "react";

import FilterDemonstration from "./FilterDemonstration";
import Dialog from "@components/Dialog";
// import { dialog } from "@src/scripts/main";

export const filtersShowCase = {
    id: "overview-filters",
    hideOptions: true,
    tabsId: "overview-filters-tabs",
    elements: [
        {
            tab: "Horizontal topbar",
            component:
            <div className="overview-container">
                <img src="" alt="Example picture of horizontal filtering" className="img-fluid"/>
                <button id="open-demo" className="btn btn-secondary view-demo-button" type="button" data-dialog-open="filtering"><i className="material-icons pr-1" aria-hidden="true">fullscreen</i>{"\n"}View demo{"\n"}</button>
                <Dialog className="fullscreen" diaId="filtering">
                    <FilterDemonstration type="horizontal"/>
                </Dialog>
            </div>,
            title: "Horizontal topbar",
            description: "A horizontal topbar is a good option for filtering tables and also for pages made up of sections where the filter should affect local sections. Filter inputs are hidden in popover menus to limit vertical space, this means that the filters are a bit less accessible than in a sidebar and selected values should preferably be shown using tags."
        },
        {
            tab: "Vertical sidebar",
            component:
            <div className="overview-container">
                <img src="" alt="Example picture of vertical filtering" className="img-fluid"/>
                <button id="open-demo" className="btn btn-secondary view-demo-button" type="button" data-dialog-open="filtering"><i className="material-icons pr-1" aria-hidden="true">fullscreen</i>{"\n"}View demo{"\n"}</button>
                <Dialog className="fullscreen" diaId="filtering">
                    <FilterDemonstration type="vertical"/>
                </Dialog>
            </div>,
            title: "Vertical sidebar",
            description: "Suited for data presented in lists or cards and when the filters should affect the page as a whole and not a specific section. Downside is that it occupies horizontal space and might not be optimal for filtering a table with many columns that needs the horizontal space."
        },
        {
            tab: "Sheet",
            component:
            <div className="overview-container">
                <img src="" alt="Example picture of filtering with sheet" className="img-fluid"/>
                <button id="open-demo" className="btn btn-secondary view-demo-button" type="button" data-dialog-open="filtering"><i className="material-icons pr-1" aria-hidden="true">fullscreen</i>{"\n"}View demo{"\n"}</button>
                <Dialog className="fullscreen" diaId="filtering">
                    <FilterDemonstration type="sheet"/>
                </Dialog>
            </div>,
            title: "Sheet",
            description: "For small screen sizes and/or if the filters will be used sparingly, consider putting the filters in a Sheet component triggered by a button. You could also combine a topbar and a Sheet to show promoted filters in the topbar and have the sheet containing more filters."
        }
    ]
};
