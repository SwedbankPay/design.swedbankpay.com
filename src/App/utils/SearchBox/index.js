import React, { useState } from "react";
import ComponentRoutes from "../../routes/components";
import GetStartedRoutes from "../../routes/get-started";
import IdentityRoutes from "../../routes/identity";
import PatternRoutes from "../../routes/patterns";
import UtilityRoutes from "../../routes/utilities";

const allRoutes = [ComponentRoutes, GetStartedRoutes, PatternRoutes, IdentityRoutes, UtilityRoutes];

const SearchBox = ({ classname }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [tempList, setTempList] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const modify = (result, searchTerm) => {
        const re = new RegExp(searchTerm.split("").map(x => x.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
            .join("[.\\s.]*"), "ig");

        return result.replace(re, "<b>$&</b>");
    };

    const results = () => {
        const searchResultList = allRoutes.map(route => route[0].routes.filter(val => {

            if (searchTerm === "") {
                return "";
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }
        }));
        // const temp = [];
        // const resultList = searchResultList.map(searchResult => searchResult.map(result => temp.push(result.title)));

        // console.log(temp.sort((a, b) => a.localeCompare(b))); Weighted search in the works

        return (
            <ul className="item-list item-list-hover">
                {searchResultList.map(searchResult => searchResult.map(result => <li key={result.path}><a className="result" href={`${result.path}`} key={result.path} dangerouslySetInnerHTML={{ __html: modify(result.title, searchTerm) }}></a></li>)
                )}
            </ul>
        );
    };

    return (
        <div className={`search-container${classname ? ` ${classname}` : ""}${expanded ? " expanded" : ""}`}>
            <div className="form-group">
                <div onClick={() => setExpanded(true)} onFocus={() => setExpanded(true)} className="input-group">
                    <input type="text" className="form-control" id="search-box" placeholder="Search" onChange={e => setSearchTerm(e.target.value)}/>
                    <span className="input-group-addon postfix"><i className="material-icons" aria-hidden="true">search</i></span>
                </div>
            </div>
            {searchTerm !== "" && <div className="result-box">
                {results()}
            </div> }
        </div>
    );
};

export default SearchBox;
