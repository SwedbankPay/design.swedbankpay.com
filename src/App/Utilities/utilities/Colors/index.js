import React from "react";
import Alert from "@components/Alert";
import { ComponentPreview, DocContainer } from "@docutils";

const backgroundColors = ["brand", "primary", "secondary", "tertiary", "quaternary", "danger", "warning", "success", "neutral"];
const textColors = ["default", "muted", "white", "danger", "warning", "neutral", "success"];

const TextColors = () => (
    <>
        <h2 id="text-colors">Text colors</h2>
        <p>To set the color of a text, use any of the following utility classes.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            {textColors.map((color, i) => {
                if (color === "white") {
                    return (<p key={i + color} className={`text-${color} text-dark-background p-2`}>.text-{color}</p>);
                } else {
                    return (<p key={i + color} className={`text-${color} p-2`}>.text-{color}</p>);
                }
            })}

        </ComponentPreview>
    </>
);

const BackgroundColors = () => (
    <>
        <h2 id="background-colors">Background colors</h2>
        <p>To alter the background-color of an element, use any of the following utility classes.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container">
                <div className="row">
                    {backgroundColors.map((color, i) => <div key={i + color} className={`col-12 text-default bg-${color} p-3`}>.bg-{color}</div>)}
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Colors = () => (
    <DocContainer>
        <Alert type="danger" icon="error" text={<p><b>To be removed:</b> This documentation page will be removed.</p>}/>
        <p className="lead">We have a few color utility classes. For more information about our colors refer to the <a href="../identity/color">Color section</a> under Identity.</p>
        <TextColors />
        <BackgroundColors />
    </DocContainer>
);

export default Colors;

/* For testing */
export { TextColors, BackgroundColors };
