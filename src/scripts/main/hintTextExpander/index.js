const _createExpander = expander => {
    const button = expander.querySelector("button");
    const content = expander.querySelector(".content");

    button.addEventListener("click", () => {
        button.classList.toggle("content-expanded");

        if (button.classList.contains("content-expanded")) {
            button.setAttribute("aria-expanded", "true");
            content.setAttribute("aria-hidden", "false");
        } else {
            button.setAttribute("aria-expanded", "false");
            content.setAttribute("aria-hidden", "true");
        }
    });
};

const init = id => {
    if (id) {
        const expander = document.getElementById(id);

        if (!expander) {
            console.warn(`No text expander with id ${id} found`);

            return null;
        }

        return _createExpander(expander);
    } else {
        const hintTextExpanders = document.querySelectorAll(".help-block-expander");

        if (!hintTextExpanders.length) {
            console.warn("No text expanders found");

            return null;
        }

        return [...hintTextExpanders].map(expander => _createExpander(expander));
    }
};

export default { init };
