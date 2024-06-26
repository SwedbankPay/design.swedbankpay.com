import React from "react";
import { DocContainer } from "@docutils";

const basename = process.env.basename;
const brandTitle = process.env.brandTitle;
const brand = process.env.brand;

const Terminology = () => (
	<section>
		<h2 id="terminology">Terminology</h2>
		<p>
			You have probably heard a few different words being used in relation to
			written content. Here is a breakdown of the main ones.
		</p>

		<h3>Copy</h3>
		<p>
			Copy is defined as written content that aims to increase brand awareness
			and ultimately persuade a person or group to take a particular action.
			Quite a lot falls under this umbrella but in the context of {brandTitle},
			an example of “pure” copy is the short texts you see on the website aiming
			to explain and “sell” the brand/product (see Figure 1).
		</p>
		<div className="d-flex flex-column align-items-center">
			<img
				src={`${basename}img/documentation/copywriting/terminology-copy.png`}
				className="mb-1 w-100"
				alt="Commercial text with a package price offering."
			/>
			<span className="caption-text">
				<span className="font-weight-bold">Figure 1.</span>Figure 1. Example of
				“pure” copy text from {brand}.se.
			</span>
		</div>

		<h3>Microcopy</h3>
		<p>
			Microcopy is all the written content you find on buttons, links, menu
			items, in error messages and so on. Microcopy helps the user interact with
			the product. It lets the user know what to do at a certain point, explains
			errors, builds confidence in the user when taking an action, minimizes
			uncertainty in hard-to-decide situations, alleviates worries and sets
			expectations.
		</p>
		<div className="d-flex flex-column align-items-center">
			<img
				src={`${basename}img/documentation/copywriting/terminology-microcopy.png`}
				className="mb-1 w-100"
				alt="Microcopy text as link labels in global navigation."
			/>
			<span className="caption-text">
				<span className="font-weight-bold">Figure 2.</span>Example of microcopy
				text from swedbankpay.com.
			</span>
		</div>

		<h3>UX copy</h3>
		<p>
			UX copy consists of all interface copy in a digital product, so basically
			all the text you see, including headings and paragraphs with information.
			Microcopy is part of UX copy, but UX copy also includes longer content
			relevant to the usage of a digital product.
		</p>

		<h3>Content</h3>
		<p>
			Content is what you call the longer format texts, for instance the
			detailed presentation of a product or service, the “About us” section and
			blog posts.
		</p>
		<p>
			As you can see, there is some overlap between the various terms and people
			can at times use them interchangeably. However, keeping track of the
			differences is helpful to accurately define project needs.
		</p>
	</section>
);

