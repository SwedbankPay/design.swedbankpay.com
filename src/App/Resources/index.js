import React from "react";

import { RenderPage } from "../utils";
import routes from "../routes/resources";

const Resources = () => (
    <RenderPage routes={routes} appFolder="Resources" path="/res" initPath="/res/getting-started" />
);

export default Resources;
