import React, { Component } from "react";
import PropTypes from "prop-types";

class Tabs extends Component {
    constructor (props) {
        super(props);

        this.state = { active: 0 };
    }

    setActive (e, i) {
        e.preventDefault();
        this.setState({ active: i });
    }

    render () {
        const { id, scroll, items, ulId } = this.props;

        return (
            <div id={id} className={`tabs${scroll ? " tabs-scroll" : ""}`}>{"\n"}
                <ul id={ulId}>
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

Tabs.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array.isRequired,
    scroll: PropTypes.bool,
    ulId: PropTypes.string
};

export default Tabs;
