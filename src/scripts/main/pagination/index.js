
const SELECTORS = {
    PAGINATION: ".pagination"
};

const _createPagination = paginationContainer => {

    const pages = paginationContainer.querySelectorAll("li");
    const paginationSection = paginationContainer.querySelector("ul");

    [...pages].map(page => page.addEventListener("click", e => {
        _updateActive(pages, e);
        _renderPagination(paginationSection, paginate(pages));
    }));

    _renderPagination(paginationSection, paginate(pages));
};

const _updateActive = (pages, target) => {
    [...pages].map(page => page.classList.remove("active"));
    target.currentTarget.classList.add("active");
};

const paginate = pages => {
    const numberOfPages = pages.length;
    let delta;
    const paginatedPages = [];
    const ellipsis = [];
    const firstPage = 1;
    const currentPage = _getActiveIndex(pages) + 1;
    let paginatedIndex;

    if (currentPage === 1 || currentPage === numberOfPages) {
        delta = 4;
    } else if (currentPage === 2 || currentPage === numberOfPages - 1) {
        delta = 3;
    } else if (currentPage === 3 || currentPage === numberOfPages - 2) {
        delta = 2;
    } else {
        delta = 1;
    }

    paginatedPages.push(firstPage);

    if (numberOfPages <= 1) {
        return paginatedPages;
    }

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < numberOfPages && i > 1) {
            paginatedPages.push(i);
        }
    }

    paginatedPages.push(numberOfPages);

    for (const i of paginatedPages) {
        if (paginatedIndex) {
            if (i - paginatedIndex === 2) {
                ellipsis.push(paginatedIndex + 1);
            } else if (i - paginatedIndex !== 1) {
                ellipsis.push("...");
            }
        }

        ellipsis.push(i);
        paginatedIndex = i;
    }

    return ellipsis;
};

const _renderPagination = (paginationSection, ellipsis) => {
    paginationSection.innerHTML = "";
    ellipsis.map(object => {
        paginationSection.innerHTML +=
        `<li>
            <a>${object}</a>
        </li>`;
    });
};

const _getActiveIndex = pages => {
    const index = [...pages].find(page => page.classList.contains("active"));

    return [].indexOf.call(pages, index);
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
    _createPagination
};
