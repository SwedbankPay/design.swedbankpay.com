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

const button = (() => {
    const init = () => {
        const loaderButtons = document.querySelectorAll(SELECTORS.LOADER);

        loaderButtons.forEach(button => {
            _appendLoader(button);
        });
    };

    return { init };
})();

export default button;
