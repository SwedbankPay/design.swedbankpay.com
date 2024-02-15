import React, { forwardRef, useRef } from "react";
import { ComponentPreview, DocContainer } from "@docutils";
import ActionLinkComponent from "@components/ActionLink";
import LinkComponent from "@components/Link";
import ButtonComponent from "@components/Button";
import InputComponent from "@components/InputGroup";
import CheckboxComponent from "@components/FormComponents/Checkbox";
import { Link } from "react-router-dom";
import {
	overviewLinks,
	overviewActionLinks,
	guidelinesContent,
} from "./constants";
import CodeTags from "~/src/App/components/CodeTags";

const Overview = ({ scrollToRef }) => (
	<section>
		<h2 id="overview">Overview</h2>
		<p>
			Links should be used when you want to direct a user to a new section, page
			or website. They can be used on their own or inline within paragraphs.
		</p>
		<ComponentPreview
			language="html"
			showCasePanel
			showCasePanelAdvanced={overviewLinks}
			codeFigure
			removeOuterTag
		/>

		<span className="h3 d-inline-block mt-3">
			When to consider something else
		</span>
		<ul className="list list-bullet">
			<li>
				Use a <Link to="/components/buttons">button</Link> instead of a link for
				actions. As a general rule, if the user is making changes to the back or
				front-end of the site when clicking, you should use a button. If the
				user is being directed to a different page, you can use link.
			</li>
			<li>
				If you have a collection of links and want to highlight and make them
				appear more as call to actions consider using{" "}
				<a href="javascript:;" onClick={() => scrollToRef()}>
					action links
				</a>
			</li>
		</ul>
		<h3>How to use links</h3>

		<div className="row">
			<div className="col-12">
				<div className="slab slab-plain slab-border-error pb-5 h100">
					<h4>Don&apos;t</h4>
					<div className="loader-preview-container d-flex justify-content-center align-items-center mt-3 pt-3">
						<p>
							Paragraph text with a{" "}
							<LinkComponent
								linkText="Inline link"
								leftIcon="at-pencil small"
							/>
							.
						</p>
					</div>
				</div>
				<p>
					Don&apos;t use a leading icon or strip the underline from an inline
					link.{" "}
				</p>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-6">
				<div className="slab slab-plain slab-border-success pb-5 h100">
					<h4>Do</h4>
					<div className="d-flex justify-content-center mt-4 mb-4">
						<div className="link-dark-background py-5 px-5">
							<LinkComponent linkText="Standalone link" bright />
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="slab slab-plain slab-border-error pb-5 h100">
					<h4>{"Don't"}</h4>
					<div className="d-flex justify-content-center mt-4 mb-4">
						<div className="link-dark-background p-5">
							<LinkComponent linkText="Standalone link" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<p className="mt-3">
			If the background is too dark for the regular link color add{" "}
			<CodeTags type="secondary" code=".bright" />.
		</p>
	</section>
);

const ActionLink = forwardRef((props, ref) => (
	<section id="action-link-container" ref={ref}>
		<h2 id="action-links">Action links</h2>
		<p>
			Although links are to be used for navigation and not actions we sometimes
			have a need to highlight links and make them appear more as call to
			actions. In this case Action links, that will redirect the user to perform
			an action on another page, can be used. Actions links are normally used in
			a collection consisting of a few different action links with equally
			important actions to be made.
		</p>
		<ComponentPreview
			language="html"
			showCasePanel
			showCasePanelAdvanced={overviewActionLinks}
			codeFigure
			removeOuterTag
		/>
		<span className="h3 d-inline-block mt-3">
			When to consider something else
		</span>
		<ul className="list list-bullet">
			<li>
				Use a <Link to="/components/buttons">button</Link> instead of a link an
				action. As a general rule, if the user is making changes to the back or
				front-end of the site when clicking, you should use a button. If the
				user is being directed to a different page, you can use link.
			</li>
			<li>
				Use a standalone <Link to="/components/links">link</Link> instead of a
				action link if you don&apos;t need to highlight and make the links
				appear more as call to actions.
			</li>
		</ul>
		<h3>How to use action links</h3>
		<div className="row">
			<div className="col-lg-6">
				<div className="slab slab-plain slab-border-success pb-5 h-100">
					<h4>Do</h4>
					<div className="d-flex justify-content-center mt-4 mb-2 flex-column">
						<InputComponent type="text" label="Name" />
						<InputComponent
							type="text"
							label="Email"
							placeholder="name@email.com"
						/>
						<CheckboxComponent
							label="I agree to terms of use"
							id="terms-success-example"
						/>
						<ButtonComponent type="primary" label="Submit" fullWidth />
					</div>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="slab slab-plain slab-border-error pb-5 h-100">
					<h4>Don&apos;t</h4>
					<div className="d-flex justify-content-center mt-4 mb-2 flex-column">
						<InputComponent type="text" label="Name" />
						<InputComponent
							type="text"
							label="Email"
							placeholder="name@email.com"
						/>
						<CheckboxComponent
							label="I agree to terms of use"
							id="terms-error-example"
						/>
						<ActionLinkComponent linkText="Submit" />
					</div>
				</div>
			</div>
		</div>
		<p className="mt-3">
			Use a <Link to="/components/buttons">button</Link> instead of an action
			link for an action like for instance submitting a form.
		</p>
	</section>
));

const ContentGuidelines = () => (
	<section id="link-content-guidelines-container">
		<h2 id="content-guidelines">Content guidelines</h2>
		{guidelinesContent.map(({ slabs, text }, i) => (
			<div className="row" key={i}>
				{slabs.map(({ content, type }, i) => (
					<div className="col-lg-6" key={i}>
						<div className={`slab slab-plain slab-border-${type} h-100 pb-5`}>
							<h4>{type === "success" ? "Do" : "Don't"}</h4>
							<div className="d-flex mb-2  h-100 align-items-center">
								{content}
							</div>
						</div>
					</div>
				))}
				<div className="col-12 pb-4 pt-2">{text}</div>
			</div>
		))}
	</section>
);

const Links = () => {
	const actionLinkRef = useRef();
	const scrollToRef = () => actionLinkRef.current.scrollIntoView();

	return (
		<DocContainer>
			<section id="link-doc">
				<p className="lead">
					Links are used as navigational elements and can be used on their own
					or inline within paragraphs of text.
				</p>
				<Overview scrollToRef={scrollToRef} />
				<ActionLink ref={actionLinkRef} />
				<ContentGuidelines />
			</section>
		</DocContainer>
	);
};

ActionLink.displayName = "Action link";

export default Links;

/* for testing */
export { Overview, ActionLink, ContentGuidelines };
