import React from "react";

import { RenderPage } from "../utils";
import routes from "../routes/docs";

const Documentation = () => (
    <RenderPage routes={routes} appFolder="Documentation" path="/docs" initPath="/docs/getting-started" />
);

export default Documentation;
