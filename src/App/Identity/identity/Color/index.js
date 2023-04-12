import React from "react";

import { DocContainer } from "@docutils";
import DisplayColor from "~/src/App/components/DisplayColor";
import * as sbColors from "./swedbankpay-colors";
import * as pxColors from "./payex-colors";

const brand = process.env.brand;
const basename = process.env.basename;

const Lead = () => (
    <section>
        <p className="lead">The primary color of Swedbank Pay is yellow, it is used to give a unified appearance and create visual recognition. Yellow is an energetic and vibrant color that matches the brand of Swedbank Pay. In complement to this, Swedbank Pay uses a selection of colors from Swedbank´s color palette.</p>
        <div className="d-flex flex-column align-items-center mt-5">
            <img src={`${basename}img/documentation/colors/color-palette.png`} className="w-100" alt="" />
            <span className="caption-text"><span className="font-weight-bold">Figure 1.</span>A selection of colors from the Swedbank Pay color palette.</span>
        </div>
    </section>
);

const ColorContrast = () => (
    <section>
        <h2 id="color-contrast">Color contrast</h2>
        <p>It is important to maintain sufficient color contrast in our products to meet accessability requirements. For normal text content this means a 4.5:1 ratio against background and for graphics and large text (18 px, or bold 14 px) a 3:1 ratio against background. To help you to make informed color decisions, we showcase the contrast ratio of each color to our default text (brown) and background (white) color here. </p>
        <div className="d-flex flex-row justify-content-around color-contrast-section">
            <span className="d-flex"><i className="material-icons check mr-1" aria-hidden="true">check_circle</i><b>Pass (&ge; 4.5:1)</b></span>
            <span className="d-flex"><i className="material-icons warning mr-1" aria-hidden="true">warning</i><b>OK for graphics or large text (&ge; 3:1)</b></span>
            <span className="d-flex"><i className="material-icons cancel mr-1" aria-hidden="true">error</i><b>Fail</b></span>
        </div>
    </section>
);

const BrandColors = () => (
    <section>
        <h2 id="brand-colors">Brand colors</h2>
        <FunctionalColors />
        <SBTextColors/>
        <SBCommunicationColors />
    </section>
);

const SBTextColors = () => (
    <section>
        <h3 id="text-colors">Text colors</h3>
        <p>Brown-solid is our default text color that should be used for all normal text besides links and text on dark backgrounds or images. For links, use turquoise and for text on dark backgrounds or images use white. A lighter brown is used as a muted text color for smaller or less important text that shouldn&quot;t be the primary focus.</p>
        <div className="color-group">
            {sbColors.textColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const BackgroundColors = () => (
    <section>
        <h2 id="background-colors">Background colors</h2>
        <p>To maintain an open and welcoming experience we mostly use no background color, that is white. Our background colors have a functional role and are used to organize, structure or highlight a section. Apricot is our primary background color, gray and light turquoise are complementary. </p>
        <div className="color-group">
            {sbColors.backgroundColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const SystemColors = () => (
    <section>
        <h2 id="system-colors">System colors</h2>
        <p>Our system colors include error, warning, success and info. These are used on different types of system messages that needs the users attention.</p>
        <div className="color-group">
            {sbColors.systemColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const MainColors = () => (
    <section>
        <h2 id="main-colors">Primary and secondary colors</h2>
        <p>The primary color in our palette is green. The green color is a strong carrier of identity and a means of creating immediate recognition.</p>
        <div className="color-group flex-wrap">
            {pxColors.mainText.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const PayexComplementaryColors = () => (
    <section>
        <h2 id="complementary-colors">Complementary colors</h2>
        <p>As a complement to our primary and secondary colors, we have three more colors. You can use them when you need to accentuate something eg., splashes, diagrams and tables. They should be used very sparingly and should never take over the overall impression.</p>
        <div className="color-group">
            {pxColors.complementaryColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const PayexButtonColors = () => (
    <section>
        <h2 id="buttons-colors">Button colors</h2>
        <p>Our primary buttons are green and our secondary buttons are dark grey. Go to Buttons to see and interact with all buttons. </p>
        <div className="color-group">
            {pxColors.buttonColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const PayexBackgroundColors = () => (
    <section>
        <h2 id="background-colors">Background colors</h2>
        <p>Used primarily as background when we communicate the PayEx Ledger & Factoring brand. When the light green color is to be printed with PMS color, use 12% hue of PayEx green (PMS 354 U / C)</p>
        <div className="color-group">
            {pxColors.backgroundColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const PayexSystemColors = () => (
    <section>
        <h2 id="system-colors">System Colors</h2>
        <p>We have four primary system colors (red, blue, green, and orange) which all have a lighter complementary version as well. </p>
        <div className="color-group">
            {pxColors.systemColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const FunctionalColors = () => (
    <>
        <h3 id="functional-colors">Functional colors</h3>
        <p>Our functional brand colors can be used in graphical elements to separate and emphasise multiple interactions. E.g. primary, secondary and tertiary buttons.</p>
        <div className="color-group">
            {sbColors.functionalColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </>
);

const SBCommunicationColors = () => (
    <>
        <h3>Communication colors</h3>
        <p>Our complemntary brand colors can be used in graphical elements to separate and emphasize different messages.</p>
        <div className="color-group">
            {sbColors.brandColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
        <SBComplementaryColors />
    </>
);

const SBComplementaryColors = () => (
    <div className="color-group">
        {sbColors.complementaryColors.map((color, i) => (
            <DisplayColor key={i} {...color}/>
        ))}
    </div>
);

const Color = () => (
    <>
        {brand === "swedbankpay" &&
            <DocContainer>
                <Lead />
                <ColorContrast/>
                <BrandColors/>
                <BackgroundColors/>
                <SystemColors/>
            </DocContainer>
        }
        {brand === "payex" &&
            <DocContainer>
                <MainColors />
                <PayexComplementaryColors />
                <PayexButtonColors />
                <PayexBackgroundColors />
                <PayexSystemColors />
            </DocContainer>
        }
    </>
);

export default Color;

export { Lead, ColorContrast, BrandColors, SBTextColors as TextColors, BackgroundColors, SystemColors, MainColors };
