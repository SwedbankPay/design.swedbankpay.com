import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import MediaObjectComponent from "@components/MediaObject";
import CodeTags from "@components/CodeTags";

const brand = process.env.brand;

const Overview = () => (
	<>
		<h2 id="overview">Overview</h2>
		<p>
			Use the <CodeTags type="secondary" code=".media" /> class on an object to
			style it as a small container that feature a left- or right-aligned
			image/icon alongside textual content.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<MediaObjectComponent
				imgUrl="https://via.placeholder.com/48x48"
				heading="Bob Corlsan"
				text={`bob.corlsan@${brand}.com`}
			/>
			<MediaObjectComponent
				icon="at-customer-service-agent"
				heading="Bob Corlsan"
				text={`bob.corlsan@${brand}.com`}
			/>
		</ComponentPreview>
	</>
);

const Sizes = () => (
	<>
		<h2 id="sizes">Sizes</h2>
		<p>
			Use <CodeTags type="secondary" code=".media-sm" /> or{" "}
			<CodeTags type="secondary" code=".media-lg" /> to modify the size of your
			media objects.
		</p>
		<h3>Small</h3>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<MediaObjectComponent
				size="sm"
				imgUrl="https://via.placeholder.com/40x40"
				heading="Bob Corlsan"
				text={`bob.corlsan@${brand}.com`}
			/>
			<MediaObjectComponent
				size="sm"
				icon="at-customer-service-agent"
				heading="Bob Corlsan"
				text={`bob.corlsan@${brand}.com`}
			/>
		</ComponentPreview>
		<h3>Large</h3>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<MediaObjectComponent
				size="lg"
				imgUrl="https://via.placeholder.com/56x56"
				heading="Bob Corlsan"
				text={`bob.corlsan@${brand}.com`}
			/>
			<MediaObjectComponent
				size="lg"
				icon="at-customer-service-agent"
				heading="Bob Corlsan"
				text={`bob.corlsan@${brand}.com`}
			/>
		</ComponentPreview>
	</>
);

const MediaPosition = () => (
	<>
		<h2 id="media-position">Media position</h2>
		<p>
			Use the <CodeTags type="secondary" code=".media-right" /> class to align
			the media content to the right.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<MediaObjectComponent
				mediaRight
				imgUrl="https://via.placeholder.com/48x48"
				heading="Bob Corlsan"
				text={`bob.corlsan@${brand}.com`}
			/>
			<MediaObjectComponent
				mediaRight
				icon="at-customer-service-agent"
				heading="Bob Corlsan"
				text={`bob.corlsan@${brand}.com`}
			/>
		</ComponentPreview>
	</>
);

const MediaObject = () => (
	<DocContainer>
		<p className="lead">
			Use media objects to showcase basic user information with text and a small
			image element or an icon.
		</p>
		<Overview />
		<Sizes />
		<MediaPosition />
	</DocContainer>
);

export default MediaObject;

/* For testing */
export { Overview, Sizes, MediaPosition };
