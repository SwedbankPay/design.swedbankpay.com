const SELECTORS = {
    RANGESLIDER: ".rangeslider"
};

const writeStyle = obj => {
    const { inlineStyleContent, inlineStyle } = obj;
    const index = inlineStyleContent.map(({ id }) => id).indexOf(obj.id);
    let styleText = "";

    (index === -1) ? inlineStyleContent.push(obj) : inlineStyleContent[index] = obj;

    inlineStyleContent.forEach(({ id, percent }) => {
        styleText +=
        `.rangeslider input[type="range"][data-rs-id="${id}"]::-webkit-slider-runnable-track,
        .rangeslider input[type="range"][disabled][data-rs-id="${id}"]::-webkit-slider-runnable-track {
            background-size: ${percent}% 100%
        }`;
    });

    inlineStyle.textContent = styleText;
};

const _createRangeSlider = (rangeContainer, inlineStyle, inlineStyleContent, isBrowserChrome, i) => {
    const input = rangeContainer.querySelector("input[type=range]");

    const valueSpan = rangeContainer.querySelector("span[data-rs-value]");

    /* Changing value of span */
    if (valueSpan) {
        input.addEventListener("change", () => {
            valueSpan.innerHTML = input.value;
        });
        input.addEventListener("input", () => {
            valueSpan.innerHTML = input.value;
        });
    }

    /* Filling slider background for chrome */
    if (isBrowserChrome) {
        input.dataset.rsId = rangeContainer.id ? `dg-rs-${rangeContainer.id}` : `dg-rs-${i}`;

        const updateStyle = () => {
            const max = input.attributes.max ? Number(input.attributes.max.value) : 100;
            const min = input.attributes.min ? Number(input.attributes.min.value) : 0;

            const value = Number(input.value);

            const rangePercent = (value + Math.abs(min)) / (max - min) * 100;

            writeStyle({
                id: input.dataset.rsId,
                percent: rangePercent,
                inlineStyleContent,
                inlineStyle
            });
        };

        input.addEventListener("change", updateStyle);
        input.addEventListener("input", updateStyle);
        updateStyle();
    }

    return { container: rangeContainer };
};

const init = id => {
    const isBrowserChrome = navigator.userAgent.indexOf("Chrome") > -1;
    const inlineStyle = document.createElement("style");
    const inlineStyleContent = [];

    if (id) {
        const rangeSlider = document.getElementById(id);

        if (!rangeSlider) {
            console.warn(`No rangeslider with id ${id} found`);

            return null;
        }

        if (isBrowserChrome) {
            document.body.appendChild(inlineStyle);
        }

        return _createRangeSlider(rangeSlider, inlineStyle, inlineStyleContent, isBrowserChrome);
    } else {
        const rangeSliders = document.querySelectorAll(SELECTORS.RANGESLIDER);

        if (!rangeSliders.length) {
            console.warn("No rangesliders found");

            return null;
        }

        if (isBrowserChrome) {
            document.body.appendChild(inlineStyle);
        }

        return [...rangeSliders].map((rangeSlider, i) => _createRangeSlider(rangeSlider, inlineStyle, inlineStyleContent, isBrowserChrome, i));
    }
};

export default {
    init
};
