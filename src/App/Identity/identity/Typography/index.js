import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Button from "@components/Button";
import CodeTags from "@components/CodeTags";

const basename = process.env.basename;
const brand = process.env.brand;

import { expandable } from "@src/scripts/main";

const Typefaces = () => (
	<section className="typography-typefaces">
		<h2 id="typefaces">Typefaces</h2>
		<div className="illustration mb-3">
			<div className="swedbank-headline">
				Ag
				<span>Swedbank Headline</span>
			</div>
			<div className="arial">
				Ag
				<span>Arial</span>
			</div>
			<div className="akkurat-mono">
				Ag
				<span>Akkurat Mono</span>
			</div>
		</div>

		<a href={`${basename}release/fonts/Fonts.zip`} className="icon-link">
			<i
				className="at-download-arrow-down small align-self-baseline"
				aria-hidden="true"
			></i>
			<span className="ml-2">Download all Swedbank Pay typefaces</span>
		</a>

		<h3>Area of usages</h3>
		<ul className="list list-bullet">
			<li>
				<span className="swedbank-headline">Swedbank Headline</span> – used for
				headlines and lead texts
			</li>
			<li>
				<span className="arial font-weight-bold">Arial</span> – used for sub
				headlines and body texts
			</li>
			<li>
				<span className="akkurat-mono">Akkurat Mono</span> – used for code
				examples and snippets
			</li>
		</ul>

		<h3>Be respectful of content hierarchy</h3>
		<p>
			In order for us to create good and accessible structure in our products,
			it’s mandatory to include heading levels. No more than one h1 should be
			present on the page and if you have used h2 and want to show hierarchy in
			content, h3 should be used next and so on.
		</p>
	</section>
);

const Desktop = () => (
	<section className="typography-desktop">
		<h2 id="desktop-text-styles">Desktop text styles</h2>
		<p>
			Our desktop text styles are meant to be used in all desktop and tablet
			sizes. The text should break to mobile styles at viewport width 767 px.
			See all the{" "}
			<Link to="/identity/grid">breakpoints in the Grid section</Link>.
		</p>

		<table className="table table-plain typography-table">
			<thead>
				<tr>
					<th>Desktop text preview</th>
					<th>Typeface</th>
					<th>Size</th>
					<th>Line-height</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<span className="hero">Hero</span>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>80 px</td>
					<td>96 px</td>
				</tr>
				<tr>
					<td>
						<h1 className="m-0">Title 1</h1>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>40 px</td>
					<td>56 px</td>
				</tr>
				<tr>
					<td>
						<h2>Title 2</h2>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>32 px</td>
					<td>44 px</td>
				</tr>
				<tr>
					<td>
						<h3>Title 3</h3>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>24 px</td>
					<td>34 px</td>
				</tr>
				<tr>
					<td>
						<h4>Title 4</h4>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>20 px</td>
					<td>30 px</td>
				</tr>
				<tr>
					<td>
						<h5>Title 5</h5>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>16 px</td>
					<td>24 px</td>
				</tr>
				<tr>
					<td>
						<h6>Title 6</h6>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>14 px</td>
					<td>20 px</td>
				</tr>
				<tr>
					<td>
						<p>Body</p>
					</td>
					<td>Arial regular</td>
					<td>16 px</td>
					<td>24 px</td>
				</tr>
				<tr>
					<td>
						<small>Small text</small>
					</td>
					<td>Arial regular</td>
					<td>14 px</td>
					<td>20 px</td>
				</tr>
				<tr>
					<td>
						<span className="extra-small">Extra small text</span>
					</td>
					<td>Arial regular</td>
					<td>12 px</td>
					<td>18 px</td>
				</tr>
			</tbody>
		</table>
	</section>
);

