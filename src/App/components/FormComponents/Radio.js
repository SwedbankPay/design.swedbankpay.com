import React from "react";
import PropTypes from "prop-types";

const Radio = ({
	id,
	checked,
	disabled,
	label,
	group,
	groupTitle,
	options,
	name,
	required,
	className,
	style,
	helpBlock,
	errorMessage,
}) => {
	const attrs = {
		type: "radio",
		id: id || null,
		name: name || null,
		disabled: disabled || null,
		defaultChecked: checked || null,
		required,
		"aria-describedby": helpBlock || null,
	};

	return (
		<>
			{group ? (
				<form>
					<fieldset
						className={`radio-group${errorMessage ? " has-error" : ""}${
							className ? ` ${className}` : ""
						}`}
						disabled={disabled}
					>
						{"\n"}
						<legend>{groupTitle}</legend>
						{"\n"}
						{style === "checkmark" ? (
							<div className="radio-row">
								{options.map(({ label, id, checked }, i) => (
									<div className={`radio${style ? ` ${style}` : ""}`} key={i}>
										{"\n"}
										<input {...attrs} id={id} defaultChecked={checked} />
										{"\n"}
										<label htmlFor={id}>
											{style === "checkmark" && (
												<i
													className="swepay-icon-check-circle-filled-customizable bg-blend-exclusion small"
													aria-hidden="true"
												></i>
											)}{" "}
											{label}
										</label>
										{"\n"}
									</div>
								))}
							</div>
						) : (
							<>
								{options.map(({ label, id, checked }, i) => (
									<div className={"radio"} key={i}>
										{"\n"}
										<input {...attrs} id={id} defaultChecked={checked} />
										{"\n"}
										<label htmlFor={id}>{label}</label>
										{"\n"}
									</div>
								))}
							</>
						)}

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
						{helpBlock && (
							<>
								<p id="hint-text" className="hint-text">
									{helpBlock}
								</p>
								{"\n"}
							</>
						)}
					</fieldset>
				</form>
			) : (
				<>
					<div className={`radio${style ? ` ${style}` : ""}`}>
						{"\n"}
						<input {...attrs} />
						{"\n"}
						{label ? (
							<label htmlFor={id}>
								{style === "checkmark" && (
									<i className="swepay-icon-check-circle-filled-customizable bg-blend-exclusion small"></i>
								)}{" "}
								{label}
							</label>
						) : null}
						{label ? "\n" : null}
					</div>
				</>
			)}
		</>
	);
};

Radio.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	group: PropTypes.bool,
	groupTitle: PropTypes.string,
	options: PropTypes.array,
	require: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.string,
	helpBlock: PropTypes.string,
};

export default Radio;
