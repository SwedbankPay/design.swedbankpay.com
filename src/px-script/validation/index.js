const validation = (() => {
    const init = () => {
        const validateEls = document.querySelectorAll("[data-validate]");

        if (validateEls) {
            validateEls.forEach(element => {
                if (element.tagName === "FORM") {
                    console.log("FORM!");
                } else {
                    console.log("NOT FORM!");
                }
            });
        }
    };

    return { init };

})();

export default validation;

// TODO: SET UP TEMP FORM VALIDATION IN DOCUMENTATION
