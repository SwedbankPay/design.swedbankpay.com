import React from "react";

import { RenderPage } from "../utils";
import routes from "../routes/utilities";

const Core = () => (
    <RenderPage routes={routes} appFolder="Utilities" path="/utilities" initPath="/utilities/colors" />
);

export default Core;
