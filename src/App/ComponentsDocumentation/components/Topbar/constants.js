import React from "react";
import TopbarComponent from "@components/Topbar";

import CodeTags from "@components/CodeTags";

const menu = {
    btn: {
        name: "Menu",
        icon: "menu"
    },
    items: [
        {
            name: "Home",
            icon: "home"
        },
        {
            name: "Purchases",
            icon: "shopping_cart"
        },
        {
            name: "Settings",
            icon: "settings"
        }
    ]
};

const Topbar = ({ sticky, wide, logout }) => (
    <div className="container-fluid">
        <TopbarComponent topbarContent={menu} wide={wide} sticky={sticky} logout={logout} id="demo-topbar" />
        <main className="topbar-content"></main>
    </div>
);

export const topbarShowcase = {
    id: "overviewTopbar",
    tabsId: "overviewTopbarTabs",
    hideOptions: true,
    elements: [
        {
            tab: "Desktop",
            component: <Topbar wide="xl" logout />,
            title: "Desktop",
            description: <p>The minimum requirement in a Topbar is to include the Swedbank Pay Logotype, common additional functionality is a list with navigation links. On desktop use <CodeTags type="secondary" code=".topbar-xl-wide" /> to show the links listed horizontally in the topbar. </p>
        },
        {
            tab: "Mobile/tablet",
            component: <Topbar logout wide={false}/>,
            title: "Mobile/tablet",
            description: <p>The minimum requirement in a Topbar is to include the Swedbank Pay Logotype, common additional functionality is a list with navigation links. On smaller screens use a menu button to toggle a vertical navigation drawer with links when the menu button is clicked. </p>
        }
    ]
}