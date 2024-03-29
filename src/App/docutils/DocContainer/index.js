import React, { useEffect } from "react";

import { sidebar } from "@src/scripts/main";

const DocContainer = ({ classes = "", children }) => {
	const DocContent = () => (
		<div id="doc-body" className={`doc-body col-12 ${classes}`}>
			{children}
		</div>
	);

	useEffect(() => {
		if (document?.querySelector(".doc-body")) {
			sidebar.populateSidebarTertiary(
				"doc-sidebar",
				document.querySelector(".doc-body").querySelectorAll("h2[id]"),
			);
			sidebar.initScrollListener("doc-sidebar", "doc-body", "h2");
		}
	}, []);

	return (
		<div className="row">
			<DocContent />
		</div>
	);
};

export default DocContainer;
