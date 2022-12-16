import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const EnableFlexBehaviors = () => (
    <>
        <h2 id="enable-flex-behaviors">Enable flex behaviors</h2>
        <p>Apply <CodeTags type="secondary" code="display" /> utilities to create a flexbox container and transform <b>direct children elements</b> into flex items. Flex containers and items are able to be modified further with additional flex properties.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-flex p-2 sc-highlight">Im a flexbox container!</div>
        </ComponentPreview>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-inline-flex p-2 sc-highlight">Im an inline flexbox container!</div>
        </ComponentPreview>

        <p>Responsive variations also exist for <CodeTags type="secondary" code=".d-flex" /> and <CodeTags type="secondary" code=".d-inline-flex" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".d-flex" />
            </li>
            <li>
                <CodeTags type="secondary" code=".d-inline-flex" />
            </li>
            <li>
                <CodeTags type="secondary" code=".d-{breakpoint}-flex" />
            </li>
            <li>
                <CodeTags type="secondary" code=".d-{breakpoint}-inline-flex" />
            </li>
        </ul>
    </>
);

const Direction = () => (
    <>
        <h2 id="direction">Direction</h2>
        <p>Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is <CodeTags type="secondary" code="row" />. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).</p>
        <p>Use <CodeTags type="secondary" code=".flex-row" /> to set a horizontal direction (the browser default), or <CodeTags type="secondary" code=".flex-row-reverse" /> to start the horizontal direction from the opposite side.</p>
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

        <p>Use <CodeTags type="secondary" code=".flex-column" /> to set a vertical direction, or <CodeTags type="secondary" code=".flex-column-reverse" /> to start the vertical direction from the opposite side.</p>
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

        <p>Responsive variations also exist for <CodeTags type="secondary" code="flex-direction" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".flex-row" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-row-reverse" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-column" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-column-reverse" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-{breakpoint}-row" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-{breakpoint}-row-reverse" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-{breakpoint}-column" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-{breakpoint}-column-reverse" />
            </li>
        </ul>
    </>
);

const JustifyContent = () => (
    <>
        <h2 id="justify-content">Justify content</h2>
        <p>
            Use <CodeTags type="secondary" code="justify-content" /> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if <CodeTags type="secondary" code="flex-direction: column" />).
            Choose from <CodeTags type="secondary" code="start" /> (browser default), <CodeTags type="secondary" code="end" />, <CodeTags type="secondary" code="center" />, <CodeTags type="secondary" code="between" />, <CodeTags type="secondary" code="around" />, or <CodeTags type="secondary" code="evenly" />.
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
            <div className="d-flex justify-content-around sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex justify-content-evenly sc-highlight">
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
            <div className="d-flex justify-content-evenly">...</div>
        </ComponentPreview>
        <p>Responsive variations also exist for <CodeTags type="secondary" code="justify-content" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".justify-content-start" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-end" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-center" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-between" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-around" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-evenly" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-{breakpoint}-start" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-{breakpoint}-end" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-{breakpoint}-center" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-{breakpoint}-between" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-{breakpoint}-around" />
            </li>
            <li>
                <CodeTags type="secondary" code=".justify-content-{breakpoint}-evenly" />
            </li>
        </ul>
    </>
);

const AlignItems = () => (
    <>
        <h2 id="align-items">Align items </h2>
        <p>
            Use <CodeTags type="secondary" code="align-items" /> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if <CodeTags type="secondary" code="flex-direction: column" />).
            Choose from <CodeTags type="secondary" code="start" />, <CodeTags type="secondary" code="end" />, <CodeTags type="secondary" code="center" />, <CodeTags type="secondary" code="baseline" />, or <CodeTags type="secondary" code="stretch" /> (browser default).
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
        <p>Responsive variations also exist for <CodeTags type="secondary" code="align-items" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".align-items-start" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-end" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-center" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-baseline" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-stretch" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-{breakpoint}-start" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-{breakpoint}-end" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-{breakpoint}-center" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-{breakpoint}-baseline" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-items-{breakpoint}-stretch" />
            </li>
        </ul>
    </>
);

