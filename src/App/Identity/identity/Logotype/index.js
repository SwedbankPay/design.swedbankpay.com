import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Button from "@components/Button";
import CodeTags from "@components/CodeTags";
import { logoBlack, logoWhite } from "./constants";

const BASENAME = process.env.basename;
const brand = process.env.brand;

const LogoBlack = () => (
    <>
        <h2 id="logo-black">Black text logotype</h2>
        <p>
            The vertical logo is primary – the one that will build recognition.
            Always consider the vertical (primary) logo first before using the horizontal (secondary) logo.
        </p>
        <p>For good visibility the black text logo should be used on all light/fair backgrounds.</p>
        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={logoBlack} />
    </>
);

const LogoWhite = () => (
    <>
        <h2 id="logo-white">White text logotype</h2>
        <p>
            The white text logo is used on Swedbank Pay’s primary color ({brand === "swedbankpay" ? "Yellow" : "Green"}) and dark backgrounds.
            In situations where both the black and white version can be used,
            the recommendation is to use the white version as it gives a lighter and more friendly impression.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={logoWhite} />
    </>
);

const SpacingZone = () => (
    <>
        <h2 id="spacing-zone">Spacing zone</h2>
        <p>
            The spacing zone is the spacing around the logotype that prevents the logo from interfering with other UI elements.
            The logotype’s spacing zone should always be at least 30% of the coin’s diameter and then rounded up to the closest multiple of 8 (marked as X in the diagram).
        </p>
        <h3>Measurement example (vertical logotype)</h3>
        <p>X = spacing zone</p>
        <img src={`${BASENAME}img/documentation/logotype/icon-table.png`} className="logotype-icon-table"/>

        <div className="d-md-flex mt-5">
            <img src={`${BASENAME}img/documentation/logotype/vertical-measure.png`} className="logotype-vertical-measure mr-5"/>
            <img src={`${BASENAME}img/documentation/logotype/horizontal-measure.png`} className="logotype-horizontal-measure mt-5"/>
        </div>
    </>
);

const MisuseLogo = () => {
    const misusColClass = "col-lg-3 col-md-4 col-sm-6";

    return (
        <>
            <h2 id="misuse-logo">Misuse of the logotype</h2>
            <p>
                The appearance of the logo should always remain consistent. It’s important that the logo isn’t misinterpreted, modified, or added to.
                No attempt should be made to alter the logo in any way. The orientation,
                colour and composition of the logo should remain as indicated in this designguide without exceptions.
            </p>

            <div className="slab slab-plain slab-border-error">
                <h4>{"Don't"}</h4>
                <div className="row">
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/old_logo.png`} className="h-100"/>
                            </div>
                            <h4>Use old version</h4>
                            <p>Do not use the old version of the logo – darker and more detailed coin.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/resize_logo.png`} className="h-100"/>
                            </div>
                            <h4>Resize</h4>
                            <p>Do not distort or wrap the logo in any way.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/pay_text.png`} className="h-50"/>
                            </div>
                            <h4>Demount</h4>
                            <p>Do not use the wordmark without the icon (the coin).</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/swedbank_logo.png`} className="h-75"/>
                            </div>
                            <h4>Use Swedbank logo</h4>
                            <p>Do not use the Swedbank logo instead or in combination with the Swedbank Pay logo.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/rotated_logo.png`} className="h-100"/>
                            </div>
                            <h4>Rotate</h4>
                            <p>Do not rotate the logo.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/green_logo.png`} className="h-100"/>
                            </div>
                            <h4>Alter color</h4>
                            <p>Do not change the logo colour or tone in any way.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/black_and_white_logo.png`} className="h-100"/>
                            </div>
                            <h4>Make B/W</h4>
                            <p>Do not use a change the hue of the logo.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/shadowed_logo.png`} className="h-100"/>
                            </div>
                            <h4>Add effects</h4>
                            <p>Do not add any shadows or other effects to the logo.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/changed_wordmark.png`} className="h-100"/>
                            </div>
                            <h4>Change wordmark</h4>
                            <p>Do not manipulate or replace the wordmark.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${BASENAME}img/documentation/logotype/moved_wordmark.png`} className="h-50"/>
                            </div>
                            <h4>Move wordmark</h4>
                            <p>Do not move the workmark from its original position.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const LogotypeBackgrounds = () => (
    <>
        <h2 id="logotype-backgrounds">Logotype and backgrounds</h2>
        <p>
            Different versions of the logotype are used depending on what colour of the background is placed on.
            In situations where both the black and white version can be used,
            the recommendation is to use the white version as it gives a lighter and more friendly impression.
        </p>
        <p>
            When placing the logotype on backgrounds, it may only be placed no an area that has low level of detail and is naturally light or dark.
            Only use images from the Swedbank Pay image library. Use the white text version on dark images, and the black text version on light images. {"\n"}
        </p>
        <p>
            When placing the logotype on our primary yellow background, always use the white text version.
            Make sure to keep the logotype above the minimum size recommendation for legibility.
        </p>

        <div className="flex">
            <img src={`${BASENAME}img/documentation/logotype/bg-apricot.png`} className="w-25 p-3"/>
            <img src={`${BASENAME}img/documentation/logotype/bg-dark-img.png`} className="w-25 p-3"/>
            <img src={`${BASENAME}img/documentation/logotype/bg-light-img.png`} className="w-25 p-3"/>
            <img src={`${BASENAME}img/documentation/logotype/bg-yellow.png`} className="w-25 p-3"/>
        </div>
    </>
);

