const tabs = (() => {
    const init = () => {
        const tabsContainer = document.querySelector(".tabs");

        tabsContainer.addEventListener("click", e => {
            e.preventDefault();

            tabsContainer.classList.toggle("open");
        });
    };

    return { init };
})();

export default tabs;
