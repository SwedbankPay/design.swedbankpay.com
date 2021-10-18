const SELECTORS = {
    PAGINATION: ".pagination"
};

const _createPagination = paginationContainer => {

    const pages = paginationContainer.querySelectorAll("li:not(.arrow-back, .arrow-forward)");
    const arrowForward = paginationContainer.querySelector("li.arrow-forward");
    const arrowBack = paginationContainer.querySelector("li.arrow-back");

    const arrows = paginationContainer.querySelectorAll("[class*='arrow-']");

    const _setInitialActivePage = () => {
        [...pages][0].classList.add("active");
        arrowBack.classList.add("disabled");
    };

    const _addListener = () => {
        [...pages].map(page => {
            page.addEventListener("click", e => {
                _setActivePageOnClick(e, arrows, pages);
            });
        });

        arrowForward.addEventListener("click", e => {
            e.preventDefault();
            _arrowNavigation(pages, arrows, "forward");
        });

        arrowBack.addEventListener("click", e => {
            e.preventDefault();
            _arrowNavigation(pages, arrows, "backward");
        });
    };

    const _arrowNavigation = (pages, arrows, arrowDirection) => {
        const activeIndex = _getActiveIndex(pages);

        if (arrowDirection === "forward") {
            pages[activeIndex + 1].classList.add("active");

        } else {
            pages[activeIndex - 1].classList.add("active");
        }

        pages[activeIndex].classList.remove("active");

        _addDisabledArrowState(arrows, pages, arrowBack, arrowForward);
        _paginateBuilder(pages);
    };

    const _setActivePageOnClick = (e, arrows, pages) => {
        e.preventDefault();
        [...pages].map(page => page.classList.remove("active"));
        e.currentTarget.classList.add("active");
        e.currentTarget.setAttribute("aria-current", "true");
        _addDisabledArrowState(arrows, pages, arrowBack, arrowForward);
        _paginateBuilder(pages);
    };

    const _paginateBuilder = pages => {
        /* const paginatedPages = _paginate(pages);

        paginationContainer.innerHTML = "";
        paginationContainer.appendChild(arrowBack);
        [...paginatedPages].map(page => paginationContainer.appendChild(page));
        paginationContainer.appendChild(arrowForward); */
    };

    _paginateBuilder(pages);
    _setInitialActivePage();
    _addListener();

    return paginationContainer;
};

const _addDisabledArrowState = (arrows, pages) => {
    const activeIndex = _getActiveIndex(pages);

    _removeDisabledArrowState(arrows);

    if (activeIndex === 0) {
        arrows[0].classList.add("disabled");
    } else if (activeIndex === pages.length - 1) {
        arrows[1].classList.add("disabled");
    }
};

const _removeDisabledArrowState = arrows => {
    [...arrows].map(arrow => {
        if (arrow.classList.contains("disabled")) {
            arrow.classList.remove("disabled");
        }
    });
};

const _paginate = pages => {
    const paginatedPages = [];
    const activeIndex = _getActiveIndex(pages);

    if (pages.length > 7) {
        const anchor = document.createElement("a");
        const dotts = document.createElement("LI");

        dotts.appendChild(anchor);
        dotts.classList.add("dotts");
        anchor.innerText = "..";

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

const _getActiveIndex = pages => {
    const currentActive = [...pages].find(page => page.classList.contains("active"));

    return [].indexOf.call(pages, currentActive);
};

// New beginnings :-) <3

// get list - slice
// get active state
// set active state
// navigation for arrows
// disabled states for arrows
// set current-page (mobile) || set list (desktop)

const createV2 = pagination => {

    const paginationItems = pagination.querySelectorAll("li");
    const arrows = pagination.querySelectorAll("button");

    console.log(paginationItems[2]);

    paginationItems[2].classList.add("active");

    // _getActivePaginationItem(paginationItems);
};

const _getActivePaginationItem = paginationItems => {
    const currentActive = [...paginationItems].find(item => item.classList.contains("active"));

    return [].indexOf.call(paginationItems, currentActive);
};

const init = id => {
    if (id) {
        const pagination = document.getElementById(id);

        if (!pagination) {
            console.warn(`No pagination with id ${id} found`);

            return null;
        }

        // return _createPagination(pagination);
        return createV2(pagination);
    } else {
        const paginations = document.querySelectorAll(SELECTORS.PAGINATION);

        if (!paginations.length) {
            console.warn("No paginations found");

            return null;
        }

        // return [...paginations].map(pagination => _createPagination(pagination));
        return [...paginations].map(pagination => createV2(pagination));
    }
};

export default {
    init,
    _createPagination,
    _getActiveIndex,
    _removeDisabledArrowState,
    _addDisabledArrowState,
    _paginate
};
