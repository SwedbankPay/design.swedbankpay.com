import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import SelectListComponent from "@components/SelectList";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <SelectListComponent />
        </ComponentPreview>
    </section>
);

const SelectList = () => (
    <DocContainer>
        <p className="lead">The slider component lets the user increase and decrease the value by moving the slider along a horizontal line and lets the user choose an approximate value</p>
        <Overview />
    </DocContainer>
);

export default SelectList;

export { Overview };