const Mobile = () => (
	<section>
		<h2 id="mobile-text-styles">Mobile text styles</h2>
		<p>
			Our mobile text styles are meant to be used in all mobile views. The text
			should break to desktop styles at viewport width 768 px. See all the{" "}
			<Link to="/identity/grid">breakpoints in the Grid section</Link>.
		</p>

		<table className="table table-plain typography-table mobile">
			<thead>
				<tr>
					<th>Mobile text preview</th>
					<th>Typeface</th>
					<th>Size</th>
					<th>Line-height</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<span className="hero">Hero</span>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>56 px</td>
					<td>68 px</td>
				</tr>
				<tr>
					<td>
						<h1 className="m-0">Title 1</h1>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>32 px</td>
					<td>46 px</td>
				</tr>
				<tr>
					<td>
						<h2>Title 2</h2>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>24 px</td>
					<td>34 px</td>
				</tr>
				<tr>
					<td>
						<h3>Title 3</h3>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>20 px</td>
					<td>28 px</td>
				</tr>
				<tr>
					<td>
						<h4>Title 4</h4>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>18 px</td>
					<td>26 px</td>
				</tr>
				<tr>
					<td>
						<h5>Title 5</h5>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>16 px</td>
					<td>24 px</td>
				</tr>
				<tr>
					<td>
						<h6>Title 6</h6>
					</td>
					<td>Swedbank Headline Bold</td>
					<td>14 px</td>
					<td>22 px</td>
				</tr>
				<tr>
					<td>
						<p>Body</p>
					</td>
					<td>Arial regular</td>
					<td>16 px</td>
					<td>24 px</td>
				</tr>
				<tr>
					<td>
						<small>Small text</small>
					</td>
					<td>Arial regular</td>
					<td>14 px</td>
					<td>20 px</td>
				</tr>
				<tr>
					<td>
						<span className="extra-small">Extra small text</span>
					</td>
					<td>Arial regular</td>
					<td>12 px</td>
					<td>18 px</td>
				</tr>
			</tbody>
		</table>
	</section>
);

const Code = () => (
	<section>
		<h2 id="how-it-works-in-code">How it works in code</h2>

		<h3>Headings</h3>
		<p>
			Swedbank Pay Design Guide provides basic styling on all headings (h1-h6).
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<h1>Heading h1</h1>
			<h2>Heading h2</h2>
			<h3>Heading h3</h3>
			<h4>Heading h4</h4>
			<h5>Heading h5</h5>
			<h6>Heading h6</h6>
		</ComponentPreview>
		<p>
			The classes <CodeTags type="secondary" code=".h1" /> through{" "}
			<CodeTags type="secondary" code=".h6" /> are also available, for when you
			want to match the font styling of a heading but cannot use the associated
			HTML element.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<p className="h1">.h1 heading</p>
			<p className="h2">.h2 heading</p>
			<p className="h3">.h3 heading</p>
			<p className="h4">.h4 heading</p>
			<p className="h5">.h5 heading</p>
			<p className="h6">.h6 heading</p>
		</ComponentPreview>

		<h3>Hero title</h3>
		<p>
			The class <CodeTags type="secondary" code=".hero" /> can be used to
			achieve the big and bold hero title styling.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<h1 className="hero">Hero title</h1>
			<p className="hero">Hero title</p>
		</ComponentPreview>

		<h3>Lead</h3>
		<p>
			Make a paragraph stand out by using{" "}
			<CodeTags type="secondary" code=".lead" />.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<p className="lead">
				This is a leading paragraph which for instance can be used as an
				introduction.
			</p>
		</ComponentPreview>

		<h3>Inline text elements</h3>
		<p>Styling for common inline HTML5 elements.</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<p>
				You can use the mark tag to <mark>highlight</mark> text.
			</p>
			<p>
				<del>This line of text is meant to be treated as deleted text.</del>
			</p>
			<p>
				<s>This line of text is meant to be treated as no longer accurate.</s>
			</p>
			<p>
				<ins>
					This line of text is meant to be treated as an addition to the
					document.
				</ins>
			</p>
			<p>
				<u>This line of text will render as underlined</u>
			</p>
			<p>
				<small>This line of text is meant to be treated as fine print.</small>
			</p>
			<p>
				<strong>This line rendered as bold text.</strong>
			</p>
			<p>
				<b>This line really stands out.</b>
			</p>
			<p>
				<em>This line rendered as italicized text.</em>
			</p>
			<p>
				<i>This is the last line, it too will render as italicized text.</i>
			</p>
		</ComponentPreview>
		<p>
			The <CodeTags type="secondary" code=".mark" /> and{" "}
			<CodeTags type="secondary" code=".small" /> classes are also available to
			apply the same styles as <CodeTags type="primary" code={"<mark>"} /> and{" "}
			<CodeTags type="primary" code={"<small>"} /> while avoiding any unwanted
			semantic implications that the tags would bring.
		</p>
		<p>
			While not shown above, feel free to use{" "}
			<CodeTags type="primary" code={"<b>"} /> and{" "}
			<CodeTags type="primary" code={"<i>"} /> in HTML5.{" "}
			<CodeTags type="primary" code={"<b>"} /> is meant to highlight words or
			phrases without conveying additional importance while{" "}
			<CodeTags type="primary" code={"<i>"} /> is mostly for voice, technical
			terms, etc.
		</p>

		<h3>Text utilities</h3>
		<p>
			Change text color with our <Link to="/utilities">color utilities</Link>.
		</p>

		<h3>Abbreviations</h3>
		<p>
			Stylized implementation of HTML’s{" "}
			<CodeTags type="primary" code={"<abbr>"} /> element for abbreviations and
			acronyms to show the expanded version on hover. Abbreviations have a
			default underline and gain a help cursor to provide additional context on
			hover and to users of assistive technologies.
		</p>
		<p>
			Add <CodeTags type="secondary" code=".initialism" /> to an abbreviation
			for a slightly smaller font-size.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<p>
				<abbr title="Laugh Out Loud">LOL</abbr>
			</p>
			<p>
				<abbr title="HyperText Markup Language" className="initialism">
					HTML
				</abbr>
			</p>
		</ComponentPreview>
		<p>
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr"
				target="_blank"
				rel="noopener noreferrer"
			>
				Read more
			</a>{" "}
			about abbreviations.
		</p>

		<h3>Blockquotes</h3>
		<p>
			For quoting blocks of content from another source within your document.
			Wrap <CodeTags type="primary" code={"<blockquote>"} /> or{" "}
			<CodeTags type="secondary" code=".blockquote" /> around any HTML as the
			quote.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<blockquote className="blockquote">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
					posuere erat a ante.
				</p>
			</blockquote>
		</ComponentPreview>

		<h4>Naming a source</h4>
		<p>
			Add a <CodeTags type="primary" code={"<footer>"} /> for identifying the
			source. Wrap the name of the source work in{" "}
			<CodeTags type="primary" code={"<cite>"} />.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<blockquote className="blockquote">
				<p>
					Better learn balance. Balance is key. Balance good, karate good.
					Everything good. Balance bad, better pack up, go home. Understand?
				</p>
				<footer>
					<cite title="The Karate Kid (1984)">Mr. Miyagi</cite>
				</footer>
			</blockquote>
		</ComponentPreview>
	</section>
);

