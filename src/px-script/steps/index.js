class Steps {    
    constructor (el) {
        const listElements = el.querySelectorAll("li");
        const selectedListElement = el.querySelector("li.steps-selected");
        const ongoingListElement = el.querySelector("li.steps-ongoing");

        if(!selectedListElement && !ongoingListElement){
            return false
        }

        // TODO: Scroll into view?

        let listItemWidth;
        let listElementIndex;

        if(selectedListElement){
            listItemWidth = selectedListElement.offsetWidth;
            listElementIndex = Array.from(listElements).indexOf(selectedListElement);
        }
        else if(ongoingListElement){
            listItemWidth = ongoingListElement.offsetWidth;
            listElementIndex = Array.from(listElements).indexOf(ongoingListElement);
        }

        let scrollPosition;

        if(listElementIndex > 1){
            scrollPosition = listItemWidth * (listElementIndex - 1);
            el.scrollTo(scrollPosition, 0);
        }

        this.addShadow(el);
        
        el.addEventListener("scroll", (e) => {
            this.addShadow(el);
        });
    }

    addShadow(el) {
        let shadowLeft = false;
        let shadowRight = false;
        let scrollPosition = el.scrollLeft;

        console.log(scrollPosition);

        if(scrollPosition > 0){
            shadowLeft = true;
        }
        
        if(scrollPosition + el.offsetWidth < el.scrollWidth){
            shadowRight = true;
        }

        console.log("Hello");

        el.classList.remove("steps-shadow");
        el.classList.remove("steps-shadow-left");
        el.classList.remove("steps-shadow-right");

        if(shadowLeft && shadowRight){
            el.classList.add("steps-shadow");
        }
        else if(shadowLeft){
            el.classList.add("steps-shadow-left");
        }
        else if(shadowRight){
            el.classList.add("steps-shadow-right");
        }
    }
}


const steps = (() => {
    const init = () => {
        [... document.querySelectorAll(".steps")].map(steps => new Steps(steps));
    };

    return { init };
})();

export default steps;