const validation = (() => {
    const _addInputValidation = input => {
        input.addEventListener("focus", () => {
            input.closest(".form-group").classList.remove("has-error");
        });

        input.addEventListener("blur", () => {
            const isValid = input.checkValidity();
            const parentFormGroup = input.closest(".form-group");

            if (isValid) {
                parentFormGroup.classList.remove("has-error");
                parentFormGroup.classList.add("has-success");
            } else {
                parentFormGroup.classList.remove("has-success");
                parentFormGroup.classList.add("has-error");
            }
        });
    };

    const init = () => {
        const validateEls = document.querySelectorAll("[data-validate]");

        if (validateEls) {
            validateEls.forEach(element => {
                if (element.tagName === "FORM") {
                    console.log("FORM!");
                } else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    _addInputValidation(element);
                }
            });
        }
    };

    return { init };

})();

export default validation;
