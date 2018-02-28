import React, { Component } from "react";
import PropTypes from "prop-types";

// FIXME: This function is really moronic and super fragile, but works for now [EH]
const _findHeadings = (children) => {
    const headings = [];

    if (typeof children.map === "function") {
        children.map(child => {
            if (typeof child.type === "function") {
                if (child.type().props.children.type === "h2") {
                    headings.push(
                        {
                            title: child.type().props.children.props.children,
                            id: child.type().props.children.props.id
                        }
                    );

                } else {
                    const firstChild = child.type().props.children[0];

                    if (firstChild.type === "h2") {
                        headings.push(
                            {
                                title: firstChild.props.children,
                                id: firstChild.props.id
                            }
                        );

                    } else if (typeof firstChild.type === "function") {
                        const secondFirstChild = firstChild.type().props.children[0]; // Really clever namegiving
                        if (secondFirstChild.type === "h2") {
                            headings.push(
                                {
                                    title: secondFirstChild.props.children,
                                    id: secondFirstChild.props.id
                                }
                            );
                        }
                    }
                }
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

    scrollToElement (e, topPosition, id) {
        e.preventDefault();

        window.scroll({
            top: topPosition + 100,
            left: 0,
            behavior: "smooth"
        });

        window.history.pushState(null, null, `#${id}`);
    }

    componentDidMount () {
        if (this.state.headings) {
            this.state.headings.map((heading, i) => {
                (i === 0) ? heading.top = 0 : heading.top = document.getElementById(heading.id).offsetTop;
            });

            this.state.headings.push({ top: document.body.clientHeight });
        }
        window.addEventListener("scroll", this.updateWindowPosition.bind(this));
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.updateWindowPosition.bind(this));
    }

    render () {
        return (
            <div className="col-lg-2 hidden-md doc-toc">
                <ul>
                    {this.state.headings.map((heading, i) => {
                        if (heading.id && heading.title) {
                            const isWithinBoundary = this.state.windowTopPosition >= heading.top &&
                                this.state.windowTopPosition < this.state.headings[i + 1].top;

                            return (
                                <li key={i} className={isWithinBoundary ? "active" : ""}>
                                    <a href={`#${heading.id}`} onClick={e => this.scrollToElement(e, heading.top, heading.id)}>{heading.title}</a>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}

DocToc.propTypes = { component: PropTypes.func.isRequired };

export default DocToc;
