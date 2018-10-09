const FIELDSELECTORS = "input, select, textarea";
const EMAILREGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validation = (() => {
    const validateField = field => {
        if (field.type === "email" && field.pattern && field.value.match(field.pattern)) {
            return true;
        } else if (field.type === "email" && field.value.match(EMAILREGEX)) {
            return true;
        } else if (field.type === "email") {
            return false;
        }

        return field.checkValidity();
    };

    const validateForm = form => {
        if (form.tagName === "FORM") {
            const fieldsToValidate = form.querySelector(FIELDSELECTORS);
            let formValid = true;

            fieldsToValidate.forEach(field => {
                if (!validateField(field)) {
                    formValid = false;
                }
            });

            return formValid;
        } else {
            try {
                throw new TypeError("validateForm: Element tagName not form.");
            } catch (e) {
                console.error(`${e.name} ${e.message}`);

                return false;
            }
        }
    };

    const _checkFieldState = field => {
        if (!field.required && !field.value) {
            return "NEUTRAL";
        }

        return validateField(field) ? "SUCCESS" : "ERROR";
    };

    const _addFieldState = (field, validationContainer) => {
        const state = _checkFieldState(field);

        switch (state) {
            case "SUCCESS":
                validationContainer.classList.add("has-success");
                validationContainer.classList.remove("has-error");

                break;
            case "ERROR":
                validationContainer.classList.add("has-error");
                validationContainer.classList.remove("has-success");

                break;
            default:
                validationContainer.classList.remove("has-error");
                validationContainer.classList.remove("has-success");
        }
    };

    const _addFieldValidation = field => {
        const validationContainer = field.closest(".form-group");

        if (field.required) {
            const reqLabel = validationContainer.querySelector("label");
            const asterisk = document.createElement("span");

            asterisk.classList.add("required-asterisk");
            asterisk.innerHTML = "*";
            reqLabel.appendChild(asterisk);
        }

        field.addEventListener("focus", () => {
            validationContainer.classList.remove("has-success");
            validationContainer.classList.remove("has-error");
        });

        field.addEventListener("blur", () => _addFieldState(field, validationContainer));
    };

    const _addFormValidation = form => {
        const fields = form.querySelectorAll(FIELDSELECTORS);
        const submitBtn = form.querySelector("[data-disable-invalid]");

        if (submitBtn && !validateForm(form)) {
            submitBtn.disabled = true;
        }

        fields.forEach(field => _addFieldValidation(field));

        if (submitBtn) {
            form.addEventListener("change", () => {
                if (validateForm(form)) {
                    submitBtn.disabled = false;
                } else {
                    submitBtn.disabled = true;
                }
            });
        }

        form.addEventListener("submit", e => {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });
    };

    const init = () => {
        const validateEls = document.querySelectorAll("[data-validate]");

        if (validateEls) {
            validateEls.forEach(element => {
                const { tagName } = element;

                if (tagName === "FORM") {
                    _addFormValidation(element);
                } else if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") {
                    _addFieldValidation(element);
                }
            });
        }
    };

    return {
        init,
        validateField,
        validateForm
    };

})();

export default validation;
