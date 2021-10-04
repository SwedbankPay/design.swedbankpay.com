
const SELECTORS = {
    PAGINATION: ".pagination"
};

const _createPagination = paginationContainer => {

    const pages = paginationContainer.querySelectorAll("li:not(.arrow-back, .arrow-forward, .arrow-end, .arrow-start)");
    const arrowForward = paginationContainer.querySelector("li.arrow-forward");
    const arrowBack = paginationContainer.querySelector("li.arrow-back");

    const _initialActive = () => {
        [...pages][0].classList.add("active");
        arrowBack.classList.add("disabled");
    }

    const _getActiveIndex = () => {
        const currentActive = [...pages].find(page => page.classList.contains("active"));
        return [].indexOf.call(pages, currentActive);
    }

    const _addListener = () => {
        [...pages].map(page => {
            page.addEventListener("click", e => {
                _setActiveOnClick(e);
            })
        });

        arrowForward.addEventListener("click", e => {
            e.preventDefault();
            // create arrow navigation
        })
    };

    const _setActiveOnClick = (e) => {
        e.preventDefault();
        [...pages].map(page => page.classList.remove("active"))
        e.currentTarget.classList.add("active");
        _setDisabledArrow();
        _paginate();
    }

    const _setDisabledArrow = () => {
        const activeIndex = _getActiveIndex();
        _removeDisabledArrow();
        if (activeIndex === 0) {
            arrowBack.classList.add("disabled");
        } else if (activeIndex === pages.length - 1) {
            arrowForward.classList.add("disabled");
        }
    }

    const _removeDisabledArrow = () => {
        arrowBack.classList.contains("disabled") ? arrowBack.classList.remove("disabled") : null;
        arrowForward.classList.contains("disabled") ? arrowForward.classList.remove("disabled") : null;
    }

    const _paginate = () => {
        const paginatedPages = [];
        const activeIndex = _getActiveIndex();
        if (pages.length > 7) {
            const anchor = document.createElement("a");
            const anchor2 = document.createElement("a");
            const dotts = document.createElement("LI");
            const dotts2 = document.createElement("LI");
            dotts.appendChild(anchor);
            dotts2.appendChild(anchor2);
            anchor.innerText = "..";
            anchor2.innerText = "..";
            if (activeIndex < 4) {
                paginatedPages.push(pages[0]);
                [...pages].slice(1,5).map(page => paginatedPages.push(page));
                paginatedPages.push(dotts);
                paginatedPages.push(pages[pages.length - 1]);
            }
            if (activeIndex > 3 && activeIndex < pages.length - 4) {
                paginatedPages.push(pages[0]);
                activeIndex >= 4 ? paginatedPages.push(dotts) : null; 
                [...pages].slice(activeIndex - 1, activeIndex + 2).map(page => paginatedPages.push(page));
                activeIndex >= pages.length - 3 ? null : paginatedPages.push(dotts2);
                paginatedPages.push(pages[pages.length - 1]);
            }
            if (activeIndex >= pages.length - 4){
                paginatedPages.push(pages[0]);
                paginatedPages.push(dotts);
                [...pages].slice(-5).map(page => paginatedPages.push(page));
            }
        }
        _paginateContainer(paginatedPages);
    }

    const _paginateContainer = paginatedPages => {
        paginationContainer.innerHTML = "";
        paginationContainer.appendChild(arrowBack);
        [...paginatedPages].map(page => paginationContainer.appendChild(page));
        paginationContainer.appendChild(arrowForward);
    }

    _paginate();
    _initialActive();
    _addListener();
};


    /*

        const _paginate = (pages) => {
        const currentActiveIndex = _getActive(pages);
        if (pages.length > 7){
            console.log("Current active: ",currentActiveIndex);
            const paginatedPages = [];
            const dotts = document.createElement("LI");
            dotts.innerText = "...";
            paginatedPages.push(pages[0]);
            if (currentActiveIndex < 3){
                [...pages].slice(1,5).map(page => paginatedPages.push(page));
                paginatedPages.push(dotts);

            } else if (currentActiveIndex > 2 && currentActiveIndex < 6) { // Matematikk på generell liste lengde....
                console.log("click");
                paginatedPages.push(dotts);
                [...pages].slice(3,5).map(page => paginatedPages.push(page));
                paginatedPages.push(dotts);
                console.log(paginatedPages);
            } else if (currentActiveIndex - 2 > 5){
                paginatedPages.push(dotts);
                [...pages].slice(currentActiveIndex, pages.length -2);
            }
            paginatedPages.push(pages[pages.length - 1]);
            return paginatedPages;
        }

    const _disableArrow = (pages, arrows) => {
        const currentActiveIndex = _getActive(pages);

        if (currentActiveIndex === 0) {
            arrows[1].classList.add("disabled");
        } else if (currentActiveIndex === pages.length - 1) {
            arrows[0].classList.add("disabled");
        }
    };

    const _getActive = pages => {
        const currentActive = [...pages].find(page => page.classList.contains("active"));
        return [].indexOf.call(pages, currentActive);

    };

    _initialActive(pages, arrowBack);

    _addListener(pages, arrows);


    const addPages = (paginedPages, paginationContainer) => {
        _addListener(pages, arrows);
        paginationContainer.innerHTML = "";
        _paginate(pages).map(page => paginationContainer.appendChild(page));
    }

    const _addListener = (pages, arrows) => {

        const _arrowStateHandler = (e, pages, arrows) => {
            e.preventDefault(); // remove?
            _removeDisabledArrows(arrows);
            _setActiveOnClick(e, pages);
            _disableArrow(pages, arrows);
        };
        
        [...pages].map(page => {
            page.addEventListener("click", e => {
                _arrowStateHandler(e, pages, arrows);
            });
        });

        arrows.map(arrow => {
            if (arrow.classList.contains("arrow-back")) {
                arrow.addEventListener("click", e => _arrowNavigation(pages, e, "back", arrows));
            }
            if (arrow.classList.contains("arrow-forward")) {
                arrow.addEventListener("click", e => _arrowNavigation(pages, e, "forward", arrows));
            }
        });

    };



    const _initialActive = (pages, arrowBack) => {
        [...pages][0].classList.add("active");
        arrowBack.classList.add("disabled");
        //_initialHideStates(pages);
        _paginate(pages);
    };



    

    const _setActiveOnClick = (e, pages) => {
        _removeActive(pages);
        e.currentTarget.classList.add("active");
        _paginate(pages);
    };

    // Remove all disabled state for arrows.
    const _removeDisabledArrows = arrows => {
        arrows.map(arrow => {
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
    
    const _arrowNavigation = (pages, e, direction, arrows) => {
        e.preventDefault(); // remove??
        _removeDisabledArrows(arrows);
        _disableArrow(pages, arrows);

        const currentActiveIndex = _getActive(pages);

        if (direction === "back") {
            pages[currentActiveIndex - 1].classList.add("active");
        } else {
            pages[currentActiveIndex + 1].classList.add("active");
        }
        pages[currentActiveIndex].classList.remove("active");
    };




    }
    */

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
