import React from "react";
import Alert from "@components/Alert";

// TODO: is it actually used anywhere? else remove
const DeprecatedComponentAlert = () => (
	<Alert type="danger" icon="swepay-icon-error-triangle-filled">
		<h3 className="text-danger">Component deprecated!</h3>
		<p>This component has been deprecated and should not be used!</p>
	</Alert>
);

export default DeprecatedComponentAlert;
