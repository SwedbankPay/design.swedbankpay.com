import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

const RenderRoutes = ({ path, redirect, routes }) => {
    return (
        <Switch>
            <Route exact path={path} render={() => <Redirect to={redirect} />}/>
            {routes.map((route, i) => {
                const { path, component } = route;

                return <Route key={i} exact path={path} render={() => <component.default />} />;
            })}
            <Redirect from={`${path}/*`} to="/404" />
        </Switch>
    );
};

RenderRoutes.propTypes = {
    path: PropTypes.string.isRequired,
    redirect: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired
};

export default RenderRoutes;
