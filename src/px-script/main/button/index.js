const SELECTORS = { LOADER: "button[data-button-loader]" };

const _appendLoader = button => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");

    div.classList.add("loader");
    ul.classList.add("loader-icon");

    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li");

        ul.appendChild(li);
    }

    div.appendChild(ul);

    button.appendChild(div);
};

const init = () => {
    const loaderSelector = document.querySelectorAll(SELECTORS.LOADER);
    const buttonLoaders = [];

    if (loaderSelector.length) {
        loaderSelector.forEach(button => {
            if (!button.querySelector(".loader")) {
                _appendLoader(button);

                buttonLoaders.push({
                    container: button
                });
            }
        });

        return buttonLoaders.length === 1 ? buttonLoaders[0] : buttonLoaders;
    }

    return null;
};

export default {
    init
};
