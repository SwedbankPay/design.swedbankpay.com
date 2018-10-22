import React, { Component } from "react";
import classnames from "classnames";

class Nav extends Component {
    constructor (props) {
        super(props);

        this.state = {
            active: "main-0"
        };
    }

    setActive (e, id) {
        e.preventDefault();

        const subParent = e.target.closest(".submenu");

        if (subParent) {
            subParent.classList.remove("submenu-open");
        }

        this.setState({ active: id });

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
                                            <li key={`nav-subItems-${itemsname}-${j}`} className={this.state.active === `sub-${i}-${j}` ? "active" : null}>
                                                <a href="#" onClick = {e => this.setActive(e, `sub-${i}-${j}`)}>{itemsname}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                :
                                <a href="#" onClick = {e => e.preventDefault()} className={this.state.active === `main-${i}` ? "active" : null}>{"\n"}
                                    <i onClick = {e => this.setActive(e, `main-${i}`)} className="material-icons">{icon}</i>{"\n"}
                                    <span onClick = {e => this.setActive(e, `main-${i}`)}>{name}</span>{"\n"}
                                </a>}{"\n"}
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Nav;
