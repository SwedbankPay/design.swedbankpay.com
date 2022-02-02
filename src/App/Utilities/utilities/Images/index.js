import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";

const ImageFluid = () => (
    <>
        <h2 id="image-fluid">Image fluid</h2>
        <p><Tag code type="secondary" text=".img-fluid" /> makes your images responsive by forcing the picture to scale with its parent.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/1000/250?image=937" className="img-fluid" />
        </ComponentPreview>
    </>
);

const ImageRounded = () => (
    <>
        <h2 id="image-rounded">Image rounded</h2>
        <p>If you want to display your images with rounded corners just add <Tag code type="secondary" text=".img-rounded" /> to your image</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=770" className="img-rounded mx-auto d-block"/>
        </ComponentPreview>
    </>
);

const ImageCircle = () => (
    <>
        <h2 id="image-circle">Image circle</h2>
        <p>To make your image a perfect circle add <Tag code type="secondary" text=".img-circle" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=790" className="img-circle mx-auto d-block"/>
        </ComponentPreview>
    </>
);

const ImageThumbnail = () => (
    <>
        <h2 id="image-thumbnail">Image thumbnail</h2>
        <p><Tag code type="secondary" text=".img-thumbnail" /> adds a small border around the image and adds some padding to give the image a frame.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=823" className="img-thumbnail mx-auto d-block"/>
        </ComponentPreview>
    </>
);

const Image = () => (
    <DocContainer docToc>
        <p className="lead">Use our image utilties to modify how they are displayed or work when resized.</p>
        <ImageFluid />
        <ImageRounded />
        <ImageCircle />
        <ImageThumbnail />
    </DocContainer>
);

export default Image;

/* For testing */
export { ImageFluid, ImageRounded, ImageCircle, ImageThumbnail };