const AlignSelf = () => (
    <>
        <h2 id="align-self">Align self</h2>
        <p>
            Use <CodeTags type="secondary" code="align-self" /> utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if <CodeTags type="secondary" code="flex-direction: column" />).
            Choose from he same options as <CodeTags type="secondary" code="align-items" />: <CodeTags type="secondary" code="start" />, <CodeTags type="secondary" code="end" />, <CodeTags type="secondary" code="center" />, <CodeTags type="secondary" code="baseline" /> or  <CodeTags type="secondary" code="stretch" /> (browswer default).
        </p>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex sc-highlight mb-3" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="align-self-start p-2 sc-highlight">Aligned flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex sc-highlight mb-3" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="align-self-end p-2 sc-highlight">Aligned flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex sc-highlight mb-3" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="align-self-center p-2 sc-highlight">Aligned flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex sc-highlight mb-3" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="align-self-baseline p-2 sc-highlight">Aligned flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
            <div className="d-flex sc-highlight" style={{ height: "100px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="align-self-stretch p-2 sc-highlight">Aligned flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="align-self-start">Aligned flex item</div>
            <div className="align-self-end">Aligned flex item</div>
            <div className="align-self-center">Aligned flex item</div>
            <div className="align-self-baseline">Aligned flex item</div>
            <div className="align-self-stretch">Aligned flex item</div>
        </ComponentPreview>

        <p>Responsive variations also exist for <CodeTags type="secondary" code="align-self" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".align-self-start" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-end" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-center" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-baseline" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-stretch" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-{breakpoint}-start" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-{breakpoint}-end" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-{breakpoint}-center" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-{breakpoint}-baseline" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-self-{breakpoint}-stretch" />
            </li>
        </ul>
    </>
);

const Fill = () => (
    <>
        <h2 id="fill">Fill</h2>
        <p>Use <CodeTags type="secondary" code=".flex-fill" /> class on a series of sibling elements to force them into equal widths while taking up all available horizontal space.</p>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <div className="d-flex sc-highlight">
                <div className="p-2 flex-fill sc-highlight">Flex item</div>
                <div className="p-2 flex-fill sc-highlight">Flex item</div>
                <div className="p-2 flex-fill sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>

        <p>Responsive variations also exist for <CodeTags type="secondary" code=".flex-fill" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".flex-fill" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-{breakpoint}-fill" />
            </li>
        </ul>
    </>
);

const GrowAndShrink = () => (
    <>
        <h2 id="grow-and-shrink">Grow and shrink</h2>
        <p>
            Use <CodeTags type="secondary" code=".flex-grow-*" /> utilities to toggle a flex item’s ability to grow to fill available space.
            In the example below, the <CodeTags type="secondary" code=".flex-grow-1" /> elements uses all available space it can, while allowing the remaining two flex items their necessary space.
        </p>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <div className="d-flex sc-highlight">
                <div className="p-2 flex-grow-1 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Third flex item</div>
            </div>
        </ComponentPreview>

        <p>
            Use <CodeTags type="secondary" code=".flex-shrink-*" />  utilities to toggle a flex item’s ability to shrink if necessary.
            In the example below, the second flex item with <CodeTags type="secondary" code=".flex-shrink-1" /> is forced to wrap it’s contents to a new line, “shrinking” to allow more space for the previous flex item with <CodeTags type="secondary" code=".w-100" />.
        </p>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <div className="d-flex sc-highlight">
                <div className="p-2 w-100 sc-highlight">Flex item</div>
                <div className="p-2 flex-shrink-1 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>

        <p>Responsive variations also exist for <CodeTags type="secondary" code=".flex-grow" /> and <CodeTags type="secondary" code=".flex-shrink" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".flex-{grow|shrink}-0" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-{grow|shrink}-1" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-{breakpoint}-{grow|shrink}-0" />
            </li>
            <li>
                <CodeTags type="secondary" code=".flex-{breakpoint}-{grow|shrink}-1" />
            </li>
        </ul>
    </>
);

const AutoMargins = () => (
    <>
        <h2 id="auto-margins">Auto margins</h2>
        <p>
            Flexbox can do some pretty awesome things when you mix flex alignments with auto margins.
            Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (<CodeTags type="secondary" code=".mr-auto" />), and pushing two items to the left (<CodeTags type="secondary" code=".ml-auto" />).
        </p>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <div className="d-flex sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>

            <div className="d-flex sc-highlight mb-3">
                <div className="mr-auto p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>

            <div className="d-flex sc-highlight mb-3">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="ml-auto p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>

        <h3>With align-items</h3>
        <p>
            Vertically move one flex item to the top or bottom of a container by mixing <CodeTags type="secondary" code="align-items" />, <CodeTags type="secondary" code="flex-direction: column" />, and <CodeTags type="secondary" code="margin-top: auto" /> or <CodeTags type="secondary" code="margin-bottom: auto" />.
        </p>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <div className="d-flex align-items-start flex-column sc-highlight mb-3" style={{ height: "200px" }}>
                <div className="mb-auto p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>

            <div className="d-flex align-items-end flex-column sc-highlight mb-3" style={{ height: "200px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="mt-auto p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
    </>
);

const Wrap = () => (
    <>
        <h2 id="wrap">Wrap</h2>
        <p>
            Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with <CodeTags type="secondary" code=".flex-nowrap" />, wrapping with <CodeTags type="secondary" code=".flex-wrap" />, or reverse wrapping with <CodeTags type="secondary" code=".flex-wrap-reverse" />.
        </p>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex flex-nowrap sc-highlight" style={{ width: "8rem" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex flex-nowrap">...</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex flex-wrap sc-highlight">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex flex-wrap">...</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex flex-wrap-reverse sc-highlight">
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex flex-wrap-reverse">...</div>
        </ComponentPreview>
    </>
);

const Order = () => (
    <>
        <h2 id="order">Order</h2>
        <p>
            Change the <i>visual</i> order of specific flex items with a handful of <CodeTags type="secondary" code="order" /> utilities.
            We only provide options for making an item first or last, as well as a reset to use the DOM <CodeTags type="secondary" code="order" />.
            As order takes any integer value (e.g. <CodeTags type="secondary" code="5" />), add custom CSS for any additional values needed.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-flex flex-nowrap sc-highlight">
                <div className="order-3 p-2 sc-highlight">First flex item</div>
                <div className="order-2 p-2 sc-highlight">Second flex item</div>
                <div className="order-1 p-2 sc-highlight">Third flex item</div>
            </div>
        </ComponentPreview>

        <p>Responsive variations also exist for <CodeTags type="secondary" code="order" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".order-{0-12}" />
            </li>
            <li>
                <CodeTags type="secondary" code=".order-{breakpoint}-{0-12}" />
            </li>
        </ul>
    </>
);

const AlignContent = () => (
    <>
        <h2 id="align-content">Align content</h2>
        <p>
            Use <CodeTags type="secondary" code="align-content" /> utilities on flexbox containers to align flex items together on the cross axis.
            Choose from <CodeTags type="secondary" code="start" /> (browser default), <CodeTags type="secondary" code="end" />, <CodeTags type="secondary" code="center" />, <CodeTags type="secondary" code="between" />, <CodeTags type="secondary" code="around" />, or <CodeTags type="secondary" code="stretch" />.
            To demonstrate these utilities, we’ve enforced <CodeTags type="secondary" code="flex-wrap: wrap" /> and increased the number of flex items.
        </p>
        <p><b>Heads up!</b> This property has no effect on single rows of flex items.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex align-content-start flex-wrap sc-highlight mb-3" style={{ height: "200px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex align-content-start flex-wrap">...</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex align-content-end flex-wrap sc-highlight mb-3" style={{ height: "200px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex align-content-end flex-wrap">...</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex align-content-between flex-wrap sc-highlight mb-3" style={{ height: "200px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex align-content-between flex-wrap">...</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex align-content-around flex-wrap sc-highlight mb-3" style={{ height: "200px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex align-content-around flex-wrap">...</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <div className="d-flex align-content-stretch flex-wrap sc-highlight mb-3" style={{ height: "200px" }}>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <div className="d-flex align-content-stretch flex-wrap">...</div>
        </ComponentPreview>

        <p>Responsive variations also exist for <CodeTags type="secondary" code="align-content" />.</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".align-content-start" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-end" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-center" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-around" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-stretch" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-{breakpoint}-start" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-{breakpoint}-end" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-{breakpoint}-center" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-{breakpoint}-around" />
            </li>
            <li>
                <CodeTags type="secondary" code=".align-content-{breakpoint}-stretch" />
            </li>
        </ul>
    </>
);

const Flex = () => (
    <DocContainer>
        <p className="lead">Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</p>
        <EnableFlexBehaviors />
        <Direction />
        <JustifyContent />
        <AlignItems />
        <AlignSelf />
        <Fill />
        <GrowAndShrink />
        <AutoMargins />
        <Wrap />
        <Order />
        <AlignContent />
    </DocContainer>
);

export default Flex;

/* For testing */
export { EnableFlexBehaviors, Direction, JustifyContent, AlignItems, AlignSelf, Fill, GrowAndShrink, AutoMargins, Wrap, Order, AlignContent };
