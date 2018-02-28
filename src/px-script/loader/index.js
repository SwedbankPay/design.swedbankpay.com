const hide = id => {
    if (id) {
        const loaderElement = document.getElementById(id);

        if (loaderElement) {
            loaderElement.classList.remove("in");
        } else {
            console.warn(`No loader with id ${id} was found, make sure you provided the correct id.`);
        }
    } else {
        const loaderElements = document.querySelectorAll("div.loader");

        loaderElements.forEach(element => {
            element.classList.remove("in");
        });
    }
};

const show = id => {
    if (id) {
        const loaderElement = document.getElementById(id);

        if (loaderElement) {
            loaderElement.classList.add("in");
        } else {
            console.warn(`No loader with id ${id} was found, make sure you provided the correct id.`);
        }
    } else {
        const loaderElements = document.querySelectorAll("div.loader");

        loaderElements.forEach(element => {
            element.classList.add("in");
        });
    }
};


const loader = {
    hide,
    show
};

export default loader;
