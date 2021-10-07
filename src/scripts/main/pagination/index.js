const SELECTORS = {
    PAGINATION: ".pagination"
};

const _createPagination = paginationContainer => {

    const pages = paginationContainer.querySelectorAll("li:not(.arrow-back, .arrow-forward, .arrow-end, .arrow-start)");
    const arrowForward = paginationContainer.querySelector("li.arrow-forward");
    const arrowBack = paginationContainer.querySelector("li.arrow-back");

    const _setInitialActivePage = () => {
        [...pages][0].classList.add("active");
        arrowBack.classList.add("disabled");
    };

    const _getActiveIndex = () => {
        const currentActive = [...pages].find(page => page.classList.contains("active"));

        return [].indexOf.call(pages, currentActive);
    };

    const _addListener = () => {
        [...pages].map(page => {
            page.addEventListener("click", e => {
                _setActivePageOnClick(e);
            });
        });

        arrowForward.addEventListener("click", e => {
            e.preventDefault();
            _arrowNavigation("forward");
        });

        arrowBack.addEventListener("click", e => {
            e.preventDefault();
            _arrowNavigation("backward");
        });
    };

    const _arrowNavigation = arrowDirection => {
        const activeIndex = _getActiveIndex();

        if (arrowDirection === "forward") {
            pages[activeIndex + 1].classList.add("active");
        } else {
            pages[activeIndex - 1].classList.add("active");
        }

        pages[activeIndex].classList.remove("active");
        _addDisabledArrowState();
        _paginate();
    };

    const _setActivePageOnClick = e => {
        e.preventDefault();
        [...pages].map(page => page.classList.remove("active"));
        e.currentTarget.classList.add("active");
        _addDisabledArrowState();
        _paginate();
    };

    const _addDisabledArrowState = () => {
        const activeIndex = _getActiveIndex();

        _removeDisabledArrowState();

        if (activeIndex === 0) {
            arrowBack.classList.add("disabled");
        } else if (activeIndex === pages.length - 1) {
            arrowForward.classList.add("disabled");
        }
    };

    const _removeDisabledArrowState = () => {
        arrowBack.classList.contains("disabled") ? arrowBack.classList.remove("disabled") : null;
        arrowForward.classList.contains("disabled") ? arrowForward.classList.remove("disabled") : null;
    };

    const _paginate = () => {
        const paginatedPages = [];
        const activeIndex = _getActiveIndex();

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
            }

            if (activeIndex > 3 && activeIndex < pages.length - 4) {
                activeIndex >= 4 ? paginatedPages.push(dotts) : null;
                [...pages].slice(activeIndex - 1, activeIndex + 2).map(page => paginatedPages.push(page));
                activeIndex >= pages.length - 3 ? null : paginatedPages.push(dotts.cloneNode(true));
                paginatedPages.push(pages[pages.length - 1]);
            }

            if (activeIndex >= pages.length - 4) {
                paginatedPages.push(dotts);
                [...pages].slice(-5).map(page => paginatedPages.push(page));
            }
        } else {
            [...pages].map(page => paginatedPages.push(page));
        }

        _paginateBuilder(paginatedPages);
    };

    const _paginateBuilder = paginatedPages => {
        paginationContainer.innerHTML = "";
        paginationContainer.appendChild(arrowBack);
        [...paginatedPages].map(page => paginationContainer.appendChild(page));
        paginationContainer.appendChild(arrowForward);
    };

    _paginate();
    _setInitialActivePage();
    _addListener();
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
