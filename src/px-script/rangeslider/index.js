import { applyToEachElement } from "../utils";

const init = () => {
    const rangeContainers = document.querySelectorAll(".rangeslider");

    applyToEachElement(rangeContainers, function (rangeContainer, i) {
        const input = rangeContainer.querySelector("input[type=range]");
        const valueSpan = rangeContainer.querySelector("span[data-px-rangeslider-value]");

        const inlineStyle = document.createElement("style");
        const inlineStyleContent = new Array;

        document.body.appendChild(inlineStyle);
        input.id = "px-rs-" + i;

        function handleInputChange () {
            /* Filling slider background for webkit */
            const max = input.attributes.max ? Number(input.attributes.max.value) : 100;
            const min = input.attributes.min ? Number(input.attributes.min.value) : 0;
            const value = Number(input.value);
            const rangePercent = (value + Math.abs(min)) / (max - min) * 100;

            writeStyle({
                id: input.id,
                percent: rangePercent
            });

            /* Changing value of span */
            if (valueSpan) valueSpan.innerHTML = input.value;
        }

        function writeStyle (obj) {
            const index = inlineStyleContent.map(({ id }) => id).indexOf(obj.id);
            let styleText = "";

            (index === -1) ? inlineStyleContent.push(obj) : inlineStyleContent[index] = obj;

            inlineStyleContent.forEach(({ id, percent }) => {
                styleText += `#${id}::-webkit-slider-runnable-track{background-size: ${percent}% 100%}`;
            });

            inlineStyle.textContent = styleText;
        }

        input.addEventListener("change", handleInputChange);
        input.addEventListener("keyup", handleInputChange);
        input.addEventListener("keydown", handleInputChange);
        input.addEventListener("input", handleInputChange);

        /* Update filler on startup */
        handleInputChange();
    });
};

export default { init };
