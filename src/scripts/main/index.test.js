import dg, {
    accordion,
    actionList,
    alert,
    datepicker,
    dialog,
    expandable,
    nav,
    rangeslider,
    sheet,
    sidebar,
    script,
    tabs,
    toast,
    tooltips,
    topbar,
    utils,
    validation
} from "./index";

describe("scripts: index (main)", () => {
    it("is defined", () => {
        expect(dg).toBeDefined();
    });

    it("has components", () => {
        expect(dg.accordion).toEqual(accordion);
        expect(dg.actionList).toEqual(actionList);
        expect(dg.alert).toEqual(alert);
        expect(dg.datepicker).toEqual(datepicker);
        expect(dg.dialog).toEqual(dialog);
        expect(dg.expandable).toEqual(expandable);
        expect(dg.nav).toEqual(nav);
        expect(dg.rangeslider).toEqual(rangeslider);
        expect(dg.sheet).toEqual(sheet);
        expect(dg.sidebar).toEqual(sidebar);
        expect(dg.script).toEqual(script);
        expect(dg.tabs).toEqual(tabs);
        expect(dg.toast).toEqual(toast);
        expect(dg.tooltips).toEqual(tooltips);
        expect(dg.topbar).toEqual(topbar);
        expect(dg.utils).toEqual(utils);
        expect(dg.validation).toEqual(validation);
    });
});
