import React from "react";
import CodeTags from "@components/CodeTags";
import { text } from "../Utilities/constants";

const basename = process.env.basename;

export const changeLogs = [
	{
		version: "10.14.3",
		title: "Patch for the patch, dependencies updates & more",
		text: (
			<>
				<p>We've got a small patch release for you.</p>
				<p>
					You've probably seen it, we got the version number wrong in the last
					one, hence this banner stuck on the documentation website 🤦
				</p>
				<p>This is fixed now</p>
				<p>
					We also took the opportunity to update many of our dependencies,
					upgrading to their new major version.
				</p>
				<p>
					Last but not least, we received a great contribution from Jonas Bjørge
					for the date-picker component, allowing you to set a default time now.
				</p>
				<p>Enjoy 🚀</p>
			</>
		),
	},
	{
		version: "10.14.2",
		title: "Small patch",
		text: (
			<>
				<p>We've got a small patch release for you.</p>
				<p>
					Beside the regular update of dependencies, we're also updating the URL
					for the swedbankpay image library, and we're merging a patch styling
					radio checkbox for PayEx theme.
				</p>
			</>
		),
	},
	{
		version: "10.14.1",
		title: "Patching the togglebox",
		text: (
			<>
				<p>
					You&apos;ve got a release. It&apos;s a patch for the togglebox.
					<br />
					It came to our attention that in some situations our chrome users
					would see the nod of the togglebox being pushed out of its track when
					unchecked. Well say no more! We&apos;ve jumped on our patch-mobile and
					got this fixed.
					<br />
					You can now enjoy a well-aligned toggle. Courtesy of the house.
				</p>
			</>
		),
	},
	{
		version: "10.14.0",
		title: "new alert variant & faster flags",
		text: (
			<>
				<p>
					Here&apos;s a small release, focusing on some small hopefully useful
					couple of things.
				</p>
				<p>
					<strong>New alert variant</strong>
					<br />
					Alerts are getting a new sibling. The "feedback" variant. We're also
					updating the icon for the success variant. This is almost a breaking
					change since you need to update it manually (although if you keep
					using the old one nothing will break yet).
					<br />
					Some minor UI updates are shipped too, like the borders are getting
					rounder.
				</p>
				<p>
					Next up is about <strong>the flags</strong>
					<br />
					We used to import by default all flags provided in the assets via the
					CSS, as an easy to use way (just by adding the corresponding CSS
					class). And although this was a very convenient method to display any
					possible flag, it was also coming with a cost: each flag was loaded in
					both aspect-ratio. This taking a toll on load time (although flags are
					tiny svg).
					<br />
					Since we realize projects actually use only a few flags, we decided to
					change the default behavior. We've asked in the channel which flags
					were actually used, and we've added them to a shortlist. Those flags
					will still be available as simply as adding the correct CSS class. If
					you need one of the rarely used flags, you will then need to import
					the flags from the npm package assets. Still very easy, but not as CSS
					as a CSS class.
					<br /> This should make the loading time faster 🚀.
				</p>
				<p>
					We should also mention we've shipped a <strong>patch release</strong>{" "}
					just a couple of days ago. Atlas icon are now shipped with the npm
					package, we do not load them from their CDN anymore (this would make
					it more resilient to CDN outages, such as the unpkg CDN outage on
					Monday).
				</p>
				<p>
					This release also comes with its set of{" "}
					<strong>chores, dependency updates</strong>.
				</p>
				<p>Yours truly</p>
			</>
		),
	},
	{
		version: "10.13.1",
		title: "Mostly docs & identity updates",
		text: (
			<>
				<p>Happy New Year 🎉</p>
				<p>
					We're starting the year with some mostly documentation & identity
					updates.
				</p>
				<p>
					Biggest one first: We've updated the Playbook. For the ones paying
					attention to it you'll like it.
				</p>
				<p>
					Next on the list: the zip file containing the SwedbankPay logos is
					updated with the logos fixed we've shipped in the previous minor
					release.
				</p>
				<p>
					We've also increased the browser support. We've decided to align with
					the standard used by the JS frameworks (now last 2 major versions,
					Firefox ESR, > 0,5% instead of 1%).
					<br />
					This being said, we recommend checking and adapting your support based
					on your own users stats. This change is only impacting projects
					consuming the CSS & JS straight from the CDN. If you're pulling the
					source files then the polyfilling/transpilling will only be done by
					your own build pipeline anyways.
				</p>
				<p>
					Green side UI change: checkmark circle green color on success alerts
					is updated
				</p>
				<p>And as usual, we've included several dependency updates.</p>
				<p>Enjoy and see ya later alligator 🐊</p>
			</>
		),
	},
	{
		version: "10.13.0",
		title: "Not Ghosting You: New Updates Inside",
		text: (
			<>
				<p>
					It's been a while, but here it is. A New Release (Minor Version).
					Which means there's a bit of everything. But let's start from the
					beginning, shall we?
				</p>
				<p>
					<strong>Togglebox (aka Toggle, or Switch)</strong>
					<br />
					The Toggle UI has been revamped and now includes a second theme
					designed for darker backgrounds.
				</p>
				<p>
					<strong>Logo</strong>
					<br />
					The SwedbankPay logo got fixed. It might look like minor changes for
					our myopic neanderthal developer eyes, but they're actually
					significant improvements for people equiped with eagle eyes like our
					brilliant designers 🤩.
					<br />
					We’ve also clarified the documentation: the recommended usage is
					through the npm package rather than linking to a hardcoded URL.
					Otherwise, changes (like this one) might leave your project out of
					date.
				</p>
				<p>
					<strong>Green side UI updates</strong>
					<br />
					Big shoutout to our Visby team! With the awesome addition of Johanna
					Prinz (welcome, Johanna! 👋) and more contributions (thanks Simon)
					this release includes a series of enhancements on the “green side of
					the force”:
					<ul>
						<li>Tables</li>
						<li>Expandables</li>
						<li>Buttons</li>
					</ul>
				</p>
				<p>And as usual, we’ve included several dependency updates.</p>
				<p>
					And remember: it's not because we're not shipping as often that the DS
					is abandoned in an old castle dungeon. We're still here, with less
					time prioritized to deliver frequent big work, but our eyes and brains
					are still looking at it, with plenty of ideas to keep it up and make
					it a great thing
				</p>
			</>
		),
	},
	{
		version: "10.12.2",
		title: "We're back, fresh and tanned with a summer breeze",
		text: (
			<>
				<p>
					How are you lovely people? Us in the design-system galaxy we&apos;re
					doing great, thanks for asking. And we&apos;re bringing with us some
					nice patches.
				</p>
				<p>
					<strong>Typography</strong>
					<br />
					"Title 6" font-family switches from Arial to the brand's headline font
					(e.g. Swedbank Headline Bold)
				</p>
				<p>
					<strong>Progress bar</strong>
					<br />
					We're fixing a UI bug spotted by our beloved Martina, namely the
					horizontal lines for the 1st and last steps when they are in selected
					state.
				</p>
				<p>
					<strong>Dropdown</strong>
					<br />A big thank you to Ludvik Lund for his contribution, fixing a
					bug in the dropdown script when initiating a specific dropdown (using
					the dropdown element id as param for the init function). It should
					work fine now
				</p>
				<p>Enjoy 💫</p>
			</>
		),
	},
	{
		version: "10.12.1",
		title: "Minor Bug Fixes & Supports Increase",
		text: (
			<>
				<p>
					Just like Ulysses, your dedicated developer has been sent on exciting
					new adventures. But embarking on these new journeys does not mean he
					will ever forget or stop longing to come back home and taking care of
					everything he left behind.
				</p>
				<p>
					That's why I could not leave for summer holidays without coming back
					by the design system and fixing some things I owe our brillant users.
				</p>
				<p>
					<strong>Dialog</strong>
					<br />
					Dialog now fails gracefully if no invoker is found (thnx Karoline for
					the heads up)
					<br />
					It can also get multiple invokers attached to it (thanks Martina for
					the feature request)
					<br />
					The styling is also more resilient through the migration from the old
					dialog syntax
				</p>
				<p>
					<strong>Cards</strong>
					<br />
					Cards can now use <CodeTags type="secondary" code="picture" />{" "}
					elements & <CodeTags type="secondary" code="div.illustration" /> class
					in lieu of the <CodeTags type="secondary" code="img" /> element. They
					will be styled just the same.
				</p>
				<p>
					<strong>Dropdown</strong>
					<br />
					Thanks to the help of our dear colleague Ludvik Lund, the dropdown
					initialization script can now receive a specific{" "}
					<CodeTags type="secondary" code="id" />. So you can now call the init
					script for a given dropdown and not all of the dropdowns present in
					the DOM.
				</p>
				<p>
					<strong>Utility classes</strong>
					<br />
					Some new utility classes have been added to the list.{" "}
					<CodeTags type="secondary" code="d-{breakpoint}-grid" /> &{" "}
					<CodeTags type="secondary" code="d-{breakpoint}-inline-grid" />.
				</p>
				<p>
					<strong>Button</strong>
					<br />
					The loading spinner of the button loading will never be squashed when
					the button gets its width shrinked. No more spinners looking like a
					rice bean.
				</p>
			</>
		),
	},
	{
		version: "10.12.0",
		title: "UI Bonanza",
		text: (
			<>
				<p>
					We're back with a new release, and it's a big one! Buckle up, because
					you're about to get <s>slapped</s> <em>spoiled</em> with a bunch of UI
					updates and new variants.
				</p>
				<p>
					Some people believe Spring is about Mari Kondo-ing. Losers*. We think
					it's Christmas all year round. That's right 🎁 🎉.
				</p>
				<p>
					We recommend going through the release notes for a more detailed
					overview, but the main things are as follow.
				</p>
				<p>
					<strong>Buttons</strong>
					<ul>
						<li>new icon button for Danish MitId 🇩🇰 🔐</li>
						<li>minor non-breaking UI updates (e.g. hover color, ...)</li>
					</ul>
				</p>
				<p>
					<strong>Radio inputs</strong> - checkmark variant
					<ul>
						<li>
							<em>BEFORE</em>: checkmark svg. <em>NOW</em>:{" "}
							<CodeTags type="secondary" code="span.checkmark-icon" />. It will
							make life easier. We take care of you in the background. Sit back
							and relax 🍹
						</li>
						<li>new large option</li>
						<li>new subtitle option</li>
					</ul>
					Plus several minor non-breaking UI updates (e.g. hover color, etc)
				</p>
				<p>
					<strong>Dialog</strong>.
					<br className="pt-2" />
					We now use the standard <CodeTags
						type="secondary"
						code="<dialog>"
					/>{" "}
					element. Simpler syntax, built-in A11y, less script. In one word:
					better 🚀. Move to it as soon as you can. Life shines brighter on the
					other side 🌻
					<br />
					We keep a silent support for the old dialog syntax until the next
					major release.
					<br />
					The new dialog gets all those UI freebies & options:
					<ul>
						<li>option for gray background (white is the default BG)</li>
						<li>option for dividers</li>
						<li>
							transitions on open & close (+ options to decide if it comes from
							bottom (default) or from the right)
						</li>
						<li>new backdrop color (brand-primary + blur)</li>
						<li>2 modal sizes</li>
					</ul>
				</p>
				<p>
					And many more small changes, both some UI updates/fixes & some
					dependency chores.
					<br />
					We hope you'll like it
				</p>
				<p className="small">
					<span className="font-italic">
						*Just to be clear, I hate the word "losers". There are no losers in
						life, or maybe only the people who think life is a competition. I
						just wanted it to be clear
					</span>{" "}
					😉
					<span className="font-italic">
						{" "}
						Big love to all my fellow losers, we rock
					</span>{" "}
					😘.
				</p>
			</>
		),
	},
	{
		version: "10.11.0",
		title: "Cards UI update",
		text: (
			<>
				<p>
					Cards are receiving a major revamp. Not one of those cheap Hollywood
					actor revamps they undergo when they sense their days are numbered.
					No. A kind of revamp like when you return from living and studying
					abroad and feel like a new person. That kind of revamp.
				</p>
				<p>
					The new card component is more flexible. It's getting a fresh look and
					additional combinations (img, icon, cta text and arrow, etc).
				</p>
				<p>
					You still have the option for wide cards or not. But then you can
					basically mix and match whatever you want. Or almost. Some
					combinations are forbidden. Because that's life. Some things you can
					do, and some you cannot. We decide; we make the rules. Too bad.
				</p>
				<p>
					That being said, in cards-content, there, you can definitely add
					anything you want. Now, we recommend following your <s>doctor</s>{" "}
					designer's advice anyway.
				</p>
			</>
		),
	},
	{
		version: "10.10.1",
		title: "Icons migration - step 2/2",
		text: (
			<>
				<p>
					We're back with the second step of our icons migration. This time, we
					are replacing the components snippets.
				</p>
				<p>
					We've also taken this opportunity to simplify a few things:
					<ul>
						<li>
							Now you don't need to add the close icon element on the Tag &
							Dialog components. We're taking care of it ourselves behind the
							curtain using pseudo-elements.
						</li>
						<li>
							Toast is also modified, but since it's composed via the script
							shipped in the package nothing is needed from the devs consuming
							it.
						</li>
						<li>
							Progress steps: the "check" icon for steps completed should be
							converted from `
							<div className="material-icons steps-icon">check</div>
							`to `<i className="completed steps-icon"></i>`
						</li>
					</ul>
				</p>
				<p>
					And we've migrated all our icons used on the documentation website to
					the new ones 🚀 Let's go ! 🤩{" "}
				</p>
			</>
		),
	},
	{
		version: "10.10.0",
		title: "Icons migrations - step 1",
		text: (
			<>
				<p>
					Goodbye, Google, and farewell to your Material Design icons. It’s not
					you, it’s us. Or no, actually it’s you. We became too cool for school.
					Takk for i dag, and take care.
				</p>
				<p>
					Our designers, equipped with their bionic eyes, have meticulously
					examined all open-source icon sets out there, scrutinizing even the
					tiniest details. They've found their grail:{" "}
					<a href="https://atlasicons.vectopus.com/">Atlas icons</a>.
				</p>
				<p>
					This marks the initial step in transitioning our icons from Material
					Icons to Atlas icons, along with some custom icons when needed. Check
					out the{" "}
					<a href={`${basename}identity/iconography/`}>
						iconography documentation page
					</a>{" "}
					to kick off the migration.
				</p>
				<p>
					This first release imports Atlas icons as a font icon (via CDN). Some
					critical icons were missing from their set, so our very own
					Michelangelo and DaVinci have crafted their own versions.
					Consequently, we now have custom icons for basic UI needs (no longer
					limited to just payment cards and flags). Chevron, hamburger-menu,
					plus, minus, and more will come from custom icons.
				</p>
				<p>
					For any unanswered questions, use Slack instead of the iconography
					page.
				</p>
				<p>
					Over the next few weeks, we'll be going through all our components to
					migrate their examples. We'll also ensure that all icon systems
					(Material vs. Atlas vs. our custom swepay-icons) display
					'identically.'
				</p>
				<p>
					We'll continue to support the old Material Icons 🧓 for a while, until
					the next major release. However, all new work will use the new icons
					(Atlas or our custom swepay-icons).
				</p>
				<p>
					We strongly recommend you to hop on board with the migration whenever
					you find the time. It's happening. You'll probably need help from the
					designers at some point, so feel free to reach out 😉.
				</p>
			</>
		),
	},
	{
		version: "10.9.1",
		title: "PayEx Open Source contributors are on fire 🔥🚀💚",
		text: (
			<>
				<p>The Green side of the force is strengthening 💚</p>
				<p>
					A patch release full of UI updates from the Visby folks (hey guys 👋),
					to bring some love to the green side of the Design System, and iterate
					over the components to update the colors and their UI in general. Much
					needed, and very much appreciated 🌟💚
				</p>
				<p>
					Which means: You, yes, you 🫵, Front-End dev using the design system,
					but who see some things could be improved ... get inspired by our
					Visby stars and push some PR to fix this issue bothering you. Our dev
					team is limited (well, it&apos;s only me really 😅) so we rely on all
					of you to keep it great 🎸, robust 💪, and shiny ✨
				</p>
				<p>
					Also some minor bugfix for the tooltip component, and some dependency
					updates. But this is not as important 😉
				</p>
			</>
		),
	},
	{
		version: "10.9.0",
		title: "Colors and Typography refresher 🎨",
		text: (
			<>
				<p>The Design system never sleeps.</p>
				<p>
					🖋️ We&apos;ve been updating the typography values (font-sizes,
					line-heights).
					<br />
					We&apos;re also leveraging the new{" "}
					<CodeTags type="secondary" code="text-wrap" /> CSS property (
					<CodeTags type="secondary" code="balance" /> for headers, and{" "}
					<CodeTags type="secondary" code="pretty" /> for paragraphs).
				</p>
				<p>
					🎨 Colors gor refreshed too. Some colors variables got updated, and
					we&apos;ve rewritten the Identity Color documentation page (for the
					SwedbankPay side).
				</p>
			</>
		),
	},
	{
		version: "10.8.7",
		title: "The one with the Playbook 📕 & a new experimental Topbar 🧪",
		text: (
			<>
				<p>
					<span className="font-italic">
						Get ready for a release that&apos;s as charming as a storybook!
					</span>
				</p>
				<p>
					<strong>📖 Introducing the Playbook:</strong> We&apos;re thrilled to
					unveil our new Playbook section, designed to present our comprehensive
					Design System. It&apos;s your ultimate guide to demystify the world of
					design and UI. <a href={`${basename}playbook`}>Explore it here</a>
				</p>
				<p>
					<strong>🏗️ The New Topbar (Experimental Release):</strong> We&apos;re
					rolling out the first partial release of the new Topbar version,
					currently in its experimental phase. By default, there won&apos;t be
					any changes, but you have the opportunity to opt-in and join the
					experimental Topbar experience. We&apos;ve also set up a dedicated
					page to guide you through the migration process:{" "}
					<a href={`${basename}components/topbar-migrating-to-v2`}>
						Topbar Migration to v2
					</a>
					.
					<br />
					We encourage you to report any bugs you encounter. The Topbar is a
					complex component, and your unique use cases provide invaluable
					feedback. Your input is greatly appreciated! 😉
				</p>
			</>
		),
	},
	{
		version: "10.8.6",
		title: "The one with little handy UI helpers",
		text: (
			<>
				<p>We&apos;re back in action, armed with nifty UI helpers 🧰🚀🎁.</p>
				<p>
					Ever find yourself awake at night, sweating, pondering how life would
					be better if there were a way to disable the icon rotation in the
					dropdown toggle button when you open it? I know, right?
				</p>
				<p>
					And what if I told you you could now style those bank-ID buttons as
					secondary buttons? Isn&apos;t that something you&apos;ve been
					daydreaming about for years?
				</p>
				<p>
					But wait, there&apos;s more! How about a magical button that
					transforms your component&apos;s preview container into a full-screen
					extravaganza, delivering the ultimate home-cinema experience for your
					components? It&apos;s like fulfilling a lifelong dream you didn&apos;t
					even know you had since you were a little kid! 👶🎁
					<br />
					<span className="font-italic">
						(for now only enabled for the Topbar component, but if YOU public
						like it then we&apos;ll expand it to the rest 🎤)
					</span>
				</p>
			</>
		),
	},
	{
		version: "10.8.5",
		title: "The CSS url / Import Patch 🐛🔨",
		text: (
			<>
				<p>
					The bug introduced in 10.8.1 breaking CSS URL paths is getting its
					patch 🩹🚀.
				</p>
			</>
		),
	},
	{
		version: "10.8.4",
		title: "New expandable UI before summer break 🏖️",
		text: (
			<>
				<p>
					We&apos;re getting ready for summer break, and we&apos;re bringing you
					a new UI for the expandable to play with during the holidays when
					you&apos;re on the beach 🎾🏄‍♂️🌊🌞.
				</p>
				<p>
					Some small things are also tagging along for the ride. Consistent
					styling for{" "}
					<CodeTags type="secondary" code=".material-icons-outlined" /> 🎨, and
					increasing our E2E testing coverage 🤖.
				</p>
			</>
		),
	},
	{
		version: "10.8.3",
		title: "Harder, Bigger, Rounder, Stronger 🤖",
		text: (
			<>
				<p>
					Font enthusiasts and old people have this in common they love big
					font. So do we. Get some popping headers, and some rounded dialog.
				</p>
				<p>
					This release also bring some hidden work. We&apos;re implementing
					End-to-end testing. For this we settled on Playwright, and we&apos;re
					loving it (so far). Who said testing wasn&apos;t fun?
				</p>
			</>
		),
	},
	{
		version: "10.8.2",
		title: "IE has bid farewell to our codebase. Hurray, hurray, hurray 🥂",
		text: (
			<>
				<p>
					Weeks have passed, and our cherished Design System grows even more
					delightful.
					<br /> Though this time, you must delve beneath the surface
					<br />
					for the changes are solely technical maintenance
					<br />
					yet no less beautiful for those with appreciative eyes.
				</p>
				<p>
					The crowned hero of the occasion: Internet Explorer&apos;s legacy is
					banished forever from our codebase. It was worth a patch release just
					for this. Pop the champagne et let it flow! 🍾
					<br />
					And our tireless endeavor continues, migrating all LESS variables to
					CSS custom properties. This task is long, arduous, and unrelenting.
				</p>
				<p>
					For the code contributors part now, we introduced Prettier (and editor
					config) in our tooling, to enforce automatic code aesthetic.
					<br /> We also added a list of recommended VS code extension, so new
					contributors automatically get a prompt to install them when they
					embark on this project 🤖
				</p>
				<p>Long story short: no noticeable change for our users 😘</p>
			</>
		),
	},
	{
		version: "10.8.1",
		title: "Iteration patch, minor fixes",
		text: (
			<p>
				Spring has arrived, and it&apos;s time to tidy up the small mess we left
				behind in our previous release 🧹.
				<br />
				We&apos;ve made a few minor UI fixes in the text inputs 🩹 and addressed
				some obsolete content that had slipped our minds while updating the
				documentation 🚮.
				<br />
				We&apos;ve revived the documentation about the destructive buttons for
				our PayEx comrades 📝 (style was silently suppported, but silent is not
				our thing 🥳).
				<br />
				To add some extra pizzazz, we&apos;ve also included autocomplete
				functionality in our forms examples by utilizing the autocomplete
				attributes. Let&apos;s make our final user&apos;s experience as
				enjoyable as possible by removing all possible friction 🚀🌟.
				<br />
				Lastly, we&apos;ve carried out some routine maintenance by updating some
				of our packages. 📦
			</p>
		),
	},
	{
		version: "10.8.0",
		title: "A new beginning 🌅",
		text: (
			<p>
				This one is a bittersweet release.
				<br />
				On one hand Spring is coming, sun is warming, smiles are popping, and
				our Design System is like the Paris Fashion Week: it&apos;s getting a
				new style 🎊
				<br />
				We are currently in the process of revamping our components to give them
				a fresh new look and improved functionality. As part of this effort, we
				have started with our{" "}
				<a href={`${basename}components/buttons`}>Button</a> and{" "}
				<a href={`${basename}components/input-field`}>Input field</a> components
				dropped in this release. From a holistic view, things will look a bit
				funky in the beginning during this migration, but fear not, everything
				will look smashing once it is finished! In addition we are using a new
				color for textual representation, moving away from the old brown and
				turning darker.
				<br />
				There are some minor breaking changes, therefore we recommend giving a
				look at the{" "}
				<a href="https://github.com/SwedbankPay/design.swedbankpay.com/releases">
					detailed changelog
				</a>
				<br />
				On the other hand, we are loosing Eskil. He&apos;s moving away to new
				adventures, becoming a professional diapers changer (a.k.a. Papa-perm
				👶). We&apos;re hoping the best for him and we are grateful for all the
				hard work and big smiles he has brought with him. Those are big shoes
				left to fill, but we&apos;ll make it work 💪
			</p>
		),
	},
	{
		version: "10.7.5",
		title: "We're stepping React up to 18, it's officially an adult now ✨",
		text: "Purely DG page maintenance again; upgraded React to v18. This was the last step of our maintenance sequence. It's been one long step for devs, and one tiny leap for mankind. 👩‍🚀",
	},
	{
		version: "10.7.4",
		title: "Doing the groundwork for a brighter future.",
		text: "Purely DG page maintenance; migrated tests from using Enzyme to React Testing Library. A big step into the direction of migrating to React 18.",
	},
	{
		version: "10.7.3",
		title: "Minor scrollbar changes for sidebar",
		text: "Bugfix for Developer Portal",
	},
	{
		version: "10.7.2",
		title: "Special delivery!",
		text: "Added GooglePay and ClickToPay icons",
	},
	{
		version: "10.7.1",
		title: "The Bear release™ 🐻",
		text: (
			<p>
				This one is almost exclusively focusing on the &quot;behind the
				curtains&quot;. For components, the Dropdown options were styled so you
				can now use both anchor links and buttons, both getting styled
				identically. This can help for A11y (using more appropriate tags from a
				semantic point of view). We also removed redundant code from the Slab
				component 🧹.
				<br />
				In terms of documentation, some major NPM dependencies were upgraded.
				React-router in particular. We also converted the class-based React
				components to hooks. The Table component&apos;s “Do&apos;s and
				Don&apos;t” got its style for mobile fixed, and a banner was added to
				redirect users to the latest version if they&apos;re consulting an older
				version (thanks Mr Bear🐻 for the help 👏). And lastly, the Lightbox
				z-index was fixed.
			</p>
		),
	},
	{
		version: "10.7.0",
		title: "Interactive playground and documentation updates",
		text: (
			<p>
				New year, new version 🚀 Regarding components we have done some minor
				tweaks to ensure a better user experience, this applies to Tooltip,
				Sidebar, Dropdown and Buttons. We have also introduced a new component
				preview which you can see and test out in the patterns sections{" "}
				<a href={`${basename}patterns/forms`}>forms</a> and{" "}
				<a href={`${basename}patters/login`}>login</a>. Closing in, we have
				upgraded a lot of our dependencies and added some documentation. Go to
				the complete{" "}
				<a
					href="https://github.com/SwedbankPay/design.swedbankpay.com/releases"
					target="_blank"
					rel="noopener noreferrer"
				>
					changelog
				</a>{" "}
				to see the changes in detail. Enjoy!
			</p>
		),
	},
	{ version: "10.6.1", title: "Minor bugfix", text: "Fix dead anchor tags" },
	{
		version: "10.6.0",
		title: "A brand new Utilities page 😱",
		text: (
			<p>
				Utilities section has been updated, now you can get direct access to
				your favorite utility classes! Some minor bugfixes has been fixed,
				updated our get-started section for our users and added a crisp shortcut
				to make your searches even faster (Ctrl/Cmd + K)🔥 Lastly, the
				navigation component is officially ❌deprecated❌ meaning we will not be
				updating or prioritize maintenance for this component. As always, you
				can read the thorough changelog on Github!
			</p>
		),
	},
	{
		version: "10.5.1",
		title: "A quick and clean hotfix incoming!",
		text: (
			<p>
				Small bugs were located post producing last version. These are now
				fixed! The tooltip component was before dependent on button&apos;s .less
				file. Not anymore! Be aware! This is kind of, not really, a breaking
				change, meaning your old code will still work, but you need to delete{" "}
				<CodeTags type="secondary" code=".btn" /> and{" "}
				<CodeTags type="secondary" code=".btn-link" /> classes in your tooltip
				component to be fully up2d8. In addition, we added back the arrow
				pointing up to the tooltip that are appearing, and removed the annoying
				border in input fields if you add postfix to it. That&apos;s all folks!
				Have a merry Christmas! 🎅🏼🎅🏼
			</p>
		),
	},
	{
		version: "10.5.0",
		title: "Experis' Christmas gift",
		text: (
			<p>
				This is an early christmas present🎁 for you guys! A new release✨! Some
				components received some freshness. The button components got some new
				styles, The slab component got reworked - The shadows should look better
				now, and the badge component got more ✨colorful✨💅 We have also made a
				lot of accessibility upgrades. Especially regarding high contrast and
				focus on elements. Bugs🐛 were squashed! The expandable component tried
				to take an early christmas vacation and disappeared from the component
				overview. It was quickly caught and returned to component jail🚨 We also
				removed a scrollbar from the search results because two bars does not
				make you scroll faster 😔 The button has been bullying its surrounding
				pixels. After a stern talk it agreed to stop pushing them around. Talk
				about personal growth! 🏅 That&apos;s it for now! Hope you have a great
				holiday!🎅🎄🤶
			</p>
		),
	},
	{
		version: "10.4.1",
		title: "Hotfixes incoming 🚤",
		text: "Here is a release solely based on feedback from our users 🤝 Turns out the dropdown component wasn’t perfect after all, and it had some weird alignment behavior when placed side-by-side with other components. This is now taken care of. We also renamed the class used to style the buttons inside the dropdown menu from '.btn-elem' to '.dropdown-option'. In addition, we removed the css dependency from the button component, so it is now independent. You can now use it as you want without having to import the button styles. We also added style support for the tabs component. Now the <a> element can also have the class of active instead of the <li> and the correct style will be applied. This to ensure an out of the box support for Nuxt router. Enjoy 😊",
	},
	{
		version: "10.4.0",
		title: "New developer New component",
		text: (
			<p>
				The design guide team is growing, and so is our component collection!
				Say hello to our brand new ✨
				<a href={`${basename}components/dropdown`}>Dropdown</a>✨ component.
				Check it out! We have also included several changes based on feedback
				from you guys, our users. Thank you for all your input, and keep’em
				coming! We have, amongst other things, added filter tags, updated status
				badges, updated error icons, and resolved a lot of bugs 🐛 Head over to
				the complete{" "}
				<a href="https://github.com/SwedbankPay/design.swedbankpay.com/releases">
					changelog
				</a>{" "}
				to see all the specific changes.
			</p>
		),
	},
	{
		version: "10.3.0",
		title: "Search bar and other treats 🍬",
		text: "Hello to all users of the design guide! In this release, various snacks are provided. First off, in the top right corner, you can see our brand-new search bar! 🔍 This little spinster gives you an alternative way to reach your destination. It is not the most sophisticated search field, but it does the trick! Some WCAG updates have also been made. For instance, the option of reduced animations based on your settings of reducing motion on your OS. Inclusion all the way! Buttons have obtained new designs for their states, and the table component has been modernized, with belonging documentation. Check the changelog to see all the changes.",
	},
	{
		version: "10.2.0",
		title: "Contribution is key 🔑",
		text: (
			<p>
				In this release, we have given our contribution sections an update. To
				have the most robust design system, we need to continuously improve
				ourselves, which is only doable through the help of our users.
				Therefore, we have updated our documentation and created two videos; one
				to emphasize the{" "}
				<a href={`${basename}get-started/introduction`}>contribution process</a>
				, and one video to show users how to use the new{" "}
				<a href={`${basename}get-started/for-developers`}>Design Guide light</a>
				. Check them out! This release also includes bug fixes: the pagination
				script is now supporting lists with seven elements or fewer, markup bug
				on pagination arrows, and small fixes on the color page. If you find
				something wrong or weird, do not hesitate to contact us through our
				slack channel #design-guide-general 🎉
			</p>
		),
	},
	{
		version: "10.1.0",
		title: "WCAG updates",
		text: "Major WCAG update! The design guide is now accessibility-friendly based on the feedback we received from FUNKA 🎉 This version holds mostly technical updates with correct usage of aria-labels, support for zoom up to 200%, and correct placement of the Toast component in the DOM when called on. We also updated our documentation regarding alt-texts and captions. Thank you for all feedback from the last release and findings of bugs 🪲 Enjoy!",
	},
	{
		version: "10.0.0",
		title: "Design guide light 👑",
		text: (
			<p>
				It´s finally here! Design guide light is live and direct! Choose what
				components you want, and leave the rest. Go to{" "}
				<a href={`${basename}get-started/for-developers`}>for developers</a> to
				read the updated documentation. We also updated some of the colors and
				the presentation is brand new! Head over to the{" "}
				<a href={`${basename}identity/color`}>color section</a> in Identity to
				see hex-codes, variables and more! ApplePay icon has also been added.
			</p>
		),
	},
	{
		version: "9.1.0",
		title: "Infinite sidebar 😱 and more WCAG",
		text: "Minor alert! This version supports infinite sidebar levels without breaking the component! Read about the changes on it´s documentation page. We also support anchor-tags for arrows in our pagination component. In addition, some WCAG changes has been made. To see all details, head over to the changelog on GitHub.",
	},
	{
		version: "9.0.0",
		title: "Accesibility train keeps on rollin’ 🚂",
		text: "Heads up, this one includes breaking changes making the topbar and the tooltip components more accessible. We’re also removing support for tooltips as help text containers in form input components. Instead introducing hint texts and expanding hint text to make information more accessible for everyone. More so, we added a new skip link component that will make navigation easier for keyboard users. The sidebar is improved for keyboard navigation and the the tables now support a caption element. Enjoy! ",
	},
	{
		version: "8.0.1",
		title: "Patch of documentation and minor bugs",
		text: "Update of text (typos) on input field, select and logotype documentation. Bug fixes on tabs, alert icon and radio button offset..",
	},
	{
		version: "8.0.0",
		title: "WCAG kickoff, Pagination, Sheet and more",
		text: "We’re kickin’ of towards a more accessible Design Guide, starting with clearing issues related to overlays, forms and buttons. The Pagination component got an update including a new styling script, and the Sheet component got a more mobile friendly design. An updated version of the Swedbank Pay Logotype is also included. To get the full picture - head over to the detailed changelog!",
	},
	{
		version: "7.1.1",
		title: "Patch of styling and path updates",
		text: 'Small updates on the visuals of Toast and Form-pattern, and more consisted path naming. We also changed the path in the documentation for logos from "designguide/assets" to "img/logo".',
	},
	{
		version: "7.1.0",
		title: "Node package upgrade and new Pattern section",
		text: "Node package upgrade incoming which supports selecting and importing specific component styling/script. Documentation wise, we added a new Pattern section to showcase best practice solutions for common product features, starting off with Login and Forms page. We also solved a bunch of forgotten GitHub issues and updated the Toast component.",
	},
	{
		version: "7.0.1",
		title: "A patch of love",
		text: "Some things didn’t end up looking the way we wanted them (Safari, we're mostly looking at you). This patch will remove some styling bugs from previous release.",
	},
	{
		version: "7.0.0",
		title: "Favicon, component updates and copy code feature",
		text: "You asked and we heard you, Favicon assets can now be found in the logotype section. We also redesigned a few of our components and updated the documentation. Goodbye to Tabs looking disabled on hover, Hello new fresh looking Alerts and Loaders. And you know what, you will no longer need to manually copy code from our code viewer since we have a brand new copy code button in place.",
	},
	{
		version: "6.1.0",
		title: "Node package",
		text: "Boom Shakalaka! The Design Guide is now available as a node package 📦.",
	},
	{
		version: "6.0.1",
		title: "Bugfixes and security updates",
		text: "Internet explorer needed a tiny touch of 'love', it's nice to be safe with new security package updates, and the main css file is smaller. Yay.",
	},
];
