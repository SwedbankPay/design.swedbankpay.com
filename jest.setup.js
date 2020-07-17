import { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import dg from "./src/scripts/main";

global.dg = dg;

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

// Set up static testing variables
process.env.basename = "/TEST/";
process.env.brand = "TESTBRAND";
process.env.brandTitle = "TESTBRAND";
process.env.brandLink = "TESTBRANDLINK";

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

/**
 * To prevent the following warning that comes with React 16 while running tests:
 * "Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills"
 * https://github.com/facebook/jest/issues/4545
 */

global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
};

/**
 * Polyfill for element.closest
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */

if (!Element.prototype.matches) { Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector; }

if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        let el = this;

        if (!document.documentElement.contains(el)) { return null; }

        do {
            if (el.matches(s)) { return el; }

            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return null;
    };
}
