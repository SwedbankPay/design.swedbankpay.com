import React from "react";
import classnames from "classnames";

const Table = ({ plain, condensed, hover, divided, sortable, caption, tableData }) => {
    const tableClasses = classnames(
        "table",
        plain ? "table-plain" : null,
        condensed ? "table-condensed" : null,
        hover ? "table-hover" : null,
        divided ? "table-divided" : null,
        sortable ? "sortable" : null

    );

    const sort = e => {
        if (!sortable) { return; }

        const thClassList = e.target.classList;
        const thList = e.target.parentElement.children;

        if (thClassList.contains("sort-ascending")) {
            changeSortClasses(thList);
            thClassList.add("sort-descending");
        } else if (thClassList.contains("sort-descending")) {
            changeSortClasses(thList);
            thClassList.add("sort-ascending");
        } else {
            changeSortClasses(thList);
            thClassList.add("sort-ascending");
        }
    };

    const changeSortClasses = list => {
        [...list].map(th => {
            if (th.classList.length > 0) {
                th.classList.remove("sort-ascending");
                th.classList.remove("sort-descending");
            }
        });
    };

    return (
        <table className={tableClasses}>
            {caption && <caption>{caption}</caption>}
            <thead>
                <tr>
                    {tableData.thead.map(({ content, classname }, i) => (
                        classname
                            ? <th key={content + i} className={classname} onClick={ e => sort(e)}>{content}</th>
                            : <th key={content + i} onClick={ e => sort(e)}>{content}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.tbody.map(({ tr }, i) => (
                    <tr key={tr + i}>
                        {tr.map(({ content, th, classname }) => (
                            th
                                ? <th>{content}</th>
                                : classname
                                    ? <td className={classname}>{content}</td>
                                    : <td>{content}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
