import React, { Fragment } from "react";
import PropTypes from "prop-types";
import swedbankpayLogoHorizontal from "@src/img/swedbankpay/logo/swedbankpay-logo-h.svg";
import swedbankpayLogoVertical from "@src/img/swedbankpay/logo/swedbankpay-logo-v.svg";
import payexLogo from "@src/img/payex/logo/payex-logo.svg";

import SidebarComponent from "@components/Sidebar";
import { SidebarNavList } from "../../ComponentsDocumentation/components/Sidebar/constants";
import ButtonComponent from "@components/Button";

const brand = process.env.brand;

const isDev = process.env.version === "LOCAL_DEV";
const getDevLogo = (legacy) => {
	if (brand === "swedbankpay" && !legacy) {
		return swedbankpayLogoHorizontal;
	} else if (brand === "swedbankpay" && legacy) {
		return swedbankpayLogoVertical;
	} else {
		return payexLogo;
	}
};

const TopbarBtn = ({ legacy = false }) => {
	return (
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
			{legacy && (
				<button type="button" className="topbar-close" aria-label="Close menu">
					{"\n"}
					<i className="material-icons topbar-btn-icon">close</i>
					{"\n\t\t"}
				</button>
			)}
		</>
	);
};

const TopbarMenu = ({ menu, logout, sidebar, legacy }) => {
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
							}${item.firstPushRight ? " topbar-link-right" : ""}`}
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
				{logout ? legacy ? <TopbarLogoutLegacy /> : <TopbarLogout /> : null}
			</div>
		</nav>
	);
};

const TopbarLogout = () => (
	<ButtonComponent
		type="primary"
		label="Log out"
		icon="exit_to_app"
		size="sm"
		className="anchored"
	/>
);

const TopbarLogoutLegacy = () => (
	<>
		<a
			className="topbar-link-right"
			href="#"
			onClick={(e) => e.preventDefault()}
		>
			{"\n"}
			<i className="material-icons">exit_to_app</i>
			{"\n"}
			<span>Log out</span>
			{"\n"}
		</a>
		{"\n"}
	</>
);

const TopbarLogo = ({ png, legacy }) => (
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
						brand === "swedbankpay" ? (legacy ? "-v" : "-h") : ""
					}.png`}
					alt={`${brand} logo`}
					className={`${
						legacy
							? "logotype-vertical logotype-xs"
							: "logotype-horizontal logotype-sm"
					}`}
				/>
			) : (
				<img
					src={
						isDev
							? getDevLogo(legacy)
							: `${process.env.basename}img/logo/${brand}-logo${
									brand === "swedbankpay" ? (legacy ? "-v" : "-h") : ""
							  }.svg`
					}
					alt={`${brand} logo`}
					className={`${
						legacy
							? "logotype-vertical logotype-xs"
							: "logotype-horizontal logotype-sm"
					}`}
				/>
			)}
			{"\n"}
		</a>
		{"\n"}
	</>
);

const Topbar = ({
	topbarContent,
	wide,
	logout,
	id,
	png,
	sticky,
	sidebar,
	legacy = false,
}) => (
	<header
		className={`topbar${wide ? ` topbar-${wide}-wide` : ""}${
			sticky ? " topbar-sticky" : ""
		}${legacy ? " legacy" : ""}`}
		id={id}
	>
		{"\n"}
		{topbarContent ? (
			<div className="nav-container">
				{legacy && (
					<>
						{"\n"}
						<TopbarBtn legacy={legacy} />
					</>
				)}
				{"\n"}
				<TopbarLogo png={png} legacy={legacy} />
				{"\n"}
				<TopbarMenu
					menu={topbarContent}
					logout={!!logout}
					sidebar={sidebar}
					legacy={legacy}
				/>
				{!legacy && (
					<>
						{"\n"}
						<TopbarBtn legacy={legacy} />
					</>
				)}
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
	legacy: PropTypes.bool,
};

export default Topbar;
