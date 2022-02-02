import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";

const EnableFlexBehaviors = () => (
    <>
        <h2 id="enable-flex-behaviors">Enable flex behaviors</h2>
        <p>Apply <Tag code type="secondary" text="display" /> utilities to create a flexbox container and transform <b>direct children elements</b> into flex items. Flex containers and items are able to be modified further with additional flex properties.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-flex p-2 sc-highlight">Im a flexbox container!</div>
        </ComponentPreview>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-inline-flex p-2 sc-highlight">Im an inline flexbox container!</div>
        </ComponentPreview>

        <p>Responsive variations also exist for <Tag code type="secondary" text=".d-flex" /> and <Tag code type="secondary" text=".d-inline-flex" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".d-flex" />
            </li>
            <li>
                <Tag code type="secondary" text=".d-inline-flex" />
            </li>
            <li>
                <Tag code type="secondary" text=".d-{breakpoint}-flex" />
            </li>
            <li>
                <Tag code type="secondary" text=".d-{breakpoint}-inline-flex" />
            </li>
        </ul>
    </>
);

const Direction = () => (
    <>
        <h2 id="direction">Direction</h2>
        <p>Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is <Tag code type="secondary" text="row" />. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).</p>
        <p>Use <Tag code type="secondary" text=".flex-row" /> to set a horizontal direction (the browser default), or <Tag code type="secondary" text=".flex-row-reverse" /> to start the horizontal direction from the opposite side.</p>
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

        <p>Use <Tag code type="secondary" text=".flex-column" /> to set a vertical direction, or <Tag code type="secondary" text=".flex-column-reverse" /> to start the vertical direction from the opposite side.</p>
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

        <p>Responsive variations also exist for <Tag code type="secondary" text="flex-direction" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".flex-row" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-row-reverse" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-column" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-column-reverse" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-{breakpoint}-row" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-{breakpoint}-row-reverse" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-{breakpoint}-column" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-{breakpoint}-column-reverse" />
            </li>
        </ul>
    </>
);

const JustifyContent = () => (
    <>
        <h2 id="justify-content">Justify content</h2>
        <p>
            Use <Tag code type="secondary" text="justify-content" /> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if <Tag code type="secondary" text="flex-direction: column" />).
            Choose from <Tag code type="secondary" text="start" /> (browser default), <Tag code type="secondary" text="end" />, <Tag code type="secondary" text="center" />, <Tag code type="secondary" text="between" />, <Tag code type="secondary" text="around" />, or <Tag code type="secondary" text="evenly" />.
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
        <p>Responsive variations also exist for <Tag code type="secondary" text="justify-content" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".justify-content-start" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-end" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-center" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-between" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-around" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-evenly" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-{breakpoint}-start" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-{breakpoint}-end" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-{breakpoint}-center" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-{breakpoint}-between" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-{breakpoint}-around" />
            </li>
            <li>
                <Tag code type="secondary" text=".justify-content-{breakpoint}-evenly" />
            </li>
        </ul>
    </>
);

const AlignItems = () => (
    <>
        <h2 id="align-items">Align items </h2>
        <p>
            Use <Tag code type="secondary" text="align-items" /> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if <Tag code type="secondary" text="flex-direction: column" />).
            Choose from <Tag code type="secondary" text="start" />, <Tag code type="secondary" text="end" />, <Tag code type="secondary" text="center" />, <Tag code type="secondary" text="baseline" />, or <Tag code type="secondary" text="stretch" /> (browser default).
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
        <p>Responsive variations also exist for <Tag code type="secondary" text="align-items" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".align-items-start" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-end" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-center" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-baseline" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-stretch" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-{breakpoint}-start" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-{breakpoint}-end" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-{breakpoint}-center" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-{breakpoint}-baseline" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-items-{breakpoint}-stretch" />
            </li>
        </ul>
    </>
);

const AlignSelf = () => (
    <>
        <h2 id="align-self">Align self</h2>
        <p>
            Use <Tag code type="secondary" text="align-self" /> utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if <Tag code type="secondary" text="flex-direction: column" />).
            Choose from he same options as <Tag code type="secondary" text="align-items" />: <Tag code type="secondary" text="start" />, <Tag code type="secondary" text="end" />, <Tag code type="secondary" text="center" />, <Tag code type="secondary" text="baseline" /> or  <Tag code type="secondary" text="stretch" /> (browswer default).
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

        <p>Responsive variations also exist for <Tag code type="secondary" text="align-self" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".align-self-start" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-end" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-center" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-baseline" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-stretch" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-{breakpoint}-start" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-{breakpoint}-end" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-{breakpoint}-center" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-{breakpoint}-baseline" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-self-{breakpoint}-stretch" />
            </li>
        </ul>
    </>
);

