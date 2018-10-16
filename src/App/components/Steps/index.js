import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DefaultSteps = [
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


const StepContent = ({completed, subtitle, title}) => ( 
    <>
        {completed ? <div className="material-icons steps-icon" >check</div> : null}
        {title}
        {subtitle ? <div className="steps-sub-title">{subtitle}</div> : null}
    </>
);

const RenderSteps = ({ steps }) => (
    <>
        {steps.map(({ title, subtitle, completed, ongoing, selected, clickable }, i) => (      
            <li key={i} className={classnames(completed ? "steps-completed" : null,
                ongoing ? "steps-ongoing" : null,
                selected ? "steps-selected" : null)}>
                {console.log(steps) }
                {clickable ? <a><StepContent completed={completed} subtitle={subtitle} title={title}/></a> : <StepContent completed={completed} subtitle={subtitle} title={title}/> }

            </li>
        ))}
    </>
);

const Steps = ({ steps, vertical }) => {
    const stepsClasses = classnames(
        "steps",
        vertical ? "steps-vertical" : null,
    );

    return (<ol className={stepsClasses}>
        {steps ? <RenderSteps steps={steps} /> : <RenderSteps steps={DefaultSteps} />}
    </ol>
    );
};

Steps.propTypes = {
    steps: PropTypes.array,
    vertical: PropTypes.bool,
    clickable: PropTypes.bool
};

export default Steps;

// exporting for testing purposes
export { DefaultSteps };
