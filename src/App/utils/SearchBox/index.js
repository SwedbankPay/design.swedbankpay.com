import React, { useState } from "react";
import ComponentRoutes from "../../routes/components";
import GetStartedRoutes from "../../routes/get-started";
import IdentityRoutes from "../../routes/identity";
import PatternRoutes from "../../routes/patterns";
import UtilityRoutes from "../../routes/utilities";

const allRoutes = [ComponentRoutes, GetStartedRoutes, PatternRoutes, IdentityRoutes, UtilityRoutes];

const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const pathChange = val => {
        window.location.href = val;
    };

    const results = () => {
        const searchResultList = allRoutes.map(route => route[0].routes.filter(val => {

            if (searchTerm === "") {
                return "";
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }
        }));

        return (

            <ul className="item-list item-list-hover">
                {searchResultList.map(searchResult => searchResult.map(result => <li key={result.path}><a onClick={ () => pathChange(result.path)}>{result.title}</a></li>)
                )}
            </ul>
        );

    };

    return (
        <div className="search-container">
            <div className="form-group">
                <div className="input-group">
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
