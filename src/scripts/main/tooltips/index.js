const _repositionTooltip = (e) => {
	const tooltipContent = e.target.nextElementSibling;
	const tooltipContentPosition = tooltipContent.getBoundingClientRect();

	if (tooltipContentPosition.left < 16) {
		tooltipContent.style.left = `${
			tooltipContent.offsetLeft - tooltipContentPosition.left + 16
		}px`;
	} else if (tooltipContentPosition.right > window.innerWidth - 16) {
		tooltipContent.style.left = `${
			tooltipContent.offsetLeft - tooltipContentPosition.left - 16
		}px`;
	}
};

const _createTooltip = (tooltip) => {
	const tip = tooltip.querySelector("[role=tooltip]");

	window.addEventListener("keydown", (e) => {
		if (e.key === "Esc" || e.key === "Escape") {
			if (window.getComputedStyle(tip).visibility === "visible") {
				tip.style.visibility = "hidden";
			}
		}
	});

	tooltip.addEventListener("focus", () => {
		tip.style.visibility = "visible";
	});

	tooltip.addEventListener("mouseover", () => {
		tip.style.visibility = "visible";
	});
};

const init = (id) => {
	if (id) {
		const tooltipParent = document.getElementById(id);

		if (!tooltipParent) {
			console.warn(`No tooltip parent with id ${id} found`);

			return null;
		}

		return _createTooltip(tooltipParent);
	} else {
		const tooltipParents = document.querySelectorAll(".tooltip");

		if (!tooltipParents.length) {
			console.warn("No top or bottom tooltips found");

			return null;
		}

		return [...tooltipParents].map((tooltip) => _createTooltip(tooltip));
	}
};

export default {
	init,
};
