const tabs = (() => {
    const init = () => {
        const tabsContainer = document.querySelector(".tabs");

        tabsContainer.addEventListener("click", e => {
            e.preventDefault();

            tabsContainer.querySelector(".open").classList.remove(".open");
            tabsContainer.add("open");
        });

        // tabs.forEach(tab => {
        //     tab.addEventListener("click", e => {
        //         e.preventDefault();

        //         tab.parentElement.querySelector(".active").classList.remove("active");
        //         tab.classList.add("active");
        //     });
        // });
    };

    return { init };
})();

export default tabs;
