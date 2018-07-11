import React from "react";

import ComponentPreview from "#/ComponentPreview";
import DocToc from "#/DocToc";

const BasicTable = () => (
    <>
        <h2 id="basic-table">Basic table</h2>
        <p>Basic tables info...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sven</td>
                        <td>Svensson</td>
                        <td>Visby</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sara</td>
                        <td>Svensson</td>
                        <td>Stockholm</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ola</td>
                        <td>Nordmann</td>
                        <td>Oslo</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Holger</td>
                        <td>Danske</td>
                        <td>Copenhagen</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Matti</td>
                        <td>Meikäläinen</td>
                        <td>Lahti</td>
                    </tr>
                </tbody>
            </table>
        </ComponentPreview>
    </>
);

const StripedTable = () => (
    <>
        <h2 id="striped-table">Striped table</h2>
        <p>Striped tables info...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sven</td>
                        <td>Svensson</td>
                        <td>Visby</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sara</td>
                        <td>Svensson</td>
                        <td>Stockholm</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ola</td>
                        <td>Nordmann</td>
                        <td>Oslo</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Holger</td>
                        <td>Danske</td>
                        <td>Copenhagen</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Matti</td>
                        <td>Meikäläinen</td>
                        <td>Lahti</td>
                    </tr>
                </tbody>
            </table>
        </ComponentPreview>
    </>
);

const HoverTable = () => (
    <>
        <h2 id="hover-table">Hover table</h2>
        <p>Hover tables info...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sven</td>
                        <td>Svensson</td>
                        <td>Visby</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sara</td>
                        <td>Svensson</td>
                        <td>Stockholm</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ola</td>
                        <td>Nordmann</td>
                        <td>Oslo</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Holger</td>
                        <td>Danske</td>
                        <td>Copenhagen</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Matti</td>
                        <td>Meikäläinen</td>
                        <td>Lahti</td>
                    </tr>
                </tbody>
            </table>
        </ComponentPreview>
    </>
);

const HoverStripedTable = () => (
    <>
        <h2 id="hover-striped-table">Hover striped table</h2>
        <p>Hover striped tables info...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sven</td>
                        <td>Svensson</td>
                        <td>Visby</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sara</td>
                        <td>Svensson</td>
                        <td>Stockholm</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ola</td>
                        <td>Nordmann</td>
                        <td>Oslo</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Holger</td>
                        <td>Danske</td>
                        <td>Copenhagen</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Matti</td>
                        <td>Meikäläinen</td>
                        <td>Lahti</td>
                    </tr>
                </tbody>
            </table>
        </ComponentPreview>
    </>
);

const DescriptionTable = () => (
    <>
        <h2 id="description-table">Description table</h2>
        <p>Description tables info...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <table className="table table-description table-striped">
                <thead>
                    <tr>
                        <th scope="col">Key</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>Occupation</td>
                        <td>Unknown</td>
                    </tr>
                    <tr>
                        <td>Skills</td>
                        <td>Unknown</td>
                    </tr>
                </tbody>
            </table>
        </ComponentPreview>
    </>
);

const TablesText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Lots of nice info about tables will be here...</p>
        <BasicTable />
        <StripedTable />
        <HoverTable />
        <HoverStripedTable />
        <DescriptionTable />
    </div>
);

const Tables = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <TablesText />
                <DocToc component={TablesText} />
            </div>
        </div>
    );
};

export default Tables;

/* for testing */
export { BasicTable, StripedTable, HoverTable, HoverStripedTable, DescriptionTable, TablesText };
