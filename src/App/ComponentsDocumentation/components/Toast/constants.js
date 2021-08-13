import React from "react";

const Toast = ({ type, icon, text }) => (
    <div className="toast-example-container">
        <div id="toast-container">
            <div className={`toast toast-${type}`}>{"\n"}
                <i className="material-icons">{icon || type}</i>
                <div className="toast-content">{text} messsage</div>{"\n"}
                <i className="material-icons">close</i>
            </div>
        </div>
    </div>
);

export const toastShowCase = {
    id: "overview-toast",
    tabsId: "overview-toast-tabs",
    elements: [
        {
            tab: "Info",
            component: <Toast type="neutral" icon="info" text="Information"/>,
            options: {
                checkbox: [
                    {
                        inputs: []
                    }
                ]
            },
            title: "Information toast",
            description: "Use this toast when you want to inform the user. The message should clearly state and explain what the information is about and in some cases a link can also be used to direct the user towards continued reading."
        },
        {
            tab: "Success",
            component: <Toast type="success" icon="check_circle" text="Success"/>,
            options: {
                checkbox: [
                    {
                        inputs: []
                    }
                ]
            },
            title: "Success toast",
            description: "Use success toast when the action performed by the user has returned a success."
        },
        {
            tab: "Warning",
            component: <Toast type="warning" text="Warning"/>,
            options: {
                checkbox: [
                    {
                        inputs: []
                    }
                ]
            },
            title: "Warning toast",
            description: "The warning toast warns the user about situations that might be unfavorable. Don’t use this to present critical information."
        },
        {
            tab: "Error",
            component: <Toast type="danger" icon="cancel" text="Error"/>,
            options: {
                checkbox: [
                    {
                        inputs: []
                    }
                ]
            },
            title: "Error toast",
            description: "Warning toast warns the user of error and issues that may have occured, let the user know what has happened and how the user can solve the issue."
        }
    ]
};

