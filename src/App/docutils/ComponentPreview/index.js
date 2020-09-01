import React, { Component, cloneElement } from "react";
import PropTypes from "prop-types";
import { renderToStaticMarkup } from "react-dom/server";
import jsbeautifier from "js-beautify";
import { defaultProps } from "prism-react-renderer";

// NOTE: dangerousHTML prop is used when wanting to show html in the codefigure without encoding.

const ComponentPreview = ({ children, language, removeOuterTag, hideValue, removeList, showCasePanel, showCasePanelAdvanced, showCasePanelSm, codeFigure, dangerousHTML, negative }) => {
    const _removeOuterTag = element => {
        const div = document.createElement("div");

        div.innerHTML = renderToStaticMarkup(element);

        if (div.firstElementChild) {
            return div.firstElementChild.innerHTML;
        } else if (div.firstChild) {
            return div.firstChild.nodeValue;
        }

        return "Check ComponentPreview _removeOuterTag!";
    };

    const _removeList = element => {
        const div = document.createElement("div");

        div.innerHTML = renderToStaticMarkup(element);

        const listElements = div.querySelectorAll("li");
        let htmlString = "";

        listElements.forEach(el => {
            htmlString += `${el.innerHTML} \n`;
        });

        return htmlString;
    };

    const _removeEmpty = val => {
        val = val.replace(/=""/g, "");
        val = val.replace(/ class>/g, ">");
        val = val.replace(/ class /g, " ");
        val = val.replace(/value /g, "");

        return val;
    };

    const setDangerousHtml = val => {
        let code = "";

        if (typeof val.forEach === "function") {
            val.forEach(v => code += `${v}\n`);
        } else {
            code = val;
        }

        return code;
    };

    const CodeFigure = ({ children }) => {
        let code = "";

        if (language === "html" && dangerousHTML) {
            code = setDangerousHtml(children);
        } else if (language === "html" && children && typeof children.map === "function") {
            children.map(child => {
                if (removeOuterTag) {
                    code += _removeOuterTag(child);
                } else if (removeList) {
                    code += _removeList(child);
                } else {
                    code += renderToStaticMarkup(child);
                }
            });

        } else if (language === "html") {
            if (removeOuterTag) {
                code += _removeOuterTag(children);
            } else if (removeList) {
                code += _removeList(children);
            } else {
                code += renderToStaticMarkup(children);
            }
        } else {
            switch (typeof children) {
                case "string":
                    code = children;

                    break;
                case "object":
                    children.forEach(child => code += child);

                    break;
                default:
                    console.warn("CodeFigure: children needs attention!");
            }
        }

        switch (language) {
            case "html":
                code = jsbeautifier.html_beautify(code);
                code = _removeEmpty(code);

                if (hideValue) {
                    code = code.replace(/ value="(.*)"/g, "");
                }

                break;
            case "css":
                code = jsbeautifier.css(code);

                break;
            case "javascript":
                // This is not needed, and for some reason crashes after a prod build [EH]
                // code = jsbeautifier(code);
                break;
            default:
                return "update switchcase!";
        }

        defaultProps.style = "";

        return (
            <figure>
                <div className="code-view">
                    <header className="code-view-header">
                        {language.toUpperCase()}
                    </header>
                    <table className="code-view-table">
                        <tbody>
                            <tr>
                                <td className="code-view-numbers">
                                    <pre>
                                        {(code).split("\n").map((line, i) => <React.Fragment key={i}>{i + 1}{"\n"}</React.Fragment>)}
                                    </pre>
                                </td>
                                <td className="code-view-code">
                                    <pre>
                                        {(code).split("\n").map((line, i) => <React.Fragment key={i}>{line}{"\n"}</React.Fragment>)}
                                    </pre>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </figure>
        );
    };

    const ShowCasePanel = () => (
        <div className={`showcase-panel${showCasePanelSm ? " showcasepanel-sm" : ""}${negative ? " showcase-panel-negative" : ""}`}>
            {children}
        </div>
    );

    class ShowCasePanelAdvanced extends Component {
        constructor (props) {
            super(props);
            this.state = {
                activeTab: this.props.showCasePanelAdvanced.elements[0],
                optionsOpen: false,
                activeOptions: []
            };
        }

        setActiveTab (e, i) {
            const showcasePanel = document.getElementById(this.props.showCasePanelAdvanced.id);

            e.preventDefault();

            this.setState({
                activeTab: this.props.showCasePanelAdvanced.elements[i],
                activeOptions: []
            });

            showcasePanel.querySelectorAll("input[type=checkbox]").forEach(checkbox => checkbox.checked = false);
            showcasePanel.querySelectorAll("select[id]").forEach(dropdown => dropdown.value = 0);
            showcasePanel.querySelectorAll(".radio").forEach(radio => radio.querySelector("input").checked = (radio.querySelector("input").value === "0"));

        }

        setActiveOptions (id, value, checkbox) {
            if (checkbox) {
                if (this.state.activeOptions.filter(option => id === option.id).length > 0) {
                    this.setState({ activeOptions: this.state.activeOptions.filter(option => id !== option.id) });
                } else {
                    this.setState({
                        activeOptions: [...this.state.activeOptions,
                            {
                                id,
                                value
                            }
                        ]
                    });
                }
            } else {
                this.setState({
                    activeOptions: [...this.state.activeOptions,
                        {
                            id,
                            value
                        }
                    ]
                });
            }
        }

        render () {
            return (
                <>
                    <div id={this.props.showCasePanelAdvanced.id} className={`showcase-panel showcase-panel-advanced${this.state.optionsOpen ? " options-active" : ""}`}>
                        <div className="d-flex">
                            <div className="flex-column flex-fill">
                                <div className="tabs d-flex justify-content-between align-items-center">
                                    <ul id={this.props.showCasePanelAdvanced.tabsId}>
                                        {this.props.showCasePanelAdvanced.elements.map((element, i) => <li key={i} className={this.state.activeTab.tab === element.tab ? "active" : null}>
                                            <a href="#" onClick={e => this.setActiveTab(e, i)}>{element.tab}</a>
                                        </li>
                                        )}
                                    </ul>
                                    <i className={`material-icons options-open${this.state.optionsOpen ? " hidden" : ""}`} onClick={() => this.setState({ optionsOpen: true })}>menu_open</i>
                                </div>
                                <div className="component-preview">
                                    {cloneElement(this.state.activeTab.component,
                                        this.state.activeOptions.reduce((acc, currentOption) => ({
                                            ...acc,
                                            ...currentOption.value
                                        }), {})
                                    )}
                                </div>
                                <div className="component-description">
                                    <h3>{this.state.activeTab.title}</h3>
                                    {this.state.activeTab.description}
                                </div>
                            </div>
                            {<div className={`options${this.state.optionsOpen ? " active" : ""}`}>
                                <div className="options-header">
                                    Options
                                    <i className="material-icons options-close" onClick={() => this.setState({ optionsOpen: false })}>close</i>
                                </div>
                                {this.state.activeTab.options && <div className="options-body">
                                    {this.state.activeTab.options.checkbox &&

                                        <div className="mb-4">
                                            {this.state.activeTab.options.checkbox.map((checkbox, i) => (
                                                <div key={i} className="checkbox" onChange={() => this.setActiveOptions(checkbox.id, checkbox.value, true)}>
                                                    <input type="checkbox" id={checkbox.id} />
                                                    <label htmlFor={checkbox.id}>{checkbox.name}</label>
                                                </div>
                                            ))}
                                        </div>

                                    }
                                    {this.state.activeTab.options.dropdown && this.state.activeTab.options.dropdown.map((dropdown, i) => (
                                        <div key={i} className="mb-4">
                                            <h4>{dropdown.title}</h4>
                                            <select id={dropdown.id} className="form-control" onChange={e => this.setActiveOptions(
                                                dropdown.id,
                                                dropdown.values[e.target.value].value
                                            )}>
                                                {dropdown.values.map((val, j) => <option key={j} value={j}>{val.name}</option>)}
                                            </select>
                                        </div>
                                    ))}
                                    {this.state.activeTab.options.radio && this.state.activeTab.options.radio.map((radio, i) => (
                                        <div key={i}>
                                            <h4>{radio.title}</h4>
                                            {radio.values.map((val, j) => (
                                                <div key={j} className="radio" onChange={e => this.setActiveOptions(
                                                    radio.id,
                                                    radio.values[e.target.value].value
                                                )}>
                                                    <input
                                                        type="radio"
                                                        id={radio.id + val.name.replace(/\s/g, "")}
                                                        name={radio.id + radio.title.replace(/\s/g, "")}
                                                        value={j}
                                                        defaultChecked={j === 0}
                                                    />
                                                    <label htmlFor={radio.id + val.name.replace(/\s/g, "")}>{val.name}</label>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>}
                            </div>}
                        </div>
                    </div>
                    <CodeFigure >
                        {cloneElement(this.state.activeTab.component,
                            this.state.activeOptions.reduce((acc, currentOption) => ({
                                ...acc,
                                ...currentOption.value
                            }), {})
                        )}
                    </CodeFigure>
                </>
            );

        }
    }

    return (
        <>
            {showCasePanel ? (showCasePanelAdvanced ? <ShowCasePanelAdvanced showCasePanelAdvanced={showCasePanelAdvanced} /> : <ShowCasePanel />) : null}
            {codeFigure && !showCasePanelAdvanced ? <CodeFigure>{children}</CodeFigure> : null}
        </>
    );
};

ComponentPreview.propTypes = {
    language: PropTypes.oneOf(["html", "javascript", "css"]).isRequired,
    removeOuterTag: PropTypes.bool,
    hideValue: PropTypes.bool,
    removeList: PropTypes.bool,
    showCasePanel: PropTypes.bool,
    showCasePanelSm: PropTypes.bool,
    codeFigure: PropTypes.bool,
    dangerousHTML: PropTypes.bool,
    negative: PropTypes.bool
};

export default ComponentPreview;
