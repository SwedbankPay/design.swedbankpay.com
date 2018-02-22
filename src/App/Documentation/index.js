import React from "react";
import { withRouter } from "react-router-dom";

import DocHeading from "./utils/DocHeading";
import SelectPanel from "./SelectPanel";
import DocView from "./DocView";

const SelectPanelWithRoutes = withRouter(props => <SelectPanel {...props} />);
const DocViewWithRoutes = withRouter(props => <DocView {...props} />);

const Documentation = props => {
    return (
        <div className="documentation">
            <div className="row">
                <div className="sidebar-heading col-md-3 col-sm-12">
                    <h1>DesignGuide</h1>
                </div>
                <div className="view-heading col-md-9 col-sm-12">
                    <DocHeading {...props} />
                </div>
            </div>
            <div className="row">
                <SelectPanelWithRoutes />
                <DocViewWithRoutes />
            </div>
        </div>
    );
};

export default Documentation;
