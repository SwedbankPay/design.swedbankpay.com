const paginate = (arrayLength, currentActive) => {
    const paginatedPages = [];
    let delta;
    const result = [];
    let paginatedIndex;

    if (currentActive === 1 || currentActive === arrayLength) {
        delta = 4;
    } else if (currentActive === 2 || currentActive === arrayLength - 1) {
        delta = 3;
    } else if (currentActive === 3 || currentActive === arrayLength - 2) {
        delta = 2;
    } else {
        delta = 1;
    }

    paginatedPages.push(1);

    for (let i = currentActive - delta; i <= currentActive + delta; i++) {
        if (i < arrayLength && i > 1) {
            paginatedPages.push(i);
        }
    }

    paginatedPages.push(arrayLength);

    for (const i of paginatedPages) {
        if (paginatedIndex) {
            if (i - paginatedIndex === 2) {
                result.push({
                    page: paginatedIndex + 1,
                    current: paginatedIndex + 1 === currentActive
                });
            } else if (i - paginatedIndex !== 1) {
                result.push({
                    page: null,
                    current: false
                });
            }
        }

        result.push({
            page: i,
            current: i === currentActive
        });
        paginatedIndex = i;
    }

    return result;
};
