const validation = (() => {
    const _checkValidity = input => {
        if (!input.required && !input.value) {
            return "NEUTRAL";
        }

        return input.checkValidity() ? "SUCCESS" : "ERRROR";
    };

    const _validateInput = input => {
        const parentFormGroup = input.closest(".form-group");
        const state = _checkValidity(input);

        switch (state) {
            case "SUCCESS":
                parentFormGroup.classList.add("has-success");
                parentFormGroup.classList.remove("has-error");

                break;
            case "ERROR":
                parentFormGroup.classList.add("has-error");
                parentFormGroup.classList.remove("has-success");

                break;
            default:
                parentFormGroup.classList.remove("has-error");
                parentFormGroup.classList.remove("has-success");
        }

        return state !== "ERROR";
    };

    const _addInputValidation = input => {
        input.addEventListener("focus", () => {
            input.closest(".form-group").classList.remove("has-success");
            input.closest(".form-group").classList.remove("has-error");
        });

        input.addEventListener("blur", () => _validateInput(input));
    };

    const _addFormValidation = form => {
        const inputs = form.querySelectorAll("input");
        const textareas = form.querySelectorAll("textarea");

        [...inputs, ...textareas].forEach(input => _addInputValidation(input));

        form.addEventListener("submit", e => {
            let validForm = true;

            [...inputs, ...textareas].forEach(input => {
                _validateInput(input) ? validForm = false : null;
            });

            if (!validForm) {
                e.preventDefault();
            }
        });
    };

    const init = () => {
        const validateEls = document.querySelectorAll("[data-validate]");

        if (validateEls) {
            validateEls.forEach(element => {
                if (element.tagName === "FORM") {
                    _addFormValidation(element);
                } else if (element.tagName === "INPUT") {
                    _addInputValidation(element);
                }
            });
        }
    };

    return { init };

})();

export default validation;
