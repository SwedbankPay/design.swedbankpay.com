import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
	ComponentPreview,
	DocContainer,
	JavascriptDocs,
	EditableComponentPreview,
} from "@docutils";
import Alert from "@components/Alert";
import DialogComponent, {
	DialogOld as DialogOldComponent,
} from "@components/Dialog";
import { dialogShowcase } from "./constants";
import CodeTags from "@components/CodeTags";

import { dialog } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const HowItWorks = () => (
	<>
		<h2 id="how-it-works">How it works</h2>
		<p>
			A dialog remains hidden until it is triggered. Once it is open it overlays
			the website with a dark background and presents some options, usually
			confirming or cancelling an action. If you use a dialog it is assumed that
			you want to &quot;force&quot; the user to make a choice. Therefore the
			only way to close a dialog is to choose one of the presented actions or,
			if given, press the{" "}
			<i
				className="swepay-icon-close d-inline-flex"
				aria-label="close button"
			></i>{" "}
			to close the dialog.
		</p>
		<p>
			Dialog boxes consist of a header, a body and a footer. In these you can
			put whatever you want, but some basic functionality should be included in
			all dialogs. The header should contain a short descriptive text for what
			the dialog-box does. You can include an icon with class{" "}
			<CodeTags type="secondary" code=".dialog-close" /> if you wish to give
			your user a way to close the dialog box without choosing an option. The
			dialog body should contain the main content, usually just text confirming
			an action. In the footer you will find buttons to confirm or cancel the
			requested action.
		</p>
		<Alert
			type="warning"
			icon="swepay-icon-warning-triangle-filled"
			text={
				<p>
					<b>Initializing dialog buttons:</b> To make a button open the dialog
					box you need to include{" "}
					<CodeTags
						type="secondary"
						code={'data-dialog-open="{#your-dialog-id}"'}
					/>{" "}
					as an attribute to that button.
				</p>
			}
		/>
	</>
);

const Overview = () => (
	<>
		<h2 id="overview">Dialog (the modern way 🌟)</h2>
		<ComponentPreview
			language="html"
			showCasePanel
			showCasePanelAdvanced={dialogShowcase}
			removeOuterTag={false}
		/>
	</>
);

const ExampleOldSyntax = () => (
	<>
		<h2 id="overview">
			Example Old Dialog component - silent support until next major release
		</h2>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<button
				className="btn btn-primary"
				type="button"
				data-dialog-open="demo-dialog-old-syntax"
			>
				{"\n"}Open dialog{"\n"}
			</button>
			<DialogOldComponent diaHeader="Delete" diaId="demo-dialog-old-syntax">
				<p>
					You’re about to permanently delete <i>German Swashbuckle (456)?</i>
				</p>
			</DialogOldComponent>
		</ComponentPreview>
	</>
);

const JavascriptMethods = () => (
	<>
		<h2 id="javascript-methods">JavaScript methods</h2>
		<JavascriptDocs componentName="dialog" open close />
	</>
);

const Dialog = () => {
	useEffect(() => {
		dialog.init();
	});

	return (
		<DocContainer>
			<p className="lead">
				Dialog is meant to be used to show a snippet of text like a confirmation
				box before you delete something. Use{" "}
				<Link to="/components/sheet">sheet</Link> if you wish to receive input
				from the user or display a large chunk of information.
			</p>
			<HowItWorks />
			<Overview />
			<ExampleOldSyntax />
			<JavascriptMethods />
			<NpmInformation componentName={"dialog"} />
		</DocContainer>
	);
};

export default Dialog;

/* For testing */
export { HowItWorks, Overview, JavascriptMethods };
