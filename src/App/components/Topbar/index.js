import React, { Fragment } from "react";
import PropTypes from "prop-types";
import swedbankpayLogo from "@src/img/swedbankpay/logo/swedbankpay-logo-h.svg";
import payexLogo from "@src/img/payex/logo/payex-logo.svg";

import SidebarComponent from "@components/Sidebar";
import { SidebarNavList } from "../../ComponentsDocumentation/components/Sidebar/constants";
import ButtonComponent from "@components/Button";

const brand = process.env.brand;

const devLogo = brand === "swedbankpay" ? swedbankpayLogo : payexLogo;

const isDev = process.env.version === "LOCAL_DEV";

const TopbarBtn = () => (
	<>
		<button
			type="button"
			className="topbar-btn"
			aria-label="Open menu"
			aria-haspopup="menu"
			aria-expanded="false"
			aria-controls="topbar-nav"
		>
			{"\n\t\t"}
			<i className="material-icons topbar-btn-icon">menu</i>
			{"\n\t\t"}
		</button>
		<button type="button" className="topbar-close" aria-label="Close menu">
			{"\n"}
			<i className="material-icons topbar-btn-icon">close</i>
			{"\n\t\t"}
		</button>
	</>
);

const TopbarMenu = ({ menu, logout, sidebar }) => {
	const { items } = menu;

	return (
		<nav className="topbar-nav">
			<div className="topbar-link-container">
				{items.map((item, i) => (
					<Fragment key={i}>
						{"\n"}
						<a
							href="#"
							className={`${item.name === "Home" ? "active" : ""}${
								item.pinned ? " pinned" : ""
							}${item.firstPushRight ? " first-push-right" : ""}`}
							onClick={(e) => e.preventDefault()}
						>
							{"\n"}
							<span>{item.name}</span>
							{"\n"}
							{item.icon ? <i className="material-icons">{item.icon}</i> : null}
							{"\n"}
						</a>
						{i === 0 && sidebar && (
							<SidebarComponent id="topbar-sidebar" navList={SidebarNavList} />
						)}
					</Fragment>
				))}
				{"\n"}
				{logout ? <TopbarLogout /> : null}
			</div>
		</nav>
	);
};

const TopbarLogout = () => (
	<ButtonComponent type="primary" label="Log out" icon="exit_to_app" />
);

const TopbarLogo = ({ png }) => (
	<>
		<a
			className={`topbar-logo${png ? " topbar-logo-png" : ""}`}
			href="/"
			onClick={(e) => e.preventDefault()}
			aria-label="To homepage"
		>
			{"\n"}
			{brand === "swedbankpay" && png ? (
				<img
					src={`${process.env.basename}img/logo/${brand}-logo${
						brand === "swedbankpay" ? "-h" : ""
					}.png`}
					alt={`${brand} logo`}
					className="logotype-horizontal logotype-xs"
				/>
			) : (
				<img
					src={
						isDev
							? devLogo
							: `${process.env.basename}img/logo/${brand}-logo${
									brand === "swedbankpay" ? "-h" : ""
							  }.svg`
					}
					alt={`${brand} logo`}
					className="logotype-horizontal logotype-xs"
				/>
			)}
			{"\n"}
		</a>
		{"\n"}
	</>
);

const Topbar = ({ topbarContent, wide, logout, id, png, sticky, sidebar }) => (
	<header
		className={`topbar${wide ? ` topbar-${wide}-wide` : ""}${
			sticky ? " topbar-sticky" : ""
		}`}
		id={id}
	>
		{"\n"}
		{topbarContent ? (
			<div className="nav-container">
				{"\n"}
				<TopbarLogo png={png} />
				{"\n"}
				<TopbarMenu menu={topbarContent} logout={!!logout} sidebar={sidebar} />
				{"\n"}
				<TopbarBtn />
			</div>
		) : (
			<>
				<TopbarLogo png={png} />
				{logout ? <TopbarLogout /> : null}
			</>
		)}
	</header>
);

Topbar.propTypes = {
	topbarContent: PropTypes.object,
	fixed: PropTypes.bool,
	logout: PropTypes.bool,
	png: PropTypes.bool,
	sticky: PropTypes.bool,
	sidebar: PropTypes.bool,
};

export default Topbar;
