const SELECTORS = {
    TOOLTIP_TOP: "[data-tooltip-position='top']",
    TOOLTIP_BOTTOM: "[data-tooltip-position='bottom']"

};

const _repositionTooltip = e => {
    const tooltipContent = e.target.querySelector(".tooltip");

    const tooltipContentPosition = tooltipContent.getBoundingClientRect();

    if (tooltipContentPosition.left < 16) {
        tooltipContent.style.left = `${tooltipContent.offsetLeft - tooltipContentPosition.left + 16}px`;
    } else if (tooltipContentPosition.right > window.innerWidth - 16) {
        tooltipContent.style.left = `${tooltipContent.offsetLeft - tooltipContentPosition.left - 16}px`;
    }
};

const _createTooltip = tooltip => {
    tooltip.addEventListener("mouseover", _repositionTooltip);

    return {
        container: tooltip
    };
};

const init = id => {
    if (id) {
        const tooltipParent = document.getElementById(id);

        if (!tooltipParent) {
            console.warn(`No tooltip parent with id ${id} found`);

            return null;
        }

        return _createTooltip(tooltipParent);
    } else {
        const tooltipParents = document.querySelectorAll(`${SELECTORS.TOOLTIP_TOP}, ${SELECTORS.TOOLTIP_BOTTOM}`);

        if (!tooltipParents.length) {
            console.warn("No top or bottom tooltips found");

            return null;
        }

        return [...tooltipParents].filter(tooltipParent => tooltipParent.querySelector(".tooltip")).map(tooltip => _createTooltip(tooltip));
    }
};

export default {
    init
};
