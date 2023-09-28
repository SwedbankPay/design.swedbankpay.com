import React from "react";
import { DocContainer } from "@docutils";

const basename = process.env.basename;

// TODO: remove images from dist and uncomment "prod images src"

const Simplicity = () => (
	<section className="mt-5">
		<h2 id="simplicity">Always strive for simplicity</h2>
		<p>
			By streamlining design elements and interactions and removing unnecessary
			complexity, we empower users to effortlessly find information and
			accomplish tasks. “Perfection is not reached when there is nothing left to
			add, but when there is nothing left to take away.”
		</p>
		<h3>Clarity and focus</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						How many focus points are visible on screen?
					</p>
					<p>
						Distill complex ideas into elegant solutions. Our goal is for the
						user to find information easily and complete tasks with minimal
						effort.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-simplicity-clarity.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-simplicity-clarity.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
		<h3>Consistency</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						What components can be reused?
					</p>
					<p>
						No need to reinvent the wheel – use existing components as often as
						possible. Consistency enhances familiarity and allows users to
						navigate our ecosystem confidently.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-simplicity-consistency.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-simplicity-consistency.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
		<h3>Deliberate reduction</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						Does every element on screen add value?
					</p>
					<p>
						Reduce unnecessary elements, features, and interactions that may
						overwhelm or confuse. Keep the design streamlined and lightweight,
						providing the user with precisely what they need, exactly when they
						need it.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-simplicity-reduction.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-simplicity-reduction.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
	</section>
);

const FriendlyGuide = () => (
	<section className="mt-5">
		<h2 id="friendly-guide">Be a friendly guide</h2>
		<p>
			Guide users and make every interaction effortless. When elements are
			scaled, placed, and contrasted based on their importance, we pave an
			intuitive path for our users. Always champion their success.
		</p>
		<h3>Information order</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						Is vital information and action well-organized?
					</p>
					<p>
						Arrange content hierarchically and group it smartly. Simplify
						complex data to foster visual clarity, aiding user comprehension.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-friendly-order.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-friendly-order.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
		<h3>Visual hierarchy</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						Is the right element emphasized?
					</p>
					<p>
						Use scale, placement and color based on their importance and
						relevance. Create visual cues that guide users to prioritize and
						understand information effortlessly.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-friendly-hierarchy.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-friendly-hierarchy.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
		<h3>Reveal as needed</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						Do we really need this piece of info on this screen?
					</p>
					<p>
						Use progressive disclosure to present core content, letting users
						delve deeper as they wish, avoiding information overload.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-friendly-reveal.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-friendly-reveal.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
	</section>
);

const DelightUnexpected = () => (
	<section className="mt-5">
		<h2 id="delight-with-unexpected">Delight with the unexpected</h2>
		<p>
			Create interfaces that go beyond usability and aim to spark joy. Enhance
			the overall experience and strengthen the brand personality. We want to
			leave room to push expressive design, while still staying true to the
			Swedbank Pay look and feel.
		</p>
		<h3>Surprise and engage</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p>
						Dare to be different. Surprise users with unique design elements, be
						it an animation or a splash of color. Balance visuals based on what
						you want to convey. Asymmetry is dynamic and engaging, creating a
						sense of energy and movement. Symmetry is quiet and static.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-unexpected-surprise.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-unexpected-surprise.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
		<h3>Unified creative vision</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p>
						While our design system ensures brand consistency, individual
						products can have their creative flair. That said, they should
						always feel part of the Swedbank Pay family. Refer to our Vision
						board for guidance.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-unexpected-unified.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-unexpected-unified.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
		<h3>Thoughtful motion design</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p>
						Integrate subtle, meaningful micro-interactions. These tiny,
						animated touches can elevate user engagement, adding responsiveness
						and character.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-unexpected-motion.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-unexpected-motion.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
	</section>
);

const Inclusive = () => (
	<section className="mt-5">
		<h2 id="inclusive">Inclusive by design</h2>
		<p>
			Prioritize accessibility and inclusivity. By reducing cognitive effort,
			enhancing visual clarity, and ensuring compatibility with assistive tools,
			we craft experiences for everyone.
		</p>
		<h3>Simplicity is key</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						How quickly does the user understand a screen?
					</p>
					<p>
						Less is more. Minimize clutter and cognitive effort, enabling users
						to absorb and remember information effortlessly.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-inclusive-simplicity.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-inclusive-simplicity.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
		<h3>Visual contrast and distinction</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						Does the design meet accessibility standards?
					</p>
					<p>
						Ensure elements are discernible, with strong color contrasts,
						legible fonts, and a well-defined visual hierarchy.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-inclusive-contrast.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-inclusive-contrast.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
		<h3>Assistive tech-friendly</h3>
		<div className="container">
			<div className="row">
				<div className="col-sm-9 pl-0">
					<p className="font-italic text-muted mb-2">
						Are interfaces compatible with assistive tools?
					</p>
					<p>
						Make sure your interface can be easily used with screen readers,
						voice commands, keyboard and other assistive devices.
					</p>
				</div>
				<div className="col-sm-3">
					<img
						className="w-100"
						// src={`${basename}img/documentation/playbook/playbook-principles-inclusive-assistive.png`}
						src={`${basename}designguide/assets/playbook/playbook-principles-inclusive-assistive.png`}
						alt="illustration swedbankpay playbook principles"
					/>
				</div>
			</div>
		</div>
	</section>
);

const Principles = () => (
	<DocContainer>
		<p className="lead">
			Our design principles have been created with design and UI in mind, but
			their essence is universal. They exist to make sure that the message is
			not just heard, but felt.
			<br />
			<br />
			The 4 design principles of Swedbank Pay:
		</p>
		<Simplicity />
		<FriendlyGuide />
		<DelightUnexpected />
		<Inclusive />
	</DocContainer>
);

export default Principles;
