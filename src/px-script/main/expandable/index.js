const _expandables = _expandables || [];

class Accordion {
    constructor (element) {
        this.elem = element;
        this.expandables = element.querySelectorAll(".expandable");
        this.openExp = [...this.expandables].find(exp => exp.isOpen);

        if (!this.expandables.length) {
            console.warn("accordion: No expandable found");
        }

        this.expandables = [...this.expandables].map(expandable => {
            const expObj = new Expandable(expandable);

            this._initializeHeader(expObj);
            _expandables.push(expObj);

            return expObj;
        });
    }

    _open (expParam) {
        if (this.openExp) {
            this.openExp._close();

            if (this.openExp === expParam) {
                this.openExp = null;

                return;
            }
        }

        expParam._open();
        this.openExp = expParam;
    }

    _initializeHeader (expParam) {
        expParam.header.addEventListener("click", () => {
            if (this._containsExpanding()) {
                return;
            }

            this._open(expParam);
        });
    }

    _containsExpanding () {
        return this.expandables.some(exp => exp.isExpanding);
    }
}

class Expandable {
    constructor (element) {
        this.id = element.id;
        this.elem = element;
        this.header = this.elem.querySelector(".expandable-header");
        this.body = this.elem.querySelector(".expandable-body");

        this.isOpen = this.elem.classList.contains("expandable-open");
        this.isExpanding = this.body.classList.contains("expanding");
        this.bodyHeight = this.body.clientHeight;

        if (!this.header) {
            console.warn("expandable: No expandable-header found");

            return null;
        } else if (!this.body) {
            console.warn("expandable: No expandable-body found");

            return null;
        }
    }

    _initializeHeader () {
        this.header.addEventListener("click", () => {
            this.isOpen ? this._close() : this._open();
        });
    }

    _open () {
        // If the expandable is expanding then return to avoid messing up the animation [AW]
        if (this.isExpanding) {
            return;
        }

        this.isOpen = true;
        this.isExpanding = true;
        this.elem.classList.add("expandable-open");
        this.bodyHeight = this.body.clientHeight;
        this.body.classList.add("expanding");

        /*
            Calling clientHeight forces a reflow making it so we get the correct element height.
            https://developers.google.com/speed/docs/insights/browser-reflow [AW]
        */
        this.body.clientHeight;

        this.body.style.height = `${this.bodyHeight}px`;

        setTimeout(() => {
            this.isExpanding = false;
            this.body.style.height = "";
            this.body.classList.remove("expanding");
        }, 300);
    }

    _close () {
        // If the expandable is expanding then return to avoid messing up the animation [AW]
        if (this.isExpanding) {
            return;
        }

        this.isOpen = false;
        this.isExpanding = true;
        this.body.style.height = `${this.body.clientHeight}px`;

        this.body.clientHeight; // Trigger reflow again
        this.body.classList.add("expanding");

        this.body.style.height = "";

        setTimeout(() => {
            this.isExpanding = false;
            this.body.classList.remove("expanding");
            this.elem.classList.remove("expandable-open");
        }, 300);
    }
}

const open = id => {
    let expandable = null;

    _expandables.forEach(e => e.id === id ? expandable = e : null);

    try {
        if (expandable.isOpen) {
            console.warn(`expandable.open: Expandable with id "${id}" is open`);

            return false;
        }

        expandable._open();
    } catch (e) {
        console.warn(`expandable.open: No expandable with id "${id}" found`);

        return false;
    }

    return expandable;
};

const close = id => {
    let expandable = null;

    _expandables.forEach(e => e.id === id ? expandable = e : null);

    try {
        if (!expandable.isOpen) {
            console.warn(`expandable.close: Expandable with id "${id}" is not open`);

            return false;
        }

        expandable._close();
    } catch (e) {
        console.warn(`expandable.open: No expandable with id "${id}" found`);

        return false;
    }

    return expandable;
};

const init = id => {
    if (id) {
        const element = document.getElementById(id);

        if (!element) {
            console.warn(`No accordion or expandable with id ${id} found`);

            return null;
        }

        if (element.closest(".accordion")) {
            return new Accordion(element);
        }

        const expObj = new Expandable(element);

        expObj._initializeHeader();
        _expandables.push(expObj);

        return expObj;
    } else {
        const accordions = document.querySelectorAll(".accordion");
        const expandables = [...document.querySelectorAll(".expandable")].filter(exp => !exp.closest(".accordion"));
        const returnVal = [];

        if (!accordions.length && !expandables.length) {
            console.warn("No accordions or expandables found");

            return null;
        }

        accordions.length ? [...accordions].forEach(acc => returnVal.push(new Accordion(acc))) : null;
        expandables.length ? [...expandables].forEach(exp => {
            const expObj = new Expandable(exp);

            expObj._initializeHeader();

            returnVal.push(expObj);
            _expandables.push(expObj);
        })
            : null;

        return returnVal;
    }
};

export default {
    init,
    open,
    close
};
