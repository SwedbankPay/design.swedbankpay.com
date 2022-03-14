const _repositionTooltip = e => {
    const tooltipContent = e.target.querySelector(".tooltip");
    const tooltipContentPosition = tooltipContent.getBoundingClientRect();

    // TODO: Fix
    if (tooltipContentPosition.left < 16) {
        tooltipContent.style.left = `${tooltipContent.offsetLeft - tooltipContentPosition.left + 16}px`;
    } else if (tooltipContentPosition.right > window.innerWidth - 16) {
        tooltipContent.style.left = `${tooltipContent.offsetLeft - tooltipContentPosition.left - 16}px`;
    }
};

const _createTooltip = tooltip => {
    console.log("tooltip", tooltip);

    const tip = tooltip.querySelector("[role=tooltip]");

    // tooltip.addEventListener("mouseover", _repositionTooltip);
    window.addEventListener("keydown", e => {
        if (e.key === "Esc" || e.key === "Escape") {
            if (window.getComputedStyle(tip).visibility === "visible") {
                console.log("heihsaann");
            }
        }
    });

    window.addEventListener("click", e => {
        tooltip.classList.remove("");
    });

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
        const tooltipParents = document.querySelectorAll(".tooltip");

        if (!tooltipParents.length) {
            console.warn("No top or bottom tooltips found");

            return null;
        }

        return [...tooltipParents].map(tooltip => _createTooltip(tooltip));

    }
};

export default {
    init
};
