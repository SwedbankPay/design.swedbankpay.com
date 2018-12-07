import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SearchBox extends Component {
    constructor (props) {
        super(props);

        this.state = {
            query: "",
            results: [],
            showResults: false
        };
    }

    getResults (query) {
        const results = [];

        if (query) {
            this.props.routes.forEach(route => {
                route.routes.forEach(r => {
                    if (r.title.toLowerCase().includes(query.toLowerCase())) {
                        results.push(r);
                    }
                });
            });

            this.setState({ showResults: true });
        }

        this.setState({ results });
    }

    handleInputChange (e) {
        this.getResults(e.target.value);
    }

    componentWillUnmount () {
        document.removeEventListener("keydown");
    }

    componentDidMount () {
        document.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                this.setState({ showResults: false });
            }
        });

        document.addEventListener("click", e => {
            if (!e.target.closest(".doc-search")) {
                this.setState({ showResults: false });
            }
        });
    }

    render () {
        return (
            <form className="doc-search">
                <input
                    type="text"
                    className="form-control"
                    name="designguide-search"
                    placeholder="Search..."
                    onChange={this.handleInputChange.bind(this)}
                    onFocus={() => this.setState({ showResults: true })}
                />
                {this.state.results.length ?
                    <ul className={`search-results ${this.state.showResults ? "d-block" : null}`}>
                        {this.state.results.map(({ path, title }, i) => <li className="search-result" key={`search_result_${i}`}>
                            <Link
                                to={path}
                                onClick={() => this.setState({ showResults: false })}
                            >{title}</Link>
                        </li>)}
                    </ul> : null}
            </form>
        );
    }
}

SearchBox.propTypes = {
    routes: PropTypes.array.isRequired
};

export default SearchBox;
