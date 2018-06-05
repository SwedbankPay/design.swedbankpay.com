import React, { Component } from "react";

class Examples extends Component {
    render () {
        return (
            <>
                <h1>GRID</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 offset-md-2"></div>
                        <div className="col-md-2"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-5"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md"></div>
                        <div className="col-md-auto"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Examples;
