
const SELECTORS = {
    PAGINATION: ".pagination"
};

const _createPagination = paginationContainer => {

    const pages = paginationContainer.querySelectorAll("li:not(.arrow-back, .arrow-forward, .arrow-end, .arrow-start)");

    const arrowForward = paginationContainer.querySelector("li.arrow-forward");
    const arrowBack = paginationContainer.querySelector("li.arrow-back");
    const arrowEnd = paginationContainer.querySelector("li.arrow-end");
    const arrowStart = paginationContainer.querySelector("li.arrow-start");

    const arrows = [arrowForward, arrowBack];

    _initialActive(pages, arrowBack);

    _addListener(pages, arrows);
};

const _addListener = (pages, arrows) => {
    /* [...pages].map(page => {
        page.addEventListener("click", e => _setActive(e, pages));

    }); */

    [...pages].map(page => {
        page.addEventListener("click", e => _logicalName(e, pages, arrows));
    });

    arrows.map(arrow => {
        if (arrow.classList.contains("arrow-forward")) {
            arrow.addEventListener("click", e => _arrowNavigation(pages, e, 1, arrow, arrows));
        }

        if (arrow.classList.contains("arrow-back")) {
            arrow.addEventListener("click", e => _arrowNavigation(pages, e, -1, arrow, arrows));
        }

        /* if (arrow.classList.contains("arrow-end")) {
            arrow.addEventListener("click", e => _arrowNavigation(pages, e, 0));
        }

        if (arrow.classList.contains("arrow-start")) {
            arrow.addEventListener("click", e => _arrowNavigation(pages, e, pages.length));
        } */
    });

};

const _initialActive = (pages, arrowBack) => {
    [...pages][0].classList.add("active");
    arrowBack.classList.add("disabled");
};

const _logicalName = (e, pages, arrows) => { // RENAME
    e.preventDefault(); // remove?

    _removeDisabledArrows(arrows);
    _setActive(e, pages);

    const currentActive = [...pages].find(page => page.classList.contains("active"));
    const currentActiveIndex = [].indexOf.call(pages, currentActive);

    if (currentActiveIndex === 0) {
        arrows[1].classList.add("disabled");
    } else if (currentActiveIndex === pages.length - 1) {
        arrows[0].classList.add("disabled");
    }
};

const _setActive = (e, pages) => {
    // e.preventDefault(); // remove??
    _removeActive(pages);
    e.currentTarget.classList.add("active");
};

// Remove all disabled state for arrows.
const _removeDisabledArrows = arrowPages => {
    arrowPages.map(arrow => {
        arrow.classList.contains("disabled") ? arrow.classList.remove("disabled") : null;
    });
};

// Remove active state on all pages
const _removeActive = pages => {
    [...pages].filter(page => page.classList.contains("active") === page.classList.remove("active"));
};

/*
Changes state on active page when clicking arrows
Changes state on arrows to disabled if not index is first or last in pages list
*/
const _arrowNavigation = (pages, e, steps, arrow, arrows) => {
    e.preventDefault(); // remove??

    const currentActive = [...pages].find(page => page.classList.contains("active"));

    const currentActiveIndex = [].indexOf.call(pages, currentActive);

    /*
    if ((e.currentTarget.classList.contains("arrow-back") && (currentActiveIndex === 1))) {
        arrow.classList.add("disabled");
    }

    if ((e.currentTarget.classList.contains("arrow-forward") && (currentActiveIndex === pages.length - 2))) {
        arrow.classList.add("disabled");
    } else {
        arrows.filter(arrow => arrow.classList.contains("disabled") === arrow.classList.remove("disabled"));
    }
    */

    pages[currentActiveIndex].classList.remove("active");
    pages[currentActiveIndex + steps].classList.add("active");
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
        const paginations = document.querySelectorAll(SELECTORS.PAGINATION);

        if (!paginations.length) {
            console.warn("No paginations found");

            return null;
        }

        return [...paginations].map(pagination => _createPagination(pagination));
    }
};

export default { init };
