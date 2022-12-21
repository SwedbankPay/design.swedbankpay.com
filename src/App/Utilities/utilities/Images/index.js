import React from "react";
import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const ImageFluid = () => (
    <>
        <h2 id="image-fluid">Image fluid</h2>
        <p><CodeTags type="secondary" code=".img-fluid" /> makes your images responsive by forcing the picture to scale with its parent.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/1000/250?image=937" className="img-fluid" alt="A rocky landscape with a white goat surrounded by trees."/>
        </ComponentPreview>
    </>
);

const ImageRounded = () => (
    <>
        <h2 id="image-rounded">Image rounded</h2>
        <p>If you want to display your images with rounded corners just add <CodeTags type="secondary" code=".img-rounded" /> to your image</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=770" className="img-rounded mx-auto d-block" alt="A mountainous landscape at sunset with a person jumping in the foreground."/>
        </ComponentPreview>
    </>
);

const ImageCircle = () => (
    <>
        <h2 id="image-circle">Image circle</h2>
        <p>To make your image a perfect circle add <CodeTags type="secondary" code=".img-circle" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=790" className="img-circle mx-auto d-block" alt="A deer in the sunset"/>
        </ComponentPreview>
    </>
);

const ImageThumbnail = () => (
    <>
        <h2 id="image-thumbnail">Image thumbnail</h2>
        <p><CodeTags type="secondary" code=".img-thumbnail" /> adds a small border around the image and adds some padding to give the image a frame.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <img src="https://picsum.photos/200?image=823" className="img-thumbnail mx-auto d-block" alt="A woman in a forest taking a photo facing the camera."/>
        </ComponentPreview>
    </>
);

const Image = () => (
    <DocContainer>
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
