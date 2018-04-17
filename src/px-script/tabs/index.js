export default {
    init: () => {
        const tabContainers = document.querySelectorAll(".tabs");

        tabContainers.forEach(tabContainer => {
            const tabs = tabContainer.querySelectorAll("li");
            tabs.forEach(tab => {
                tab.addEventListener("click", e => {
                    e.preventDefault();

                    tab.parentElement.querySelector(".active").classList.remove("active");
                    tab.classList.add("active");
                });
            });
        });
    }
};
