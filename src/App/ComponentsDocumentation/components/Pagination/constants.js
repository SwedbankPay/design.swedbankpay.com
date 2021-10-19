import React from "react";
import Pagination from "~/src/App/components/Pagination";

export const paginationItems = [
    /* eslint-disable object-property-newline */
    { name: "1", href: "#", active: true },
    { name: "2", href: "#", active: false },
    { name: "3", href: "#", active: false },
    { name: "4", href: "#", active: false },
    { name: "5", href: "#", active: false },
    { name: "6", href: "#", active: false },
    { name: "7", href: "#", active: false },
    { name: "8", href: "#", active: false },
    { name: "9", href: "#", active: false },
    { name: "10", href: "#", active: false }
    /* eslint-enable object-property-newline */
];

export const PaginationShowCasePanel = {
    id: "no-tabs",
    elements: [
        {
            component: <Pagination items={paginationItems} arrows text="1" />,
            options: {
                radio: [
                    {
                        id: "device_radio",
                        title: "Device",
                        values: [
                            {
                                name: "Desktop",
                                value: {
                                    mobileView: false
                                }
                            },
                            {
                                name: "Mobile",
                                value: {
                                    mobileView: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Pagination",
            description: <>
                <p>The pagination component consist of page number links as well as arrows to go to next or previous page. The arrow to previous page is disabled when the first page is active and the next arrow when the last page is active. If there are 7 pages or fewer, all page number links will be shown, but if there are more pages an ellipsis is used to truncate the pages as follows: [first] ... [current-1] [current] [current+1] ... [last].</p>
                <p> On smaller screens the page links are replaced with text showing the page information, still using arrows to go to next or previous page but with the option to go to the first or last page as well.</p>
            </>
        }
    ]
};
