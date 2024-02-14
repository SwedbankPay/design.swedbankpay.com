import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DefaultSteps = [
	{
		title: "Step one",
		subtitle: "24.12.17 12:10",
		completed: true,
	},
	{
		title: "Step two",
		ongoing: true,
	},
	{
		title: "Step three",
		selected: true,
	},
	{
		title: "Step four",
	},
];

const StepsContent = ({ completed, subtitle, title, index }) => (
	<>
		{completed ? (
			<>
				<i className="completed steps-icon" />
				{"\n"}
			</>
		) : (
			<div className="steps-number">{index + 1}</div>
		)}
		{title}
		{subtitle ? (
			<>
				{"\n"}
				<div className="steps-sub-title">{subtitle}</div>
			</>
		) : null}
	</>
);

const RenderSteps = ({ steps }) => (
	<>
		{steps.map(
			({ title, subtitle, completed, ongoing, selected, clickable }, i) => (
				<li
					key={i}
					className={classnames(
						completed ? "steps-completed" : null,
						ongoing ? "steps-ongoing" : null,
						selected ? "steps-selected" : null,
					)}
				>
					{clickable ? (
						<>
							{"\n"}{" "}
							<a>
								<StepsContent
									completed={completed}
									subtitle={subtitle}
									title={title}
									index={i}
								/>
							</a>{" "}
							{"\n"}{" "}
						</>
					) : (
						<StepsContent
							completed={completed}
							subtitle={subtitle}
							title={title}
							index={i}
						/>
					)}
				</li>
			),
		)}
	</>
);

const RenderStepsNav = ({ steps }) => {
	if (!steps) {
		return null;
	}

	const clickableItem = steps.some((item) => item.clickable);

	const arrowLeft = clickableItem ? (
		<i className="swepay-icon-chevron-left steps-nav-left"></i>
	) : null;
	const arrowRight = clickableItem ? (
		<i className="swepay-icon-chevron-right steps-nav-right"></i>
	) : null;

	return (
		<>
			<div className="steps-responsive">
				{arrowLeft}
				<div className="steps-responsive-text">Step 2</div>
				{arrowRight}
			</div>
		</>
	);
};

const Steps = ({ steps, vertical }) => {
	const stepsClasses = classnames("steps", vertical ? "steps-vertical" : null);

	return (
		<div className={stepsClasses}>
			<ol>
				{steps ? (
					<RenderSteps steps={steps} />
				) : (
					<RenderSteps steps={DefaultSteps} />
				)}
			</ol>
			<RenderStepsNav steps={steps} />
		</div>
	);
};

Steps.propTypes = {
	steps: PropTypes.array,
	vertical: PropTypes.bool,
	clickable: PropTypes.bool,
};

export default Steps;

// exporting for testing purposes
export { DefaultSteps };