const Fill = () => (
    <>
        <h2 id="fill">Fill</h2>
        <p>Use <Tag code type="secondary" text=".flex-fill" /> class on a series of sibling elements to force them into equal widths while taking up all available horizontal space.</p>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <div className="d-flex sc-highlight">
                <div className="p-2 flex-fill sc-highlight">Flex item</div>
                <div className="p-2 flex-fill sc-highlight">Flex item</div>
                <div className="p-2 flex-fill sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>

        <p>Responsive variations also exist for <Tag code type="secondary" text=".flex-fill" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".flex-fill" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-{breakpoint}-fill" />
            </li>
        </ul>
    </>
);

const GrowAndShrink = () => (
    <>
        <h2 id="grow-and-shrink">Grow and shrink</h2>
        <p>
            Use <Tag code type="secondary" text=".flex-grow-*" /> utilities to toggle a flex item’s ability to grow to fill available space.
            In the example below, the <Tag code type="secondary" text=".flex-grow-1" /> elements uses all available space it can, while allowing the remaining two flex items their necessary space.
        </p>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <div className="d-flex sc-highlight">
                <div className="p-2 flex-grow-1 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Flex item</div>
                <div className="p-2 sc-highlight">Third flex item</div>
            </div>
        </ComponentPreview>

        <p>
            Use <Tag code type="secondary" text=".flex-shrink-*" />  utilities to toggle a flex item’s ability to shrink if necessary.
            In the example below, the second flex item with <Tag code type="secondary" text=".flex-shrink-1" /> is forced to wrap it’s contents to a new line, “shrinking” to allow more space for the previous flex item with <Tag code type="secondary" text=".w-100" />.
        </p>
        <ComponentPreview language="html" codeFigure showCasePanel>
            <div className="d-flex sc-highlight">
                <div className="p-2 w-100 sc-highlight">Flex item</div>
                <div className="p-2 flex-shrink-1 sc-highlight">Flex item</div>
            </div>
        </ComponentPreview>

        <p>Responsive variations also exist for <Tag code type="secondary" text=".flex-grow" /> and <Tag code type="secondary" text=".flex-shrink" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".flex-{grow|shrink}-0" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-{grow|shrink}-1" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-{breakpoint}-{grow|shrink}-0" />
            </li>
            <li>
                <Tag code type="secondary" text=".flex-{breakpoint}-{grow|shrink}-1" />
            </li>
        </ul>
    </>
);

const AutoMargins = () => (
    <>
        <h2 id="auto-margins">Auto margins</h2>
        <p>
            Flexbox can do some pretty awesome things when you mix flex alignments with auto margins.
            Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (<Tag code type="secondary" text=".mr-auto" />), and pushing two items to the left (<Tag code type="secondary" text=".ml-auto" />).
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
            Vertically move one flex item to the top or bottom of a container by mixing <Tag code type="secondary" text="align-items" />, <Tag code type="secondary" text="flex-direction: column" />, and <Tag code type="secondary" text="margin-top: auto" /> or <Tag code type="secondary" text="margin-bottom: auto" />.
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
            Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with <Tag code type="secondary" text=".flex-nowrap" />, wrapping with <Tag code type="secondary" text=".flex-wrap" />, or reverse wrapping with <Tag code type="secondary" text=".flex-wrap-reverse" />.
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
            Change the <i>visual</i> order of specific flex items with a handful of <Tag code type="secondary" text="order" /> utilities.
            We only provide options for making an item first or last, as well as a reset to use the DOM <Tag code type="secondary" text="order" />.
            As order takes any integer value (e.g. <Tag code type="secondary" text="5" />), add custom CSS for any additional values needed.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-flex flex-nowrap sc-highlight">
                <div className="order-3 p-2 sc-highlight">First flex item</div>
                <div className="order-2 p-2 sc-highlight">Second flex item</div>
                <div className="order-1 p-2 sc-highlight">Third flex item</div>
            </div>
        </ComponentPreview>

        <p>Responsive variations also exist for <Tag code type="secondary" text="order" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".order-{0-12}" />
            </li>
            <li>
                <Tag code type="secondary" text=".order-{breakpoint}-{0-12}" />
            </li>
        </ul>
    </>
);

const AlignContent = () => (
    <>
        <h2 id="align-content">Align content</h2>
        <p>
            Use <Tag code type="secondary" text="align-content" /> utilities on flexbox containers to align flex items together on the cross axis.
            Choose from <Tag code type="secondary" text="start" /> (browser default), <Tag code type="secondary" text="end" />, <Tag code type="secondary" text="center" />, <Tag code type="secondary" text="between" />, <Tag code type="secondary" text="around" />, or <Tag code type="secondary" text="stretch" />.
            To demonstrate these utilities, we’ve enforced <Tag code type="secondary" text="flex-wrap: wrap" /> and increased the number of flex items.
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

        <p>Responsive variations also exist for <Tag code type="secondary" text="align-content" />.</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".align-content-start" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-end" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-center" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-around" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-stretch" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-{breakpoint}-start" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-{breakpoint}-end" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-{breakpoint}-center" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-{breakpoint}-around" />
            </li>
            <li>
                <Tag code type="secondary" text=".align-content-{breakpoint}-stretch" />
            </li>
        </ul>
    </>
);

const Flex = () => (
    <DocContainer docToc>
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
