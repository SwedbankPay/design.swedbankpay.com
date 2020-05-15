import React from "react";

import { RenderPage } from "../utils";
import routes from "../routes/core";

const Core = () => (
    <RenderPage routes={routes} appFolder="Core" path="/core" initPath="/core/color" />
);

export default Core;
