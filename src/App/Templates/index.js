import React, { Component } from "react";

import { setTitle } from "../utils";

class Templates extends Component {
    componentWillMount () {
        setTitle("Templates");
    }

    render () {
        return (
            <>
                <h1>Here there might be templates</h1>
            </>
        );
    }
}

export default Templates;
