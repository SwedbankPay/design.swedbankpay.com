import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Icon } from "#";

const ActionList = ({ id, classNames, toggleBtn, items }) => (
    <>
        <div id={id} className={`action-list${classNames ? ` ${classNames}` : ""}`}>{"\n"}
            {toggleBtn ? <>{toggleBtn}{"\n"}</> : <>{<i className="material-icons action-toggle">more_vert</i>}</>}
            <div className={`action-menu${classNames ? ` ${classNames}` : ""}`}>{"\n"}
                {
                    (Array.isArray(items)) ? items.map(({ name, icon }, i) => (
                        <Fragment key={i}>
                            <a href="#" onClick={e => e.preventDefault()}>
                                {icon ? <Icon icon={icon}/> : null}{name}
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
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default ActionList;
