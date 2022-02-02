import React from "react";

import { DocContainer } from "@docutils";
import Tag from "@components/Tag";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Like Bootstrap our breakpoints are ranged from <Tag code type="secondary" text="xs" /> to <Tag code type="secondary" text="xl" />. In addition, we have added yet another breakpoint for even bigger screens called <Tag code type="secondary" text="xxl" />.</p>
        <p>Note that when targeting screensize <Tag code type="secondary" text="xs" />, it is optional to append the infix to the classname.</p>
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
                        <Tag code type="secondary" text="xs" />
                    </td>
                    <td>
                        <Tag code type="secondary" text="0px" />
                    </td>
                    <td>
                        <p>
                            <Tag code type="secondary" text=".col-8" />, <Tag code type="secondary" text=".d-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Tag code type="secondary" text="sm" />
                    </td>
                    <td>
                        <Tag code type="secondary" text="576px" />
                    </td>
                    <td>
                        <p>
                            <Tag code type="secondary" text=".col-sm-8" />, <Tag code type="secondary" text=".d-sm-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Tag code type="secondary" text="md" />
                    </td>
                    <td>
                        <Tag code type="secondary" text="768px" />
                    </td>
                    <td>
                        <p>
                            <Tag code type="secondary" text=".col-md-8" />, <Tag code type="secondary" text=".d-md-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Tag code type="secondary" text="lg" />
                    </td>
                    <td>
                        <Tag code type="secondary" text="992px" />
                    </td>
                    <td>
                        <p>
                            <Tag code type="secondary" text=".col-lg-8" />, <Tag code type="secondary" text=".d-lg-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Tag code type="secondary" text="xl" />
                    </td>
                    <td>
                        <Tag code type="secondary" text="1200px" />
                    </td>
                    <td>
                        <p>
                            <Tag code type="secondary" text=".col-xl-8" />, <Tag code type="secondary" text=".d-xl-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Tag code type="secondary" text="xxl" />
                    </td>
                    <td>
                        <Tag code type="secondary" text="1600px" />
                    </td>
                    <td>
                        <p>
                            <Tag code type="secondary" text=".col-xxl-8" />, <Tag code type="secondary" text=".d-xxl-block" />
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

const Breakpoints = () => (
    <DocContainer>
        <p className="lead">Our breakpoints is based on <a href="http://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap{"'"}s breakpoints</a>, but has some modifications.</p>
        <Overview />
    </DocContainer>
);

export default Breakpoints;

/* For testing */
export { Overview };
