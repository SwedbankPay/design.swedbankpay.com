import React from "react";
import { withRouter } from "react-router-dom";

import SelectPanel from "./SelectPanel/SelectPanel";
import DocView from "./DocView/DocView";

const SelectPanelWithRoutes = withRouter(props => <SelectPanel {...props} />);
const DocViewWithRoutes = withRouter(props => <DocView {...props} />);

const Documentation = () => {
    return (
        <div className="row doc-body">
            <SelectPanelWithRoutes />
            <DocViewWithRoutes />
        </div>
    );
};

export default Documentation;
