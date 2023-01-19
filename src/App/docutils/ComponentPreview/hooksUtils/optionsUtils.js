export const resetOptions = ({ showCasePanelAdvanced }) => {
    const showcasePanel = document.getElementById(showCasePanelAdvanced.id);
    const optionsPanel = showcasePanel.querySelector(".options");

    showcasePanel.querySelectorAll("input[type=checkbox]").forEach(checkbox => checkbox.checked = false);
    showcasePanel.querySelectorAll("select[id]").forEach(dropdown => dropdown.value = 0);
    optionsPanel.querySelectorAll(".radio").forEach(radio => radio.querySelector("input").checked = false);

    const defaultRadios = [...optionsPanel.querySelectorAll(".radio")].filter(radio => radio.querySelector("input").id.includes("default"));

    if (defaultRadios.length > 0) {
        const defaultRadiosGroups = defaultRadios.map(radio => radio.querySelector("input").name);

        defaultRadios.map(radio => radio.querySelector("input").checked = true);

        // Reset radio groups that do not have default specified (set to top radio). Needs to be done when one or more radio button is specified as default
        [...optionsPanel.querySelectorAll(".radio")].filter(radio => !defaultRadiosGroups.includes(radio.querySelector("input").name))
            .map(radio => radio.querySelector("input").checked = radio.querySelector("input").value === "0");
    } else {
        optionsPanel.querySelectorAll(".radio").forEach(radio => radio.querySelector("input").checked = radio.querySelector("input").value === "0");
    }

};
