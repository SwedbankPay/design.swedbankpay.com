import React from "react";
import classnames from "classnames";
import Tag from "@components/CodeTags";

const Table = ({ plain, condensed, hover, description }) => {
    const tableClasses = classnames(
        "table",
        plain ? "table-plain" : "table-striped",
        condensed ? "table-condensed" : null,
        hover ? "table-hover" : null,
        description ? "table-description" : null
    );

    return (
        <table className={tableClasses}>
            <caption>Employees</caption>
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
    );
};

export const tableShowcase = {
    id: "overviewTables",
    elements: [
        {
            component: <Table />,
            options: {
                checkbox: [
                    {
                        inputs: [
                            {
                                id: "hover_effect",
                                name: "Hover effect",
                                value: {
                                    hover: true
                                }
                            }
                        ]
                    }
                ],
                radio: [
                    {
                        id: "table_color",
                        title: "Color",
                        values: [
                            {
                                name: "Striped",
                                value: {
                                    plain: false
                                }
                            },
                            {
                                name: "Plain",
                                value: {
                                    plain: true
                                }
                            }
                        ]
                    },
                    {
                        id: "table_style",
                        title: "Style",
                        values: [
                            {
                                name: "Default",
                                value: {
                                    condensed: false
                                }
                            },
                            {
                                name: "Condensed",
                                value: {
                                    condensed: true
                                }
                            },
                            {
                                name: "Description",
                                value: {
                                    description: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Table",
            description: <p>The table component should be preceded by either a <Tag type="primary" code="<caption>"/> or a heading that introduces the content of the table. The table color can either be striped or plain with borders, and there is also a more condensed version of the table with more narrow rows. A row hover state can help the user visually scan the data in a row even if the row is not interactive.</p>

        }
    ]
};
