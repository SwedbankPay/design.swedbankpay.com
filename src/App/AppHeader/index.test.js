// import React from "react";
// import { Link } from "react-router-dom";
// import { shallow } from "enzyme";

import AppHeader from "./index";

describe("AppHeader: AppHeader", () => {
    it("is defined", () => {
        expect(AppHeader).toBeDefined();
    });

    // it("renders with provided location prop", () => {
    //     const location = { pathname: "test" };
    //     const wrapper = shallow(
    //         <AppHeader location={location} />
    //     );

    //     expect(wrapper).toMatchSnapshot();
    // });

    // it("sets home route to active when locaton is /", () => {
    //     const location = { pathname: "/" };
    //     const wrapper = shallow(
    //         <AppHeader location={location} />
    //     );

    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.contains(<Link className="active" to="/">Home</Link>)).toBeTruthy();
    // });

    // it("sets documentation route to active when locaton is /docs", () => {
    //     const location = { pathname: "/docs" };
    //     const wrapper = shallow(
    //         <AppHeader location={location} />
    //     );

    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.contains(<Link className="active" to="/docs">Documentation</Link>)).toBeTruthy();
    // });

    // it("sets examples route to active when locaton is /examples", () => {
    //     const location = { pathname: "/examples" };
    //     const wrapper = shallow(
    //         <AppHeader location={location} />
    //     );

    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.contains(<Link className="active" to="/examples">Examples</Link>)).toBeTruthy();
    // });

    // it("sets templates route to active when locaton is /templates", () => {
    //     const location = { pathname: "/templates" };
    //     const wrapper = shallow(
    //         <AppHeader location={location} />
    //     );

    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.contains(<Link className="active" to="/templates">Templates</Link>)).toBeTruthy();
    // });
});