const Favicon = () => (
    <>
        <h2 id="favicon">Favicon</h2>
        <div className="d-flex justify-content-between">
            <span>
                The favicon should ONLY be used in following contexts:
                <ul className="list list-bullet">
                    <li>Shortcut icon</li>
                    <li>Website icon</li>
                    <li>Tab icon</li>
                    <li>URL icon</li>
                    <li>Bookmark icon</li>
                </ul>
            </span>
            <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                <img src={`${BASENAME}img/documentation/logotype/favicon_example.png`} className="w-25 mb-2"/>
                <p>Swedbank Pay favicon.</p>
            </div>
        </div>
    </>
);

const Download = () => (
    <>
        <h2 id="download" className="invisible">Download</h2>
        <div className="slab slab-primary p-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4">Download all logotypes</h1>
            <Button type="primary" icon="arrow_downward" href={`${BASENAME}release/logos/Swedbank_Pay_Vector.zip`}
                label="Download"
            />
        </div>
    </>
);

const HorizontalLogo = () => (
    <>
        <h2 id="horizontal-logo">Horizontal logo</h2>
        <p></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src={`${BASENAME}img/payex-logo.svg`} alt="PayEx horizontal logo"/>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src={`${BASENAME}img/payex-logo.png`} alt="PayEx horizontal logo"/>
        </ComponentPreview>
    </>
);

