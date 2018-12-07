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

        this.getResults = this.getResults.bind(this);
        this.closeResults = this.closeResults.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    closeResults (e) {
        if ((e.type === "keydown" && e.key === "Escape") || (e.type === "click" && !e.target.closest(".doc-search"))) {
            this.setState({ showResults: false });
        }
    }

    handleInputChange (e) {
        this.getResults(e.target.value);
    }

    componentWillUnmount () {
        document.removeEventListener("keydown", this.closeResults);
        document.removeEventListener("click", this.closeResults);
    }

    componentDidMount () {
        document.addEventListener("keydown", this.closeResults);
        document.addEventListener("click", this.closeResults);
    }

    render () {
        return (
            <form className="doc-search">
                <input
                    type="text"
                    className="form-control"
                    name="designguide-search"
                    placeholder="Search..."
                    onChange={this.handleInputChange}
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
