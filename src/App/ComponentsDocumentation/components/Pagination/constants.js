import React from "react";
import Pagination from "~/src/App/components/Pagination";

export const PaginationShowCasePanel = {
    id: "no-tabs",
    hideOptions: true,
    elements: [
        {
            component: <Pagination id="overview" length={10} currentActive={1} />,
            title: "Pagination",
            description: <>
                <p>The pagination component consist of page number links as well as arrows to go to next or previous page. The arrow to previous page is disabled when the first page is active and the next arrow when the last page is active. If there are 7 pages or fewer, all page number links will be shown, but if there are more pages an ellipsis is used to truncate the pages as follows: [first] ... [current-1] [current] [current+1] ... [last].</p>
            </>
        }
    ]
};
