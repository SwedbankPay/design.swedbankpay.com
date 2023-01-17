import React from "react";

export const Sidebar = ({
    sidebarDisplayed,
    setSidebarDisplayed,
    hideOptions,
    activeTab,
    activeOptions,
    updateActiveOptions
}) => (
    <div className={`options ${sidebarDisplayed ? " active" : ""}${hideOptions ? " d-none" : ""}`}>
        <div className="options-header">
                Options
            <button className="options-close d-flex" aria-label="Close options menu"
                onClick={() => setSidebarDisplayed(false)}>
                <i className="material-icons">close</i>
            </button>
        </div>
        {activeTab.options && <form className="options-body">

            {activeTab.options.checkbox &&
                    activeTab.options.checkbox.map((checkbox, i) => (
                        <fieldset className="mb-4" key={i}>
                            {checkbox.title && (
                                <legend className="h4">{checkbox.title}</legend>
                            )}
                            {checkbox.inputs.map((input, i) => (
                                <div key={i} className="checkbox" onChange={() => updateActiveOptions(
                                    input,
                                    "checkbox"
                                )}>
                                    <input type="checkbox" id={input.id} />
                                    <label htmlFor={input.id}>{input.name}</label>
                                </div>
                            ))}
                        </fieldset>
                    )
                    )
            }
            {activeTab.options.dropdown && activeTab.options.dropdown.map((dropdown, i) => (
                <fieldset key={i} className="mb-4">
                    <legend>{dropdown.title}</legend>
                    <select id={dropdown.id} className="form-control" onChange={e => updateActiveOptions(dropdown, "dropdown")}>
                        {dropdown.values.map((val, j) => <option key={j} value={j}>{val.name}</option>)}
                    </select>
                </fieldset>
            ))}
            {activeTab.options.radio && activeTab.options.radio.map((radio, i) => (
                <fieldset className="mb-4" key={i}>
                    <legend className="h4">{radio.title}</legend>
                    {radio.values.map((val, j) => (
                        <div key={j} className={`radio${val.toBeRemoved ? " d-block" : ""}`} onChange={e => updateActiveOptions(val, "radio", radio.id)}>
                            <input
                                type="radio"
                                id={`${radio.id + val.name.replace(/\s/g, "")}${val.default ? "_default" : ""}`}
                                name={radio.id + radio.title.replace(/\s/g, "")}
                                value={j}
                                defaultChecked={val.default}
                            />
                            <label htmlFor={`${radio.id + val.name.replace(/\s/g, "")}${val.default ? "_default" : ""}`}>{val.name}</label>
                            {val.toBeRemoved ? <span className="status-badge status-badge-remove my-1">To be removed</span> : null}
                        </div>
                    ))}
                </fieldset>
            ))}
        </form>}
    </div>
);
