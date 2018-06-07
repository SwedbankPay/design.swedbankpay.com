import React from "react";
import { shallow } from "enzyme";

import SelectPanel, { SearchBox } from "./SelectPanel";

describe("Documentation: SelectPanel", () => {
    it("is defined", () => {
        expect(SelectPanel).toBeDefined();
    });

    // it("renders", () => {
    //     const location = { pathname: "test" };
    //     const wrapper = shallow(
    //         <SelectPanel location={location} />
    //     );

    //     expect(wrapper).toMatchSnapshot();
    // });

    describe("SearchBox", () => {
        it("is defined", () => {
            expect(SearchBox).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <SearchBox />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});

