import React, { useState, useRef } from "react";
import routes from "@src/App/routes/all";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const modify = (result, searchTerm) => {
    const re = new RegExp(searchTerm.split("").map(x => x.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
        .join("[.\\s.]*"), "ig");

    return result.replace(re, "<b>$&</b>");
};

const SearchBox = ({ className, mobile }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [visibleResultBox, setVisibleResultBox] = useState(false);
    const inputFieldText = useRef(null);

    const results = () => {
        const tempSearchResultList = routes.map(route => route.routes.filter(val => {

            if (searchTerm === "") {
                return "";
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }

        }));

        return (
            <ul className="item-list item-list-hover">
                {tempSearchResultList.map(directory => directory.map(result => <Link tabIndex="-1" onKeyDown={e => arrowNavigation(e)} className="res" key={result.path} onClick = {() => hideResultBox()} to={result.path}><li><span className="result" dangerouslySetInnerHTML={{ __html: modify(result.title, searchTerm) }}></span><span className="directory">{result.path.split("/")[1].charAt(0).toUpperCase() + result.path.split("/")[1].slice(1)}</span></li></Link>))
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

        const timer = setTimeout(() => inputFieldText.current.focus());

        return () => clearTimeout(timer);
    };

    const clearSearchTerm = () => {
        setSearchTerm("");
        setExpanded(false);

        const timer = setTimeout(() => inputFieldText.current.value = "");

        return () => clearTimeout(timer);
    };

    let index = 0;

    const arrowNavigation = e => {
        const listItems = document.getElementsByClassName("res");

        if (e.keyCode === 40) { // down key
            listItems[index].focus();
            e.preventDefault();

            if (index < listItems.length - 1) {
                index += 1;
            }

        }

        if (e.keyCode === 38) { // up key
            if (index > 0) {
                index -= 1;
            }

            listItems[index].focus();
            e.preventDefault();
        }
    };

    const listener = e => {
        setVisibleResultBox(true);
        arrowNavigation(e);
    };

    return (
        <>
            {mobile ?
                <div className={`search-container${className ? ` ${className}` : ""}${expanded ? " expanded" : ""}`}>
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
                        <div className="input-group">
                            <input ref={inputFieldText} onKeyDown={e => listener(e)} type="text" className="form-control" id="search-box" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
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

export { modify };
