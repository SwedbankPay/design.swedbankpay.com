import React, { Component, cloneElement } from "react";
import PropTypes from "prop-types";
import { renderToStaticMarkup } from "react-dom/server";
import jsbeautifier from "js-beautify";
import { tabs, accordion, sheet, tooltips } from "@src/scripts/main";

// NOTE: dangerousHTML prop is used when wanting to show html in the codefigure without encoding.

const ComponentPreview = ({
	children,
	language,
	removeOuterTag,
	hideValue,
	hideCodeFigure,
	removeList,
	showCasePanel,
	showCasePanelAdvanced,
	showCasePanelSm,
	codeFigure,
	dangerousHTML,
	negative,
	showExpandPreview = false,
}) => {
	const _removeOuterTag = (element) => {
		const div = document.createElement("div");

		div.innerHTML = renderToStaticMarkup(element);

		if (div.firstElementChild) {
			return div.firstElementChild.innerHTML;
		} else if (div.firstChild) {
			return div.firstChild.nodeValue;
		}

		return "Check ComponentPreview _removeOuterTag!";
	};

	const _removeList = (element) => {
		const div = document.createElement("div");

		div.innerHTML = renderToStaticMarkup(element);

		const listElements = div.querySelectorAll("li");
		let htmlString = "";

		listElements.forEach((el) => {
			htmlString += `${el.innerHTML} \n`;
		});

		return htmlString;
	};

	const _removeEmpty = (val) => {
		val = val.replace(/=""/g, "");
		val = val.replace(/ class>/g, ">");
		val = val.replace(/ class /g, " ");
		val = val.replace(/value /g, "");

		return val;
	};

	const setDangerousHtml = (val) => {
		let code = "";

		if (typeof val.forEach === "function") {
			val.forEach((v) => (code += `${v}\n`));
		} else {
			code = val;
		}

		return code;
	};

	const CodeFigure = ({ children }) => {
		let code = "";

		if (language === "html" && dangerousHTML) {
			code = setDangerousHtml(children);
		} else if (
			language === "html" &&
			children &&
			typeof children.map === "function"
		) {
			children.map((child) => {
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
					children.forEach((child) => (code += child));

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
			case "terminal":
			case "json":
				break;
			default:
				return "update switchcase!";
		}

		const copyToClipboard = (e) => {
			navigator.clipboard.writeText(code);

			const tip = document.getElementById("tooltipCopy");

			tip.innerHTML = "Copied!";
		};

		return (
			<figure>
				<div className="code-view">
					<header className="code-view-header">
						{language.toUpperCase()}
						<button
							aria-describedby="tooltipCopy"
							className="tooltip"
							onClick={(e) => copyToClipboard(e)}
						>
							<i className="at-clipboard small" aria-hidden="true"></i>
							<div role="tooltip" id="tooltipCopy">
								Copy to clipboard
							</div>
						</button>
					</header>
					<table className="code-view-table">
						<tbody>
							<tr>
								<td className="code-view-numbers">
									<pre>
										{code.split("\n").map((line, i) => (
											<React.Fragment key={i}>
												{i + 1}
												{"\n"}
											</React.Fragment>
										))}
									</pre>
								</td>
								<td className="code-view-code">
									<pre>
										{code.split("\n").map((line, i) => (
											<React.Fragment key={i}>
												{line}
												{"\n"}
											</React.Fragment>
										))}
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
		<div
			className={`showcase-panel${showCasePanelSm ? " showcasepanel-sm" : ""}${
				negative ? " showcase-panel-negative" : ""
			}`}
		>
			{children}
		</div>
	);

	class ShowCasePanelAdvanced extends Component {
		constructor(props) {
			super(props);

			this.state = {
				activeTab: this.props.showCasePanelAdvanced.elements[0],
				hideOptions: this.props.showCasePanelAdvanced.hideOptions,
				optionsOpen: window.innerWidth > 1200, // XL grid breakpoint
				activeOptions: this.props.showCasePanelAdvanced.elements[0]
					.activeOptions
					? [...this.props.showCasePanelAdvanced.elements[0].activeOptions]
					: [],
				previewExpanded: false,
			};
		}

		_resetOptions() {
			const showcasePanel = document.getElementById(
				this.props.showCasePanelAdvanced.id,
			);
			const optionsPanel = showcasePanel.querySelector(".options");

			showcasePanel
				.querySelectorAll("input[type=checkbox]")
				.forEach((checkbox) => (checkbox.checked = false));
			showcasePanel
				.querySelectorAll("select[id]")
				.forEach((dropdown) => (dropdown.value = 0));
			optionsPanel
				.querySelectorAll(".radio")
				.forEach((radio) => (radio.querySelector("input").checked = false));

			const defaultRadios = [...optionsPanel.querySelectorAll(".radio")].filter(
				(radio) => radio.querySelector("input").id.includes("default"),
			);

			if (defaultRadios.length > 0) {
				const defaultRadiosGroups = defaultRadios.map(
					(radio) => radio.querySelector("input").name,
				);

				defaultRadios.map(
					(radio) => (radio.querySelector("input").checked = true),
				);

				// Reset radio groups that do not have default specified (set to top radio). Needs to be done when one or more radio button is specified as default
				[...optionsPanel.querySelectorAll(".radio")]
					.filter(
						(radio) =>
							!defaultRadiosGroups.includes(radio.querySelector("input").name),
					)
					.map(
						(radio) =>
							(radio.querySelector("input").checked =
								radio.querySelector("input").value === "0"),
					);
			} else {
				optionsPanel
					.querySelectorAll(".radio")
					.forEach(
						(radio) =>
							(radio.querySelector("input").checked =
								radio.querySelector("input").value === "0"),
					);
			}
		}

		componentDidMount() {
			tabs.init(this.props.showCasePanelAdvanced.tabsId);
			this._resetOptions();
			tooltips.init();
		}

		componentDidUpdate(prevProps, prevState) {
			if (prevState.activeTab !== this.state.activeTab) {
				this._resetOptions();
			}

			if (this.state.activeTab.component.props.id === "tabs-showcase-example") {
				tabs.init("tabs-showcase-example");
			}

			if (this.state.activeTab.component.props.id === "sheet-showcase") {
				sheet.init();
			}

			if (this.state.activeTab.component.props.id === "accordion-showcase") {
				accordion.init();
			}
		}

		setActiveTab(e, i) {
			e.preventDefault();

			this.setState((prevState) => ({
				...prevState,
				activeTab: this.props.showCasePanelAdvanced.elements[i],
				activeOptions: this.props.showCasePanelAdvanced.elements[i]
					.activeOptions
					? [...this.props.showCasePanelAdvanced.elements[i].activeOptions]
					: [],
			}));
		}

		setActiveOptions(id, value, description, checkbox) {
			if (checkbox) {
				if (
					this.state.activeOptions.filter((option) => id === option.id).length >
					0
				) {
					this.setState((prevState) => ({
						...prevState,
						activeOptions: this.state.activeOptions.filter(
							(option) => id !== option.id,
						),
					}));
				} else {
					this.setState((prevState) => ({
						...prevState,
						activeOptions: [
							...this.state.activeOptions,
							{
								id,
								value,
								description,
							},
						],
					}));
				}
			} else {
				this.setState((prevState) => ({
					...prevState,
					activeOptions: [
						...this.state.activeOptions.filter((option) => id !== option.id),
						{
							id,
							value,
							description,
						},
					],
				}));
			}
		}

		setOptionsMenuState(e, state) {
			if (e.keyCode === 13) {
				this.setState({ optionsOpen: state });
			}
		}

		setExpandedPreview(state) {
			this.setState({ previewExpanded: state });

			if (state) {
				document.body.dataset.previewExpandedHasVscroll = "true";
			} else {
				delete document.body.dataset.previewExpandedHasVscroll;
			}
		}

		render() {
			return (
				<>
					<div
						id={this.props.showCasePanelAdvanced.id}
						className={`showcase-panel showcase-panel-advanced${
							this.state.optionsOpen ? " options-active" : ""
						}${this.state.hideOptions ? " hide-options" : ""}
						${this.state.previewExpanded ? " preview-expanded" : ""}`}
					>
						<div
							id={this.props.showCasePanelAdvanced.tabsId}
							className="tabs tabs-scroll"
						>
							<ul id={`${this.props.showCasePanelAdvanced.tabsId}-ul`}>
								{this.props.showExpandPreview &&
									(!this.state.previewExpanded ? (
										<button
											className="btn btn-icon btn-xs glow-on-hover"
											type="button"
											aria-label="Expand the preview container to full screen"
											onClick={() => this.setExpandedPreview(true)}
										>
											<i
												className="at-arrows-up-right-down-left"
												aria-hidden="true"
											></i>
										</button>
									) : (
										<button
											className="btn btn-icon btn-xs glow-on-hover"
											type="button"
											aria-label="Zoom out"
											onClick={() => this.setExpandedPreview(false)}
										>
											<i className="at-zoom-out-arrows" aria-hidden="true"></i>
										</button>
									))}
								{this.props.showCasePanelAdvanced.elements.map((element, i) => (
									<li
										key={i}
										className={`${
											this.state.activeTab.tab === element.tab ? "active" : null
										}`}
									>
										<a href="#" onClick={(e) => this.setActiveTab(e, i)}>
											{element.tab}
										</a>
									</li>
								))}
							</ul>
							<div
								className={`options-open${
									this.state.optionsOpen ? " hidden" : ""
								}${this.state.hideOptions ? " d-none" : ""}`}
							>
								<button
									className="open-options-menu d-flex"
									aria-label="Open options menu"
									onKeyDown={(e) => this.setOptionsMenuState(e, true)}
									onClick={() => this.setState({ optionsOpen: true })}
								>
									<i className="at-arrow-right-line" aria-hidden="true"></i>
								</button>
							</div>
						</div>
						<div className="d-flex">
							<div className="d-flex flex-column flex-fill">
								<div className="component-preview flex-fill">
									<div
										className={`component-preview-content${
											this.state.activeTab.altBackground
												? " component-preview-alt-background"
												: ""
										}`}
									>
										{cloneElement(
											this.state.activeTab.component,
											this.state.activeOptions.reduce(
												(acc, currentOption) => ({
													...acc,
													...currentOption.value,
												}),
												{},
											),
										)}
									</div>
								</div>
								<div className="component-description">
									{this.state.activeTab.title && (
										<h3>{this.state.activeTab.title}</h3>
									)}
									{this.state.activeTab.description}
									{this.state.activeOptions
										.filter((currentOption) => currentOption.description)
										.reduce(
											(acc, currentOption) => [
												...acc,
												currentOption.description,
											],
											[],
										)
										.map((currentOptionDescription, i) => (
											<React.Fragment key={i}>
												{currentOptionDescription}
											</React.Fragment>
										))}
								</div>
							</div>
							{
								<div
									className={`options${
										this.state.optionsOpen ? " active" : ""
									}${this.state.hideOptions ? " d-none" : ""}`}
								>
									<div className="options-header">
										Options
										<button
											className="options-close d-flex"
											aria-label="Close options menu"
											onKeyDown={(e) => this.setOptionsMenuState(e, false)}
											onClick={() => this.setState({ optionsOpen: false })}
										>
											<i className="at-arrow-left-line" aria-hidden="true"></i>
										</button>
									</div>
									{this.state.activeTab.options && (
										<form className="options-body">
											{this.state.activeTab.options.checkbox &&
												this.state.activeTab.options.checkbox.map(
													(checkbox, i) => (
														<fieldset className="mb-4" key={i}>
															{checkbox.title && (
																<legend className="h4">{checkbox.title}</legend>
															)}
															{checkbox.inputs.map((input, i) => (
																<div
																	key={i}
																	className="checkbox"
																	onChange={() =>
																		this.setActiveOptions(
																			input.id,
																			input.value,
																			input.description,
																			true,
																		)
																	}
																>
																	<input type="checkbox" id={input.id} />
																	<label htmlFor={input.id}>{input.name}</label>
																</div>
															))}
														</fieldset>
													),
												)}
											{this.state.activeTab.options.dropdown &&
												this.state.activeTab.options.dropdown.map(
													(dropdown, i) => (
														<fieldset key={i} className="mb-4">
															<legend>{dropdown.title}</legend>
															<select
																id={dropdown.id}
																className="form-control"
																onChange={(e) =>
																	this.setActiveOptions(
																		dropdown.id,
																		dropdown.values[e.target.value].value,
																		dropdown.values[e.target.value].description,
																	)
																}
															>
																{dropdown.values.map((val, j) => (
																	<option key={j} value={j}>
																		{val.name}
																	</option>
																))}
															</select>
														</fieldset>
													),
												)}
											{this.state.activeTab.options.radio &&
												this.state.activeTab.options.radio.map((radio, i) => (
													<fieldset className="mb-4" key={i}>
														<legend className="h4">{radio.title}</legend>
														{radio.values.map((val, j) => (
															<div
																key={j}
																className={`radio${
																	val.toBeRemoved ? " d-block" : ""
																}`}
																onChange={(e) =>
																	this.setActiveOptions(
																		radio.id,
																		radio.values[e.target.value].value,
																		radio.values[e.target.value].description,
																	)
																}
															>
																<input
																	type="radio"
																	id={`${
																		radio.id + val.name.replace(/\s/g, "")
																	}${val.default ? "_default" : ""}`}
																	name={
																		radio.id + radio.title.replace(/\s/g, "")
																	}
																	value={j}
																	defaultChecked={val.default}
																/>
																<label
																	htmlFor={`${
																		radio.id + val.name.replace(/\s/g, "")
																	}${val.default ? "_default" : ""}`}
																>
																	{val.name}
																</label>
																{val.toBeRemoved ? (
																	<span className="status-badge status-badge-remove my-1">
																		To be removed
																	</span>
																) : null}
															</div>
														))}
													</fieldset>
												))}
										</form>
									)}
								</div>
							}
						</div>
					</div>
					{!hideCodeFigure && (
						<CodeFigure>
							{cloneElement(
								this.state.activeTab.component,
								this.state.activeOptions.reduce(
									(acc, currentOption) => ({
										...acc,
										...currentOption.value,
									}),
									{},
								),
							)}
						</CodeFigure>
					)}
				</>
			);
		}
	}

	return (
		<>
			{showCasePanel ? (
				showCasePanelAdvanced ? (
					<ShowCasePanelAdvanced
						showCasePanelAdvanced={showCasePanelAdvanced}
						showExpandPreview={showExpandPreview}
					/>
				) : (
					<ShowCasePanel />
				)
			) : null}
			{codeFigure && !showCasePanelAdvanced ? (
				<CodeFigure>{children}</CodeFigure>
			) : null}
		</>
	);
};

ComponentPreview.propTypes = {
	language: PropTypes.oneOf(["html", "javascript", "css", "terminal", "json"])
		.isRequired,
	removeOuterTag: PropTypes.bool,
	hideCodeFigure: PropTypes.bool,
	hideValue: PropTypes.bool,
	removeList: PropTypes.bool,
	showCasePanel: PropTypes.bool,
	showCasePanelSm: PropTypes.bool,
	showCasePanelAdvanced: PropTypes.object,
	codeFigure: PropTypes.bool,
	dangerousHTML: PropTypes.bool,
	negative: PropTypes.bool,
	showExpandPreview: PropTypes.bool,
};

export default ComponentPreview;
