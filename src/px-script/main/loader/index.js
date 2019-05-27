const SELECTORS = { LOADER: "[data-loader]" };

const _appendLoader = loader => {
    const ul = document.createElement("ul");

    ul.classList.add("loader-icon");

    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li");

        ul.appendChild(li);
    }

    loader.appendChild(ul);

    return { container: loader };
};

const init = id => {
    if (id) {
        const loader = document.getElementById(id);

        if (!loader) {
            console.warn(`No loader with id ${id} found`);

            return null;
        }

        return _appendLoader(loader);
    } else {
        const loaders = document.querySelectorAll(SELECTORS.LOADER);

        if (!loaders.length) {
            console.warn("No loaders found");

            return null;
        }

        return [...loaders].map(loader => _appendLoader(loader));
    }
};

export default {
    init
};
