import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import NavComponent from "@components/Nav";
import CodeTags from "@components/CodeTags";

import { nav } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const navItems = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart",
        subItems: ["Purchase history", "Invoice"]
    },
    {
        name: "Notifications",
        icon: "notification_important"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance"
    },
    {
        name: "Authentication",
        icon: "fingerprint"
    }
];

const StandardNav = () => (
    <>
        <h2 id="nav-standard">Standard nav</h2>
        <p>
            To use our reccommended nav add <CodeTags type="secondary" code=".nav"/> and <CodeTags type="secondary" code=".nav-<desired_size>-vertical-wide"/>. This gives you a nav with a breakpoint at the size set in the class name.
            In the example we use <CodeTags type="secondary" code="lg"/>, resize this window to see it in action.
        </p>
        <p>
            When the nav is in mobile view it will hide menu elements if they total more than 5. Menu elements with a submenu will also be hidden and only viewable when the nav is expanded.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <NavComponent widesize="lg" items={navItems} />
        </ComponentPreview>
    </>
);

const WithIconsOnly = () => (
    <>
        <h2 id="icons-only">Icons only</h2>
        <p>
            If you want to show only icons at a certain breakpoint then include <CodeTags type="secondary" code=".nav-<desired_size>-vertical" /> with your nav component.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <NavComponent vertsize="md" widesize="lg" items={navItems} />
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="nav" open close />
    </>
);

const Nav = () => {
    useEffect(() => { nav.init(); });

    return (
        <DocContainer>
            <p className="lead">
                Use navs to create a basic navigational element containing links.
            </p>
            <StandardNav />
            <WithIconsOnly />
            <JavascriptMethods />
            <NpmInformation componentName={"nav"}/>
        </DocContainer>
    );
};

export default Nav;

/* For testing */
export { StandardNav, WithIconsOnly, JavascriptMethods };
