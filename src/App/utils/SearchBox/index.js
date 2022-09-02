import React, { useState, useRef } from "react";
import ComponentRoutes from "../../routes/components";
import GetStartedRoutes from "../../routes/get-started";
import IdentityRoutes from "../../routes/identity";
import PatternRoutes from "../../routes/patterns";
import UtilityRoutes from "../../routes/utilities";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const allRoutes = [ComponentRoutes, GetStartedRoutes, PatternRoutes, IdentityRoutes, UtilityRoutes];

const SearchBox = ({ classname, mobile }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [visibleResultBox, setVisibleResultBox] = useState(false);
    const mobileInput = useRef(null);
    const inputfieldText = useRef(null);

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

        return (
            <ul className="item-list item-list-hover">
                {searchResultList.map(searchResult => searchResult.map(result => <Link key={result.path} onClick = {() => hideResultBox()} to={result.path}><li><span className="result" dangerouslySetInnerHTML={{ __html: modify(result.title, searchTerm) }}></span></li></Link>)
                )}
            </ul>
        );
    };

    const hideResultBox = () => {
        setExpanded(false);
        setVisibleResultBox(false);
        setSearchTerm("");
    };

    const activateSearch = () => {
        setExpanded(!expanded);
        setTimeout(() => { mobileInput.current.focus(); }, 10);

    };

    const clearSearchTerm = () => {
        setSearchTerm("");
        setTimeout(() => inputfieldText.current.value = "");

    };

    return (
        <>
            {mobile ?
                <div className={`search-container${classname ? ` ${classname}` : ""}${expanded ? " expanded" : ""}`}>
                    <div className="form-group">
                        <input type="text" ref={mobileInput} className="form-control" id="search-box" placeholder="Search" onChange={e => setSearchTerm(e.target.value)}/>
                        <button className={`btn btn-${expanded ? "secondary" : "primary"} btn-xs`} type="button" onClick={() => activateSearch()}><i className="material-icons">{expanded ? "close" : "search"}</i></button>
                    </div>
                    {expanded && searchTerm !== "" && <div className="result-box">
                        {results()}
                    </div>}
                </div>
                :
                <div className={`search-container${classname ? ` ${classname}` : ""}${expanded ? " expanded" : ""}`}>
                    <div className="form-group">
                        <div onClick={() => setExpanded(true)} className="input-group">
                            <input ref={inputfieldText} type="text" className="form-control" id="search-box" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} onFocus={() => setVisibleResultBox(true)}/>
                            {searchTerm !== "" ? <button className="btn btn-link" type="button" onClick={() => clearSearchTerm()}><i className="material-icons">{searchTerm === "" ? "search" : "close"}</i></button>
                                : <button className="btn btn-link" type="button"><i className="material-icons">search</i></button>}
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
