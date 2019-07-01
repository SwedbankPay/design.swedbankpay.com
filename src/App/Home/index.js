import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { setTitle } from "../utils";

const Home = () => {
    useEffect(() => {
        setTitle("Home");
    });

    return (
        <div className="container fp-container pt-3 pb-3">
            <div className="alert alert-warning">
                <header className="alert-header">
                    <i className="material-icons alert-icon">warning</i>
                    <h3>Site under development</h3>
                </header>
                <div className="alert-body">
                    <p>The Design Guide is under active development and thus subject to change.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 pt-3 pt-md-0">
                    <div className="card card-plain">
                        <header className="card-header">
                            <h2>Placeholder</h2>
                        </header>
                        <div className="card-body">
                            <p>This paragraph contains some text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 pt-3 pt-md-0">
                    <div className="card card-plain">
                        <header className="card-header">
                            <h2>Design Guide</h2>
                        </header>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <i className="material-icons material-icons-large text-brand">computer</i>
                            </div>
                            <p>The Design Guide contains our component library for web development and general documentation for component use.</p>
                            <p>Check out the <Link to="/docs/getting-started/introduction">documentation</Link>.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 pt-3 pt-md-0">
                    <div className="card card-plain">
                        <header className="card-header">
                            <h2>Placeholder</h2>
                        </header>
                        <div className="card-body">
                            <p>This paragraph contains some text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
