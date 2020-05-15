import React from "react";

import { RenderPage } from "../utils";
import routes from "../routes/resources";

const Resources = () => (
    <RenderPage routes={routes} appFolder="Resources" path="/resources" initPath="/resources/introduction" />
);

export default Resources;
