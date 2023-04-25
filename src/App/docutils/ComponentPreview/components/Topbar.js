import React, { useEffect } from "react";
import { tabs as tabsScript } from "@src/scripts/main";

export const Topbar = ({
	tabsId,
	tabs,
	hideOptions,
	sidebarDisplayed,
	setSidebarDisplayed,
	updateActiveTab,
	activeTab,
}) => (
	<div id={tabsId} className="tabs tabs-scroll">
		{tabs && (
			<Tabs
				tabsId={tabsId}
				tabs={tabs}
				activeTab={activeTab}
				updateActiveTab={updateActiveTab}
			/>
		)}
		<CloseOptionsButton
			hideOptions={hideOptions}
			sidebarDisplayed={sidebarDisplayed}
			setSidebarDisplayed={setSidebarDisplayed}
		/>
	</div>
);

const Tabs = ({ tabsId, tabs, activeTab, updateActiveTab }) => {
	useEffect(() => {
		tabsScript.init();
	}, []);

	return (
		<ul id={`${tabsId}-ul`}>
			{tabs.map((element, i) => (
				<li
					key={i}
					className={`${activeTab?.tab === element.tab ? "active" : null}`}
				>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							updateActiveTab(tabs[i]);
						}}
					>
						{element.tab}
					</a>
				</li>
			))}
		</ul>
	);
};

const CloseOptionsButton = ({
	hideOptions,
	sidebarDisplayed,
	setSidebarDisplayed,
}) => (
	<div
		className={`options-open ${hideOptions ? " d-none" : ""} ${
			sidebarDisplayed ? "hidden" : ""
		}`}
	>
		<button
			className="open-options-menu d-flex"
			aria-label="Open options menu"
			onClick={() => setSidebarDisplayed(true)}
		>
			<i className="material-icons">menu_open</i>
		</button>
	</div>
);
