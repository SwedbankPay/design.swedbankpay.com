import React from "react";

import { DocContainer } from "@docutils";
import DisplayColor from "~/src/App/components/DisplayColor";
import * as sbColors from "./swedbankpay-colors";
import * as pxColors from "./payex-colors";

const brand = process.env.brand;
const basename = process.env.basename;

const Lead = () => (
    <section>
        <p className="lead">To give a unified appearance and effectively create visual recognition, the communication color of Swedbank Pay is yellow. Yellow is an energetic and vibrant color that matches the brand of Swedbank Pay. In complement to this, Swedbank Pay uses a selection of colors from Swedbank’s color palette.</p>
        <div className="d-flex flex-column align-items-center mt-5">
            <img src={`${basename}img/documentation/colors/color-palette.png`} className="w-100" alt="The Swedbank Pay color palette" />
            <span className="caption-text"><span className="font-weight-bold">Figure 1.</span> The Swedbank Pay color palette</span>
        </div>
    </section>
);

const CommunicationColors = () => (
    <section>
        <h2 id="communication-colors">Communication colors</h2>
        <p>Yellow is used on backgrounds, in main graphical elements and on underlines for highlighting relevant parts of a message. When the yellow is used as a background choose the white text version of the logotype.</p>
        <div className="color-group communication-colors justify-content-between">
            {sbColors.communicationColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const TextColors = () => (
    <section>
        <h2 id="text-colors">Text colors</h2>
        <p>Brown is our primary text color that should be used for all text besides link and text on dark backgrounds and images. For links, use turquoise and for dark backgrounds/images use white. Gray is used for smaller text that has to be presented in the interface but we don’t want to be the primary focus. </p>
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
        <p>Apricot is our primary background color. Light gray and light turquoise are secondary. </p>
        <div className="color-group">
            {sbColors.backgroundColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const ButtonColors = () => (
    <section>
        <h2 id="buttons-colors">Button colors</h2>
        <p>Our primary buttons are yellow and our secondary buttons are brown. Go to Buttons to see and interact with all buttons. </p>
        <div className="color-group">
            {sbColors.buttonColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const BrownScaleColors = () => (
    <section>
        <h2 id="brown-scale-colors">Brown scale colors</h2>
        <p>The brown scale colors are primarily used for borders and backgrounds. These colors cannot be used as text colors. </p>
        <div className="color-group">
            {sbColors.brownScaleColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const ComplementaryColors = () => (
    <section>
        <h2 id="complementary-colors">Complementary colors</h2>
        <p>Can be used for decorative elements in combination with corresponding background colors. These colors cannot be used as text colors. </p>
        <div className="color-group">
            {sbColors.complementaryColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const SystemColors = () => (
    <section>
        <h2 id="system-colors">System colors</h2>
        <p>We have four primary system colors (red, blue, green, and yellow) which all have a lighter complementary version as well. </p>
        <div className="color-group">
            {sbColors.systemColors.map((color, i) => (
                <DisplayColor key={i} {...color}/>
            ))}
        </div>
    </section>
);

const GrayScaleColors = () => (
    <section>
        <h2 id="gray-scale-colors">Gray scale colors</h2>
        <div className="color-group">
            {sbColors.grayScaleColors.map((color, i) => (
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

const Color = () => (
    <>
        {brand === "swedbankpay" &&
            <DocContainer>
                <Lead />
                {/* <CommunicationColors />
                 <TextColors />
                <BackgroundColors />
                <ButtonColors />
                <BrownScaleColors />
<ComplementaryColors />*/}
                <SystemColors />
                {/* <GrayScaleColors />*/}
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

export { Lead, CommunicationColors, TextColors, BackgroundColors, ButtonColors, BrownScaleColors, ComplementaryColors, SystemColors, GrayScaleColors, MainColors };
