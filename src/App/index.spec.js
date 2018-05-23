// import { Selector } from "testcafe";

fixture `Getting Started`
    .page `http://localhost:3000`;

test("Test uno", async t => {
    // Test code
    // const articleHeader = await Selector(".panel-body").find("h2");
    await t
        .click("a[href='/docs']");


});
