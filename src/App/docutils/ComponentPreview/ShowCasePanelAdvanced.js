import React, { useState, useEffect } from "react";
import { Topbar } from "./Topbar";
import { ComponentDescription } from "./ComponentDescription";
import { Sidebar } from "./Sidebar";
import { Preview } from "./Preview";

export const ShowCasePanelAdvanced = ({ showCasePanelAdvanced, children, activeTab, setActiveTab }) => {
    const [sidebarDisplayed, setSidebarDisplayed] = useState(false);

    const onTabClick = e => console.log("tabClicked", e);

    return (
        <>
            <div id={showCasePanelAdvanced.id} className={"showcase-panel showcase-panel-advanced"}>
                <div id={showCasePanelAdvanced.tabsId} className="tabs tabs-scroll">
                    <Topbar
                        tabs={showCasePanelAdvanced?.elements}
                        onTabClick={onTabClick}
                        tabsId={showCasePanelAdvanced.tabsId}
                        hideOptions={showCasePanelAdvanced.hideOptions}
                        sidebarDisplayed={sidebarDisplayed}
                        setSidebarDisplayed={setSidebarDisplayed}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
                <div className="d-flex">
                    <div className="d-flex flex-column flex-fill">
                        <Preview
                            alternativeBackground={activeTab.alternativeBackground}
                        />
                        <ComponentDescription
                            title={activeTab.title}
                            description={activeTab.description}
                        />
                    </div>
                    <Sidebar
                        hideOptions={showCasePanelAdvanced.hideOptions}
                        sidebarDisplayed={sidebarDisplayed}
                        setSidebarDisplayed={setSidebarDisplayed}
                    />
                </div>
            </div>
            {children}
        </>
    );
};
