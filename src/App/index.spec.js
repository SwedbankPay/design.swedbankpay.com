import { Selector } from "testcafe";

fixture `Frontpage`
    .page `http://localhost:3000`;

test("Frontpage test", async () => {
    const header = await Selector(".panel-body").find("h2");

    expect(header.textContent).contains("Welcome to the Swedbank Pay DesignGuide");
});
