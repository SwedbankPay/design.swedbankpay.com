import React, { Component } from "react";
import Loader from "@/Loader";
import { loader } from "$/px-script/main";

class LoadingComponent extends Component {
    componentDidMount () {
        loader.init();
    }

    render () {
        return (
            <div id="loading-component">
                <Loader size="large" muted />
                <span className="loading-text text-muted">Loading...</span>
            </div>
        );
    }
}

export default LoadingComponent;
