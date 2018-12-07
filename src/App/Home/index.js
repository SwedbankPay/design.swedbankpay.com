import React, { Component } from "react";
import { Link } from "react-router-dom";

import { setTitle } from "../utils";

class Home extends Component {
    componentDidMount () {
        setTitle("Home");
    }

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-xxl-6">
                        <section className="panel panel-default">
                            <div className="panel-body">
                                <h2>Welcome to the PayEx DesignGuide</h2>
                                <p>You might wanna go look at the <Link to="/docs">documentation</Link> </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
