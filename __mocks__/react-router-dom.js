import React from "react";

const rrd = require("react-router-dom"); // Just render plain div with its children

// eslint-disable-next-line react/display-name
rrd.BrowserRouter = ({ children }) => <div>{children}</div>;

module.exports = rrd;
