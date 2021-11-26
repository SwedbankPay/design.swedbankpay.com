import React, { useState } from "react";

import Routes from "./MOCK_DATA.json";

const SearchComponent = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const pathchange = val => {

        window.location.href = val;
    };

    return (
        <>
            <p>Lets get freeky</p>
            <input type="text" placeholder="Search for a component..." onChange={e => setSearchTerm(e.target.value)}/>
            {Routes.filter(val => {
                if (searchTerm === "") {
                    return "";
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            // eslint-disable-next-line react/jsx-key
            }).map( val => <div onClick={e => pathchange(val.path)}>{val.title}</div>)}
        </>
    );

};

export default SearchComponent;
