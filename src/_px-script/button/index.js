const _createBtnLoaderLabel = button => {
    const div = document.createElement("div");

    div.classList.add("btn-loader-label");
    div.innerHTML = button.innerHTML;
    button.innerHTML = "";
    button.appendChild(div);
};

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
    const loaderButtons = document.querySelectorAll("[data-px-loader='true']");

    loaderButtons.forEach(button => {
        _createBtnLoaderLabel(button);
        _appendLoader(button);
    });
};

const hide = id => {
    if (id) {
        const alertElement = document.getElementById(id);
        if (alertElement) {
            alertElement.classList.remove("loading");
        } else {
            console.warn(`No button with id ${id} was found, make sure you provided the correct id.`);
        }
    } else {
        const alertElements = document.querySelectorAll(".btn");

        alertElements.forEach(element => {
            element.classList.remove("loading");
        });
    }
};

const show = id => {
    if (id) {
        const alertElement = document.getElementById(id);
        if (alertElement) {
            alertElement.classList.add("loading");
        } else {
            console.warn(`No button with id ${id} was found, make sure you provided the correct id.`);
        }
    } else {
        const alertElements = document.querySelectorAll(".btn");

        alertElements.forEach(element => {
            element.classList.add("loading");
        });
    }
};

const button = {
    init,
    loader: {
        hide,
        show
    }
};

export default button;
