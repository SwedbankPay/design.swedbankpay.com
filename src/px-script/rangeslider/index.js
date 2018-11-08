const _writeStyle = obj => {
    const { inlineStyleContent, inlineStyle } = obj;
    const index = inlineStyleContent.map(({ id }) => id).indexOf(obj.id);
    let styleText = "";

    (index === -1) ? inlineStyleContent.push(obj) : inlineStyleContent[index] = obj;

    inlineStyleContent.forEach(({ id, percent }) => {
        styleText += `#${id}::-webkit-slider-runnable-track{background-size: ${percent}% 100%} \n`;
    });

    inlineStyle.textContent = styleText;
};

const rangeslider = (() => {
    const init = () => {
        const rangeContainers = document.querySelectorAll(".rangeslider");
        const userBrowser = navigator.userAgent;
        const inlineStyle = document.createElement("style");
        const inlineStyleContent = [];
        const isBrowserChrome = userBrowser.indexOf("Chrome") > -1;

        if (rangeContainers.length > 0) {
            if (isBrowserChrome) {
                document.body.appendChild(inlineStyle);
            }

            rangeContainers.forEach((rangeContainer, i) => {
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

                        _writeStyle({
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
            });
        }
    };

    return { init };
})();

export default rangeslider;
