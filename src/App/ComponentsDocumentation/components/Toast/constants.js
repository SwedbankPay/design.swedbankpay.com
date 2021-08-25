import React from "react";
import Button from "@components/Button";

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

export const toastShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Toast type="neutral" title="Information" />,
            options: {
                radio: [
                    {
                        id: "toast_type",
                        title: "Type",
                        values: [
                            {
                                name: "Information",
                                value: {
                                    type: "neutral",
                                    title: "Information"
                                }
                            },
                            {
                                name: "Warning",
                                value: {
                                    type: "warning",
                                    title: "Warning"
                                }
                            },
                            {
                                name: "Error",
                                value: {
                                    type: "danger",
                                    title: "Error"
                                }
                            },
                            {
                                name: "Success",
                                value: {
                                    type: "success",
                                    title: "Success"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Information toast",
            description: "Use this toast when you want to inform the user. The message should clearly state and explain what the information is about and in some cases a link can also be used to direct the user towards continued reading."
        }
    ]
};

