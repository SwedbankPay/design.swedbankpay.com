import React from "react";
import { spacingClasses, borderClasses, breakpointClasses } from "./classes";
import CodeTagComponent from "@components/CodeTags";

const UtilityPresenter = ({name, css, px}) => (
    <div className="d-flex justify-content-between mb-2">
        <CodeTagComponent code={name} type="primary"/>
        <CodeTagComponent code={css} type="secondary"/>
        {px && <span>{px}</span>}
    </div>
);

const BreakpointPresenter = ({name, css, px}) => (
    <div className="d-flex justify-content-between mb-2">
        <CodeTagComponent code={name} type="primary"/>
        <CodeTagComponent code={css} type="secondary"/>
        <CodeTagComponent code={px} type="tertiary"/>
    </div>
);

export const borders = [
{
    id: "borders",
    title: "Border",
    subtitle: "Gives borders to an element.",
    content: <>
        {borderClasses.map((rule) => (
            <UtilityPresenter name={rule.name} css={rule.css}/>
        ))}
    </>
}]

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
            {breakpointClasses.map((rule) => (
                <BreakpointPresenter name={rule.name} css={rule.css} px={rule.px}/>
            ))}
        </>
    }
]

export const spacings = [
    {
        id: "margins",
        title: "Margin",
        subtitle: "For seperating elements.",
        content: <>
            {spacingClasses.margins.map((rule) => (
            <UtilityPresenter name={rule.name} css={rule.css} px={rule.px}/>
        ))}
        </>
    },
    {
        id: "paddings",
        title: "Padding",
        subtitle: "Give the element some space.",
        content: <>
            {spacingClasses.paddings.map((rule) => (
            <UtilityPresenter name={rule.name} css={rule.css} px={rule.px}/>
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
            <div className="col-12 text-default bg-brand p-1">.bg-brand</div>
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