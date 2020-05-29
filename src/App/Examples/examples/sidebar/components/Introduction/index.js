import React from "react";

import { FAQSearch, FAQList, FAQSheet, FAQCard } from "../../../faq";

const Introduction = () => (
    <>
        <h2 id="introduction" className="hero">Welcome to the sidebar example!</h2>
        <p className="lead">This example showcases how the sidebar can be used.</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et mattis massa. Sed et gravida mi.
            Aliquam lobortis ligula nulla, vel consequat ligula auctor et. Vivamus placerat, odio et varius efficitur,
            neque leo condimentum mi, sed iaculis nisi arcu sit amet dui. Sed vehicula leo in purus lacinia, id auctor nulla scelerisque.
            Sed egestas sapien non enim pharetra sodales. Quisque a erat accumsan ligula efficitur vulputate blandit sed lorem. Nullam condimentum ultricies metus,
            et volutpat lacus tempor id. In tortor ante, interdum non convallis in, luctus non neque. Pellentesque in mauris enim.
        </p>

        <h2 id="faq">FAQ</h2>
        <div className="container">
            <FAQSearch />
            <FAQList />
            <FAQSheet />
            <FAQCard />
        </div>
    </>
);

export default Introduction;
