import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";

const CodeView = () => (
    <DocContainer>
        <p className="lead">To present code</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <figure>
                <div className="code-view">
                    <header className="code-view-header">
                        HTTP Request
                    </header>
                    <pre className="code-view-display">
                        {(`{
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
}
`).split("\n").map((line, i) => <><span key={i}>{line}</span>{"\n"}</>)}
                    </pre>
                </div>
            </figure>
        </ComponentPreview>
    </DocContainer>
);

export default CodeView;
