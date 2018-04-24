import React, { Component } from "react";

import { setTitle } from "../utils";

class Examples extends Component {
    componentWillMount () {
        setTitle("Examples");
    }

    render () {
        return (
            <>
                <h1>Here there be examples</h1>
            </>
        );
    }
}

export default Examples;
