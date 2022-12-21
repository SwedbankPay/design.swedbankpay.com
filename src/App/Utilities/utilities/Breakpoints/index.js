import React from "react";
import Alert from "@components/Alert";
import { DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Like Bootstrap our breakpoints are ranged from <CodeTags type="secondary" code="xs" /> to <CodeTags type="secondary" code="xl" />. In addition, we have added yet another breakpoint for even bigger screens called <CodeTags type="secondary" code="xxl" />.</p>
        <p>Note that when targeting screensize <CodeTags type="secondary" code="xs" />, it is optional to append the infix to the classname.</p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Infix</th>
                    <th>Min-width</th>
                    <th>Example usage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <CodeTags type="secondary" code="xs" />
                    </td>
                    <td>
                        <CodeTags type="secondary" code="0px" />
                    </td>
                    <td>
                        <p>
                            <CodeTags type="secondary" code=".col-8" />, <CodeTags type="secondary" code=".d-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <CodeTags type="secondary" code="sm" />
                    </td>
                    <td>
                        <CodeTags type="secondary" code="576px" />
                    </td>
                    <td>
                        <p>
                            <CodeTags type="secondary" code=".col-sm-8" />, <CodeTags type="secondary" code=".d-sm-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <CodeTags type="secondary" code="md" />
                    </td>
                    <td>
                        <CodeTags type="secondary" code="768px" />
                    </td>
                    <td>
                        <p>
                            <CodeTags type="secondary" code=".col-md-8" />, <CodeTags type="secondary" code=".d-md-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <CodeTags type="secondary" code="lg" />
                    </td>
                    <td>
                        <CodeTags type="secondary" code="992px" />
                    </td>
                    <td>
                        <p>
                            <CodeTags type="secondary" code=".col-lg-8" />, <CodeTags type="secondary" code=".d-lg-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <CodeTags type="secondary" code="xl" />
                    </td>
                    <td>
                        <CodeTags type="secondary" code="1200px" />
                    </td>
                    <td>
                        <p>
                            <CodeTags type="secondary" code=".col-xl-8" />, <CodeTags type="secondary" code=".d-xl-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <CodeTags type="secondary" code="xxl" />
                    </td>
                    <td>
                        <CodeTags type="secondary" code="1600px" />
                    </td>
                    <td>
                        <p>
                            <CodeTags type="secondary" code=".col-xxl-8" />, <CodeTags type="secondary" code=".d-xxl-block" />
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

const Breakpoints = () => (
    <DocContainer>
        <Alert type="danger" icon="error" text={<p><b>To be removed:</b> This documentation page will be removed.</p>}/>
        <p className="lead">Our breakpoints is based on <a href="http://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap{"'"}s breakpoints</a>, but has some modifications.</p>
        <Overview />
    </DocContainer>
);

export default Breakpoints;

/* For testing */
export { Overview };
