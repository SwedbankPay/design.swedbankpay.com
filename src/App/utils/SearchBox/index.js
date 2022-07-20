import React, { useState } from "react";
import Routes from "../../routes/components";

const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const pathchange = val => {
        window.location.href = val;
    };

    const results = () => {
        const searchResults = Routes[0].routes.filter(val => {
            if (searchTerm === "") {
                return "";
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }
        });

        return (
            <div className="result-box">
                <ul className="item-list item-list-hover">
                    {searchResults.map(val => <li key={val.path}><button onClick={ e => pathchange(val.path)}>{val.title}</button></li>)}
                </ul>
            </div>
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
            {results()}
        </div>
    );
};

export default SearchBox;
