import React, { Component } from "react";
import classnames from "classnames";

class Nav extends Component {
    constructor (props) {
        super(props);

        this.state = { activesub: 1 };
    }

    setActive (e, i, j) {
        e.preventDefault();
        console.log(e);
        this.setState({ activesub: i + j });
    }

    render () {
        const { items, vertsize, widesize } = this.props;

        const sidebarClassname = classnames("nav",
            vertsize ? `nav-${vertsize}-vertical` : "",
            widesize ? `nav-${widesize}-vertical-wide` : ""
        );

        return (
            <nav className={sidebarClassname}>
                <ul>
                    {items.map(({ name, icon, subItems }, i) => (
                        <li key={`nav-item-${name}-${i}`}>{"\n"}
                            { subItems ?
                                <div className="submenu">{"\n"}
                                    <i className="material-icons">{icon}</i>{"\n"}
                                    <span>{name}</span>
                                    <ul>
                                        {subItems.map((itemsname, j) => (
                                            <li key={`nav-subItems-${itemsname}-${j}`} className={this.state.activesub === i + j ? "active" : null}>
                                                <a href="#" onClick = {e => this.setActive(e, i, j)}>{itemsname}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                :
                                <a href="#" onClick = {e => e.preventDefault()}>{"\n"}
                                    <i className="material-icons">{icon}</i>{"\n"}
                                    <span onClick = {e => this.setActive(e, i)}>{name}</span>{"\n"}
                                </a>}{"\n"}
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
};

export default Nav;
