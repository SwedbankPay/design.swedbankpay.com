import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";
import { logoBlack, logoWhite } from "./constants";
import LogotypeComponent from "@components/Logotype";

const basename = process.env.basename;
const brand = process.env.brand;

const LogoBlack = () => (
    <>
        <h2 id="logo-black">Black text logotype</h2>
        <p>For good visibility the black text logo should be used on all light/fair backgrounds.</p>
        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={logoBlack} />
    </>
);

const LogoWhite = () => (
    <>
        <h2 id="logo-white">White text logotype</h2>
        <p>The white text logo is used on Swedbank Pay’s primary color (#yellow) and dark backgrounds.</p>
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
        <img src={`${basename}img/documentation/logotype/icon-table.png`} className="logotype-icon-table"/>

        <div className="d-md-flex mt-5">
            <img src={`${basename}img/documentation/logotype/vertical-measure.png`} className="logotype-vertical-measure mr-5"/>
            <img src={`${basename}img/documentation/logotype/horizontal-measure.png`} className="logotype-horizontal-measure mt-5"/>
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
                                <img src={`${basename}img/documentation/logotype/old_logo.png`} className="h-100"/>
                            </div>
                            <h4>Use old version</h4>
                            <p>Do not use the old version of the logo – darker and more detailed coin.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/resize_logo.png`} className="h-100"/>
                            </div>
                            <h4>Resize</h4>
                            <p>Do not distort or wrap the logo in any way.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/pay_text.png`} className="h-50"/>
                            </div>
                            <h4>Demount</h4>
                            <p>Do not use the wordmark without the icon (the coin).</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/swedbank_logo.png`} className="h-75"/>
                            </div>
                            <h4>Use Swedbank logo</h4>
                            <p>Do not use the Swedbank logo instead or in combination with the Swedbank Pay logo.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/rotated_logo.png`} className="h-100"/>
                            </div>
                            <h4>Rotate</h4>
                            <p>Do not rotate the logo.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/green_logo.png`} className="h-100"/>
                            </div>
                            <h4>Alter color</h4>
                            <p>Do not change the logo colour or tone in any way.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/black_and_white_logo.png`} className="h-100"/>
                            </div>
                            <h4>Make B/W</h4>
                            <p>Do not use a change the hue of the logo.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/shadowed_logo.png`} className="h-100"/>
                            </div>
                            <h4>Add effects</h4>
                            <p>Do not add any shadows or other effects to the logo.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/changed_wordmark.png`} className="h-100"/>
                            </div>
                            <h4>Change wordmark</h4>
                            <p>Do not manipulate or replace the wordmark.</p>
                        </div>
                    </div>
                    <div className={misusColClass}>
                        <div className="logotype-misuse-donts">
                            <div className="logotype-misuse-donts-img">
                                <img src={`${basename}img/documentation/logotype/moved_wordmark.png`} className="h-50"/>
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
        Different versions of the logotype is used depending on what colour of the background it is placed on. In situations where both the black and white version can be used, the recommendation is to use the white version as it gives a lighter and more friendly impression.
        </p>
        <p>
        When placing the logotype on backgrounds, it may only be placed no an area that has low level of detail and is naturally light or dark. Only use images from the Swedbank Pay image library. Use the white text version on dark images, and the black text version on light images.
        </p>
        <p>When placing the logotype on our primary yellow background, always use the white text version. Make sure to keep the logotype above the minimum size recommendation for legibility.</p>

        <div className="flex">
            <img src={`${basename}img/documentation/logotype/bg-apricot.png`} className="w-25 p-3"/>
            <img src={`${basename}img/documentation/logotype/bg-dark-img.png`} className="w-25 p-3"/>
            <img src={`${basename}img/documentation/logotype/bg-light-img.png`} className="w-25 p-3"/>
            <img src={`${basename}img/documentation/logotype/bg-yellow.png`} className="w-25 p-3"/>
        </div>
    </>
);

const HorizontalLogo = () => (
    <>
        <h2 id="horizontal-logo">Horizontal logo</h2>
        <p></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src={`${basename}img/payex-logo.svg`} alt="PayEx horizontal logo"/>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src={`${basename}img/payex-logo.png`} alt="PayEx horizontal logo"/>
        </ComponentPreview>
    </>
);

