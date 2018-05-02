const validation = (() => {
    const _validate = element => {
        const { required, pattern } = element.dataset;
        const { value } = element;
        const requiredPass = required ? !!value : true;
        const patternPass = (pattern && value) ? !!value.match(new RegExp(pattern)) : true;

        if (!value && required && patternPass) {
            return "NEUTRAL";
        }

        return (requiredPass && patternPass) ? "SUCCESS" : "ERROR";
    };

    const validateField = element => {
        const state = _validate(element);
        const parentElement = element.closest(".form-group") || element.closest(".input-group");

        switch (state) {
            case "SUCCESS":
                parentElement.classList.add("has-success");
                parentElement.classList.remove("has-error");
                break;
            case "ERROR":
                parentElement.classList.add("has-error");
                parentElement.classList.remove("has-success");
                break;
            default:
                parentElement.classList.remove("has-error");
                parentElement.classList.remove("has-success");
        }

        return state !== "ERROR";
    };

    const validateForm = (form, event) => {
        let validForm = true;

        form.querySelectorAll("[data-validate]")
            .forEach(element => {
                if (!validateField(element)) {
                    validForm = false;
                }
            });

        if (!validForm) {
            event.preventDefault();
        }
    };

    const attachFormValidator = element => {
        element.addEventListener("submit", e => {validateForm(element, e);}, false);
    };

    const attachInputValidator = element => {
        element.addEventListener("change", () => {validateField(element);}, false);
    };

    const init = () => {
        document.querySelectorAll("[data-validate]").forEach(element => {
            switch (element.tagName) {
                case "FORM":
                    attachFormValidator(element);
                    break;
                default:
                    attachInputValidator(element);
            }
        });
    };

    return { init };
})();

export default validation;