const Headings = () => (
	<>
		<h2 id="headings">Headings</h2>
		<p>
			{process.env.brandTitle} Design Guide provides basic styling on all
			headings (h1-h6).
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<h1>Heading h1</h1>
			<h2>Heading h2</h2>
			<h3>Heading h3</h3>
			<h4>Heading h4</h4>
			<h5>Heading h5</h5>
			<h6>Heading h6</h6>
		</ComponentPreview>
		<p>
			The classes <CodeTags type="secondary" code=".h1" /> through{" "}
			<CodeTags type="secondary" code=".h6" /> are also available, for when you
			want to match the font styling of a heading but cannot use the associated
			HTML element.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<p className="h1">.h1 heading</p>
			<p className="h2">.h2 heading</p>
			<p className="h3">.h3 heading</p>
			<p className="h4">.h4 heading</p>
			<p className="h5">.h5 heading</p>
			<p className="h6">.h6 heading</p>
		</ComponentPreview>
	</>
);

const HeroTitle = () => (
	<>
		<h2 id="hero-title">Hero title</h2>
		<p>
			The class <CodeTags type="secondary" code=".hero" /> can be used to
			achieve the big and bold hero title styling.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<h1 className="hero">Hero title</h1>
			<p className="hero">Hero title</p>
		</ComponentPreview>
	</>
);

const Lead = () => (
	<>
		<h2 id="lead">Lead</h2>
		<p>
			Make a paragraph stand out by using{" "}
			<CodeTags type="secondary" code=".lead" />.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<p className="lead">
				This is a leading paragraph which for instance can be used as an
				introduction.
			</p>
		</ComponentPreview>
	</>
);

const Inline = () => (
	<>
		<h2 id="inline-text-elements">Inline text elements</h2>
		<p>Styling for common inline HTML5 elements.</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<p>
				You can use the mark tag to <mark>highlight</mark> text.
			</p>
			<p>
				<del>This line of text is meant to be treated as deleted text.</del>
			</p>
			<p>
				<s>This line of text is meant to be treated as no longer accurate.</s>
			</p>
			<p>
				<ins>
					This line of text is meant to be treated as an addition to the
					document.
				</ins>
			</p>
			<p>
				<u>This line of text will render as underlined</u>
			</p>
			<p>
				<small>This line of text is meant to be treated as fine print.</small>
			</p>
			<p>
				<strong>This line rendered as bold text.</strong>
			</p>
			<p>
				<b>This line really stands out.</b>
			</p>
			<p>
				<em>This line rendered as italicized text.</em>
			</p>
			<p>
				<i>This is the last line, it too will render as italicized text.</i>
			</p>
		</ComponentPreview>
		<p>
			The <CodeTags type="secondary" code=".mark" /> and{" "}
			<CodeTags type="secondary" code=".small" /> classes are also available to
			apply the same styles as <CodeTags type="primary" code={"<mark>"} /> and{" "}
			<CodeTags type="primary" code={"<small>"} /> while avoiding any unwanted
			semantic implications that the tags would bring.
		</p>
		<p>
			While not shown above, feel free to use{" "}
			<CodeTags type="primary" code={"<b>"} /> and{" "}
			<CodeTags type="primary" code={"<i>"} /> in HTML5.{" "}
			<CodeTags type="primary" code={"<b>"} /> is meant to highlight words or
			phrases without conveying additional importance while{" "}
			<CodeTags type="primary" code={"<i>"} /> is mostly for voice, technical
			terms, etc.
		</p>
	</>
);

