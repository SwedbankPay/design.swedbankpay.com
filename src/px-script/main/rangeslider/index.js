import { hashId } from "../utils";

const SELECTORS = {
    RANGESLIDER: ".rangeslider"
};

const writeStyle = obj => {
    const { inlineStyleContent, inlineStyle } = obj;
    const index = inlineStyleContent.map(({ id }) => id).indexOf(obj.id);
    let styleText = "";

    (index === -1) ? inlineStyleContent.push(obj) : inlineStyleContent[index] = obj;

    inlineStyleContent.forEach(({ id, percent }) => {
        styleText += `#${id}::-webkit-slider-runnable-track{background-size: ${percent}% 100%}`;
    });

    inlineStyle.textContent = styleText;
};

const init = id => {
    const rangeId = hashId(id);
    const rangeContainerSelector = rangeId ? document.querySelectorAll(rangeId) : document.querySelectorAll(SELECTORS.RANGESLIDER);
    let rangeContainers = [];
    const inlineStyle = document.createElement("style");
    const inlineStyleContent = [];
    const isBrowserChrome = navigator.userAgent.indexOf("Chrome") > -1;

    if (rangeContainerSelector.length > 0) {
        if (isBrowserChrome) {
            document.body.appendChild(inlineStyle);
        }

        rangeContainers = [...rangeContainerSelector].map((rangeContainer, i) => {
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
                input.id = `px-rs-${i}`;

                const updateStyle = () => {
                    const max = input.attributes.max ? Number(input.attributes.max.value) : 100;
                    const min = input.attributes.min ? Number(input.attributes.min.value) : 0;
                    const value = Number(input.value);
                    const rangePercent = (value + Math.abs(min)) / (max - min) * 100;

                    writeStyle({
                        id: input.id,
                        percent: rangePercent,
                        inlineStyleContent,
                        inlineStyle
                    });
                };

                input.addEventListener("change", updateStyle);
                input.addEventListener("input", updateStyle);
                updateStyle();
            }

            return { _el: rangeContainer };
        });

        return rangeContainers.length === 1 ? rangeContainers[0] : rangeContainers;
    }

    return null;
};

export default {
    init
};
