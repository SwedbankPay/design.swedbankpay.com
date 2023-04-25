const paginate = (pages, currentActive) => {
	if (currentActive > pages) {
		throw "CurrentActive can not be greater than total pages.";
	}

	if (currentActive <= 0) {
		throw "CurrentActive must be greater than 0";
	}

	const getDelta = () => {
		if (currentActive === 1 || currentActive === pages) {
			return 4;
		} else if (currentActive === 2 || currentActive === pages - 1) {
			return 3;
		} else if (currentActive === 3 || currentActive === pages - 2) {
			return 2;
		} else {
			return 1;
		}
	};

	const delta = getDelta();
	const paginatedPages = [];

	const paginationProps = (page) => ({ page, current: currentActive === page });

	if (pages < 8) {
		for (let i = 1; i < pages + 1; i++) {
			paginatedPages.push(paginationProps(i));
		}

		return paginatedPages;
	}

	for (let i = currentActive - delta; i <= currentActive + delta; i++) {
		if (i + delta - currentActive === 0) {
			paginatedPages.push(paginationProps(1));
		}

		if (currentActive === 4 && currentActive - i === 1) {
			paginatedPages.push(paginationProps(i - 1));
		}

		if (currentActive > 4 && currentActive < pages - 2) {
			if (currentActive - i === 1) {
				paginatedPages.push(paginationProps(null));
			}
		}

		if (currentActive >= pages - 2 && currentActive <= pages) {
			if (currentActive - i === delta) {
				paginatedPages.push(paginationProps(null));
			}
		}

		if (i < pages && i > 1) {
			paginatedPages.push(paginationProps(i));
		}

		if (currentActive < pages - 3 && currentActive - i < 0 && i > 4) {
			paginatedPages.push(paginationProps(null));
		}

		if (currentActive === pages - 3 && currentActive - i === -1) {
			paginatedPages.push(paginationProps(pages - 1));
		}

		if (currentActive + delta - i === 0) {
			paginatedPages.push(paginationProps(pages));
		}
	}

	return paginatedPages;
};

export default paginate;
