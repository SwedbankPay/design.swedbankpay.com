// import React from "react";
// import ReactDOM from "react-dom";

import modal from "./index";
// import Modal from "@/Modal";

describe("px-script: modal", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    it("is defined", () => {
        expect(modal).toBeDefined();
    });
});
