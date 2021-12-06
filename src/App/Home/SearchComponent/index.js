import React, { useState } from "react";
import "./SearchComponent.less";

import Routes from "./MOCK_DATA.json";

const SearchComponent = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const pathchange = val => {
        window.location.href = val;
    };

    return (
        <>
            <input id="hompage_search" label="Let's get freeky" type="text" placeholder="Search for a component..." onChange={e => setSearchTerm(e.target.value)}/>
            <div className="result-box">
                {Routes.filter(val => {
                    if (searchTerm === "") {
                        return "";
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map(val => <button key={val} className="result" onClick={e => pathchange(val.path)}>{val.title}</button>)}
            </div>
        </>
    );

};

export default SearchComponent;
