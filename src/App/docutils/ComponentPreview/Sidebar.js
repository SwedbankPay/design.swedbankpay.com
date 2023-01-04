import React from "react";

export const Sidebar = ({ sidebarDisplayed, hideOptions }) => {
    const placeholder = "TO BE REMOVED";

    return (
        <div className={`options ${sidebarDisplayed ? " active" : ""}${hideOptions ? " d-none" : ""}`}>
            <div className="options-header">
                Options
                <button className="options-close d-flex" aria-label="Close options menu"
                    /* onKeyDown={e => this.setOptionsMenuState(e, false)} */
                    /* onClick={() => this.setState({ optionsOpen: false })} */>
                    <i className="material-icons">close</i>
                </button>
            </div>
            {/* {this.state.activeTab.options && <form className="options-body">

                {this.state.activeTab.options.checkbox &&
                                        this.state.activeTab.options.checkbox.map((checkbox, i) => (
                                            <fieldset className="mb-4" key={i}>
                                                {checkbox.title && (
                                                    <legend className="h4">{checkbox.title}</legend>
                                                )}
                                                {checkbox.inputs.map((input, i) => (
                                                    <div key={i} className="checkbox" onChange={() => this.setActiveOptions(input.id, input.value, input.description, true)}>
                                                        <input type="checkbox" id={input.id} />
                                                        <label htmlFor={input.id}>{input.name}</label>
                                                    </div>
                                                ))}
                                            </fieldset>
                                        )
                                        )
                } */}
            {/* {this.state.activeTab.options.dropdown && this.state.activeTab.options.dropdown.map((dropdown, i) => (
                    <fieldset key={i} className="mb-4">
                        <legend>{dropdown.title}</legend>
                        <select id={dropdown.id} className="form-control" onChange={e => this.setActiveOptions(
                            dropdown.id,
                            dropdown.values[e.target.value].value,
                            dropdown.values[e.target.value].description
                        )}>
                            {dropdown.values.map((val, j) => <option key={j} value={j}>{val.name}</option>)}
                        </select>
                    </fieldset>
                ))} */}
            {/* {this.state.activeTab.options.radio && this.state.activeTab.options.radio.map((radio, i) => (
                    <fieldset className="mb-4" key={i}>
                        <legend className="h4">{radio.title}</legend>
                        {radio.values.map((val, j) => (
                            <div key={j} className={`radio${val.toBeRemoved ? " d-block" : ""}`} onChange={e => this.setActiveOptions(
                                radio.id,
                                radio.values[e.target.value].value,
                                radio.values[e.target.value].description
                            )}>
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
                        ))} */}
            {/* </fieldset> */}
            {/* ))} */}
            {/* </form>} */}
        </div>
    );
};
