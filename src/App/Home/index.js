import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h2>Welcome to the PayEx DesignGuide</h2>
                        <p>You might wanna go look at the <Link to="/docs">documentation</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
