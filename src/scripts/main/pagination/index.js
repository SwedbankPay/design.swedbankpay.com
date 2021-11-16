
const SELECTORS = {
    PAGINATION: ".pagination"
};

const _createPagination = paginationContainer => {

    const pages = paginationContainer.querySelectorAll("li");
    const ul = paginationContainer.querySelector("ul");

    // [...pages].map(page => page.classList.add("hidden"));

    // const paginatedPages = _paginate(pages);

    // [...pages].map(page => ul.appendChild(page));
    // paginationContainer.appendChild(ul);
/*
    const _paginaterinho = () => {

        const activeIndex = _getActiveIndex(pages);

        if (pages.length > 7) {
            const anchor = document.createElement("a");
            const dotts = document.createElement("LI");

            dotts.className = "d-none d-sm-block";

            dotts.appendChild(anchor);
            dotts.classList.add("dotts");
            anchor.innerText = "...";

            const div = paginationContainer.querySelector("div");

            [...pages].map(page => page.classList.add("hidden"));

            if (activeIndex < 4) {
                [...pages].map((page, index) => {
                    if (index < 6) {
                        page.classList.remove("hidden");
                    } else if (index === pages.length - 1) {
                        page.classList.remove("hidden");
                    }
                });
            } else if (activeIndex > 3 && activeIndex < pages.length - 4) {
                [...pages].map((page, index) => {
                    if (index === 1) {
                        page.classList.remove("hidden");
                    } else if (index === activeIndex - 1 || index === activeIndex || index === activeIndex + 1) {
                        page.classList.remove("hidden");
                    } else if (index === pages.length - 1) {
                        page.classList.remove("hidden");
                    }
                });
            } else if (activeIndex >= pages.length - 4) {
                [...pages].map((page, index) => {
                    if (index === 1) {
                        page.classList.remove("hidden");
                    } else if (index < pages.length - 1) {
                        page.classList.remove("hidden");
                    }
                });
            }
        }
    };

    _paginaterinho();
*/
};

// const pages = paginationContainer.querySelectorAll("li");

const paginate = () => {
    const numberOfPages = 100;
    let delta;
    const range = [];
    const rangeWithDots = [];
    const firstPage = 1;
    const currentPage = 1;

    if (currentPage === 1 || currentPage === numberOfPages) {
        delta = 4;
    } else if (currentPage === 2 || currentPage === numberOfPages - 2) {
        delta = 3;
    } else if (currentPage === 3 || currentPage === numberOfPages - 3) {
        delta = 2;
    } else {
        delta = 1;
    }

    let l;

    range.push(firstPage);

    if (numberOfPages <= 1) {
        return range;
    }

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < numberOfPages && i > 1) {
            range.push(i);
        }
    }

    range.push(numberOfPages);

    for (const i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push("...");
            }
        }

        rangeWithDots.push(i);
        l = i;
    }

    console.log(rangeWithDots);

    return rangeWithDots;

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

        paginate();

        return [...paginations].map(pagination => _createPagination(pagination));
    }
};

export default {
    init,
    _createPagination
};
