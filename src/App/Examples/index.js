import React, { Component } from "react";

import { setTitle } from "../utils";

class Examples extends Component {
    componentDidMount () {
        setTitle("Examples");
    }

    render () {
        return (
            <div className="documentation">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-xxl-6">
                        <section className="panel panel-default">
                            <div className="panel-body">
                                <h2>Example pages</h2>
                                <ul className="list">
                                    <li>
                                        <span>
                                            <a target="_blank" rel="noopener noreferrer" href="https://examples.design.payex.com/login/">Login page</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <a target="_blank" rel="noopener noreferrer" href="https://examples.design.payex.com/signup/">Signup</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <a target="_blank" rel="noopener noreferrer" href="https://examples.design.payex.com/error-page/404/">404 page</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <a target="_blank" rel="noopener noreferrer" href="https://examples.design.payex.com/error-page/500/">500 page</a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Examples;
