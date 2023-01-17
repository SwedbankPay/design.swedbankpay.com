import React, { useState, useEffect } from "react";
import { Topbar } from "./Topbar";
import { ComponentDescription } from "./ComponentDescription";
import { Sidebar } from "./Sidebar";
import { Preview } from "./Preview";

export const ShowCasePanelAdvanced = ({
    showCasePanelAdvanced,
    children,
    activeTab,
    setActiveTab,
    activeOptions,
    updateActiveOptions,
    staticPreview,
    previewMinHeight
}) => {
    const [sidebarDisplayed, setSidebarDisplayed] = useState(false);

    // TODO: could this be done via CSS instead ?
    useEffect(() => {
        setSidebarDisplayed(window.innerWidth > 1200); // XL grid breakpoint
    }, []);

    return (
        <>
            <div id={showCasePanelAdvanced.id} className={"showcase-panel showcase-panel-advanced"}>
                <Topbar
                    tabs={showCasePanelAdvanced?.elements}
                    tabsId={showCasePanelAdvanced.tabsId}
                    hideOptions={showCasePanelAdvanced.hideOptions}
                    sidebarDisplayed={sidebarDisplayed}
                    setSidebarDisplayed={setSidebarDisplayed}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className="d-flex">
                    <div className="d-flex flex-column flex-fill">
                        <Preview
                            alternativeBackground={activeTab.alternativeBackground}
                            activeTab={activeTab}
                            staticPreview={staticPreview}
                            activeOptions={activeOptions}
                            previewMinHeight={previewMinHeight}
                        />
                        <ComponentDescription
                            title={activeTab.title}
                            description={activeTab.description}
                            activeOptions={activeOptions}
                        />
                    </div>
                    <Sidebar
                        hideOptions={showCasePanelAdvanced.hideOptions}
                        sidebarDisplayed={sidebarDisplayed}
                        setSidebarDisplayed={setSidebarDisplayed}
                        activeTab={activeTab}
                        activeOptions={activeOptions}
                        updateActiveOptions={updateActiveOptions}
                    />
                </div>
            </div>
            {children}
        </>
    );
};
