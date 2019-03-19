class Accordion {
    constructor (element) {
        this.accordion = element;
        this.items = element.querySelectorAll(".accordion-item");
        this.containsOpen = [...this.items].find(item => item.classList.contains("accordion-open"));

        this.items.forEach(item => {
            item.firstElementChild.addEventListener("click", () => {
                if (this.containsOpen) {
                    this.closeAll(item);
                    item.classList.toggle("accordion-open");
                } else {
                    this.containsOpen = true;
                    item.classList.toggle("accordion-open");
                }
            });
        });
    }

    closeAll (currentItem) { // Closes all accordions except the one that is given
        this.items.forEach(item => item !== currentItem ? item.classList.remove("accordion-open") : null);
    }
}

const accordion = (() => {
    const init = () => {
        const accordion = document.querySelectorAll(".accordion");

        if (accordion.length) {
            accordion.forEach(acc => new Accordion(acc));
        }
    };

    return { init };
})();

export default accordion;
