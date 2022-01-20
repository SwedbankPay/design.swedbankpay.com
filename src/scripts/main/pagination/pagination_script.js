const paginate = (pages, target) => {
    const numberOfPages = pages.length;
    let delta;
    const paginatedPages = [];
    const ellipsis = [];
    const firstPage = 1;
    const currentPage = target;
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

    return { ellipsis,
        currentPage };
};
