const alert = () => {
    const init = () => {
        const closeButtons = document.querySelectorAll(".alert>[data-close]");

        closeButtons.forEach(button => {
            button.addEventListener("click", () => {
                button.parentElement.classList.remove("in");
            });
        });
    };
    const hideAlert = id => {
        if (id) {
            const alertElement = document.getElementById(id);
            if (alertElement) {
                alertElement.classList.remove("in");
            } else {
                console.warn(`No alert with id ${id} was found, make sure that you provided the correct id.`);
            }
        } else {
            const alertElements = document.querySelectorAll("div.alert");

            alertElements.forEach(element => {
                element.classList.remove("in");
            });
        }
    };

    const showAlert = id => {
        if (id) {
            const alertElement = document.getElementById(id);
            if (alertElement) {
                alertElement.classList.add("in");
            } else {
                console.warn(`No alert with id ${id} was found, make sure that you provided the correct id.`);
            }
        } else {
            const alertElements = document.querySelectorAll("div.alert");

            alertElements.forEach(element => {
                element.classList.add("in");
            });
        }
    };

    return {
        init: init,
        hide: hideAlert,
        show: showAlert
    };
};

export default alert();
