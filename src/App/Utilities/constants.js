import React from "react";
import { spacingClasses, borderClasses, breakpointClasses, hidingElementClasses, flexClasses, imageClasses, sizingClasses, textClasses, visibilityClasses } from "./classes";
import CodeTagComponent from "@components/CodeTags";

const UtilityPresenter = ({ util, css, example, breakpointVersion }) => (
    <div className="d-flex justify-content-between mb-2">
        <CodeTagComponent code={util} type="primary"/>
        <CodeTagComponent code={css} type="secondary"/>
        {breakpointVersion ? <CodeTagComponent type="tertiary" code={example}/> : <>{example && <span>{example}</span>}</>}
    </div>
);

const DisplayPresenter = ({ util, css, textVersion }) => (
    <div className="d-flex justify-content-between mb-2">
        {textVersion ? <span>{util}</span> : <CodeTagComponent code={util} type="primary"/>}
        <CodeTagComponent code={css} type="secondary"/>
    </div>
);

const FlexPresenter = ({ code }) => (
    <div className="d-flex  mb-2">
        <CodeTagComponent code={code} type="primary"/>
    </div>
);

export const borders = [
    {
        id: "borders",
        title: "Border",
        subtitle: "Gives borders to an element.",
        content: <>
            {borderClasses.map((rule, i) => (
                <UtilityPresenter key={rule + i} util={rule.name} css={rule.css}/>
            ))}
        </>
    }];

export const breakpoints = [
    {
        id: "breakpoints",
        title: "Breakpoints",
        subtitle: "Break it up",
        content: <>
            <div className="d-flex justify-content-between">
                <p className="font-weight-bold">Infix</p>
                <p className="font-weight-bold">Min-width</p>
                <p className="font-weight-bold">Example use</p>
            </div>
            {breakpointClasses.map((rule, i) => (
                <UtilityPresenter breakpointVersion key={rule + i} util={rule.name} css={rule.css} example={rule.px}/>
            ))}
        </>
    }
];

export const spacings = [
    {
        id: "margins",
        title: "Margin",
        subtitle: "For seperating elements.",
        content: <>
            {spacingClasses.margins.map((rule, i) => (
                <UtilityPresenter key={rule + i} util={rule.name} css={rule.css} example={rule.px}/>
            ))}
        </>
    },
    {
        id: "paddings",
        title: "Padding",
        subtitle: "Give the element some space.",
        content: <>
            {spacingClasses.paddings.map((rule, i) => (
                <UtilityPresenter key={rule + i} util={rule.name} css={rule.css} example={rule.px}/>
            ))}
        </>
    }
];

export const colors = [
    {
        id: "colorText",
        title: "Text",
        subtitle: "To alter text colors",
        content: <>
            <p className="text-default ">.text-default</p>
            <p className="text-muted ">.text-muted</p>
            <p className="text-white text-dark-background ">.text-white</p>
            <p className="text-danger ">.text-danger</p>
            <p className="text-warning ">.text-warning</p>
            <p className="text-neutral ">.text-neutral</p>
            <p className="text-success ">.text-success</p>
        </>
    },
    {
        id: "colorBackground",
        title: "Background colors",
        subtitle: "To alter background colors of an element",
        content: <>
            <div className="text-default bg-brand p-1">.bg-brand</div>
            <div className="col-12 text-default bg-primary p-1">.bg-primary</div>
            <div className="col-12 text-default bg-secondary p-1">.bg-secondary</div>
            <div className="col-12 text-default bg-tertiary p-1">.bg-tertiary</div>
            <div className="col-12 text-default bg-quaternary p-1">.bg-quaternary</div>
            <div className="col-12 text-default bg-danger p-1">.bg-danger</div>
            <div className="col-12 text-default bg-warning p-1">.bg-warning</div>
            <div className="col-12 text-default bg-success p-1">.bg-success</div>
            <div className="col-12 text-default bg-neutral p-1">.bg-neutral</div>
        </>
    }
];

export const displayHidingElements = [
    {
        id: "displaynotation",
        title: "Notation",
        subtitle: "Quick display classes. d(isplay)-<value>",
        content: <>
            {hidingElementClasses.notation.map((rule, i) => (
                <DisplayPresenter key={rule + i} util={rule.value} css={rule.css}/>
            ))}
        </>
    },
    {
        id: "hidingElmenents",
        title: "Hiding elements",
        subtitle: "For faster mobile-friendly development",
        content: <>
            {hidingElementClasses.hidingElements.map((rule, i) => (
                <DisplayPresenter key={rule + i} util={rule.screenSize} css={rule.dClass} textVersion/>
            ))}
        </>
    }
];

export const flex = [
    {
        id: "enableflexbahaviour",
        title: "Enable flex bahaviour",
        subtitle: "For creating a flexbox",
        content: <>
            {flexClasses.flexBehaviour.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "flexDirection",
        title: "Direction",
        subtitle: "Direct the flex",
        content: <>
            {flexClasses.direction.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "justifyContent",
        title: "Justify content",
        subtitle: "Justify your flex contents",
        content: <>
            {flexClasses.justifyContent.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "alignItems",
        title: "Align items",
        subtitle: "Align set of elements",
        content: <>
            {flexClasses.alignItems.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "alignSelf",
        title: "Align self",
        subtitle: "Align element",
        content: <>
            {flexClasses.alignSelf.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "fill",
        title: "Fill",
        subtitle: "Flex fill",
        content: <>
            {flexClasses.fill.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "growAndShrink",
        title: "Grow and shrink",
        subtitle: "Effective use of space",
        content: <>
            {flexClasses.growAndShrink.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "wrap",
        title: "Wrap",
        subtitle: "Nowrap is a browsers defualt",
        content: <>
            {flexClasses.wrap.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "order",
        title: "Order",
        subtitle: "Modifies the visual order",
        content: <>
            {flexClasses.order.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    },
    {
        id: "alignContent",
        title: "Align content",
        subtitle: "No effect on single rows of flex items",
        content: <>
            {flexClasses.alignContent.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code} explaination={rule.explaination}/>
            ))}
        </>
    }
];

export const images = [
    {
        id: "images",
        title: "Images",
        subtitle: "Utility classes to your images",
        content: <>
            {imageClasses.map((rule, i) => (
                <DisplayPresenter key={rule + i} util={rule.explaination} css={rule.code} textVersion/>
            ))}
        </>
    }
];

export const sizings = [
    {
        id: "sizing",
        title: "Sizing",
        subtitle: "Resize your elements",
        content: <>
            {sizingClasses.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code}/>
            ))}
        </>
    }
];

export const text = [
    {
        id: "text",
        title: "Text",
        subtitle: "Modify your text elements",
        content: <>
            {textClasses.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code}/>
            ))}
        </>
    }
];

export const visibility = [
    {
        id: "visibility",
        title: "Visibility",
        subtitle: "Modify the visual representation of your elements",
        content: <>
            {visibilityClasses.map((rule, i) => (
                <FlexPresenter key={rule + i} code={rule.code}/>
            ))}
        </>
    }
];
