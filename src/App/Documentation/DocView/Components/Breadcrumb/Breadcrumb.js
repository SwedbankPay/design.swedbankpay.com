import React from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import RenderCodeFigure from "../../../utils/RenderCodeFigure";
import DocToc from "../../../utils/DocToc";

import BreadcrumbComponent from "../../../../components/Breadcrumb/Breadcrumb";
const items = [
    { title: "Home" },
    { title: "Products" },
    { title: "Gadgets" },
    { title: "Gadgets #1" }
];

const BreadcrumbText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Breadcrumb component</p>
        <div className="showcase-panel">
            <BreadcrumbComponent items={items} />
        </div>
        <RenderCodeFigure Component={BreadcrumbComponent} props={{ items }} language="html" />
        <div className="showcase-panel">
            <BreadcrumbComponent items={items} small={true} />
        </div>
        <RenderCodeFigure Component={BreadcrumbComponent} props={{ items, small: true }} language="html" />
    </div>
);

const Breadcrumb = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <BreadcrumbText />
            </div>
        </div>
    );
};

export default Breadcrumb;
