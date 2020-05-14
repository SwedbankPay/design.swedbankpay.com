import React from "react";

import { RenderPage } from "../utils";
import routes from "../routes/components";

const ComponentsDocumentation = () => (
    <RenderPage routes={routes} appFolder="ComponentsDocumentation" path="/components" initPath="/components/start" />
);

export default ComponentsDocumentation;
