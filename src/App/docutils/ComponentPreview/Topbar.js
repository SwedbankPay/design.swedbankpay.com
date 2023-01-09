import React from "react";

export const Topbar = ({
    tabsId,
    tabs,
    hideOptions,
    onTabClick,
    sidebarDisplayed,
    setSidebarDisplayed,
    setActiveTab,
    activeTab
}) => (
    // TODO: fix the horizontal scrolling fade on narrow viewport
    <div id={tabsId} className="tabs tabs-scroll">
        { tabs && <Tabs
            tabsId={tabsId}
            tabs={tabs}
            onTabClick={onTabClick}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />}
        <CloseOptionsButton
            hideOptions={hideOptions}
            sidebarDisplayed={sidebarDisplayed}
            setSidebarDisplayed={setSidebarDisplayed}

        />
    </div>
);

/* TODO: switch anchor links to buttons */
// TODO: fix sometimes first click does not go through when during page load
const Tabs = ({
    tabsId,
    tabs,
    activeTab,
    setActiveTab,
    onTabClick
}) => (
    <ul id={`${tabsId}-ul`}>
        {tabs.map((element, i) => <li key={i} className={`${activeTab?.tab === element.tab ? "active" : null}`}>
            <a href="#" onClick={e => setActiveTab(tabs[i])}>{element.tab}</a>
        </li>
        )}
    </ul>
);

const CloseOptionsButton = ({
    hideOptions,
    sidebarDisplayed,
    setSidebarDisplayed
}) => (
    <div className={`options-open ${hideOptions ? " d-none" : ""} ${sidebarDisplayed ? "hidden" : ""}`}>
        <button
            className="open-options-menu d-flex"
            aria-label="Open options menu"
            onClick={() => setSidebarDisplayed(true)}
        >
            <i className="material-icons" >menu_open</i>
        </button>
    </div>
);