const Favicon = () => (
    <>
        <h2 id="our-favicon">Favicon</h2>
        {brand === "payex"
            ? <ComponentPreview language="html" showCasePanel>
                <img src={`${basename}icons/android-chrome-96x96.png`} alt="PayEx favicon"/>
            </ComponentPreview>
            : <div className="slab slab-plain pb-0 pt-4 d-flex justify-content-center">
                <img src={`${basename}img/documentation/logotype/favicon-slab-example.png`} alt="Favicon example"/>
            </div>
        }

        <p>To add a favicon to your application, download the favicon assets and extract it to the root of your build-folder. Insert the code below in the <CodeTags type="primary" code={"<head>"} /> tag of your HTML documents and you are ready to go.</p>
        <p>You should also rename the <CodeTags type="secondary" code="content" /> of
        the <CodeTags type="secondary" code="apple-mobile-web-app-title" /> and <CodeTags type="secondary" code="application-name" /> <CodeTags type="primary" code={"<meta>"} /> tags
        to reflect the title of your project. Make sure to also do this in the <CodeTags type="secondary" code="manifest.json" /> file in the icons folder.</p>

        {brand === "payex"
            ? <a className="btn btn-primary" href={`${basename}release/icons.zip`}>
                <i className="material-icons" aria-hidden="true">file_download</i>
                <span>Download Favicons</span>
            </a>
            : <a href={`${basename}release/icons.zip`} className="icon-link">
                <i className="material-icons" aria-hidden="true">download</i>
                <span className="ml-2">Download Swedbank Pay favicon assets</span>
            </a>
        }
        <ComponentPreview language="html" codeFigure>
            <link rel="apple-touch-icon" sizes="114x114" href={`${basename}/icons/apple-touch-icon-114x114.png`} />
            <link rel="apple-touch-icon" sizes="120x120" href={`${basename}/icons/apple-touch-icon-120x120.png`} />
            <link rel="apple-touch-icon" sizes="144x144" href={`${basename}/icons/apple-touch-icon-144x144.png`} />
            <link rel="apple-touch-icon" sizes="152x152" href={`${basename}/icons/apple-touch-icon-152x152.png`} />
            <link rel="apple-touch-icon" sizes="180x180" href={`${basename}/icons/apple-touch-icon-180x180.png`} />
            <link rel="apple-touch-icon" sizes="57x57" href={`${basename}/icons/apple-touch-icon-57x57.png`} />
            <link rel="apple-touch-icon" sizes="60x60" href={`${basename}/icons/apple-touch-icon-60x60.png`} />
            <link rel="apple-touch-icon" sizes="72x72" href={`${basename}/icons/apple-touch-icon-72x72.png`} />
            <link rel="apple-touch-icon" sizes="76x76" href={`${basename}/icons/apple-touch-icon-76x76.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href={`${basename}/icons/apple-touch-startup-image-320x460.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href={`${basename}/icons/apple-touch-startup-image-640x920.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href={`${basename}/icons/apple-touch-startup-image-640x1096.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href={`${basename}/icons/apple-touch-startup-image-750x1294.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href={`${basename}/icons/apple-touch-startup-image-1182x2208.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href={`${basename}/icons/apple-touch-startup-image-1242x2148.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href={`${basename}/icons/apple-touch-startup-image-748x1024.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href={`${basename}/icons/apple-touch-startup-image-1496x2048.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href={`${basename}/icons/apple-touch-startup-image-768x1004.png`} />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href={`${basename}/icons/apple-touch-startup-image-1536x2008.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${basename}/icons/favicon-16x16.png`} />
            <link rel="icon" type="image/png" sizes="228x228" href={`${basename}/icons/coast-228x228.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${basename}/icons/favicon-32x32.png`} />
            <link rel="manifest" href={`${basename}/icons/manifest.json`} />
            <link rel="shortcut icon" href={`${basename}/icons/favicon.ico`} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content={`${process.env.brandTitle} App`} />
            <meta name="application-name" content={`${process.env.brandTitle} App`} />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-TileColor" content="#000" />
            <meta name="msapplication-TileImage" content={`${basename}/icons/mstile-144x144.png`} />
            <meta name="msapplication-config" content={`${basename}/icons/browserconfig.xml`} />
            <meta name="theme-color" content="#000" />
        </ComponentPreview>
    </>
);

const Overview = () => (
    <section>
        <h2 className="overview">Overview</h2>
        <div className="d-flex justify-content-between logotype-display mb-4">
            <div className="background-light">
                <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-v.svg`} type="vertical" alt="Swedbank Pay Vertical logo" size="md"/>
            </div>
            <div className="background-primary">
                <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-v-neg.svg`} type="vertical" alt="Swedbank Pay Vertical logo" size="md"/>
            </div>
            <div className="background-light">
                <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-h.svg`} type="horizontal" alt="Swedbank Pay Horizontal logo" size="md"/>
            </div>
            <div className="background-primary">
                <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-h-neg.svg`} type="horizontal" alt="Swedbank Pay Horizontal logo" size="md"/>
            </div>
        </div>
        <a href={`${basename}release/logos/Swedbank_Pay_Vector.zip`} className="icon-link mb-4">
            <i className="material-icons" aria-hidden="true">download</i>
            <span className="ml-2">Download Swedbank Pay logotype assets</span>
        </a>

        <p>The logotype is vectorized and all versions are provided as <CodeTags type="secondary" code=".svg" /> files, it is also available in <CodeTags type="secondary" code=".png" /> for contexts that might not support vectorized files. The sizes described are recommended sizes and if there is a need to scale the logotype, make sure the coin diameter is no smaller than at least 24 px and a multiple of 8.</p>
    </section>
);

const Logotype = () => (
    <>
        {brand === "swedbankpay" &&
            <DocContainer docToc>
                <section id="logotype-doc">
                    <p className="lead">
                    The Swedbank Pay logotype is available in a vertical and horizontal version, the vertical logo is primary and the one that will build recognition. The logotype exist in two colors – a black text logo and a white text logo. They are used depending on what colour of the background the logo is placed on.
                    </p>
                    <Overview />
                    <LogoBlack />
                    <LogoWhite />
                    <SpacingZone />
                    <MisuseLogo />
                    <LogotypeBackgrounds />
                    <Favicon />
                </section>
            </DocContainer>
        }
        {brand === "payex" &&
            <DocContainer docToc>
                <HorizontalLogo />
                <Favicon />
            </DocContainer>
        }
    </>
);

export default Logotype;

/* For testing */
export { Overview, HorizontalLogo, LogoBlack, LogoWhite, SpacingZone, MisuseLogo, LogotypeBackgrounds, Favicon };
