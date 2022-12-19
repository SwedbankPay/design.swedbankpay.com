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
            {breakpointClasses.map((rule) => (
                <UtilityPresenter name={rule.name} css={rule.css} px={rule.px}/>
            ))}
        </>
    }]
