import React from "react";
import { DocContainer } from "@docutils";

import { imageMisuses } from "./constants";

const basename = process.env.basename;
const brandTitle = process.env.brandTitle;

const ImageLibrary = () => (
    <section>
        <h2 id="image-library">Image library</h2>
        <p>All images displayed in a {brandTitle} interface should be from the {brandTitle} Image library. Note that the images only can be used in {brandTitle} productions. If you need access to the library, contact current Head of Marketing. </p>

        {brandTitle === "Swedbank Pay" &&
            <a href="https://payex.pickit.com/" target="_blank" rel="noopener noreferrer" className="icon-link d-block d-flex"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Visit the Swedbank Pay Image Library</span></a>
        }
        <img src={`${basename}img/documentation/imagery/image-group.svg`} className="w-100" alt="collection of images"/>

        <h3>Finding the right images</h3>
        <p>There are several images to choose from when working with {brandTitle} products. Because {brandTitle} is a payment service for all, it’s extra important to think about diversity when picking images for a product. To choose a great image, reflect over the context you’re bringing the image into and check if and where the image is used in other {brandTitle} products. If an images is strongly associated with a certain page or feature, consider using another. We strive to use a variation of the library images while also giving the image a purpose. </p>
        <p><span className="font-weight-bold">TIP</span>: Once you’ve found a picture you think might work, try it in Figma – if it doesn’t work, keep looking and try again!</p>
    </section>
);

const ImageSizes = () => (
    <section>
        <h2 id="image-sizes">Image sizes</h2>
        <p>Once you’ve found good imagery for your website, ask yourself “Are these images the right size for where I want them on my website?” Investigate what image sizes that is required for your interface, to ensure the pictures look of high quality and aren’t pixelated or stretched.</p>
        <p>Avoid using extremely small images in places where a larger image is needed, e.g. the main banner on a landing page, as this can cause them to look blurry, out of focus, and may cut off a large part of the image. Also be careful when using extremely large images. Only small images where a smaller image is required, e.g. your sector images, as this will drastically affect page loading speed. The optimum size for page loading time is less than 2 MB. </p>
        <p>Finally, don’t distort or wrap the images in any way.</p>
    </section>
);

const FocalPoints = () => (
    <section>
        <h2 id="focal-points">Focal points and angles</h2>
        <p>As designers and developer we have the power and responsibility to influence users behavior. In our products we want to use images not only in a decorative way but also to guide user, pointing them directly towards particular messaging or call-to-actions. And using lines and angles, we can guide the eyes of the user.</p>
        <p>Choose images with a strong focal point for the products main banner – this is the first part of your product users will see, so the imagery should be powerful and relevant to your site. The person looking to the right in this photo (see Figure 1) guides the eye towards to the content to the right of the image.</p>

        <div className="d-flex flex-column align-items-center">
            <img src={`${basename}img/documentation/imagery/women-on-bus.svg`} className="w-100" alt="A woman with headphones sitting on a bus looking out through the window to the right"/>
            <span className="caption-text"><span className="font-weight-bold">Figure 1.</span> A woman with headphones sitting on a bus looking out through the window to the right.</span>
        </div>

        <h3>Text on images</h3>
        <p>Using text on images is tricky from several point of views. First of all, the text has to be visible on the images. We recommend you to NOT use text on images if you feel the slightest insecure about if the text is readable or not. </p>
        <div className="slab slab-plain slab-border-error">
            <h3>Don´t</h3>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <img src={`${basename}img/documentation/imagery/dont1.png`} alt="Example of text over faces" className="img-fluid"/>
                    <h4>Cover focal point</h4>
                    <p>Do not change the hue of the images. </p>
                </div>
                <div className="col-12 col-sm-6">
                    <img src={`${basename}img/documentation/imagery/dont2.png`} alt="Example of text over faces" className="img-fluid"/>
                    <h4>Use unaccessible text colors</h4>
                    <p>Do not use light text colors on light backgrounds and vice versa.</p>
                </div>
            </div>
        </div>
    </section>
);

const UsingImagery = () => (
    <section>
        <h2 id="using-imagery">Using imagery in creative ways</h2>
        <p>We use images in many different ways. An image can be used to brighten up interfaces, break up heavy text and also to tell a story of our company, values, and/or target audience. While it’s great to break up text with imagery, don’t over do it! We don’t want the page to read disjointed or the message to be diluted – it’s a fine balance.</p>
        <div className="slab slab-plain slab-border-error">
            <h3>Don´t</h3>
            <div className="row">
                {imageMisuses.map(({ src, style, title, description }) => (
                    <div key={src} className="col-sm-6 col-12">
                        <div className="imagery-misuse-donts-img">
                            <img src={`${basename}${src}`} className={style} alt=""/>
                        </div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Imagery = () => (
    <DocContainer>
        <p className="lead">
        Images are commercial and should be used as decoration to make the interface eye catching and the content feel easy and uncomplicated. In imagery we use clean and simple compositions with focus on one situation or action. This creates focus, calmness and simplicity.
        </p>
        <ImageLibrary />
        <ImageSizes />
        <FocalPoints />
        <UsingImagery />
    </DocContainer>
);

export default Imagery;

export { ImageLibrary, ImageSizes, FocalPoints, UsingImagery };
