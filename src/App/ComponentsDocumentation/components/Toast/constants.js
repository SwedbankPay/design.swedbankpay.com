import React from "react";

import CodeTags from "@components/CodeTags";
import { toast } from "@src/scripts/main";

const Toast = ({ type, title }) => (
    <button className="btn btn-primary" type="button" onClick={() => toast({
        html: `
            <p>
                <b>${title} header:</b>
                Input informative alert information here, provide <a href>link</a> to solution or more info when possible.
            </p>`,
        type
    })}>{title} toast</button>
);

export const optionsTable = [
    {
        tableHead: ["Name", "Type", "Default", "Description"],
        tableBody: [
            {
                tableData: [
                    "html",
                    "String",
                    <><CodeTags type="secondary" code='""'/></>,
                    "The HTML content of the Toast."
                ]
            },
            {
                tableData: [
                    "type",
                    "String",
                    <><CodeTags type="secondary" code='""'/></>,
                    <>Alert types: <CodeTags type="secondary" code="success"/>, <CodeTags type="secondary" code="neutral"/>, <CodeTags type="secondary" code="warning"/>, <CodeTags type="secondary" code="danger"/>
                    </>
                ]
            },
            {
                tableData: [
                    "classes",
                    "Array of strings",
                    <><CodeTags type="secondary" code="[]"/></>,
                    "Classes to be added to the toast element."
                ]
            },
            {
                tableData: [
                    "completeCallback",
                    "Function",
                    <><CodeTags type="secondary" code="null"/></>,
                    "Callback function called when toast is dismissed."
                ]
            }
        ]
    }
];

export const toastShowCase = {
    id: "overviewToast",
    tabsId: "overviewToastTabs",
    hideOptions: true,
    elements: [
        {
            tab: "Information",
            component: <Toast type="neutral" title="Information" />,
            options: {
                checkbox: []
            },
            title: "Information toast",
            description: "Use this toast when you want to inform the user. The message should clearly state and explain what the information is about and in some cases a link can also be used to direct the user towards continued reading."
        },
        {
            tab: "Success",
            component: <Toast type="success" title="Success" />,
            options: {
                checkbox: []
            },
            title: "Success toast",
            description: "Use success toast when the action performed by the user has returned a success."
        },
        {
            tab: "Warning",
            component: <Toast type="warning" title="Warning" />,
            options: {
                checkbox: []
            },
            title: "Warning toast",
            description: "The warning toast warns the user about situations that might be unfavorable. Don’t use this to present critical information."
        },
        {
            tab: "Error",
            component: <Toast type="danger" title="Error" />,
            options: {
                checkbox: []
            },
            title: "Error toast",
            description: "Error toast informs the user of error and issues that may have occurred, they should let the user know what has happened and how the user can solve the issue."
        }
    ]
};

