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

// check if page has already a scrollbar displayed
export const hasVscroll = () => {
	return window.innerWidth - document.documentElement.clientWidth > 0;
};

// add/remove .has-vscroll
// it is meant block scrolling on the body when a modal is open. But this should only happen if a scrolling of teh page would be necessary (hence teh checking if there was a scrollbar before)
export const handleScrollbar = () => {
	const hasVScrollVal = hasVscroll();

	// if has scrollbar AND <body> do not have .has-vscroll yet then add it
	if (hasVScrollVal && !document.body.classList.contains("has-vscroll")) {
		document.body.classList.add("has-vscroll");
	} else {
		// if has no scrollbar OR <body> already has .has-vscroll then remove it
		document.body.classList.remove("has-vscroll");
	}
};

export const openComponent = (id, componentType, componentList) => {
	let component = null;

	componentList.forEach((c) => (c.id === id ? (component = c) : null));

	try {
		if (component.isOpen) {
			console.warn(
				`${componentType}.open: ${componentType} with id "${id}" is open`,
			);

			return false;
		}

		component.open();
	} catch (e) {
		console.warn(
			`${componentType}.open: No ${componentType} with id "${id}" found.`,
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
				`${componentType}.close: ${componentType} with id "${id}" is not open`,
			);

			return false;
		}

		component.close();
	} catch (e) {
		console.warn(
			`${componentType}.close: No ${componentType} with id "${id}" found.`,
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
