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

export default {
    init: () => {
        const loaders = document.querySelectorAll(SELECTORS.LOADER);

        loaders.forEach(loader => {
            _appendLoader(loader);
        });
    }
};
