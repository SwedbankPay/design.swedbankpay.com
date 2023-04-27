import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import BreadcrumbComponent from "@components/Breadcrumb";
import CodeTags from "@components/CodeTags";

const BasicBreadCrumb = () => {
	const items = [
		{
			title: "Home",
			href: "#",
		},
		{
			title: "Products",
			href: "#",
		},
		{
			title: "Gadgets",
			href: "#",
		},
		{ title: "Gadget #1" },
	];

	return (
		<>
			<h2 id="basic-usage">Basic usage</h2>
			<p>
				Add class <CodeTags type="secondary" code=".breadcrumb" /> to a
				containing <CodeTags type="primary" code={"<ol>"} /> element and nest a{" "}
				<CodeTags type="primary" code={"<a>"} /> or{" "}
				<CodeTags type="primary" code={"<span>"} /> element inside the{" "}
				<CodeTags type="primary" code={"<li>"} /> elements.
			</p>
			<ComponentPreview language="html" showCasePanel codeFigure>
				<BreadcrumbComponent items={items} />
			</ComponentPreview>
		</>
	);
};

const DisabledBreadcrumb = () => {
	const items = [
		{
			title: "Home",
			href: "#",
		},
		{ title: "Products" },
		{
			title: "Gadgets",
			href: "#",
		},
		{ title: "Gadget #1" },
	];

	return (
		<>
			<h2 id="disable-a-breadcrumb">Disable a breadcrumb</h2>
			<p>
				To disable a breadcrumb element, simply use a{" "}
				<CodeTags type="primary" code={"<span>"} /> element within the{" "}
				<CodeTags type="primary" code={"<li>"} /> element (will not work for
				last-child).
			</p>
			<ComponentPreview language="html" showCasePanel codeFigure>
				<BreadcrumbComponent items={items} />
			</ComponentPreview>
		</>
	);
};

const Breadcrumb = () => (
	<DocContainer>
		<p className="lead">
			Breadcrumbs are a good way to display your current location. This is
			usually used when you have multiple layers of content.
		</p>
		<BasicBreadCrumb />
		<DisabledBreadcrumb />
	</DocContainer>
);

export default Breadcrumb;

/* For testing */
export { BasicBreadCrumb, DisabledBreadcrumb };
