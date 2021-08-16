import { jest } from "@jest/globals";
import dg from "../index";
import script from "./index";

jest.mock("../index");

describe("scripts: script", () => {
    it("is defined", () => {
        expect(script).toBeDefined();
    });

    it("has an initAll method", () => {
        expect(script.initAll).toBeDefined();
        expect(script.initAll).toBeInstanceOf(Function);
    });

    it("method initAll runs all init functions", () => {
        console.warn = jest.fn();
        script.initAll();

        expect(dg.accordion.init).toHaveBeenCalled();
        expect(dg.actionList.init).toHaveBeenCalled();
        expect(dg.datepicker.init).toHaveBeenCalled();
        expect(dg.dialog.init).toHaveBeenCalled();
        expect(dg.expandable.init).toHaveBeenCalled();
        expect(dg.nav.init).toHaveBeenCalled();
        expect(dg.rangeslider.init).toHaveBeenCalled();
        expect(dg.sheet.init).toHaveBeenCalled();
        expect(dg.sidebar.init).toHaveBeenCalled();
        expect(dg.tooltips.init).toHaveBeenCalled();
        expect(dg.topbar.init).toHaveBeenCalled();
        expect(dg.validation.init).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });
});
