import React from "react";
import ToggleLightbox from "@components/Lightbox";
import img from "@src/img/swedbankpay/documentation/forDesigners/vanilla-pattern.png";
import img1 from "@src/img/swedbankpay/documentation/introduction/pyramid.png";

const Lightbox = () => (
    <div>
        <div className="d-flex flex-column align-items-center">
            <ToggleLightbox imgSrc={img} alt="flower"/>
            <span className="caption-text"><span className="font-weight-bold">Figure 1</span> This is a caption text</span>
        </div>
        <div className="d-flex flex-column align-items-center">
            <ToggleLightbox imgSrc={img1} alt="flower"/>
            <span className="caption-text"><span className="font-weight-bold">Figure 2</span> This is another caption text</span>
        </div>
    </div>
);

export default Lightbox;
