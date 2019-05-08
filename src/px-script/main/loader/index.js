import { hashId } from "../utils";

const SELECTORS = { LOADER: "[data-loader]" };

const _appendLoader = loader => {
    const ul = document.createElement("ul");

    ul.classList.add("loader-icon");

    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li");

        ul.appendChild(li);
    }

    loader.appendChild(ul);
};

const init = id => {
    const loaderId = hashId(id);
    const loaderSelector = loaderId ? document.querySelectorAll(loaderId) : document.querySelectorAll(SELECTORS.LOADER);
    let loaders = [];

    if (loaderSelector.length) {
        loaders = [...loaderSelector].map(loader => {
            _appendLoader(loader);

            return { container: loader };
        });

        return loaders.length === 1 ? loaders[0] : loaders;
    }

    return null;
};

export default {
    init
};
