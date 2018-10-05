import React, { Component } from "react";
// import PropTypes from "prop-types";

class Tabs extends Component {
    constructor (props) {
        super(props);

        this.state = { active: 1 };
    }

    setActive (e, i) {
        e.preventDefault();
        this.setState({ active: i });
    }

    render () {
        const { mode, items, id } = this.props;
        // const containsHorizontal = mode.includes("horizontal");

        return (
            <div className={`tabs${mode ? mode : ""}`} id={id ? id : ""}>{"\n"}
                <i className="material-icons">keyboard_arrow_right</i>
                <ul>
                    {items.map((name, i) => (
                        <li key={`tab-item-${name}-${i}`} className={this.state.active === i ? "active" : null}>{"\n"}
                            <a href="#" onClick={e => this.setActive(e, i)}>{name}</a>{"\n"}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Tabs.propTypes = {
//     mode: PropTypes.oneOf([
//         "responsive",
//         "horizontal-xs",
//         "horizontal-sm",
//         "horizontal-md",
//         "horizontal-lg",
//         "horizontal-xl"]).isRequired,
//     items: PropTypes.array.isRequired,
//     id: PropTypes.string.isRequired
// };

export default Tabs;
