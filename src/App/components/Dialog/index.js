import React from "react";
import PropTypes from "prop-types";

const Dialog = ({
	diaId,
	diaHeader,
	children,
	isOpen = false,
	size = "medium",
	hasDividers = false,
	slidesFromBottom = true,
	hasGrayBg = false,
}) => (
	<>
		<dialog
			id={diaId}
			aria-modal="true"
			aria-labelledby="aria-label-dia"
			aria-describedby="aria-describe-dia"
			open={isOpen}
			className={`${size === "large" ? "large " : ""}${hasDividers ? "dividers " : ""}${slidesFromBottom ? "" : "slide-from-right "}${hasGrayBg ? "gray" : ""}`}
		>
			{"\n"}
			<header>
				{"\n"}
				<div role="heading">{diaHeader}</div>
				{"\n"}
				<button
					type="button"
					className="dialog-close"
					aria-label="Close dialog"
					data-dialog-close
				></button>
				{"\n"}
			</header>
			{"\n"}
			<div className="dialog-body">{children}</div>
			{"\n"}
			<footer>
				{"\n"}
				<button
					className={`btn btn-secondary ${size === "medium" ? "btn-sm" : "btn-lg"}`}
					type="button"
					data-dialog-close
				>
					Cancel
				</button>
				{"\n"}
				<button
					className={`btn btn-primary ${size === "medium" ? "btn-sm" : "btn-lg"}`}
					type="button"
				>
					Delete
				</button>
				{"\n"}
			</footer>
			{"\n"}
		</dialog>
	</>
);

export const DialogOld = ({
	diaId,
	diaHeader,
	children,
	isOpen = false,
	size = "medium",
	hasDividers = false,
	slidesFromBottom = true,
}) => (
	<>
		<div
			className="dialog"
			id={diaId}
			role="dialog"
			aria-modal="true"
			aria-labelledby="aria-label-dia"
			aria-describedby="aria-describe-dia"
		>
			<section>
				<header className="dialog-header" id="aria-label-dia">
					<h4>{diaHeader}</h4>
					{"\n"}
					<button
						type="button"
						className="dialog-close"
						aria-label="Close dialog"
					></button>
				</header>
				<div className="dialog-body" id="aria-describe-dia">
					{children}
				</div>
				<footer className="dialog-footer">
					{"\n"}
					<button
						className={`btn btn-secondary ${size === "medium" ? "btn-sm" : "btn-lg"}`}
						type="button"
						data-dialog-close
					>
						Cancel
					</button>
					{"\n"}
					<button
						className={`btn btn-primary ${size === "medium" ? "btn-sm" : "btn-lg"}`}
						type="button"
					>
						Delete
					</button>
					{"\n"}
				</footer>
			</section>
		</div>
	</>
);

Dialog.propTypes = {
	diaId: PropTypes.string,
	diaHeader: PropTypes.string,
};

export default Dialog;
