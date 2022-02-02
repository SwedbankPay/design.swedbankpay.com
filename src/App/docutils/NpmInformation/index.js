import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ComponentPreview } from "@docutils";
import Tag from "../../components/Tag";

const NpmInformation = ({ componentName, noInit }) => (
    <section>
        <h3>Usage with NPM</h3>
        <p><Link to="/get-started/for-developers/">Usage with NPM</Link> will require you to import it from <Tag code type="primary" text="@swedbankpay/design-guide" />.</p>
        <ComponentPreview language="javascript" codeFigure dangerousHTML>
            import &#123; {componentName} &#125; from &quot;@swedbankpay/design-guide&quot;; {"\n"}
            {noInit ? "" : `${componentName}.init()`}
        </ComponentPreview>
    </section>
);

NpmInformation.propTypes = {
    componentName: PropTypes.string,
    noInit: PropTypes.bool
};

export default NpmInformation;
