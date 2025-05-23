import React from "react";
import * as tableData from "./constants";

import { ComponentPreview, DocContainer } from "@docutils";
import IconPreview from "@components/IconPreview";
import CodeTags from "@components/CodeTags";

const brandTitle = process.env.brandTitle;

const AtlasIcons = () => (
	<section>
		<h2 id="atlas-icons">Atlas Icons</h2>
		<p className="mb-0">
			For a full overview of the available icons, please, visit the
			https://atlasicons.vectopus.com .{" "}
		</p>

		<a
			href="https://atlasicons.vectopus.com"
			className="icon-link"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i
				className="at-arrow-up-from-square small align-self-baseline"
				aria-hidden="true"
			></i>
			<span className="ml-2">Atlas Icons Overview</span>
		</a>

		<h3>Example of how to implement icons</h3>
		<p>
			To use an icon, provide the following markup:{" "}
			<CodeTags
				type="primary"
				code={'<i class="at-{icon_name}" aria-hidden="true"></i>'}
			/>
		</p>
		<div className="d-flex justify-content-between p-4">
			{tableData.atlasIcons.map((icon) => (
				<IconPreview key={icon} preview type="at" name={icon} />
			))}
		</div>
		<ComponentPreview language="html" codeFigure>
			{tableData.atlasIcons.map((icon) => (
				<React.Fragment key={icon}>
					<i className={`at-${icon}`} aria-hidden="true"></i>
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>
	</section>
);

const MaterialIcons = () => (
	<section>
		<h2 id="material-rounded-icons">Material Outlined Icons (Deprecated)</h2>
		<p className="mb-0">
			We primarily use the version called Outlined in the Material icons to
			avoid a to heavy look. For a full overview of the available icons, please,
			visit the Material.io.{" "}
		</p>

		<a
			href="https://fonts.google.com/icons?selected=Material+Icons+Outlined"
			className="icon-link"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i
				className="at-arrow-up-from-square small align-self-baseline"
				aria-hidden="true"
			></i>
			<span className="ml-2">Material Icons Overview</span>
		</a>

		<h3>Example of how to implement icons</h3>
		<p>
			To use an icon, provide the following markup:{" "}
			<CodeTags
				type="primary"
				code={'<i class="material-icons" aria-hidden="true">{icon_name}</i>'}
			/>
		</p>
		<div className="d-flex justify-content-between p-4">
			{tableData.materialIcons.map((icon) => (
				<IconPreview key={icon} preview type="material-icons" name={icon} />
			))}
		</div>
		<ComponentPreview language="html" codeFigure>
			{tableData.materialIcons.map((icon) => (
				<React.Fragment key={icon}>
					<i
						className="material-icons material-icons-outlined"
						aria-hidden="true"
					>
						{icon}
					</i>
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>
	</section>
);

const CardIcons = () => (
	<section>
		<h2 id="card-icons">Card icons</h2>
		<p>
			Card icons are typically used to show users which card providers that are
			available. The payment-card icon can be used as a placeholder and/or when
			the card is not recognized.{" "}
		</p>

		<h3>Example of how to implement card icons</h3>
		<p>
			To use an icon, provide the following markup:{" "}
			<CodeTags
				type="primary"
				code={
					'<i class="payment-icon payment-icon-{icon-name}" aria-hidden="true" /i>'
				}
			/>
		</p>

		<table className="table table-plain">
			<thead>
				<tr>
					<th>Icon</th>
					<th>Card type</th>
					<th>Code</th>
				</tr>
			</thead>
			<tbody>
				{tableData.cardIcons.map((icon) => (
					<tr key={icon.code}>
						<td>
							<IconPreview type="payment-icon" name={icon.code} />
						</td>
						<td>{icon.title}</td>
						<td>
							<CodeTags type="secondary" code={icon.code} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
		<ComponentPreview language="html" codeFigure>
			{tableData.cardIcons.map((icon) => (
				<React.Fragment key={icon.code}>
					<i
						className={`payment-icon payment-icon-${icon.code}`}
						aria-hidden="true"
					/>
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>
	</section>
);

const PaymentIcons = () => (
	<section>
		<h2 id="payment-icons">Payment icons</h2>
		<p>
			Below is a list of payment icons that we use in our products. Be mindful
			when using payment logotypes. Try to make the payment icon feel more
			secondary in combination with the {brandTitle} logotype. We always want
			the {brandTitle} logotype to be primary.
		</p>

		<h3>Example of how to implement payment icons</h3>
		<p>
			To use an icon, provide the following markup:{" "}
			<CodeTags
				type="primary"
				code={
					'<i class="payment-icon payment-icon-{icon-name}" aria-hidden="true" /i>'
				}
			/>
		</p>

		<table className="table table-plain">
			<thead>
				<tr>
					<th>Icon</th>
					<th>Payment method</th>
					<th>Code</th>
				</tr>
			</thead>
			<tbody>
				{tableData.paymentIcons.map((icon) => (
					<tr key={icon.code}>
						<td>
							<IconPreview type="payment-icon" name={icon.code} size="large" />
						</td>
						<td>{icon.title}</td>
						<td>
							<CodeTags type="secondary" code={icon.code} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
		<ComponentPreview language="html" codeFigure>
			{tableData.paymentIcons.map((icon) => (
				<React.Fragment key={icon.code}>
					<i
						className={`payment-icon payment-icon-${icon.code}`}
						aria-hidden="true"
					/>
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>
	</section>
);

const BasicUI = () => (
	<section>
		<h2 id="basic-ui">Basic UI</h2>
		<p>Below is a list of basic UI custom icons.</p>

		<h3>Example of how to implement basic UI custom icons</h3>
		<p>
			To use an icon, provide the following markup:{" "}
			<CodeTags
				type="primary"
				code={'<i class="swepay-icon-{icon-name}" aria-hidden="true" /i>'}
			/>
		</p>

		<table className="table table-plain">
			<thead>
				<tr>
					<th>Icon</th>
					<th>Code</th>
				</tr>
			</thead>
			<tbody>
				{tableData.shapes.map((icon) => (
					<tr key={icon.code}>
						<td>
							<IconPreview type="swepay-icon" name={icon.code} />
						</td>
						<td>
							<CodeTags type="secondary" code={icon.code} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
		<ComponentPreview language="html" codeFigure>
			{tableData.shapes.map((icon) => (
				<React.Fragment key={icon.code}>
					<i className={`swepay-icon-${icon.code}`} aria-hidden="true" />
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>
	</section>
);

const Sizes = () => (
	<section>
		<h2 id="sizes">Sizes</h2>
		<p>
			Icons comes with 3 sizes. Basic is a 24px box. "small" is 18px, and
			"large" 32px.{" "}
		</p>
		<div className="d-flex justify-content-between align-items-end p-4">
			{tableData.commonIconSizes.map((size, i) => (
				<React.Fragment key={size.code}>
					<IconPreview
						previewSize
						type="swepay-icon"
						name={"chevron-right"}
						size={size}
					/>
					{"\n"}
				</React.Fragment>
			))}
		</div>
		<div className="d-flex justify-content-between align-items-end p-4">
			{tableData.commonIconSizes.map((size, i) => (
				<React.Fragment key={size.code}>
					<IconPreview
						previewSize
						type="swepay-icon"
						name={"info-circle-filled"}
						size={size}
					/>
					{"\n"}
				</React.Fragment>
			))}
		</div>
		<ComponentPreview language="html" codeFigure>
			{tableData.commonIconSizes.map((size, i) => (
				<React.Fragment key={size.code}>
					<i
						className={`swepay-icon-info-circle-filled ${size.code}`}
						aria-hidden="true"
					/>
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>
	</section>
);

const Flags = () => (
	<section>
		<h2 id="flags">Flags</h2>
		<p>
			Below is a list of flag icons that we use in our system, To use the flag
			icons add the classes <CodeTags type="secondary" code=".flag-icon" /> and{" "}
			<CodeTags type="secondary" code=".flag-icon-xx" /> (where xx is the{" "}
			<a href="https://www.iso.org/obp/ui/#search">ISO_3166-1-alpha-2-code</a>{" "}
			of a country) to an empty <CodeTags type="secondary" code="<i>" />
		</p>
		<table className="table table-plain">
			<thead>
				<tr>
					<th>Icon</th>
					<th>Country</th>
					<th>Code</th>
				</tr>
			</thead>
			<tbody>
				{tableData.flags.map((icon) => (
					<tr key={icon.code}>
						<td>
							<IconPreview type="flag-icon" name={icon.code} size="medium" />
						</td>
						<td>{icon.title}</td>
						<td>
							<CodeTags type="secondary" code={icon.code} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
		<ComponentPreview language="html" codeFigure>
			{tableData.flags.map((flag) => (
				<React.Fragment key={flag.code}>
					<i
						className={`flag-icon flag-icon-${flag.code}`}
						aria-hidden="true"
					/>
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>

		<h3>Sizes</h3>
		<p>
			All size available for the flags are pre-defined and are shown below. Tiny
			is the default size and for example is used input fields.{" "}
		</p>
		<div className="d-flex justify-content-between align-items-end p-4">
			{tableData.flags.map((flag, i) => (
				<React.Fragment key={flag.code}>
					<IconPreview
						previewSize
						type="flag-icon"
						name={flag.code}
						size={tableData.flagSizes[i]}
					/>
					{"\n"}
				</React.Fragment>
			))}
		</div>
		<ComponentPreview language="html" codeFigure>
			{tableData.flags.map((flag, i) => (
				<React.Fragment key={flag.code}>
					<i
						className={`flag-icon flag-icon-${flag.code} flag-icon-${tableData.flagSizes[i]}`}
						aria-hidden="true"
					/>
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>

		<h3>Squared</h3>
		<p>
			All flags can be used in a square format. In the example we see squared
			flags in the size tiny. All predefined sizes are available in combination
			with <CodeTags type="secondary" code=".flag-icon-squared" />.{" "}
		</p>
		<div className="d-flex justify-content-between align-items-end p-4">
			{tableData.flags.map((flag, i) => (
				<React.Fragment key={flag.code}>
					<IconPreview
						previewSize
						type="flag-icon"
						squaredFlag
						name={flag.code}
						size={tableData.flagSizes[i]}
					/>
				</React.Fragment>
			))}
		</div>
		<ComponentPreview language="html" codeFigure>
			{tableData.flags.map((flag, i) => (
				<React.Fragment key={flag.code}>
					<i
						className={`flag-icon flag-icon-squared flag-icon-${flag.code} flag-icon-${tableData.flagSizes[i]}`}
						aria-hidden="true"
					/>
					{"\n"}
				</React.Fragment>
			))}
		</ComponentPreview>

		<h3>Short list VS extended list</h3>
		<p>
			We are not automatically loading all flags via the CSS anymore. For web
			performance reasons (usually only the same 10 flags are used, instead of
			the whole 257 list of flags ( multiplying each by 2 aspect-ratio
			variants)). If you need a flag that is not in the short list, you can do
			it importing them via your own custom CSS:
		</p>
		<div className="d-flex justify-content-between align-items-end p-4">
			{["ps", "ug", "ca", "pa", "co"].map((flagCode) => (
				<React.Fragment key={flagCode}>
					<IconPreview
						previewSize
						type="flag-icon"
						squaredFlag
						name={flagCode}
						size={"medium"}
					/>
				</React.Fragment>
			))}
		</div>
		<ComponentPreview language="css" codeFigure>
			.flag-icon-ps &#123; background-image&#58;
			url&#40;&quot;&#64;swedbankpay&#47;design-guide&#47;src&#47;icons&#47;flags&#47;4x3&#47;ps&#46;svg&quot;&#41;&#59;
			&#125; .flag-icon-ug &#123; background-image&#58;
			url&#40;&quot;&#64;swedbankpay&#47;design-guide&#47;src&#47;icons&#47;flags&#47;4x3&#47;ug&#46;svg&quot;&#41;&#59;
			&#125; .flag-icon-ca &#123; background-image&#58;
			url&#40;&quot;&#64;swedbankpay&#47;design-guide&#47;src&#47;icons&#47;flags&#47;4x3&#47;ca&#46;svg&quot;&#41;&#59;
			&#125; .flag-icon-pa &#123; background-image&#58;
			url&#40;&quot;&#64;swedbankpay&#47;design-guide&#47;src&#47;icons&#47;flags&#47;4x3&#47;pa&#46;svg&quot;&#41;&#59;
			&#125; .flag-icon-co &#123; background-image&#58;
			url&#40;&quot;&#64;swedbankpay&#47;design-guide&#47;src&#47;icons&#47;flags&#47;4x3&#47;co&#46;svg&quot;&#41;&#59;
			&#125;
		</ComponentPreview>
	</section>
);

const Iconography = () => (
	<DocContainer>
		<p className="lead">
			At {brandTitle} we use Atlas icons, but we also include custom icons when
			they are missing, plus for well-known payment providers, and flags for
			most nations in the world. All icons are integrated and are available in
			HTML and CSS.
		</p>
		<AtlasIcons />
		<BasicUI />
		<Sizes />
		<CardIcons />
		<PaymentIcons />
		<Flags />
		<MaterialIcons />
	</DocContainer>
);

export default Iconography;

export { MaterialIcons, CardIcons, PaymentIcons, Flags };
