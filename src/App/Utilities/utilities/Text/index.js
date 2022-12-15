import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const TextAlignment = () => (
    <>
        <h2 id="text-alignment">Text alignment</h2>
        <p>Easily realign text to components with text alignment classes.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="text-justify">
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
            </p>
        </ComponentPreview>

        <p>For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="text-left">Left aligned text on all viewport sizes.</p>
            <p className="text-center">Center aligned text on all viewport sizes.</p>
            <p className="text-right">Right aligned text on all viewport sizes.</p>
            {"\n\n"}
            <p className="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
            <p className="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
            <p className="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
            <p className="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
            <p className="text-xxl-left">Left aligned text on viewports sized XXL (extra-extra-large) or wider.</p>
        </ComponentPreview>

    </>
);

const TextWrappingAndOverflow = () => (
    <>
        <h2 id="text-wrapping-and-overflow">Text wrapping and overflow</h2>
        <p>Prevent text from wrapping with a <CodeTags type="secondary" code=".text-nowrap" /> class.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="text-nowrap sc-highlight" style={{ width: "8rem" }}>{"\n"}
                This text should overflow the parent.{"\n"}
            </div>
        </ComponentPreview>

        <p>For longer content, you can add a <CodeTags type="secondary" code=".text-truncate" /> class to truncate the text with an ellipsis. <b>Requires</b> display: <CodeTags type="secondary" code="inline-block" /> <b>or</b> <CodeTags type="secondary" code="display: block" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="row">
                <div className="col-3 text-truncate">
                    Cras egestas dolor nec nunc scelerisque tincidunt.
                </div>
            </div>{"\n\n"}

            <span className="d-inline-block text-truncate" style={{ maxWidth: "150px" }}>{"\n"}
                Cras egestas dolor nec nunc scelerisque tincidunt.{"\n"}
            </span>
        </ComponentPreview>
    </>
);

const TextTransform = () => (
    <>
        <h2 id="text-transform">Text transform</h2>
        <p>Transform text in components with text capitalization classes.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="text-lowercase">Lowercased text.</p>
            <p className="text-uppercase">Uppercased text.</p>
            <p className="text-capitalize">CapiTaliZed text.</p>
        </ComponentPreview>
        <p>Note how <CodeTags type="secondary" code=".text-capitalize" /> only changes the first letter of each word, leaving the case of any other letters unaffected.</p>
    </>
);

const FontWeightAndItalics = () => (
    <>
        <h2 id="font-weight-and-italics">Font weight and italics</h2>
        <p>Quickly change the weight (boldness) of text or italicize text.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="font-weight-bold">Bold text.</p>
            <p className="font-weight-normal">Normal weight text.</p>
            <p className="font-weight-light">Light weight text.</p>
            <p className="font-italic">Italic text.</p>
        </ComponentPreview>
    </>
);

const Text = () => (
    <DocContainer>
        <p className="lead">Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.</p>
        <TextAlignment />
        <TextWrappingAndOverflow />
        <TextTransform />
        <FontWeightAndItalics />
    </DocContainer>
);

export default Text;

/* For testing */
export { TextAlignment, TextWrappingAndOverflow, TextTransform, FontWeightAndItalics };
