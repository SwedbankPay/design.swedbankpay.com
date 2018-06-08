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
                <div className="row">
                    <div className="col-md-8 col-xxl-6 offset-md-2 offset-xxl-3">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h2>Welcome to the PayEx DesignGuide</h2>
                                <p>You might wanna go look at the <Link to="/docs">documentation</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
