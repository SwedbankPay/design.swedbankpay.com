import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DefaultStepper = [
    {
        title: "Step one",
        subtitle: "24.12.17 12:10",
        completed: true
    },
    {
        title: "Step two",
        ongoing: true
    },
    {
        title: "Step three",
        selected: true
    },
    {
        title: "Step four"
    }
];

const StepperContent = ({ completed, subtitle, title, index }) => (
    <>
        {completed ? <><div className="material-icons stepper-icon" >check</div>{ "\n" }</> : <div className="stepper-number">{index + 1}</div>}
        {title}
        {subtitle ? <>{ "\n" }<div className="stepper-sub-title">{subtitle}</div></> : null}
    </>
);

const RenderSteps = ({ steps }) => (
    <>
        {steps.map(({ title, subtitle, completed, ongoing, selected, clickable }, i) => (
            <li key={i} className={classnames(completed ? "stepper-completed" : null,
                ongoing ? "stepper-ongoing" : null,
                selected ? "stepper-selected" : null)}>
                { clickable ?
                    <>{ "\n" } <a><StepperContent completed={completed} subtitle={subtitle} title={title} index={i}/></a> { "\n" } </>
                    :
                    <StepperContent completed={completed} subtitle={subtitle} title={title} index={i}/>
                }
            </li>
        ))}
    </>
);

const RenderStepperNav = ({ steps }) => {
    if (!steps) {
        return null;
    }

    const clickableItem = steps.some(item => item.clickable);

    const arrowLeft = clickableItem ? <div className="material-icons stepper-nav-left">keyboard_arrow_left</div> : null;
    const arrowRight = clickableItem ? <div className="material-icons stepper-nav-right">keyboard_arrow_right</div> : null;

    return <>
        <div className="stepper-responsive">
            { arrowLeft }
            <div className="stepper-responsive-text">Step 3</div>
            { arrowRight }
        </div>
    </>;
};

const Stepper = ({ steps, vertical }) => {
    const stepsClasses = classnames(
        "stepper",
        vertical ? "stepper-vertical" : null,
    );

    return (<div className={stepsClasses}>
        <ol>
            {steps ? <RenderSteps steps={steps} /> : <RenderSteps steps={DefaultStepper} />}
        </ol>
        <RenderStepperNav steps={steps} />
    </div>);
};

Stepper.propTypes = {
    steps: PropTypes.array,
    vertical: PropTypes.bool,
    clickable: PropTypes.bool
};

export default Stepper;

// exporting for testing purposes
export { DefaultStepper };
