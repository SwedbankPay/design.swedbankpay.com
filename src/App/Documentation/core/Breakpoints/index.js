import React from "react";

import { DocToc, Property } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Like Bootstrap our breakpoints are ranged from <Property value="xs" /> to <Property value="xl" />. In addition, we have added yet another breakpoint for even bigger screens called <Property value="xxl" />.</p>
        <p>Note that when targeting screensize <Property value="xs" />, it is optional to append the infix to the classname.</p>
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
                        <Property value="xs" />
                    </td>
                    <td>
                        <Property value="0px" />
                    </td>
                    <td>
                        <p>
                            <Property value=".col-8" />, <Property value=".d-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Property value="sm" />
                    </td>
                    <td>
                        <Property value="576px" />
                    </td>
                    <td>
                        <p>
                            <Property value=".col-sm-8" />, <Property value=".d-sm-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Property value="md" />
                    </td>
                    <td>
                        <Property value="768px" />
                    </td>
                    <td>
                        <p>
                            <Property value=".col-md-8" />, <Property value=".d-md-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Property value="lg" />
                    </td>
                    <td>
                        <Property value="992px" />
                    </td>
                    <td>
                        <p>
                            <Property value=".col-lg-8" />, <Property value=".d-lg-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Property value="xl" />
                    </td>
                    <td>
                        <Property value="1200px" />
                    </td>
                    <td>
                        <p>
                            <Property value=".col-xl-8" />, <Property value=".d-xl-block" />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Property value="xxl" />
                    </td>
                    <td>
                        <Property value="1600px" />
                    </td>
                    <td>
                        <p>
                            <Property value=".col-xxl-8" />, <Property value=".d-xxl-block" />
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

const BreakpointsText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Our breakpoints is based on <a href="http://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap{"'"}s breakpoints</a>, but has some modifications.</p>
        <Overview />
    </div>
);

const Breakpoints = () => (
    <>
        <div className="doc-container">
            <div className="row">
                <BreakpointsText />
                <DocToc component={BreakpointsText} />
            </div>
        </div>
    </>
);

export default Breakpoints;

/* For testing */
export { Overview, BreakpointsText };
