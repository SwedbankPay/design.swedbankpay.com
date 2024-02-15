import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ActionListToggle = () => (
	<>
		<button
			id="actionListToggle"
			aria-label="Action list button"
			type="button"
			className="action-toggle"
			aria-haspopup="true"
		>
			{"\n"}
			<i className="at-dots-vertical small" aria-hidden></i>
			{"\n"}
		</button>
		{"\n"}
	</>
);

const ActionList = ({ id, classNames, toggleBtn, items }) => (
	<>
		<div id={id} className={`action-list${classNames ? ` ${classNames}` : ""}`}>
			{"\n"}
			{toggleBtn ? (
				<>
					{toggleBtn}
					{"\n"}
				</>
			) : (
				<ActionListToggle />
			)}
			<div className="action-menu" aria-labelledby="actionListToggle">
				{"\n"}
				{Array.isArray(items)
					? items.map(({ name, icon }, i) => (
							<Fragment key={i}>
								<a href="#" onClick={(e) => e.preventDefault()}>
									{icon ? (
										<i className={`${icon} small`} aria-hidden="true" />
									) : null}
									{name}
								</a>
								{"\n"}
							</Fragment>
					  ))
					: null}
			</div>
		</div>
	</>
);

ActionList.propTypes = {
	id: PropTypes.string,
	classNames: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			icon: PropTypes.string,
		}),
	).isRequired,
};

export default ActionList;
