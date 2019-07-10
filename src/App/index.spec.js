import { Selector } from "testcafe";

fixture `Frontpage`
    .page `http://localhost:3000`;

test("Frontpage test", async t => {
    const header = await Selector(".panel-body").find("h2");

    await t
        .expect(header.textContent).contains("Welcome to the Swedbank Pay DesignGuide");
});
