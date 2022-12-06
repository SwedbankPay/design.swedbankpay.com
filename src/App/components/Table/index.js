import React from "react";
import classnames from "classnames";

import SortSvg from "./sort-svg";

const Table = ({ plain, condensed, hover, divided, sortable, caption, tableData }) => {
    const tableClasses = classnames(
        "table",
        plain ? "table-plain" : null,
        condensed ? "table-condensed" : null,
        hover ? "table-hover" : null,
        divided ? "table-divided" : null,
        sortable ? "sortable" : null

    );

    const sort = (e, i) => {
        if (!sortable) { return; }

        const buttonElement = document.getElementById(`sortable-id-${i}`);

        if (buttonElement.classList.length === 1) {
            buttonElement.classList.add("up");
        } else if (buttonElement.classList.contains("up")) {
            buttonElement.classList.remove("up");
            buttonElement.classList.add("down");
        } else if (buttonElement.classList.contains("down")) {
            buttonElement.classList.remove("down");
        }
    };

    return (
        <table className={tableClasses}>
            {caption && <caption>{caption}</caption>}
            <thead>
                <tr>
                    {tableData.thead.map(({ content, classname }, i) => (
                        classname
                            ? <th key={content + i} className={classname} onClick={ e => sort(e, i)}>{content}{sortable ? <SortSvg id={`sortable-id-${i}`}/> : ""}</th>
                            : <th key={content + i} onClick={ e => sort(e, i)}>{content}{sortable ? <SortSvg id={`sortable-id-${i}`}/> : ""}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.tbody.map(({ tr }, i) => (
                    <tr key={tr + i} tabIndex={hover ? "0" : null}>
                        {tr.map(({ content, th, classname }, j) => (
                            th
                                ? <th key={j}>{content}</th>
                                : classname
                                    ? <td key={j}className={classname}>{content}</td>
                                    : <td key={j}>{content}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
