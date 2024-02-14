import React from "react";
import PropTypes from "prop-types";
import LogotypeComponent from "@components/Logotype";

const basename = process.env.basename;
const brand = process.env.brand;

const AddNewLevel = ({ currentNav, previousTitle }) => (
	<ul aria-expanded>
		{"\n"}
		{!currentNav.group && (
			<>
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					className="previous-nav"
				>
					{"\n"}
					<i className="swepay-icon-chevron-left" aria-expanded="false"></i>
					{"\n"}
					<span>Back to {previousTitle}</span>
					{"\n"}
				</a>
				<header>
					{currentNav.icon}
					{currentNav.title}
				</header>
			</>
		)}
		{currentNav.children.map((nextNav, i) => (
			<li
				key={nextNav.title + i}
				className={`${
					currentNav.group ? "nav-leaf" : nextNav.group ? "group" : "leaf"
				}`}
			>
				{"\n"}
				<a href="#" onClick={(e) => e.preventDefault()}>
					{nextNav.icon}
					{nextNav.title}
				</a>
				{nextNav.children && (
					<AddNewLevel currentNav={nextNav} previousTitle={currentNav.title} />
				)}
			</li>
		))}
	</ul>
);

const Sidebar = ({ id, sticky, navList }) => (
	<div id={id} className={`sidebar${sticky ? " sidebar-topbar-sticky" : ""}`}>
		<nav className="sidebar-main-nav">
			<div className="sidebar-logo">
				{"\n"}
				<a href="/" aria-label="To homepage">
					{"\n"}
					<LogotypeComponent
						src={`${basename}img/logo/${brand}-logo-v.svg`}
						size="md"
						alt={`${process.env.brandTitle} vertical logo`}
						type="vertical"
					/>
					{"\n"}
				</a>
			</div>
			<ul className="main-nav-ul">
				{navList.map((mainNav, i) => (
					<li
						key={mainNav.title}
						className={`main-nav-li${i === 0 ? " active" : ""}`}
					>
						{"\n"}
						<a href="#" onClick={(e) => e.preventDefault()}>
							{"\n"}
							{mainNav.icon}
							{"\n"}
							{mainNav.title}
							{"\n"}
						</a>
						{mainNav.children && (
							<nav className="sidebar-secondary-nav">
								<header className="secondary-nav-header">
									{mainNav.title}
								</header>
								<ul className="secondary-nav-ul">
									{mainNav.children.map((secondNav, i) => (
										<li
											key={secondNav.title + i}
											className={`secondary-nav-li${
												secondNav.group ? " group" : " leaf"
											}`}
										>
											{"\n"}
											<a href="#" onClick={(e) => e.preventDefault()}>
												{secondNav.icon}
												{secondNav.title}
											</a>
											{secondNav.children && (
												<AddNewLevel
													currentNav={secondNav}
													previousTitle={mainNav.title}
												/>
											)}
										</li>
									))}
								</ul>
							</nav>
						)}
					</li>
				))}
			</ul>
		</nav>
	</div>
);

Sidebar.prototype = {
	id: PropTypes.string.isRequired,
	sticky: PropTypes.string,
	navList: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			icon: PropTypes.instanceOf(Element),
			children: PropTypes.Array,
		}),
	),
};

export default Sidebar;
