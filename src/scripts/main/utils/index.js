export const extendObj = (overWrite, obj, ext) => {
	for (const key in ext) {
		if (overWrite) {
			obj[key] = ext[key];
		} else if (!obj[key]) {
			obj[key] = ext[key];
		}
	}

	return obj;
};

export const isWithinBoundingBox = (x, y, element) => {
	const rect = element.getBoundingClientRect();
	const xMin = rect.left;
	const xMax = rect.right;
	const yMin = rect.top;
	const yMax = rect.bottom;

	return xMin < x && xMax > x && yMin < y && yMax > y;
};

export const handleScrollbar = () => {
	const hasVScroll =
		window.innerWidth - document.documentElement.clientWidth > 0;

	if (hasVScroll && !document.body.classList.contains("has-vscroll")) {
		document.body.classList.add("has-vscroll");
	} else {
		document.body.classList.remove("has-vscroll");
	}
};

export const openComponent = (id, componentType, componentList) => {
	let component = null;

	componentList.forEach((c) => (c.id === id ? (component = c) : null));

	try {
		if (component.isOpen) {
			console.warn(
				`${componentType}.open: ${componentType} with id "${id}" is open`
			);

			return false;
		}

		component.open();
	} catch (e) {
		console.warn(
			`${componentType}.open: No ${componentType} with id "${id}" found.`
		);

		return false;
	}

	return component;
};

export const closeComponent = (id, componentType, componentList) => {
	let component = null;

	componentList.forEach((c) => (c.id === id ? (component = c) : null));

	try {
		if (!component.isOpen) {
			console.warn(
				`${componentType}.close: ${componentType} with id "${id}" is not open`
			);

			return false;
		}

		component.close();
	} catch (e) {
		console.warn(
			`${componentType}.close: No ${componentType} with id "${id}" found.`
		);

		return false;
	}

	return component;
};

export default {
	extendObj,
	isWithinBoundingBox,
	handleScrollbar,
	openComponent,
	closeComponent,
};
