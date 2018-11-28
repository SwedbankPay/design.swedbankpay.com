import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Attribute, Property } from "#";
import Button from "@/Button";

const BASENAME = process.env.basename;

const OurFavicon = () => (
    <>
        <h2 id="our-favicon">Our favicon</h2>
        <p>Our favicon...</p>
        <ComponentPreview language="html" showCasePanel>
            <img src={`${BASENAME}icons/android-chrome-96x96.png`} alt="PayEx favicon"/>
        </ComponentPreview>
    </>
);

const Usage = () => (
    <>
        <h2 id="usage">Usage</h2>
        <p>To use our favicons download the zip-file below and extract it to the root of your build-folder. Insert the code below in the <PrismCode className="language-html">{"<head>"}</PrismCode> tag of your html documents and you are ready to go.</p>
        <p>You should also rename the <Attribute name="content" /> of the <Attribute value="apple-mobile-web-app-title" /> and <Attribute value="application-name" /> <PrismCode className="language-html">{"<meta>"}</PrismCode> tags to reflect the title of your project. Make sure to also do this in the <Property value="manifest.json" /> file in the icons folder.</p>
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
            <meta name="apple-mobile-web-app-title" content="PayEx App" />
            <meta name="application-name" content="PayEx App" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-TileColor" content="#000" />
            <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="theme-color" content="#000" />
        </ComponentPreview>
    </>
);

const Favicons = () => (
    <DocContainer docToc>
        <p className="lead">The PayEx favicon...</p>
        <OurFavicon />
        <Usage />
    </DocContainer>
);

export default Favicons;

/* For testing */
export { OurFavicon, Usage };
