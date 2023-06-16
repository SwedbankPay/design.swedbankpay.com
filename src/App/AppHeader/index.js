import React from "react";

import { SelectPanel } from "../utils";

import routes from "../routes/all";

import SearchBox from "../utils/SearchBox";

import swedbankpayLogo from "@src/img/swedbankpay/logo/swedbankpay-logo-h.svg";
import payexLogo from "@src/img/payex/logo/payex-logo.svg";

const brand = process.env.brand;
const devLogo = brand === "swedbankpay" ? swedbankpayLogo : payexLogo;
const isDev = process.env.version === "LOCAL_DEV";

const basename = process.env.basename;

// TODO: remove me once Topbar is finished
import TopbarComponent from "@components/Topbar";
import { menu } from "../ComponentsDocumentation/components/Topbar/constants";

// mobile & tablet topbar and hamburger menu
const AppHeader = () => (
	// <header
	// 	id="dg-topbar"
	// 	className="topbar topbar-max-md-sticky d-md-flex d-lg-none designguide-header"
	// >
	// 	<div className="nav-container">
	// 		<a href="/" className="topbar-logo">
	// 			{"\n"}
	// 			<img
	// 				src={
	// 					isDev
	// 						? devLogo
	// 						: `${process.env.basename}img/logo/${brand}-logo${
	// 								brand === "swedbankpay" ? "-h" : ""
	// 						  }.svg`
	// 				}
	// 				alt={`${brand}-logo`}
	// 				className="logotype-horizontal logotype-xs"
	// 			/>{" "}
	// 			{"\n"}
	// 		</a>
	// 		<button
	// 			type="button"
	// 			className="topbar-btn"
	// 			aria-label="Open menu"
	// 			aria-haspopup="menu"
	// 			aria-expanded="false"
	// 			aria-controls="topbar-nav"
	// 		>
	// 			<i className="material-icons topbar-btn-icon">menu</i>
	// 		</button>
	// 		<button type="button" className="topbar-close" aria-label="Close menu">
	// 			<i className="material-icons topbar-btn-icon">close</i>
	// 		</button>
	// 		<nav className="topbar-nav">
	// 			<div className="topbar-link-container">
	// 				<SelectPanel
	// 					id="doc-topbar-sidebar"
	// 					topbarId="dg-topbar"
	// 					topbarSidebar={true}
	// 					routes={routes}
	// 				/>
	// 			</div>
	// 		</nav>
	// 	</div>
	// </header>
	<>
		<TopbarComponent
			topbarContent={menu}
			wide="xl"
			logout
			id="demo-topbar"
			sticky={true}
		/>
		<main className="topbar-content"></main>
	</>
);

export default AppHeader;
