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
        <h2 id="main-colors">Main colors</h2>
        <p>Our main color palette.</p>
        <div className="color-group flex-wrap">
            {pxColors.mainText.map((color, i) => (
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
                <CommunicationColors />
                <TextColors />
                <BackgroundColors />
                <ButtonColors />
                <BrownScaleColors />
                <ComplementaryColors />
                <SystemColors />
                <GrayScaleColors />
            </DocContainer>
        }
        {brand === "payex" &&
            <DocContainer>
                <MainColors />
            </DocContainer>
        }
    </>
);

export default Color;

export { Lead, CommunicationColors, TextColors, BackgroundColors, ButtonColors, BrownScaleColors, ComplementaryColors, SystemColors, GrayScaleColors, MainColors };
