import React from "react";

import { ComponentPreview, DocToc, Property } from "#";

const EnableFlexBehaviors = () => (
    <>
        <h2 id="enable-flex-behaviors">Enable flex behaviors</h2>
        <p>Apply <Property value="display" /> utilities to create a flexbox container and transform <b>direct children elements</b> into flex items. Flex containers and items are able to be modified further with additional flex properties.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-flex p-2 sc-highlight">Im a flexbox container!</div>
        </ComponentPreview>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-inline-flex p-2 sc-highlight">Im an inline flexbox container!</div>
        </ComponentPreview>

        <p>Responsive variations also exist for <Property value=".d-flex" /> and <Property value=".d-inline-flex" />.</p>
        <ul>
            <li>
                <Property value=".d-flex" />
            </li>
            <li>
                <Property value=".d-inline-flex" />
            </li>
            <li>
                <Property value=".d-sm-flex" />
            </li>
            <li>
                <Property value=".d-sm-inline-flex" />
            </li>
            <li>
                <Property value=".d-md-flex" />
            </li>
            <li>
                <Property value=".d-md-inline-flex" />
            </li>
            <li>
                <Property value=".d-lg-flex" />
            </li>
            <li>
                <Property value=".d-lg-inline-flex" />
            </li>
            <li>
                <Property value=".d-xl-flex" />
            </li>
            <li>
                <Property value=".d-xl-inline-flex" />
            </li>
        </ul>
    </>
);

const Direction = () => (
    <>
        <h2 id="direction">Direction</h2>
        <p>Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is <Property value="row" />. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).</p>
        <p>Use <Property value=".flex-row" /> to set a horizontal direction (the browser default), or <Property value=".flex-row-reverse" /> to start the horizontal direction from the opposite side.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-flex flex-row sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item 1</div>
                <div className="p-2 sc-highlight">Flex item 2</div>
                <div className="p-2 sc-highlight">Flex item 3</div>
            </div>
            <div className="d-flex flex-row-reverse sc-highlight">
                <div className="p-2 sc-highlight">Flex item 1</div>
                <div className="p-2 sc-highlight">Flex item 2</div>
                <div className="p-2 sc-highlight">Flex item 3</div>
            </div>
        </ComponentPreview>

        <p>Use <Property value=".flex-column" /> to set a vertical direction, or <Property value=".flex-column-reverse" /> to start the vertical direction from the opposite side.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-flex flex-column sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item 1</div>
                <div className="p-2 sc-highlight">Flex item 2</div>
                <div className="p-2 sc-highlight">Flex item 3</div>
            </div>
            <div className="d-flex flex-column-reverse sc-highlight">
                <div className="p-2 sc-highlight">Flex item 1</div>
                <div className="p-2 sc-highlight">Flex item 2</div>
                <div className="p-2 sc-highlight">Flex item 3</div>
            </div>
        </ComponentPreview>

        <p>Responsive variations also exist for <Property value="flex-direction" />.</p>
        <ul>
            <li>
                <Property value=".flex-row" />
            </li>
            <li>
                <Property value=".flex-row-reverse" />
            </li>
            <li>
                <Property value=".flex-column" />
            </li>
            <li>
                <Property value=".flex-column-reverse" />
            </li>
            <li>
                <Property value=".flex-sm-row" />
            </li>
            <li>
                <Property value=".flex-sm-row-reverse" />
            </li>
            <li>
                <Property value=".flex-sm-column" />
            </li>
            <li>
                <Property value=".flex-sm-column-reverse" />
            </li>
            <li>
                <Property value=".flex-md-row" />
            </li>
            <li>
                <Property value=".flex-md-row-reverse" />
            </li>
            <li>
                <Property value=".flex-md-column" />
            </li>
            <li>
                <Property value=".flex-md-column-reverse" />
            </li>
            <li>
                <Property value=".flex-lg-row" />
            </li>
            <li>
                <Property value=".flex-lg-row-reverse" />
            </li>
            <li>
                <Property value=".flex-lg-column" />
            </li>
            <li>
                <Property value=".flex-lg-column-reverse" />
            </li>
            <li>
                <Property value=".flex-xl-row" />
            </li>
            <li>
                <Property value=".flex-xl-row-reverse" />
            </li>
            <li>
                <Property value=".flex-xl-column" />
            </li>
            <li>
                <Property value=".flex-xl-column-reverse" />
            </li>
        </ul>
    </>
);