const OurFavicon = () => (
    <>
        <h2 id="our-favicon">Our favicon</h2>
        <ComponentPreview language="html" showCasePanel>
            <img src={`${BASENAME}icons/android-chrome-96x96.png`} alt="PayEx favicon"/>
        </ComponentPreview>
        <p>To use our favicons download the zip-file below and extract it to the root of your build-folder. Insert the code below in the <CodeTags type="primary" code={"<head>"} /> tag of your HTML documents and you are ready to go.</p>
        <p>You should also rename the <CodeTags type="secondary" code="content" /> of
        the <CodeTags type="secondary" code="apple-mobile-web-app-title" /> and <CodeTags type="secondary" code="application-name" /> <CodeTags type="primary" code={"<meta>"} /> tags
        to reflect the title of your project. Make sure to also do this in the <CodeTags type="secondary" code="manifest.json" /> file in the icons folder.</p>
        <Button type="primary" icon="file_download" href={`${BASENAME}release/icons.zip`} label="Download Favicons" />
        <ComponentPreview language="html" codeFigure>
            <link rel="apple-touch-icon" sizes="114x114" href={`${BASENAME}/icons/apple-touch-icon-114x114.png`} />
            <link rel="apple-touch-icon" sizes="120x120" href={`${BASENAME}/icons/apple-touch-icon-120x120.png`} />
            <link rel="apple-touch-icon" sizes="144x144" href={`${BASENAME}/icons/apple-touch-icon-144x144.png`} />
            <link rel="apple-touch-icon" sizes="152x152" href={`${BASENAME}/icons/apple-touch-icon-152x152.png`} />
            <link rel="apple-touch-icon" sizes="180x180" href={`${BASENAME}/icons/apple-touch-icon-180x180.png`} />
            <link rel="apple-touch-icon" sizes="57x57" href={`${BASENAME}/icons/apple-touch-icon-57x57.png`} />
            <link rel="apple-touch-icon" sizes="60x60" href={`${BASENAME}/icons/apple-touch-icon-60x60.png`} />
            <link rel="apple-touch-icon" sizes="72x72" href={`${BASENAME}/icons/apple-touch-icon-72x72.png`} />
            <link rel="apple-touch-icon" sizes="76x76" href={`${BASENAME}/icons/apple-touch-icon-76x76.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href={`${BASENAME}/icons/apple-touch-startup-image-320x460.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href={`${BASENAME}/icons/apple-touch-startup-image-640x920.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href={`${BASENAME}/icons/apple-touch-startup-image-640x1096.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href={`${BASENAME}/icons/apple-touch-startup-image-750x1294.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href={`${BASENAME}/icons/apple-touch-startup-image-1182x2208.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href={`${BASENAME}/icons/apple-touch-startup-image-1242x2148.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href={`${BASENAME}/icons/apple-touch-startup-image-748x1024.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href={`${BASENAME}/icons/apple-touch-startup-image-1496x2048.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href={`${BASENAME}/icons/apple-touch-startup-image-768x1004.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href={`${BASENAME}/icons/apple-touch-startup-image-1536x2008.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${BASENAME}/icons/favicon-16x16.png`} />
            <link rel="icon" type="image/png" sizes="228x228" href={`${BASENAME}/icons/coast-228x228.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${BASENAME}/icons/favicon-32x32.png`} />
            <link rel="manifest" href={`${BASENAME}/icons/manifest.json`} />
            <link rel="shortcut icon" href={`${BASENAME}/icons/favicon.ico`} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Swedbank Pay App" />
            <meta name="application-name" content="Swedbank Pay App" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-TileColor" content="#000" />
            <meta name="msapplication-TileImage" content={`${BASENAME}/icons/mstile-144x144.png`} />
            <meta name="msapplication-config" content={`${BASENAME}/icons/browserconfig.xml`} />
            <meta name="theme-color" content="#000" />
        </ComponentPreview>
    </>
);

const Logotype = () => (
    <>
        {brand === "swedbankpay" &&
            <DocContainer docToc>
                <p className="lead">
                    The Swedbank Pay logotype exist in two versions – a black text logo and a white text logo.
                    They are used depending on what colour of the background the logo is placed on. In situations where both the black and white version can be used,
                    the recommendation is to use the white version as it gives a lighter and more friendly impression.
                </p>
                <p>
                    The logotype is vectorized and all versions are provided as both <CodeTags type="secondary" code=".svg" /> and <CodeTags type="secondary" code=".eps" /> files.
                    The sizes below are recommended sizes and if there is a need to scale the logotype larger,
                    make sure the coin diameter is no smaller than at least 24 px and a multiple of 8.
                </p>
                <LogoBlack />
                <LogoWhite />
                <SpacingZone />
                <MisuseLogo />
                <LogotypeBackgrounds />
                {/* <Favicon /> */}
                <Download />
            </DocContainer>
        }
        {brand === "payex" &&
            <DocContainer docToc>
                <HorizontalLogo />
                <OurFavicon />
            </DocContainer>
        }
    </>
);

export default Logotype;

/* For testing */
export { OurFavicon, HorizontalLogo, Download, LogoBlack, LogoWhite, SpacingZone, MisuseLogo, LogotypeBackgrounds, Favicon };
