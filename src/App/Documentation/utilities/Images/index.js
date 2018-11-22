import React from "react";

import { ComponentPreview, DocToc, Property } from "#";

const ImageFluid = () => (
    <>
        <h2 id="image-fluid">Image fluid</h2>
        <p><Property value=".img-fluid" /> makes your images responsive by forcing the picture to scale with its parent.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/1000/250?image=937" className="img-fluid" style={{ width: "100%" }}/>
        </ComponentPreview>
    </>
);

const ImageRounded = () => (
    <>
        <h2 id="image-rounded">Image rounded</h2>
        <p>If you want to display your images with rounded corners just add <Property value=".img-rounded" /> to your image</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=770" className="img-rounded mx-auto d-block"/>
        </ComponentPreview>
    </>
);

const ImageCircle = () => (
    <>
        <h2 id="image-circle">Image circle</h2>
        <p>To make your image a perfect circle add <Property value=".img-circle" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=790" className="img-circle mx-auto d-block"/>
        </ComponentPreview>
    </>
);

const ImageThumbnail = () => (
    <>
        <h2 id="image-thumbnail">Image thumbnail</h2>
        <p><Property value=".img-thumbnail" /> adds a small border around the image and adds some padding to give the image a frame.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=823" className="img-thumbnail mx-auto d-block"/>
        </ComponentPreview>
    </>
);

const ImageText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Use our image utilties to modify how they are displayed or work when resized.</p>
        <ImageFluid />
        <ImageRounded />
        <ImageCircle />
        <ImageThumbnail />
    </div>
);

const Image = () => (
    <div className="doc-container">
        <div className="row">
            <ImageText />
            <DocToc component={ImageText} />
        </div>
    </div>
);

export default Image;

/* For testing */
export { ImageFluid, ImageRounded, ImageCircle, ImageThumbnail, ImageText };
