import React from "react";

import { SelectPanel } from "../utils";

import routes from "../routes/all";

import SearchBox from "../utils/SearchBox";

const basename = process.env.basename;
const brand = process.env.brand;

// feature toggle. Switch once we switch default to topbar v2 (and update rest of docs and code)
// other corresponding feature toggle for topbar at "src/App/utils/SelectPanel/index.js"
const useTopbarLegacy = true;

// mobile & tablet topbar and hamburger menu
const AppHeader = () =>
	!useTopbarLegacy ? (
		<header
			id="dg-topbar"
			className="topbar d-md-flex d-lg-none designguide-header experimental"
		>
			<div className="nav-container">
				<a href="/" className="topbar-logo">
					{"\n"}
					<img
						src={`${basename}img/logo/${brand}-logo-h.svg`}
						alt={`${brand}-logo`}
						className="logotype-vertical logotype-xs"
					/>{" "}
					{"\n"}
				</a>
				<nav className="topbar-nav">
					<div className="topbar-link-container">
						<div className="topbar-modal-header">
							<button
								type="button"
								className="topbar-close btn btn-icon btn-xs"
								aria-label="Close menu"
								title="Close menu"
							>
								<i className="swepay-icon-close" aria-hidden="true"></i>
							</button>
						</div>
						<div className="topbar-modal-body">
							<SelectPanel
								id="doc-topbar-sidebar"
								topbarId="dg-topbar"
								topbarSidebar={true}
								routes={routes}
							/>
						</div>
						<div className="topbar-modal-footer">
							<button className="btn btn-secondary btn-sm" type="button">
								<i className="at-exit" aria-hidden="true"></i>
								<span>Log out</span>
							</button>
						</div>
					</div>
				</nav>
				<button
					type="button"
					className="topbar-btn"
					aria-label="Open menu"
					aria-haspopup="menu"
					aria-expanded="false"
					aria-controls="topbar-nav"
				>
					<i className="swepay-icon-menu-hamburger topbar-btn-icon"></i>
				</button>
			</div>
		</header>
	) : (
		<header
			id="dg-topbar"
			className="topbar topbar-max-md-sticky d-md-flex d-lg-none designguide-header"
		>
			<button
				type="button"
				className="topbar-btn"
				aria-label="Open menu"
				aria-haspopup="menu"
				aria-expanded="false"
				aria-controls="topbar-nav"
			>
				<i className="swepay-icon-menu-hamburger topbar-btn-icon"></i>
			</button>
			<button type="button" className="topbar-close" aria-label="Close menu">
				<i className="swepay-icon-close topbar-btn-icon"></i>
			</button>
			<a href="/" className="topbar-logo">
				{"\n"}
				<img
					src={`${basename}img/logo/${brand}-logo-v.svg`}
					alt={`${brand}-logo`}
					className="logotype-vertical logotype-xs"
				/>{" "}
				{"\n"}
			</a>
			<SearchBox mobile className={"search-expander"} />
			<nav className="topbar-nav">
				<div className="topbar-link-container">
					<SelectPanel
						id="doc-topbar-sidebar"
						topbarId="dg-topbar"
						topbarSidebar={true}
						routes={routes}
					/>
				</div>
			</nav>
		</header>
	);

export default AppHeader;
