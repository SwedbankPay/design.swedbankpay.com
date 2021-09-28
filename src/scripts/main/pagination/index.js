
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

    _addListener(pages, arrows);
};

const _addListener = (pages, arrows) => {
    [...pages].map(page => {
        page.addEventListener("click", e => _setActive(e, pages));

    });

    arrows.map(arrow => {
        if (arrow.classList.contains("arrow-forward")) {
            arrow.addEventListener("click", e => _arrowNavigation(pages, e, 1, arrow));
        }

        if (arrow.classList.contains("arrow-back")) {
            arrow.addEventListener("click", e => _arrowNavigation(pages, e, -1, arrow));
        }

        /* if (arrow.classList.contains("arrow-end")) {
            arrow.addEventListener("click", e => _arrowNavigation(pages, e, 0));
        }

        if (arrow.classList.contains("arrow-start")) {
            arrow.addEventListener("click", e => _arrowNavigation(pages, e, pages.length));
        } */
    });

};

const _setActive = (e, pages) => {
    e.preventDefault(); // remove??
    _removeActive(pages);
    e.currentTarget.classList.add("active");
};

const _removeActive = pages => {
    [...pages].filter(page => page.classList.contains("active") === page.classList.remove("active"));
};

const _arrowNavigation = (pages, e, steps, arrow) => {
    e.preventDefault(); // remove??

    const currentActive = [...pages].find(page => page.classList.contains("active"));

    const currentActiveIndex = [].indexOf.call(pages, currentActive);

    if ((e.currentTarget.classList.contains("arrow-back") && (currentActiveIndex === 1))) {
        arrow.classList.add("disabled");
    }

    if ((e.currentTarget.classList.contains("arrow-forward") && (currentActiveIndex === pages.length - 2))) {
        arrow.classList.add("disabled");
    }

    if (currentActiveIndex !== 1) {
        arrow.classList.remove("disabled");
    }

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
