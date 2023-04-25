import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";

// This component is for testing and experimenting only. Since only DG and Developer Portal uses Code View, no doc page is needed.

const codeExample = `{
    "token": "7e380fbb3196ea76cc45814c1d99d59b66db918ce2131b61f58564"
    "operations": [ 
        {
            "method": "GET", "rel": "redirect-consumer-identification",
            "href": "https://ecom.externalintegration.payex.com/cons",
            "contentType": "text/html"
        },
        {
            "method": "GET",
            "rel": "view-consumer-identification",
            "href": "https://ecom.externalintegration.payex.com/cons",
            "contentType": "application/javascript"
        } 
    ]
}`;

const CodeView = () => (
	<DocContainer>
		<p className="lead">To present code</p>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<figure>
				<div className="code-view">
					<header className="code-view-header">HTTP Request</header>
					<table className="code-view-table">
						<tbody>
							<tr>
								<td className="code-view-numbers">
									<pre>
										{codeExample.split("\n").map((line, i) => (
											<React.Fragment key={i}>
												{i + 1}
												{"\n"}
											</React.Fragment>
										))}
									</pre>
								</td>
								<td className="code-view-code">
									<pre>
										{codeExample.split("\n").map((line, i) => (
											<React.Fragment key={i}>
												{line}
												{"\n"}
											</React.Fragment>
										))}
									</pre>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</figure>
		</ComponentPreview>
	</DocContainer>
);

export default CodeView;
