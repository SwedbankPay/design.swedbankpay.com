import React from "react";

import { RenderPage } from "../utils";
import routes from "../routes/getting-started";

const GettingStarted = () => (
    <RenderPage routes={routes} appFolder="GettingStarted" path="/getting-started" initPath="/getting-started/introduction" />
);

export default GettingStarted;
