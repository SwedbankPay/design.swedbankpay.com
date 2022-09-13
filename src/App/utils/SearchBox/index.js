import React, { useState, useRef, useEffect } from "react";
import routes from "@src/App/routes/all";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBox = ({ classname, mobile }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [visibleResultBox, setVisibleResultBox] = useState(false);
    const inputFieldText = useRef(null);
    const searchResultList = [];

    const modify = (result, searchTerm) => {
        const re = new RegExp(searchTerm.split("").map(x => x.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
            .join("[.\\s.]*"), "ig");

        return result.replace(re, "<b>$&</b>");
    };

    const results = () => {
        const tempSearchResultList = routes.map(route => route.routes.filter(val => {

            if (searchTerm === "") {
                return "";
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }

        }));

        tempSearchResultList.forEach(directory => directory.forEach(route => searchResultList.push(route)));

        return (
            <ul className="item-list item-list-hover">
                {searchResultList.map(result => <Link onKeyDown={e => arrowNavigation(e)} className="res" key={result.path} onClick = {() => hideResultBox()} to={result.path}><li><span className="result" dangerouslySetInnerHTML={{ __html: modify(result.title, searchTerm) }}></span></li></Link>)
                }
            </ul>
        );
    };

    const hideResultBox = () => {
        setExpanded(false);
        setVisibleResultBox(false);
        clearSearchTerm();
    };

    const activateSearch = () => {
        setExpanded(true);
        setTimeout(() => { inputFieldText.current.focus(); }, 10);
    };

    const clearSearchTerm = () => {
        setSearchTerm("");
        setExpanded(false);
        setTimeout(() => inputFieldText.current.value = "");
    };

    let index = 0;

    const arrowNavigation = e => {
        const listItems = document.getElementsByClassName("res");

        if (e.keyCode === 40 && index <= listItems.length) { // down key
            listItems[index].focus();
            e.preventDefault();
            index += 1;

        }

        if (e.keyCode === 38 && index > -1) { // up key
            index -= 1;
            listItems[index].focus();
            e.preventDefault();
        }
    };

    return (
        <>
            {mobile ?
                <div className={`search-container${classname ? ` ${classname}` : ""}${expanded ? " expanded" : ""}`}>
                    <div className="form-group">
                        <input type="text" ref={inputFieldText} className="form-control" id="search-box" placeholder="Search" onChange={e => setSearchTerm(e.target.value)}/>
                        {expanded ?
                            <button onClick={() => clearSearchTerm()} className="btn btn-secondary btn-xs"><i className="material-icons">close</i></button>
                            :
                            <button onClick={() => activateSearch()} className="btn btn-primary btn-xs" type="button"><i className="material-icons">search</i></button>}
                    </div>
                    {expanded && searchTerm !== "" && <div className="result-box">
                        {results()}
                    </div>}
                </div>
                :
                <div className="search-container">
                    <div className="form-group">
                        <div onClick={() => setExpanded(true)} className="input-group" onKeyDown={e => arrowNavigation(e)}>
                            <input ref={inputFieldText} type="text" className="form-control" id="search-box" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} onFocus={() => setVisibleResultBox(true)} />
                            {searchTerm !== "" ?
                                <button className="btn btn-link" type="button" onClick={() => clearSearchTerm()}><i className="material-icons">close</i></button>
                                :
                                <button onClick={() => activateSearch()} className="btn btn-link" type="button"><i className="material-icons">search</i></button>}
                        </div>
                    </div>
                    {visibleResultBox && searchTerm !== "" && <div className="result-box">
                        {results()}
                    </div> }
                </div>
            }
        </>
    );
};

SearchBox.propTypes = {
    className: PropTypes.string,
    mobile: PropTypes.bool
};

export default SearchBox;
