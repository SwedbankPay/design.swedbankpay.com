import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ diaId, diaHeader, children }) => (
	<>
	{/* TODO: legacy code for div.dialog should be removed when merge the code. So far keep it so it's easier to test the CSS & JS for silent support of the old div.dialog */}
		{/* <div
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
					<button className="btn btn-secondary" type="button" data-dialog-close>
						Cancel
					</button>
					{"\n"}
					<button className="btn btn-primary" type="button">
						Delete
					</button>
					{"\n"}
				</footer>
			</section>
		</div> */}

		<dialog
			id={diaId}
			aria-modal="true"
			aria-labelledby="aria-label-dia"
			aria-describedby="aria-describe-dia"
		>
			{"\n"}
			<header>
				{"\n"}
				<h4>{diaHeader}</h4>
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
				<button className="btn btn-secondary" type="button" data-dialog-close>
					Cancel
				</button>
				{"\n"}
				<button className="btn btn-primary" type="button">
					Delete
				</button>
				{"\n"}
			</footer>
			{"\n"}
		</dialog>
	</>
);

Dialog.propTypes = {
	diaId: PropTypes.string,
	diaHeader: PropTypes.string,
};

export default Dialog;
