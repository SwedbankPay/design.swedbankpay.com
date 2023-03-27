import React, { useState, useRef, useEffect } from "react";
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
                {tempSearchResultList.map(directory => directory.map(result => (
                    <Link
                        tabIndex="-1"
                        onKeyDown={e => arrowNavigation(e)}
                        className="res"
                        key={result.rootPath}
                        onClick = {() => hideResultBox()} to={result.rootPath}>
                        <li>
                            <span
                                className="result"
                                dangerouslySetInnerHTML={{ __html: modify(result.title, searchTerm) }}></span>
                            <span className="directory">
                                {result.path.charAt(0).toUpperCase() + result.path.slice(1)}
                            </span>
                        </li>
                    </Link>
                )))}
            </ul>
        );
    };

    const hideResultBox = () => {
        setExpanded(false);
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

    let index = -1;

    const arrowNavigation = e => {
        const listItems = document.getElementsByClassName("res");
        const searchField = inputFieldText.current;

        if (e.keyCode === 40) { // down key
            if (index < -1) {
                index = -1;
            }

            e.preventDefault();

            if (index < listItems.length - 1) {
                index += 1;
                listItems[index].focus();
            }

        }

        if (e.keyCode === 38) { // up key
            index -= 1;

            if (index >= 0) {
                listItems[index].focus();
            }

            e.preventDefault();
        }

        if (index === -1 && e.keyCode === 38) {
            index = -1;
            searchField.focus();
        }

        if (e.keyCode === 27) {
            clearSearchTerm();
            setExpanded(false);
            searchField.blur();

        }
    };

    const searchFocus = () => setTimeout(() => inputFieldText.current.focus());

    const searchFocusShortcutListener = e => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            if (document.getElementById("search-box")) {
                e.preventDefault();
                searchFocus();
            }
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", searchFocusShortcutListener);
    }, []);

    return (
        <>
            {mobile ?
                <div className={`search-container${className ? ` ${className}` : ""}${expanded ? " expanded" : ""}`}>
                    <div className="form-group">
                        <input type="text" ref={inputFieldText} onKeyDown={e => arrowNavigation(e)} className="form-control" id="search-box-mobile" placeholder="Search" onChange={e => setSearchTerm(e.target.value)}/>
                        {expanded ?
                            <button onClick={() => clearSearchTerm()} className="btn btn-icon btn-sm"><i className="material-icons">close</i></button>
                            :
                            <button onClick={() => activateSearch()} className="btn btn-icon btn-sm" type="button"><i className="material-icons">search</i></button>}
                    </div>
                    {expanded && searchTerm !== "" && <div className="result-box">
                        {results()}
                    </div>}
                </div>
                :
                <div className={`search-container${className ? ` ${className}` : ""}${expanded ? " expanded" : ""}`}>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-container" style={{
                                position: "relative"
                            }}>
                                <input ref={inputFieldText} onKeyDown={e => arrowNavigation(e)} type="text" className="form-control" id="search-box" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
                                <button
                                    onClick={searchFocus}
                                    type="button"
                                    tabIndex={"-1"}
                                    className="hint-shortcuts"
                                >
                                    <kbd>Ctrl</kbd>
                                    <kbd>K</kbd>
                                </button>
                            </div>
                            {searchTerm !== "" ?
                                <button className="btn btn-icon" type="button" onClick={() => clearSearchTerm()}><i className="material-icons">close</i></button>
                                :
                                <button onClick={() => activateSearch()} className="btn btn-icon" type="button"><i className="material-icons">search</i></button>}
                        </div>
                    </div>
                    {searchTerm !== "" && <div className="result-box">
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
