import React from "react";
import Alert from "@components/Alert";

const ExperimentalComponentAlert = () => (
	<Alert type="danger">
		<h3 className="text-danger">Component under development!</h3>
		<p>This component is still under development and is subject to change.</p>
	</Alert>
);

export default ExperimentalComponentAlert;