const JustifyContent = () => (
    <>
        <h2 id="justify-content">Justify content</h2>
        <p>
            Use <Property value="justify-content" /> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if <Property value="flex-direction: column" />).
            Choose from <Property value="start" /> (browser default), <Property value="end" />, <Property value="center" />, <Property value="between" />, or <Property value="around" />.
        </p>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex justify-content-start sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex justify-content-end sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex justify-content-center sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex justify-content-between sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex justify-content-around sc-highlight">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex justify-content-start">...</div>
            <div className="d-flex justify-content-end">...</div>
            <div className="d-flex justify-content-center">...</div>
            <div className="d-flex justify-content-between">...</div>
            <div className="d-flex justify-content-around">...</div>
        </ComponentPreview>
        <p>Responsive variations also exist for <Property value="justify-content" />.</p>
        <ul>
            <li>
                <Property value=".justify-content-start" />
            </li>
            <li>
                <Property value=".justify-content-end" />
            </li>
            <li>
                <Property value=".justify-content-center" />
            </li>
            <li>
                <Property value=".justify-content-between" />
            </li>
            <li>
                <Property value=".justify-content-around" />
            </li>
            <li>
                <Property value=".justify-content-sm-start" />
            </li>
            <li>
                <Property value=".justify-content-sm-end" />
            </li>
            <li>
                <Property value=".justify-content-sm-center" />
            </li>
            <li>
                <Property value=".justify-content-sm-between" />
            </li>
            <li>
                <Property value=".justify-content-sm-around" />
            </li>
            <li>
                <Property value=".justify-content-md-start" />
            </li>
            <li>
                <Property value=".justify-content-md-end" />
            </li>
            <li>
                <Property value=".justify-content-md-center" />
            </li>
            <li>
                <Property value=".justify-content-md-between" />
            </li>
            <li>
                <Property value=".justify-content-md-around" />
            </li>
            <li>
                <Property value=".justify-content-lg-start" />
            </li>
            <li>
                <Property value=".justify-content-lg-end" />
            </li>
            <li>
                <Property value=".justify-content-lg-center" />
            </li>
            <li>
                <Property value=".justify-content-lg-between" />
            </li>
            <li>
                <Property value=".justify-content-lg-around" />
            </li>
            <li>
                <Property value=".justify-content-xl-start" />
            </li>
            <li>
                <Property value=".justify-content-xl-end" />
            </li>
            <li>
                <Property value=".justify-content-xl-center" />
            </li>
            <li>
                <Property value=".justify-content-xl-between" />
            </li>
            <li>
                <Property value=".justify-content-xl-around" />
            </li>
        </ul>
    </>
);

const AlignItems = () => (
    <>
        <h2 id="align-items">Align items </h2>
        <p>
            Use <Property value="align-items" /> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if <Property value="flex-direction: column" />).
            Choose from <Property value="start" />, <Property value="end" />, <Property value="center" />, <Property value="baseline" />, or <Property value="stretch" /> (browser default).
        </p>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex align-items-start sc-highlight mb-3" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex align-items-end sc-highlight mb-3" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex align-items-center sc-highlight mb-3" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex align-items-baseline sc-highlight mb-3" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex align-items-stretch sc-highlight" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex align-items-start" style={{ height: "100px" }}>...</div>
            <div className="d-flex align-items-end" style={{ height: "100px" }}>...</div>
            <div className="d-flex align-items-center" style={{ height: "100px" }}>...</div>
            <div className="d-flex align-items-baseline" style={{ height: "100px" }}>...</div>
            <div className="d-flex align-items-stretch" style={{ height: "100px" }}>...</div>
        </ComponentPreview>
        <p>Responsive variations also exist for <Property value="align-items" />.</p>
        <ul>
            <li>
                <Property value=".align-items-start" />
            </li>
            <li>
                <Property value=".align-items-end" />
            </li>
            <li>
                <Property value=".align-items-center" />
            </li>
            <li>
                <Property value=".align-items-baseline" />
            </li>
            <li>
                <Property value=".align-items-stretch" />
            </li>
            <li>
                <Property value=".align-items-sm-start" />
            </li>
            <li>
                <Property value=".align-items-sm-end" />
            </li>
            <li>
                <Property value=".align-items-sm-center" />
            </li>
            <li>
                <Property value=".align-items-sm-baseline" />
            </li>
            <li>
                <Property value=".align-items-sm-stretch" />
            </li>
            <li>
                <Property value=".align-items-md-start" />
            </li>
            <li>
                <Property value=".align-items-md-end" />
            </li>
            <li>
                <Property value=".align-items-md-center" />
            </li>
            <li>
                <Property value=".align-items-md-baseline" />
            </li>
            <li>
                <Property value=".align-items-md-stretch" />
            </li>
            <li>
                <Property value=".align-items-lg-start" />
            </li>
            <li>
                <Property value=".align-items-lg-end" />
            </li>
            <li>
                <Property value=".align-items-lg-center" />
            </li>
            <li>
                <Property value=".align-items-lg-baseline" />
            </li>
            <li>
                <Property value=".align-items-lg-stretch" />
            </li>
            <li>
                <Property value=".align-items-xl-start" />
            </li>
            <li>
                <Property value=".align-items-xl-end" />
            </li>
            <li>
                <Property value=".align-items-xl-center" />
            </li>
            <li>
                <Property value=".align-items-xl-baseline" />
            </li>
            <li>
                <Property value=".align-items-xl-stretch" />
            </li>
        </ul>
    </>
);

const FlexText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</p>
        <EnableFlexBehaviors />
        <Direction />
        <JustifyContent />
        <AlignItems />
    </div>
);

const Flex = () => (
    <>
        <div className="doc-container">
            <div className="row">
                <FlexText />
                <DocToc component={FlexText} />
            </div>
        </div>
    </>
);

export default Flex;

/* For testing */
export { EnableFlexBehaviors, FlexText };
