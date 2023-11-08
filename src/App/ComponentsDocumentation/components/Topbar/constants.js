import React, { useEffect } from "react";
import TopbarComponent from "@components/Topbar";
import { topbar } from "@src/scripts/main";

import CodeTags from "@components/CodeTags";

export const menu = {
	items: [
		{
			name: "Home",
			pinned: true,
		},
		{
			name: "Merchant details",
			selected: true,
			pinned: true,
		},
		{
			name: "Transactions",
		},
		{
			name: "User profile",
		},
		{
			name: "Statistics",
		},
		{
			name: "Transactions",
		},
		{
			name: "User profile",
		},
		{
			name: "Statistics",
		},
		{
			name: "Transactions",
		},
		{
			name: "User profile",
		},
		{
			name: "Statistics",
		},
		{
			name: "Users",
			pinned: true,
		},
		{
			name: "Access tokens",
		},
		{
			name: "Contact us",
		},
		{
			name: "Switch to acquiring",
			icon: "sync_alt",
			pinned: true,
			firstPushRight: true,
		},
		{
			name: "Change company",
			icon: "arrow_forward",
		},
	],
};

export const menuLegacy = {
	btn: {
		name: "Menu",
		icon: "menu",
	},
	items: [
		{
			name: "Home",
			icon: "home",
		},
		{
			name: "Purchases",
			icon: "shopping_cart",
		},
		{
			name: "Settings",
			icon: "settings",
		},
	],
};

const Topbar = ({ sticky, wide, logout, legacy }) => {
	useEffect(() => {
		topbar.init();
	}, [legacy]);

	return (
		<div className="container-fluid">
			<TopbarComponent
				topbarContent={!legacy ? menu : menuLegacy}
				wide={wide}
				sticky={sticky}
				logout={logout}
				id="demo-topbar"
				legacy={legacy}
			/>
			<main className="topbar-content"></main>
		</div>
	);
};

export const topbarShowcase = {
	id: "overviewTopbar",
	tabsId: "overviewTopbarTabs",
	hideOptions: true,
	elements: [
		{
			tab: "Desktop",
			component: <Topbar wide="xl" logout legacy={true} />,
			title: "Desktop",
			description: (
				<p>
					The minimum requirement in a Topbar is to include the Swedbank Pay
					Logotype, common additional functionality is a list with navigation
					links. On desktop use{" "}
					<CodeTags type="secondary" code=".topbar-xl-wide" /> to show the links
					listed horizontally in the topbar.{" "}
				</p>
			),
		},
		{
			tab: "Mobile/tablet",
			component: <Topbar logout wide={false} legacy={true} />,
			title: "Mobile/tablet",
			description: (
				<>
					<p>
						The minimum requirement in a Topbar is to include the Swedbank Pay
						Logotype, common additional functionality is a list with navigation
						links. On smaller screens use a menu button to toggle a vertical
						navigation drawer with links when the menu button is clicked.
					</p>
					<p>
						Be aware; The <CodeTags code="max-height" type="primary" />{" "}
						attribute for element <CodeTags type="secondary" code=".nav-ul" />{" "}
						when it is active is set to 2500px. This is to ensure animation for
						the transition to happen. You can easily alter this by creating
						custom css.
					</p>
				</>
			),
		},
		{
			tab: "🧪 experimental Desktop",
			component: <Topbar wide="xl" logout legacy={false} />,
			title: "Desktop",
			description: (
				<p>
					The experimental desktop topbar involves breaking changes. Make sure
					to check them out before switching.
				</p>
			),
		},
		{
			tab: "🧪 experimental Mobile/tablet",
			component: <Topbar logout wide={false} legacy={false} />,
			title: "Mobile/tablet",
			description: (
				<>
					The experimental desktop topbar involves breaking changes. Make sure
					to check them out before switching.
				</>
			),
		},
	],
};
