import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Button from "@components/Button";
import CodeTags from "@components/CodeTags";
import { Overview, Download, Guidelines } from "../../../Resources/resources/logotype";

const BASENAME = process.env.basename;
const brand = process.env.brand;
const { expandable } = window.dg;

const ResourcesLogotype = () => (
    <div className="expandable">
        <button type="button" className="expandable-header" aria-expanded="false" aria-controls="resources-typograpy-body">
            <span className="expandable-headline">Logotype guidelines</span>
            <small className="expandable-subtitle">From <Link to="/res/resources/logotype">logotype in Resources</Link></small>
        </button>
        <div className="expandable-body" id="resources-typography-body">
            <Overview />
            <Download />
            <Guidelines />
        </div>
    </div>
);

const OverviewLogos = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>All logo variations are provided as both <CodeTags type="secondary" code=".svg" /> and <CodeTags type="secondary" code=".png" /> files.</p>
    </>
);

const HorizontalLogo = () => (
    <>
        <h2 id="horizontal-logo">Horizontal logo</h2>
        {brand === "swedbankpay" && <p>The horizontal logo is provided in both positive and negative versions</p>}

        <h3>Positive horizontal logo</h3>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src={`${BASENAME}img/swedbankpay-logo.svg`} alt="Swedbank Pay horizontal logo"/>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src={`${BASENAME}img/swedbankpay-logo.png`} alt="Swedbank Pay horizontal logo"/>
        </ComponentPreview>

        {brand === "swedbankpay" &&
            <>
                <h3>Negative horizontal logo</h3>
                <ComponentPreview language="html" showCasePanel codeFigure negative>
                    <img src={`${BASENAME}img/swedbankpay-logo-neg.svg`} alt="Swedbank Pay negative horizontal logo"/>
                </ComponentPreview>
                <ComponentPreview language="html" showCasePanel codeFigure negative>
                    <img src={`${BASENAME}img/swedbankpay-logo-neg.png`} alt="Swedbank Pay negative horizontal logo"/>
                </ComponentPreview>
            </>
        }
    </>
);

const VerticalLogo = () => (
    <>
        <h2 id="vertical-logo">Vertical logo</h2>
        <p>The vertical logo is provided in both positive and negative versions</p>

        <h3>Positive vertical logo</h3>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src={`${BASENAME}img/swedbankpay-logo-v.svg`} alt="Swedbank Pay vertical logo"/>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src={`${BASENAME}img/swedbankpay-logo-v.png`} alt="Swedbank Pay vertical logo"/>
        </ComponentPreview>

        <h3>Negative vertical logo</h3>
        <ComponentPreview language="html" showCasePanel codeFigure negative>
            <img src={`${BASENAME}img/swedbankpay-logo-v-neg.svg`} alt="Swedbank Pay negative vertical logo"/>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure negative>
            <img src={`${BASENAME}img/swedbankpay-logo-v-neg.png`} alt="Swedbank Pay negative vertical logo"/>
        </ComponentPreview>
    </>
);

const OurFavicon = () => (
    <>
        <h2 id="our-favicon">Our favicon</h2>
        <ComponentPreview language="html" showCasePanel>
            <img src={`${BASENAME}icons/android-chrome-96x96.png`} alt="Swedbank Pay favicon"/>
        </ComponentPreview>
        <p>To use our favicons download the zip-file below and extract it to the root of your build-folder. Insert the code below in the <CodeTags type="primary" code={"<head>"} /> tag of your HTML documents and you are ready to go.</p>
        <p>You should also rename the <CodeTags type="secondary" code="content" /> of
        the <CodeTags type="secondary" code="apple-mobile-web-app-title" /> and <CodeTags type="secondary" code="application-name" /> <CodeTags type="primary" code={"<meta>"} /> tags
        to reflect the title of your project. Make sure to also do this in the <CodeTags type="secondary" code="manifest.json" /> file in the icons folder.</p>
        <Button type="primary" icon="file_download" href={`${BASENAME}release/icons.zip`} label="Download Favicons" />
        <ComponentPreview language="html" codeFigure>
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="/icons/apple-touch-startup-image-320x460.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="/icons/apple-touch-startup-image-640x920.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/icons/apple-touch-startup-image-640x1096.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/icons/apple-touch-startup-image-750x1294.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="/icons/apple-touch-startup-image-1182x2208.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="/icons/apple-touch-startup-image-1242x2148.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="/icons/apple-touch-startup-image-748x1024.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="/icons/apple-touch-startup-image-1496x2048.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="/icons/apple-touch-startup-image-768x1004.png" />
            <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="/icons/apple-touch-startup-image-1536x2008.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="228x228" href="/icons/coast-228x228.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="manifest" href="/icons/manifest.json" />
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Swedbank Pay App" />
            <meta name="application-name" content="Swedbank Pay App" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-TileColor" content="#000" />
            <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="theme-color" content="#000" />
        </ComponentPreview>
    </>
);

const Logos = () => {
    useEffect(() => { expandable.init(); });

    return (
        <DocContainer docToc>
            <h4>
                The vertical version is used as the primary logotype. In situations where both the negative or positive version can be used,
                the recommendation is to use the negative version as it gives a lighter and more friendly impression.
            </h4>
            <ResourcesLogotype />
            <OverviewLogos />
            <HorizontalLogo />
            {brand === "swedbankpay" && <VerticalLogo />}
            <OurFavicon />
        </DocContainer>
    );
};

export default Logos;

/* For testing */
export { OurFavicon, ResourcesLogotype, OverviewLogos, HorizontalLogo, VerticalLogo };
