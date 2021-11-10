import React from "react";
import Alert from "@components/Alert";

const titleBuilder = type => (
    <p><b>{type} title:</b> Input informative alert message here, provide link to solution or more info when <a href="#">possible</a>.</p>
);

export const alertsShowCase = {
    id: "overviewAlert",
    tabsId: "overviewAlertTabs",
    elements: [
        {
            tab: "Error",
            component: <Alert type="danger" icon="cancel" text={titleBuilder("Error")} />,
            options: {
                checkbox: [
                    {
                        title: "Options",
                        inputs: [
                            {
                                id: "close_button",
                                name: "Close button",
                                value: {
                                    close: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Error alert",
            description: "Use this alert to let the user know that something went wrong. The message should clearly state the problem and if possible provide information on how to fix it."
        },
        {
            tab: "Warning",
            component: <Alert type="warning" icon="warning" text={titleBuilder("Warning")} />,
            options: {
                checkbox: [
                    {
                        title: "Options",
                        inputs: [
                            {
                                id: "close_button",
                                name: "Close button",
                                value: {
                                    close: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Warning error",
            description: "Use this alert to help users avoid errors and warn against decisions that might have unexpected results"
        },
        {
            tab: "Informative",
            component: <Alert type="informative" icon="info" text={titleBuilder("Informative")}/>,
            options: {
                checkbox: [
                    {
                        title: "Options",
                        inputs: [
                            {
                                id: "close_button",
                                name: "Close button",
                                value: {
                                    close: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Informative alert",
            description: "Use this alert to communicate additional information to the user that may not be tied to their current action or task.	"
        },
        {
            tab: "Success",
            component: <Alert type="success" icon="check_circle" text={titleBuilder("Success")} />,
            options: {
                checkbox: [
                    {
                        title: "Options",
                        inputs: [
                            {
                                id: "close_button",
                                name: "Close button",
                                value: {
                                    close: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Success alert",
            description: "Use this alert to let the user know that an action or event has happened successfully. Success alerts are not a common use case for alert messages."
        }
    ]
};
// Will be restored at a later stage

// export const alertsGlobalShowCase = {
//     id: "overviewAlertGlobal",
//     hideOptions: true,
//     tabsId: "overviewAlertGlobalTabs",
//     elements: [
//         {
//             tab: "Warning",
//             component: <Alert type="warning" global icon="warning" text={<p><b>Login problems:</b> We are currently experiencing high numbers of login failures. We are working on solving the problem as quick as possible.</p>} />,
//             options: {
//                 checkbox: [
//                     {
//                         inputs: []
//                     }
//                 ]
//             },
//             title: "Global warning alert",
//             description: "Use this alert to broadcast a problem concerning the the entire system."
//         },
//         {
//             tab: "Informative",
//             component: <Alert type="informative" global icon="info" text={<p><b>Planned maintenance:</b> Friday 16:00 - 18:00 you will not be able to log into our service. We apologize form the inconvenience in advance.</p>}/>,
//             options: {
//                 checkbox: [
//                     {
//                         inputs: []
//                     }
//                 ]
//             },
//             title: "Global informative alert",
//             description: "Use this alert to broadcast information concerning the entire system."
//         }
//     ]
// };
