import { Selector } from "testcafe";

fixture `Component: Modal`
    .page `http://localhost:3000/docs/components/modal`;

test("Modal test", async t => {
    const modal = await Selector("#live-modal");

    await t
        .expect(modal.classNames)
        .notContains("in")
        .click("[data-modal-open=live-modal]")
        .expect(modal.classNames)
        .contains("in")
        .click("[data-modal-close=live-modal]")
        .expect(modal.classNames)
        .notContains("in");
});
