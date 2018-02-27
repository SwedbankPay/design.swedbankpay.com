const init = () => {
    const closeButtons = document.querySelectorAll(".alert>.alert-close");

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.classList.remove("in");
        });
    });
};

const hide = id => {
    if (id) {
        const alertElement = document.getElementById(id);
        if (alertElement) {
            alertElement.classList.remove("in");
        } else {
            console.warn(`No alert with id ${id} was found, make sure you provided the correct id.`);
        }
    } else {
        const alertElements = document.querySelectorAll("div.alert");

        alertElements.forEach(element => {
            element.classList.remove("in");
        });
    }
};

const show = id => {
    if (id) {
        const alertElement = document.getElementById(id);
        if (alertElement) {
            alertElement.classList.add("in");
        } else {
            console.warn(`No alert with id ${id} was found, make sure you provided the correct id.`);
        }
    } else {
        const alertElements = document.querySelectorAll("div.alert");

        alertElements.forEach(element => {
            element.classList.add("in");
        });
    }
};

const alert = {
    init,
    hide,
    show
};

export default alert;
