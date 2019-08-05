import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Icon } from "#";

const ActionList = ({ id, classNames, toggleBtn, items }) => (
    <>
        <div id={id} className={`action-list${classNames ? ` ${classNames}` : ""}`}>{"\n"}
            {toggleBtn ? <>{toggleBtn}{"\n"}</> : <>{<i className="material-icons action-toggle">more_vert</i>}</>}
            <div className="action-menu">{"\n"}
                {
                    Array.isArray(items) ? items.map(({ name, icon }, i) => (
                        <Fragment key={i}>
                            <a href="#" onClick={e => e.preventDefault()}>
                                {icon ? <Icon type={icon}/> : null}{name}
                            </a>{"\n"}
                        </Fragment>
                    )) : null
                }
            </div>
        </div>
    </>
);

ActionList.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string
    })).isRequired
};

export default ActionList;