const Tonality = () => (
	<section>
		<h2 id="tonality">Tonality</h2>
		<p>
			Our tonality is the verbal communication of our Brand. Our voice. The
			choice of words shows our personality, and everything we write should feel
			like one human being talking to another human being.
		</p>
		<p>
			We express ourselves as simply and uncomplicated as possible to make our
			message easy to understand. It is important that our communication feels
			trustworthy, welcoming and friendly. We provide solutions. What we write
			should always be guiding our customers forward.
		</p>

		<h3>Brand tonality in UX writing</h3>
		<p>
			The brand tonality goes hand in hand with the UX Writing principles. By
			following the principles for UX Writing we also stay on brand. And vice
			versa. They are very similar. Open, simple and caring is the basis for{" "}
			{brandTitle}’s communication.
		</p>
		<p className="mb-0">We apply this by:</p>
		<ul className="list list-bullet">
			<li>
				<span className="font-weight-bold">
					using a conversational language
				</span>{" "}
				– avoiding jargon, complex words and expressions.{" "}
			</li>
			<li>
				<span className="font-weight-bold">guiding the customer</span> – with
				specific CTA’s so they know what to do next.
			</li>
			<li>
				<span className="font-weight-bold">showing warmth</span> – we speak with
				a human voice, with the person and not to them
			</li>
		</ul>
		<p>For more on UX writing, see Glossary and other links section.</p>

		<h3>We and you</h3>
		<p>
			We want customers to feel that our communication is written by human
			beings. To accentuate the human touch, we use “we”. This will make the
			message more personal and show our commitment. We address customers with
			“you”. This includes headlines, for example: Your contact information,
			your invoices etc.
		</p>

		<h3>Simple and guiding</h3>
		<p>
			Merchants and consumers want to buy and sell – they do not want to read
			long and complicated texts. Always write with the intended reader in mind.
			Brief, simple sentences ensure readability and understanding. We avoid
			difficult words, abbreviations, buzzwords, clichés and exaggerations. What
			we write should guide and help the reader to take the next step.
		</p>

		<h3>Positive voice</h3>
		<p>
			We offer solutions for merchants and consumers. Whatever we do and say
			must feel like a way forward. A positive voice will add energy and give us
			a forward-leaning expression. We are responsible, but with a twinkle in
			our eyes.
		</p>

		<h3>Tonality examples</h3>
		<p>
			A consistent voice, simple language and a positive tone will ensure more
			personal communication.
		</p>

		<div className="d-flex flex-column align-items-center">
			<table className="table">
				<thead>
					<tr>
						<th className="w-50">General tonality</th>
						<th className="w-50">{brandTitle} tonality</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Payment method</td>
						<td>How would you like to pay?</td>
					</tr>
					<tr>
						<td>
							Merchants can offer customers longer payment deadline on invoices.
						</td>
						<td>Give your customers more time time to pay.</td>
					</tr>
					<tr>
						<td>
							The merchant can choose to have the checkout replace their own
							collection of delivery address. The customer is given the
							opportunity to choose among previously used delivery addresses.
						</td>
						<td>Our checkout recognizes the customer.</td>
					</tr>
				</tbody>
			</table>
			<span className="caption-text">
				<span className="font-weight-bold">Table 1.</span> Three examples of
				tonality – general vs. {brandTitle} tonality.
			</span>
		</div>

		<h3>Importance of interface writing</h3>
		<p>
			Words on a screen are no substitute for a real conversation, but the right
			choice of words will add personality and warmth. Even though our interface
			writing should be concise and clear we want to ensure a more personal
			communication and that we are perceived as easy to deal with.
		</p>
		<div className="d-flex flex-column align-items-center">
			<table className="table">
				<thead>
					<tr>
						<th className="w-50">General interface writing</th>
						<th className="w-50">{brandTitle} interface writing</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							{
								"By completing the purchase, I confirm that I have read and approve of {brandTitle}'s terms and conditions."
							}
						</td>
						<td>
							By paying, you also confirm the {brandTitle} terms and conditions.
						</td>
					</tr>
					<tr>
						<td>Purchase history</td>
						<td>Earlier purchases</td>
					</tr>
					<tr>
						<td>Choose payment method</td>
						<td>How would you like to pay?</td>
					</tr>
					<tr>
						<td>Postpone payment</td>
						<td>Pay later</td>
					</tr>
					<tr>
						<td>Payment confirmed</td>
						<td>Paid and done!</td>
					</tr>
					<tr>
						<td>The invoice has been paid in full with Swish.</td>
						<td>Invoice fully paid. Thanks for using Swish!</td>
					</tr>
					<tr>
						<td>Incorrect username</td>
						<td>
							Sorry, we can not find an account with this username. Do you need
							assistance?
						</td>
					</tr>
					<tr>
						<td>
							Please launch the BankID security app on your mobile device.
							Closing this page will cancel the login.
						</td>
						<td>Start the BankID app on your device.</td>
					</tr>
				</tbody>
			</table>
			<span className="caption-text">
				<span className="font-weight-bold">Table 2.</span> Eight examples on
				common general interface with {brandTitle} tonality translations.
			</span>
		</div>
	</section>
);

const GlossaryLinks = () => (
	<section>
		<h2 id="glossary-and-other-links">Glossary and other links</h2>
		<p>
			In addition to the guidelines, this glossary of a few common words and
			expressions for Swedbank Pay can help you get the tonality right and
			consistent across platforms and user experiences.
		</p>
		<a
			href="https://www.swedbank.com/about-swedbank/brand-manager/guidelines/swedbank-pay/tonality/index.htm"
			rel="noopener noreferrer"
			target="_blank"
			className="icon-link"
		>
			<i
				className="at-arrow-up-from-square small align-self-baseline mr-2"
				aria-hidden="true"
			></i>
			<span>Swedbank Pay Definitions – Glossary and other resources</span>
		</a>
		<p>
			This set of guidelines leans heavily on material provided by Swedbank’s UX
			and Branding departments. On their respective platforms you can find more
			detailed information about UX and Swedbank’s brand identity in general,
			but also about writing for these areas in particular.
		</p>
		<div className="d-flex flex-column mb-3">
			<a
				href="https://ux-design.swedbank.com/content/sites/swedbank/ux-design/en/home/start.html"
				rel="noopener noreferrer"
				target="_blank"
				className="icon-link"
			>
				<i
					className="at-arrow-up-from-square small align-self-baseline mr-2"
					aria-hidden="true"
				></i>
				<span>UX writing at Swedbank</span>
			</a>
			<a
				href="https://ux-design.swedbank.com/content/sites/swedbank/ux-design/en/home/start/ux-writing.html"
				rel="noopener noreferrer"
				target="_blank"
				className="icon-link"
			>
				<i
					className="at-arrow-up-from-square small align-self-baseline mr-2"
					aria-hidden="true"
				></i>
				<span>Swedbank Brand Manager – Tonality</span>
			</a>
		</div>
		<p>
			<strong>Note:</strong> Most of the Brand Manager content is in English,
			but some is in Swedish. In the UX Design Guidelines most is in Swedish,
			though the Writing section is available in English as well.
		</p>
	</section>
);

const Copywriting = () => (
	<DocContainer>
		<p className="lead">
			At {brandTitle} we care about how we’re interpreted by our customers and
			merchants. In this section you will find an overview of the different
			kinds of written content relevant for {brandTitle}, tonality principles, a
			glossary, and links to further information.
		</p>
		<Terminology />
		<Tonality />
		{brandTitle === "Swedbank Pay" && <GlossaryLinks />}
	</DocContainer>
);

export default Copywriting;

export { Terminology, Tonality, GlossaryLinks };
