/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const basename = process.env.basename;

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        // eslint-disable-next-line no-undef
        return browser.url(`${basename}${path}`);
    }
};
