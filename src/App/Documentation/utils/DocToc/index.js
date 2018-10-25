import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavHashLink as NavLink } from "react-router-hash-link";

// FIXME: This function is really moronic and super fragile, but works for now [EH]
const _findHeadings = children => {
    const headings = [];

    if (typeof children.map === "function") {
        children.map(child => {
            if (child.type.name !== "ExperimentalComponentAlert" && typeof child.type === "function") {
                if (child.type().props.children.type === "h2") {
                    headings.push({
                        title: child.type().props.children.props.children,
                        id: child.type().props.children.props.id
                    });

                } else {
                    const firstChild = child.type().props.children[0];

                    if (firstChild.type === "h2") {
                        headings.push({
                            title: firstChild.props.children,
                            id: firstChild.props.id
                        });

                    } else if (typeof firstChild.type === "function") {
                        const secondFirstChild = firstChild.type().props.children[0]; // Really clever namegiving

                        if (secondFirstChild.type === "h2") {
                            headings.push({
                                title: secondFirstChild.props.children,
                                id: secondFirstChild.props.id
                            });
                        }
                    }
                }

            } else if (child.type === "h2") {
                headings.push({
                    title: child.props.children,
                    id: child.props.id
                });
            }
        });
    }

    return headings;
};

class DocToc extends Component {
    constructor (props) {
        super(props);
        this.state = {
            headings: _findHeadings(this.props.component().props.children),
            windowTopPosition: window.pageYOffset
        };
    }

    updateWindowPosition () {
        this.setState({ windowTopPosition: window.pageYOffset });
    }

    scrollToElement (element) {
        // window.scroll(0, element.offsetTop + 100);
        window.scrollTo({
            top: element.offsetTop + 100,
            left: 0,
            behavior: "instant"
        });
    }

    componentDidMount () {
        if (this.state.headings) {
            this.state.headings.map((heading, i) => {
                (i === 0) ? heading.top = 0 : heading.top = document.getElementById(heading.id).offsetTop;
            });

            this.state.headings.push({ top: document.body.clientHeight });
        }

        this.scrollListener = this.updateWindowPosition.bind(this);
        window.addEventListener("scroll", this.scrollListener);
        this.updateWindowPosition();
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.scrollListener);
    }

    render () {
        return (
            <div className="col-2 d-none d-lg-block">
                <div className="doc-toc">
                    <ul>
                        {this.state.headings.map((heading, i) => {
                            if (heading.id && heading.title) {
                                const isWithinBoundary = this.state.windowTopPosition >= heading.top &&
                                    this.state.windowTopPosition < this.state.headings[i + 1].top;

                                return (
                                    <li key={i} className={isWithinBoundary ? "active" : ""}>
                                        <NavLink
                                            to={`#${heading.id}`}
                                            activeClassName="active"
                                            scroll={this.scrollToElement}
                                        >
                                            {heading.title}
                                        </NavLink>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

DocToc.propTypes = { component: PropTypes.func.isRequired };

export default DocToc;
