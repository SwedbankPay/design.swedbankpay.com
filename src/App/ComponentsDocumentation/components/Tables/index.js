import React from "react";

import { tableShowcase, buttonTypesTable, alignmentTable, consistencyTable } from "./constants";
import { ComponentPreview, DocContainer } from "@docutils";
import Table from "@components/Table";

const Overview = () => (
    <section>
        <h2>Overview</h2>
        <p>Use the table component to make information easier to compare and scan for users.</p>
        <p>Tables can be used for several different things, but common use cases for a table are, for example displaying a list that contains different types of data (text, numbers) and in some cases combined with interactions and various graphical elements.</p>

        <ComponentPreview language="html" showCasePanel codeFigure showCasePanelAdvanced={tableShowcase} />

        <section>
            <h3>Things to consider</h3>
            <ul className="list list-bullet">
                <li>When deciding how to style and format your table, prioritize readability and remove any visual clutter that may distract the eye.</li>
                <li>Dividers shouldn’t yell for users’ attention, and shouldn’t distract users from the content itself. The goal behind the divider is to support and make the layout clean, not to catch the attention. </li>
                <li>If you have a table in which you showcase mainly transactions on individual rows, perhaps vertical dividers are not helping the user’s readability.</li>
                <li>When using sorting on multiple columns in a table, make sure the behavior is consistent no matter the data/content, i.e. if one column is sorted in ascending order first and descending order second, any other sortable column in the table should follow the same logic.</li>
            </ul>
        </section>
        <section>
            <h3>How to align columns properly</h3>
            <p>Headers, generally, should carry whatever alignment their data has. This keeps the vertical lines of the table clean with or without dividers, and provides consistency and context.</p>
            <div className="slab slab-plain slab-border-success table-align-example">
                <h3>Do</h3>
                <Table tableData={consistencyTable()} />
            </div>
            <div className="slab slab-plain slab-border-error table-align-example">
                <h3>Don&#x27;t</h3>
                <Table tableData={consistencyTable(true)} />
            </div>
            <p>By default, most column data is left aligned. There could be two exceptions which should be right aligned to help users identify number size and interactions.</p>
            <div className="row">
                <div className="col-6">
                    <div className="slab slab-plain slab-border-success">
                        <h3>Do</h3>
                        <Table tableData={alignmentTable(true)} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="slab slab-plain slab-border-error">
                        <h3>Don&#x27;t</h3>
                        <Table tableData={alignmentTable()} />

                    </div>
                </div>
            </div>
        </section>
        <section>
            <h3>How to use buttons in tables</h3>
            <p>Buttons should generally be placed in the last column in the table and be right-aligned. </p>
            <div className="row">
                <div className="col-6">
                    <div className="slab slab-plain slab-border-success">
                        <h3>Do</h3>
                        <Table tableData={buttonTypesTable("actionList")} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="slab slab-plain slab-border-error">
                        <h3>Don&#x27;t</h3>
                        <Table tableData={buttonTypesTable("favBtn")} />
                    </div>
                </div>
            </div>
            <p>If more than two actions can be taken, consider using an action list instead of buttons to avoid making the cell too cluttered.</p>
            <div className="row">
                <div className="col-6">
                    <div className="slab slab-plain slab-border-success">
                        <h3>Do</h3>
                        <Table tableData={buttonTypesTable()}/>
                    </div>
                </div>
                <div className="col-6 button-table-example">
                    <div className="slab slab-plain slab-border-error">
                        <h3>Don&#x27;t</h3>
                        <Table tableData={buttonTypesTable("delete")}/>
                    </div>
                </div>
            </div>
            <p>To the greatest extent possible, try to stick to the same type of buttons within a table cell.</p>
        </section>
    </section>
);

const Tables = () => (
    <DocContainer>
        <section id="table-doc">
            <p className="lead">A table displays information in a grid of rows and columns.</p>
            <Overview />
        </section>
    </DocContainer>
);

export default Tables;

/* For testing */
export { Overview };
