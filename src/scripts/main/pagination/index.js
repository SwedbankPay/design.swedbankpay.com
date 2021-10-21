
const SELECTORS = {
    PAGINATION: ".pagination"
};

const _createPagination = paginationContainer => {

    const pages = paginationContainer.querySelectorAll("li");
    const ul = paginationContainer.querySelector("ul");

    [...pages].map(page => page.remove());

    const paginatedPages = _paginate(pages);

    paginatedPages.map(page => ul.appendChild(page));

};

const _getActiveIndex = pages => {
    const index = [...pages].find(page => page.classList.contains("active"));

    return [].indexOf.call(pages, index);
};

const _paginate = pages => {
    const paginatedPages = [];

    const activeIndex = _getActiveIndex(pages);

    if (pages.length > 7) {
        const anchor = document.createElement("a");
        const dotts = document.createElement("LI");

        dotts.className = "d-none d-sm-block";

        dotts.appendChild(anchor);
        dotts.classList.add("dotts");
        anchor.innerText = "...";

        paginatedPages.push(pages[0]);

        if (activeIndex < 4) {
            [...pages].slice(1, 5).map(page => paginatedPages.push(page));
            paginatedPages.push(dotts);
            paginatedPages.push(pages[pages.length - 1]);
        } else if (activeIndex > 3 && activeIndex < pages.length - 4) {
            activeIndex >= 4 ? paginatedPages.push(dotts) : null;
            [...pages].slice(activeIndex - 1, activeIndex + 2).map(page => paginatedPages.push(page));
            activeIndex >= pages.length - 3 ? null : paginatedPages.push(dotts.cloneNode(true));
            paginatedPages.push(pages[pages.length - 1]);
        } else if (activeIndex >= pages.length - 4) {
            paginatedPages.push(dotts);
            [...pages].slice(-5).map(page => paginatedPages.push(page));
        }
    } else {
        [...pages].map(page => paginatedPages.push(page));
    }

    return paginatedPages;
};

const init = id => {
    if (id) {
        const pagination = document.getElementById(id);

        if (!pagination) {
            console.warn(`No pagination with id ${id} found`);

            return null;
        }

        return _createPagination(pagination);
    } else {
        const paginations = document.querySelectorAll(`${SELECTORS.PAGINATION}:not(.example)`);

        if (!paginations.length) {
            console.warn("No paginations found");

            return null;
        }

        return [...paginations].map(pagination => _createPagination(pagination));
    }
};

export default {
    init,
    _createPagination,
    _paginate
};
