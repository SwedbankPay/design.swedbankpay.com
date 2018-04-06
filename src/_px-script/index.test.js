import px from "./index";

describe("px-script: index", () => {

    it("is defined", () => {
        expect(px).toBeDefined();
    });

    it("method init is run when dom content is loaded", () => {
        // to prevent console warning in console
        console.warn = jest.fn();

        const DOMContentLoadedEvent = document.createEvent("Event");
        DOMContentLoadedEvent.initEvent("DOMContentLoaded", true, true);
        window.document.dispatchEvent(DOMContentLoadedEvent);

        // TODO: Add expect statement here to make sure script.initAll is being run on "DOMContentLoaded"
    });
});
