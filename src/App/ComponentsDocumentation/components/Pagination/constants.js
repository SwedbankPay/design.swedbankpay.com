import React from "react";
import Pagination from "@components/Pagination";
import CodeTags from "@components/CodeTags";

export const PaginationShowCasePanel = {
    id: "no-tabs",
    elements: [
        {
            component: <Pagination id="overview" length={10} currentActive={1} />,
            title: "Pagination",
            description: <>
                <p>The pagination component consist of page number links as well as arrows to go to next or previous page. The arrow to previous page is disabled when the first page is active and the next arrow when the last page is active. If there are 7 pages or fewer, all page number links will be shown, but if there are more pages an ellipsis is used to truncate the pages as follows: [first] ... [current-1] [current] [current+1] ... [last].</p>
                <p>The arrows can also be <CodeTags type="primary" code="<a>"/> tags.</p>
            </>,
            options: {
                radio: [
                    {
                        id: "pagination width",
                        title: "Width view",
                        values: [
                            {
                                name: "Default"
                            },
                            {
                                name: "Short Width",
                                value: {
                                    short: true
                                }
                            }]
                    }
                ]
            }
        }
    ]
};