const TextUtilities = () => (
	<>
		<h2 id="text-utilities">Text utilities</h2>
		<p>
			Change text color with our <Link to="/utilities">color utilities</Link>.
		</p>
	</>
);

const Abbreviations = () => (
	<>
		<h2 id="abbreviations">Abbreviations</h2>
		<p>
			Stylized implementation of HTML’s{" "}
			<CodeTags type="primary" code={"<abbr>"} /> element for abbreviations and
			acronyms to show the expanded version on hover. Abbreviations have a
			default underline and gain a help cursor to provide additional context on
			hover and to users of assistive technologies.
		</p>
		<p>
			Add <CodeTags type="secondary" code=".initialism" /> to an abbreviation
			for a slightly smaller font-size.
		</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<p>
				<abbr title="Laugh Out Loud">LOL</abbr>
			</p>
			<p>
				<abbr title="HyperText Markup Language" className="initialism">
					HTML
				</abbr>
			</p>
		</ComponentPreview>
		<p>
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr"
				target="_blank"
				rel="noopener noreferrer"
			>
				Read more
			</a>{" "}
			about abbreviations.
		</p>
	</>
);

const Blockquotes = () => {
	const BlockquotesText = () => (
		<>
			<h2 id="blockquotes">Blockquotes</h2>
			<p>
				For quoting blocks of content from another source within your document.
				Wrap <CodeTags type="primary" code={"<blockquote>"} /> or{" "}
				<CodeTags type="secondary" code=".blockquote" /> around any HTML as the
				quote.
			</p>
			<ComponentPreview language="html" showCasePanel codeFigure>
				<blockquote className="blockquote">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						posuere erat a ante.
					</p>
				</blockquote>
			</ComponentPreview>
		</>
	);

	const BlockquoteWithSourceText = () => (
		<>
			<h3>Naming a source</h3>
			<p>
				Add a <CodeTags type="primary" code={"<footer>"} /> for identifying the
				source. Wrap the name of the source work in{" "}
				<CodeTags type="primary" code={"<cite>"} />.
			</p>
			<ComponentPreview language="html" showCasePanel codeFigure>
				<blockquote className="blockquote">
					<p>
						Better learn balance. Balance is key. Balance good, karate good.
						Everything good. Balance bad, better pack up, go home. Understand?
					</p>
					<footer>
						<cite title="The Karate Kid (1984)">Mr. Miyagi</cite>
					</footer>
				</blockquote>
			</ComponentPreview>
		</>
	);

	return (
		<>
			<BlockquotesText />
			<BlockquoteWithSourceText />
		</>
	);
};

const AkkuratMono = () => (
	<>
		<h2 id="akkurat-mono">Akkurat Mono</h2>
		<p>
			The Akkurat Mono font should be used when code is to be presented, for
			instance with code tags.
		</p>

		<h3>Download</h3>
		<div className="slab slab-elevated">
			<p>
				Before downloading the Akkurat Mono font, make sure to understand the
				correct usages of Akkurat Mono.
			</p>
			<Button
				type="primary"
				icon="at-download-arrow-down small"
				href={`${basename}release/fonts/AkkuratMono.zip`}
				label="Akkurat Mono"
			/>
		</div>
	</>
);

const Typography = () => {
	useEffect(() => {
		expandable.init();
	});

	return (
		<DocContainer>
			{brand === "swedbankpay" ? (
				<>
					<section id="intro">
						<p className="lead">
							The main font for Swedbank Pay is Swedbank Headline Bold, a custom
							made typeface with an open, welcoming visual voice. In addition
							Arial is used for non-print body text.
						</p>
					</section>
					<Typefaces />
					<Desktop />
					<Mobile />
					<Code />
				</>
			) : (
				<>
					<Headings />
					<HeroTitle />
					<Lead />
					<Inline />
					<TextUtilities />
					<Abbreviations />
					<Blockquotes />
					<AkkuratMono />
				</>
			)}
		</DocContainer>
	);
};

export default Typography;

/* For testing */
export {
	Typefaces,
	Desktop,
	Mobile,
	Code,
	Headings,
	HeroTitle,
	Lead,
	Inline,
	TextUtilities,
	Abbreviations,
	Blockquotes,
	AkkuratMono,
};
