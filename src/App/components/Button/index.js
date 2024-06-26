import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({
	label,
	id,
	name,
	className,
	value,
	href,
	icon,
	loading,
	type,
	disabled,
	btnType,
	fullWidth,
	input,
	active,
	size,
	bankId,
	iconAfter,
	iconOnly,
	variant,
}) => {
	const btnClasses = classnames(
		"btn",
		type ? `btn-${type}` : null,
		size ? `btn-${size}` : null,
		loading ? "loading" : null,
		fullWidth ? "btn-block" : null,
		active && href ? "active" : null,
		disabled && href ? "disabled" : null,
		bankId ? "btn-bank-id" : null,
		className ? className : null,
		type === "icon" && variant ? `btn-${variant}` : null,
	);

	const attrs = {
		href,
		id,
		name,
		defaultValue: value,
		disabled: href ? null : disabled,
		active: active && !href ? "" : null,
		role: href ? "button" : null,
		type: !href ? btnType || "button" : null,
		"aria-pressed": active ? true : null,
		"aria-disabled": href && disabled ? true : null,
		tabIndex: href && disabled ? "-1" : null,
		"aria-label": iconOnly ? "Describe this action" : null,
		title: iconOnly ? "Describe this action" : null,
	};

	if (href) {
		return (
			<a className={btnClasses} {...attrs} onClick={(e) => e.preventDefault()}>
				{icon ? <i className={icon} aria-hidden="true"></i> : null}
				{icon && label ? <span>{label}</span> : label}
			</a>
		);
	}

	if (input) {
		return <input className={btnClasses} {...attrs} />;
	}

	return (
		<button className={btnClasses} {...attrs}>
			{icon ? "\n\t\t" : null}
			{icon && !iconAfter ? (
				<>
					<i className={icon} aria-hidden="true"></i>
					{"\n\t"}
				</>
			) : null}
			{(icon && label) ||
			type === "link" ||
			type === "link-destructive" ||
			bankId ? (
				<>
					{bankId ? "\n" : null}
					<span>{label}</span>
				</>
			) : (
				label
			)}
			{icon && !iconOnly ? "\n\t" : null}
			{bankId ? (
				<>
					{"\n"}
					<i className={`bank-id bank-id-${bankId}`} />
					{"\n"}
				</>
			) : null}
			{loading ? (
				<></>
			) : (
				<>
					{icon && iconAfter ? (
						<>
							<i className={`${icon} ml-2`} aria-hidden="true"></i>
							{"\n\t\t"}
						</>
					) : null}
				</>
			)}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.oneOf([
		"default",
		"primary",
		"secondary",
		"tertiary",
		"icon",
		"link",
		"guiding-destructive",
		"executive-destructive",
		"link-destructive",
	]).isRequired,
	label: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.string,
	loading: PropTypes.bool,
	disabled: PropTypes.bool,
	btnType: PropTypes.string,
	fullWidth: PropTypes.bool,
	loader: PropTypes.bool,
	input: PropTypes.bool,
	active: PropTypes.bool,
	size: PropTypes.oneOf([
		"xl",
		"lg",
		"sm",
		"xs",
		"icon-xl",
		"icon-lg",
		"icon-sm",
		"icon-xs",
	]),
	bankId: PropTypes.string,
	className: PropTypes.string,
	iconAfter: PropTypes.bool,
	iconOnly: PropTypes.bool,
	variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

export default Button;
