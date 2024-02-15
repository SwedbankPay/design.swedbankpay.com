import React, { useEffect } from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import InputGroup from "@components/InputGroup";
import { selectOverview, whenToUse } from "./constants";
import CodeTags from "@components/CodeTags";
import { datepicker } from "@src/scripts/main";
import AlertComponent from "@components/Alert";
import { Link } from "react-router-dom";

const WhenToUse = () => (
	<>
		<p>{whenToUse.lead}</p>
		{whenToUse.content.map(
			({ correct, placeholder, selectOptions, label, text }, i) => (
				<React.Fragment key={i}>
					<div className="row how-to-use mb-3">
						<div className="col-12 col-sm-6">
							<div className="slab slab-plain slab-border-success">
								<span className="h3 d-block mb-3">Do</span>
								{correct}
							</div>
						</div>
						<div className="col-12 col-sm-6">
							<div className="slab slab-plain slab-border-error">
								<span className="h3 d-block mb-3">Don&#x27;t</span>
								<div>
									<InputGroup
										type="select"
										id={`dont-example-${i}`}
										label={label}
										placeholder={placeholder}
										selectOptions={selectOptions}
									/>
								</div>
							</div>
						</div>
					</div>
					{text}
				</React.Fragment>
			),
		)}
	</>
);

const Overview = () => (
	<section>
		<h2 id="overview">Overview</h2>
		<p>
			If you want the select functionality, but designed as a button, consider
			using the <Link to="/components/dropdown">dropdown</Link> component.
		</p>
		<ComponentPreview
			language="html"
			codeFigure
			showCasePanel
			showCasePanelAdvanced={selectOverview}
		/>

		<AlertComponent
			id="input-group-info"
			type="informative"
			text={
				<p>
					<b>Styling: </b>The Select component is part of the input group.
					Therefore, be sure to import the input-group style file to give your
					Select the appropriate styling.
				</p>
			}
			icon="info-circle"
		/>

		{/*
            Will be back in a later release

        <h3>When to consider something else</h3>
        <ul className="pl-3">
            <li>To present a list of possible navigation options or actions that for example effects the filtering of the page, use the <Link to="/components/dropdown-menu">Dropdown menu</Link> component instead of a Select. </li>
        </ul> */}

		<h3>When to consider something else</h3>

		<WhenToUse />
	</section>
);

const ContentGuidelines = () => (
	<section>
		<h2 id="content-guidelines">Content guidelines</h2>

		<div className="d-flex justify-content-center slab slab-plain px-5 pt-5 pb-4">
			<InputGroup
				type="select"
				id="content-guidelines-example"
				label="Label"
				selectOptions={["Related option"]}
				helpBlock="Hint text"
				hintTextId="select-content-guidelines-example"
			/>
		</div>
		<ul className="pl-3">
			<li>
				The <b>Label</b> should be short, concise and clearly describe what the
				user is selecting. If the user is not required to select an option,
				label it as “optional”.
			</li>
			<li>
				The <b>Placeholder text</b> should begin with the verb
				&quot;Select..&quot; preferably followed by what type of options the
				user is choosing from.
			</li>
			<li>
				A <b>hint text</b> can be used to complement the label and provide
				clarifying details. If the information is long or won&apos;t be needed
				by the majority of users, a hint expander can be used instead of a text
				that is visible by default.{" "}
			</li>
		</ul>
	</section>
);

const DeveloperDocumentation = () => (
	<section>
		<h2 id="developer-documentation">Developer documentation</h2>
		<section>
			<h3>Error state</h3>
			<p>
				If the user don’t select any option in a select that is required to be
				filled, an error message should be displayed. To display the error
				message, add the <CodeTags type="secondary" code={".has-error"} /> class
				to the parent element, then add the{" "}
				<CodeTags type="secondary" code={".help-block"} /> element as the last
				child with the error message.
			</p>

			<ComponentPreview language="html" codeFigure showCasePanel>
				<form className="no-pointer-events">
					<div className="form-group has-error">
						{"\n"}
						<label htmlFor="dev-doc-example">
							{"\n"}
							Label{"\n"}
						</label>
						{"\n"}
						<select
							className="form-control"
							defaultValue="placeholder"
							id="dev-doc-example"
							required
						>
							{"\n"}
							<option value="placeholder" disabled hidden>
								Select option
							</option>
							{"\n"}
						</select>
						<div className="help-block">Descriptive helpful error message</div>
					</div>
				</form>
			</ComponentPreview>
		</section>

		<section>
			<h3>Disabled state</h3>
			<p>
				Disable a select by adding the{" "}
				<CodeTags type="primary" code="disabled" /> attribute to the desired
				select and the <CodeTags type="primary" code="form-group" /> where the
				select resides.
			</p>
			<ComponentPreview language="html" codeFigure showCasePanel>
				<InputGroup
					type="select"
					id="disabled-state-example"
					label="Label"
					placeholder="Select option"
					selectOptions={[]}
					disabled
				/>
			</ComponentPreview>
		</section>
	</section>
);

const Select = () => {
	useEffect(() => {
		datepicker.init();
	});

	return (
		<DocContainer>
			<section id="select-doc">
				<p className="lead">
					The select component is used in forms and allows the user to select a
					desired value. When activated the component expands and presents a
					scrollable list of pre-defined options which user can choose from.
				</p>
				<Overview />
				<ContentGuidelines />
				<DeveloperDocumentation />
			</section>
		</DocContainer>
	);
};

export default Select;

export { Overview, WhenToUse, ContentGuidelines, DeveloperDocumentation };
