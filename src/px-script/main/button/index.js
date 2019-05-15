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

    return { container: button };
};

const init = id => {
    if (id) {
        const btnLoader = document.getElementById(id);

        if (!btnLoader) {
            console.warn("doesn't exist");

            return null;
        }

        return _appendLoader(btnLoader);
    } else {
        const btnLoaders = document.querySelectorAll(SELECTORS.LOADER);

        if (!btnLoaders.length) {
            console.warn("doesn't exist");

            return null;
        }

        return [...btnLoaders].map(btnLoader => _appendLoader(btnLoader));
    }
};

export default {
    init
};
