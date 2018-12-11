import React from "react";

import { DocContainer } from "#";

import Chrome from "./browser-icons/chrome.svg";
import Firefox from "./browser-icons/firefox.svg";
import Edge from "./browser-icons/edge.svg";
import InternetExplorer from "./browser-icons/internet-explorer.svg";
import Opera from "./browser-icons/opera.svg";
import Safari from "./browser-icons/safari.svg";

const BrowserSupport = () => (
    <DocContainer>
        {/* TODO: Replace this with styled components [EH] */}
        <style dangerouslySetInnerHTML={{ __html: `
            .browser-icon {
                height: 48px;
                width: 48px;
            }
        ` }} />
        <p className="lead">Currently supported browsers:</p>
        <table className="browser-support-table table">
            <thead>
                <tr>
                    <th>
                        <img className="browser-icon" src={Chrome} alt="Google Chrome Icon" />
                    </th>
                    <th>
                        <img className="browser-icon" src={Firefox} alt="Mozilla Firefox Icon" />
                    </th>
                    <th>
                        <img className="browser-icon" src={Edge} alt="Microsoft Edge Icon"/>
                    </th>
                    <th>
                        <img className="browser-icon" src={InternetExplorer} alt="Microsoft Internet Explorer Icon"/>
                    </th>
                    <th>
                        <img className="browser-icon" src={Opera} alt="Opera Browser Icon"/>
                    </th>
                    <th>
                        <img className="browser-icon" src={Safari} alt="Apple Safari Icon"/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="background-brand">Yes</td>
                    <td className="background-warning">Yes</td>
                    <td className="background-warning">Yes</td>
                    <td className="background-warning">11</td>
                    <td className="background-warning">Yes</td>
                    <td className="background-warning">Yes</td>
                </tr>
            </tbody>
        </table>
    </DocContainer>
);

export default BrowserSupport;
