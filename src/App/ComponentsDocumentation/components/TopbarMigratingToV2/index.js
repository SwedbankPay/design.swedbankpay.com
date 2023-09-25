import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { EditableComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

export const Overview = () => (
	<section>
		<h2 id="intro">Intro</h2>
		<ul>
			<li>
				The migration should be part of a larger effort to rethink the
				information structure. Try to simplify the navigation. Projects with an
				allocated designer should collaborate with them to achieve this.{" "}
			</li>
			<li>
				the new topbar is opt-in. By default nothing changes. The new style will
				only be applied if you add the
				<CodeTags type="secondary" code=".experimental" /> class{" "}
			</li>
			<li>
				There is several breaking changes (details are following lower down){" "}
			</li>
			<ul>
				<li>order of elements in the topbar </li>
				<li>
					container links content is modified (added a header & footer to the
					topbar, and links are grouped in a specific container){" "}
				</li>
				<li>logo used in the topbar is different </li>
				<li>
					links need to have a
					<CodeTags type="secondary" code=".pinned" /> class to be visible in
					the topbar{" "}
				</li>
			</ul>
			<li>
				no change JS wise needed (no new method to call, etc). Things should
				keep working{" "}
			</li>
			<li>
				This is still an experimental phase. Please rise up any issue
				you&apos;re finding out.
			</li>
		</ul>
	</section>
);

export const Migration = () => (
	<section>
		<h2 id="migrating to v2">Migrating to Topbar v2</h2>
		<h3>Experimental</h3>
		<ul>
			<li>
				this is an <strong>opt-in</strong>. By default, if you do not modify
				anything, things should remain as they were 😉
			</li>
			<li>
				to enable the new topbar you need to add the CSS class `experimental` to
				the Topbar
			</li>
			<li>
				e.g.{" "}
				<CodeTags
					type="secondary"
					code="<header class='topbar topbar-xl-wide experimental' id='demo-topbar'>"
				/>
			</li>
		</ul>
		<h3>Breaking changes</h3>
		<h4>Order of the elements inside the topbar</h4>
		<p>the order of the topbar is modified:</p>
		<ul>
			<li>
				<p>
					<strong>BEFORE</strong>
				</p>
				<EditableComponentPreview language="html" codeFigure>
					<header class="topbar topbar-xl-wide" id="demo-topbar">
						{"\n"}
						<div class="nav-container">
							{"\n"}
							{/* <!-- open/close menu button --> */}
							<button
								type="button"
								class="topbar-btn"
								aria-label="Open menu"
								aria-haspopup="menu"
								aria-expanded="false"
								aria-controls="topbar-nav"
							>
								{"\n"}
								<i class="material-icons topbar-btn-icon">menu</i>
								{"\n"}
							</button>
							{"\n"}
							<button
								type="button"
								class="topbar-close"
								aria-label="Close menu"
							>
								{"\n"}
								<i class="material-icons topbar-btn-icon">close</i>
								{"\n"}
							</button>
							{"\n"}

							{/* <!-- logo link to homepage  --> */}
							<a class="topbar-logo" href="/" aria-label="To homepage">
								{"\n"}
								<img
									src="/designguide/assets/swedbankpay-logo-v.svg"
									alt="swedbankpay logo"
									class="logotype-vertical logotype-xs"
								/>
								{"\n"}
							</a>
							{"\n"}

							{/* <!-- topbar/modal content --> */}
							<nav class="topbar-nav">
								{"\n"}
								<div class="topbar-link-container">
									{"\n"}
									{/* <!-- content --> */}
								</div>
								{"\n"}
							</nav>
							{"\n"}
						</div>
						{"\n"}
					</header>
				</EditableComponentPreview>
			</li>
			<li>
				<p>
					<strong>NOW</strong>
				</p>

				<EditableComponentPreview language="html" codeFigure>
					<header class="topbar topbar-xl-wide experimental" id="demo-topbar">
						{"\n"}
						<div class="nav-container">
							{"\n"}
							{/* <!-- logo link to homepage  --> */}
							<a class="topbar-logo" href="/" aria-label="To homepage">
								{"\n"}
								<img
									src="/designguide/assets/swedbankpay-logo-h.svg"
									alt="swedbankpay logo"
									class="logotype-horizontal logotype-sm"
								/>
								{"\n"}
							</a>
							{"\n"}

							{/* <!-- topbar/modal content --> */}
							<nav class="topbar-nav">
								{"\n"}
								<div class="topbar-link-container">
									{"\n"}
									{/* <!-- links content --> */}
								</div>
								{"\n"}
							</nav>
							{"\n"}

							{/* <!-- open menu button --> */}
							<button
								type="button"
								class="topbar-btn"
								aria-label="Open menu"
								aria-haspopup="menu"
								aria-expanded="false"
								aria-controls="topbar-nav"
							>
								{"\n"}
								<i class="material-icons topbar-btn-icon">menu</i>
								{"\n"}
							</button>
							{"\n"}
						</div>
						{"\n"}
					</header>
				</EditableComponentPreview>
			</li>

			<h4>Logo/link to homepage</h4>
			<p>
				we switch the SwedbankPay logo from the vertical version to the
				horizontal one
			</p>
			<ul>
				<li>
					<p>
						<strong>BEFORE</strong>
					</p>

					<EditableComponentPreview language="html" codeFigure>
						<img
							src="/designguide/assets/swedbankpay-logo**-v**.svg"
							alt="swedbankpay logo"
							class="logotype-vertical logotype-xs"
						/>
					</EditableComponentPreview>
				</li>
				<li>
					<p>
						<strong>NOW</strong>
					</p>

					<EditableComponentPreview language="html" codeFigure>
						<img
							src="/designguide/assets/swedbankpay-logo**-h**.svg"
							alt="swedbankpay logo"
							class="logotype-horizontal logotype-sm"
						/>
					</EditableComponentPreview>
				</li>
			</ul>

			<h4>the button to open the menu</h4>
			<p>
				we used to have two buttons, one top open the menu modal & the other one
				to close it. We now only have the one to open it. The button to close it
				is inside the modal (in
				<CodeTags type="secondary" code="<div class='topbar-modal-header'>" /> )
			</p>
			<p>
				buttons are <strong>NOT</strong> modified. The only change is that we
				remove the close button
			</p>
			<ul>
				<li>
					<p>
						<strong>BEFORE</strong>
					</p>

					<EditableComponentPreview language="html" codeFigure>
						<button
							type="button"
							class="topbar-btn"
							aria-label="Open menu"
							aria-haspopup="menu"
							aria-expanded="false"
							aria-controls="topbar-nav"
						>
							{"\n"}
							<i class="material-icons topbar-btn-icon">menu</i>
							{"\n"}
						</button>
						{"\n"}
						<button type="button" class="topbar-close" aria-label="Close menu">
							{"\n"}
							<i class="material-icons topbar-btn-icon">close</i>
							{"\n"}
						</button>
						{"\n"}
					</EditableComponentPreview>
				</li>
				<li>
					<p>
						<strong>NOW</strong>
					</p>

					<EditableComponentPreview language="html" codeFigure>
						<button
							type="button"
							class="topbar-btn"
							aria-label="Open menu"
							aria-haspopup="menu"
							aria-expanded="false"
							aria-controls="topbar-nav"
						>
							{"\n"}
							<i class="material-icons topbar-btn-icon">menu</i>
							{"\n"}
						</button>
					</EditableComponentPreview>
				</li>
			</ul>

			<h4>the structure of the “`.topbar-link-container`” is modified:</h4>
			<p></p>
			<p></p>
			<ul>
				<li>
					<p>
						<strong>BEFORE</strong>
					</p>

					<ul>
						<li>it used to have all links as direct children</li>
					</ul>
				</li>
				<li className="pt-4">
					<p>
						<strong>NOW</strong>
					</p>
					<ul>
						<li>it now contains only 3 direct children</li>
						<ul>
							<li>
								<CodeTags type="secondary" code=".topbar-modal-header" />
							</li>
							<li>
								<CodeTags type="secondary" code=".topbar-modal-body" />
							</li>
							<li>
								<CodeTags type="secondary" code=".topbar-modal-footer" />
							</li>
						</ul>

						<li>
							all links should be contained inside
							<CodeTags
								type="secondary"
								code="<div class='topbar-modal-body'>"
							/>
						</li>
						<li>
							so far only normal links can be contained inside it (no nesting,
							no dropdowns, no sidebar)
						</li>
					</ul>
					<ul>
						<li>
							in the future we plan to support nested links (2-3 levels of
							nesting)
						</li>
						<li>
							in the future we plan to replace the language dropdown by a
							language button displaying a specific language selection modal
						</li>
					</ul>
				</li>
			</ul>
			<h4>Links in topbar</h4>
			<ul>
				<li>
					max 5 short/medium length links in topbar (or less if long words). No
					dynamic hiding, you&apos;re responsible to select which links you want
					to keep “pinned” to the topbar on desktop and which ones can be
					visible only in modal when it&apos;s opened
				</li>
				<li>still no links visible on mobile view (no breaking change)</li>
				<li>
					<strong>new</strong>
				</li>
				<ul>
					<li>
						add the CSS class
						<CodeTags type="secondary" code=".pinned" /> to the links you want
						to keep “pinned” to the topbar
					</li>
					<li>
						any links without the
						<CodeTags type="secondary" code=".pinned" /> class will be hidden on
						the topbar but visible inside the modal
					</li>
				</ul>
			</ul>
			<h4>Topbar modal header</h4>
			<EditableComponentPreview language="html" codeFigure>
				<div class="topbar-modal-header">
					{"\n"}
					<button
						type="button"
						class="topbar-close btn btn-icon btn-xs"
						aria-label="Close menu"
						title="Close menu"
					>
						{"\n"}
						<i class="material-icons-outlined" aria-hidden="true">
							{"\n"}
							close
							{"\n"}
						</i>
						{"\n"}
					</button>
					{"\n"}
				</div>
			</EditableComponentPreview>
			<ul>
				<li>
					<strong>mandatory to be used</strong>
				</li>
				<li>for now it contains only the close button (to close the modal)</li>
				<li>
					in the future it will eventually contain a header for the modal. (i.e.
					for the language modal)
				</li>
			</ul>

			<h4>Topbar modal footer</h4>

			<EditableComponentPreview language="html" codeFigure>
				<div class="topbar-modal-footer">
					{"\n"}
					<button class="btn btn-secondary btn-sm" type="button">
						{"\n"}
						<i class="material-icons-outlined" aria-hidden="true">
							{"\n"}
							exit_to_app
							{"\n"}
						</i>
						{"\n"}
						<span>Log out</span>
						{"\n"}
					</button>
					{"\n"}
				</div>
			</EditableComponentPreview>
			<ul>
				<li>initially it will be mandatory to be used BUT it can be empty:</li>
				<li>
					<CodeTags
						type="secondary"
						code="<div class='topbar-modal-footer'></div>"
					/>
				</li>
				<li>in the future we&apos;ll make it optional</li>
			</ul>
		</ul>
	</section>
);

export const CurrentState = () => (
	<section>
		<h2>Current state of experimental</h2>
		<p>For now:</p>
		<ul>
			<li>
				No plan of supporting dropdown and or custom items in the topbar/modal
			</li>
			<li>Not ready for production yet</li>
		</ul>
	</section>
);

export const Roadmap = () => (
	<section>
		<h2>Roadmap</h2>
		<p>Future iterations:</p>
		<ul>
			<li>language selector (button visible in topbar + display a modal)</li>
			<li>nested levels (2-3 levels nesting)</li>
		</ul>
	</section>
);

export const MigratingToNewTopbar = () => (
	<DocContainer>
		<section id="topbar-migrating-to-v2-doc">
			<p className="lead">
				How to migrate to the new Topbar (under experimental stage)
			</p>
			<Overview />
			<Migration />
			<CurrentState />
			<Roadmap />
		</section>
	</DocContainer>
);

export default MigratingToNewTopbar;
