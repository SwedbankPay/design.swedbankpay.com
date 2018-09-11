import React from "react";
import Alert from "@/Alert";

const DeprecatedComponentAlert = () => (
    <Alert type="danger">
        <h3 className="color-danger">Component deprecated!</h3>
        <p>This component has been deprecated and should not be used!</p>
    </Alert>
);

export default DeprecatedComponentAlert;
