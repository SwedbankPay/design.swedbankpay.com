import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { dropdown } from "@src/scripts/main";

const DropdownSelect = ({
	disabled,
	errorMessage,
	fullWidth,
	position,
	noRotation = false,
}) => {
	const [buttonLabel, setButtonLabel] = useState("Card type");
	const cardTypes = [
		"VISA",
		"Mastercard",
		"AMEX",
		"Maestro card",
		"Stripe",
		"Vipps",
		"Swish",
	];

	useEffect(() => {
		dropdown.init();
	});

	return (
		<>
			<div
				className={`dropdown ${position}${errorMessage ? " has-error" : ""}${
					disabled ? " disabled" : ""
				}`}
			>
				<div className="toggle-menu-container">
					{"\n"}
					<button
						className={`dropdown-toggle${noRotation ? " no-rotation" : ""}`}
						id="dropdownSelect"
						type="button"
						aria-label="dropdown button"
						disabled={disabled}
					>
						{buttonLabel}
						<i className="swepay-icon-chevron-down ml-2" aria-hidden="true"></i>
					</button>
					{"\n"}
					<div className={`dropdown-menu ${fullWidth ? "full-width" : ""}`}>
						{"\n"}
						{cardTypes.map((card) => (
							<Fragment key={card}>
								<button
									className="dropdown-option"
									onClick={() => setButtonLabel(card)}
								>
									{card}
								</button>
								{"\n"}
							</Fragment>
						))}
					</div>
				</div>
				{errorMessage && (
					<>
						<div className="help-block">
							<i
								className="swepay-icon-error-triangle-filled small"
								aria-hidden="true"
							></i>
							{errorMessage}
						</div>
						{"\n"}
					</>
				)}
			</div>
		</>
	);
};

const DropdownToggle = ({
	disabled,
	isIconButton = false,
	label = "Default label",
	icon = isIconButton ? "at-dots-vertical" : "swepay-icon-chevron-down",
	iconAfter,
	noRotation = false,
}) => {
	useEffect(() => {
		dropdown.init();
	});

	return (
		<>
			<button
				className={`dropdown-toggle${
					isIconButton ? " dropdown-toggle-icon" : ""
				}${noRotation ? " no-rotation" : ""}`}
				type="button"
				aria-label="dropdown button"
				disabled={disabled}
			>
				{"\n"}
				{isIconButton ? (
					<>
						<i className={icon} aria-hidden="true"></i>
						{"\n"}
					</>
				) : (
					<>
						{!iconAfter && (
							<>
								<i className={icon} aria-hidden="true"></i>
								{"\n"}
							</>
						)}
						<span>{label}</span>
						{"\n"}
						{iconAfter && (
							<>
								<i className={icon} aria-hidden="true"></i>
								{"\n"}
							</>
						)}
					</>
				)}
			</button>
			{"\n"}
		</>
	);
};

const Dropdown = ({
	id,
	className,
	label,
	icon,
	iconAfter = true,
	isIconButton,
	fullWidth,
	position = "anchor-top-left",
	errorMessage,
	content,
	largePadding,
	disabled,
	dropdownSelect,
	disableDefaultKeyboardNavigation = false,
	noRotation = false,
}) => (
	<>
		{dropdownSelect ? (
			<DropdownSelect
				disabled={disabled}
				errorMessage={errorMessage}
				fullWidth={fullWidth}
				position={position}
				noRotation={noRotation}
			/>
		) : (
			<div
				id={id ? id : null}
				className={`dropdown ${position}${className ? ` ${className}` : ""}${
					errorMessage ? " has-error" : ""
				}${disabled ? " disabled" : ""}`}
				data-disable-default-keyboard-nav={
					disableDefaultKeyboardNavigation ? "true" : null
				}
			>
				{"\n"}
				<div className="toggle-menu-container">
					{"\n"}
					<DropdownToggle
						disabled={disabled}
						isIconButton={isIconButton}
						label={label}
						icon={icon}
						iconAfter={iconAfter}
						noRotation={noRotation}
					/>
					<div
						className={`dropdown-menu${fullWidth ? " full-width" : ""}${
							largePadding ? " p-3" : ""
						}`}
						aria-labelledby="dropdownToggle"
					>
						{"\n"}
						{content}
					</div>
				</div>
				{errorMessage && (
					<>
						<div className="help-block">
							<i
								className="swepay-icon-error-triangle-filled small"
								aria-hidden="true"
							></i>
							{errorMessage}
						</div>
						{"\n"}
					</>
				)}
			</div>
		)}
	</>
);

Dropdown.propTypes = {
	classNames: PropTypes.string,
	label: PropTypes.string,
	icon: PropTypes.string,
	iconAfter: PropTypes.bool,
	isIconButton: PropTypes.bool,
	fullWidth: PropTypes.bool,
	position: PropTypes.oneOf(["anchor-top-left", "anchor-top-right"]),
	errorMessage: PropTypes.string,
	largePadding: PropTypes.bool,
	dropdownSelect: PropTypes.bool,
	disableDefaultKeyboardNavigation: PropTypes.bool,
	noRotation: PropTypes.bool,
};

export default Dropdown;
