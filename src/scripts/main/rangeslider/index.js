const SELECTORS = {
	RANGESLIDER: ".rangeslider",
};

const _createRangeSlider = (rangeContainer) => {
	const input = rangeContainer.querySelector("input[type=range]");
	const valueSpan = rangeContainer.querySelector("span[data-rs-value]");

	input.addEventListener("change", () => (valueSpan.innerHTML = input.value));
	input.addEventListener("input", () => (valueSpan.innerHTML = input.value));

	return { container: rangeContainer };
};

const init = (id) => {
	if (id) {
		const rangeSlider = document.getElementById(id);

		if (!rangeSlider) {
			console.warn(`No rangeslider with id ${id} found`);

			return null;
		}

		return _createRangeSlider(rangeSlider);
	} else {
		const rangeSliders = document.querySelectorAll(SELECTORS.RANGESLIDER);

		if (!rangeSliders.length) {
			console.warn("No rangesliders found");

			return null;
		}

		return [...rangeSliders].map((rangeSlider) =>
			_createRangeSlider(rangeSlider)
		);
	}
};

export default { init };
