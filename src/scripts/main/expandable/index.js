const _expandables = [];
const _expandableGroups = [];

class ExpandableGroup {
    constructor (element) {
        this.elem = element;
        this.expandables = element.querySelectorAll(".expandable");

        if (!this.expandables.length) {
            console.warn("expandable-group: No expandable children found");
        }

        this.expandables = [...this.expandables].map(expandable => {
            const expObj = new Expandable(expandable);

            this._initializeHeader(expObj);
            _expandables.push(expObj);

            return expObj;
        });

        this.openExp = [...this.expandables].find(exp => exp.isOpen);
    }

    _toggle (expParam) {
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

    _open (expParam) {
        if (this.openExp) {
            this.openExp._close();
        }

        expParam._open();
        this.openExp = expParam;
    }

    _close () {
        this.openExp._close();
        this.openExp = null;
    }

    _initializeHeader (expParam) {
        if (!expParam.header) {
            console.warn("expandable-group: An expandable is missing a header");

            return null;
        }

        expParam._setAriaExpanded();

        expParam.header.addEventListener("click", () => {
            if (this._containsExpanding()) {
                console.warn("expandable-group: The expandable-group contains an expanding element");

                return null;
            }

            this._toggle(expParam);
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
        this.expGrpParent = this.elem.closest(".expandable-group");

        if (!this.body) {
            console.warn("expandable: No expandable-body found");

            return null;
        }

        this.isOpen = this.elem.classList.contains("expandable-open");
        this.isExpanding = this.body.classList.contains("expanding");
        this.bodyHeight = this.body.clientHeight;
    }

    _initializeHeader () {
        if (!this.header) {
            console.warn("expandable: No .expandable-header found");

            return null;
        }

        this._setAriaExpanded();

        this.header.addEventListener("click", () => {
            this.isOpen ? this._close() : this._open();
        });
    }

    _setAriaExpanded () {
        this.header.setAttribute("aria-expanded", this.isOpen);
    }

    _open () {
        // If the expandable is expanding then return to avoid messing up the animation [AW]
        if (this.isExpanding) {
            console.warn(`expandable: The given expandable is ${this.isOpen ? "expanding" : "collapsing"}`);

            return false;
        }

        this.isOpen = true;

        this._setAriaExpanded();

        this.isExpanding = true;
        this.elem.classList.add("show");
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
            console.warn(`expandable: The given expandable is ${this.isOpen ? "expanding" : "collapsing"}`);

            return false;
        }

        this.isOpen = false;

        this._setAriaExpanded();

        this.elem.classList.remove("expandable-open");
        this.isExpanding = true;
        this.body.style.height = `${this.body.clientHeight}px`;

        this.body.clientHeight; // Trigger reflow again
        this.body.classList.add("expanding");

        this.body.style.height = "";

        setTimeout(() => {
            this.isExpanding = false;
            this.body.classList.remove("expanding");
            this.elem.classList.remove("show");
        }, 300);
    }
}

const open = id => {
    let expandable = null;

    expandable = _expandables.find(e => e.id === id);

    if (!expandable) {
        console.warn(`expandable.open: expandable with id ${id} was not found`);

        return false;
    }

    if (expandable.isOpen) {
        console.warn(`expandable.open: expandable with id ${expandable.id} is open`);

        return false;
    }

    if (expandable.expGrpParent) {
        const expGrpObj = _expandableGroups.find(eg => eg.elem === expandable.expGrpParent);

        expGrpObj._open(expandable);

        return expandable;
    }

    expandable._open();

    return expandable;
};

const close = id => {
    let expandable = null;

    expandable = _expandables.find(e => e.id === id);

    if (!expandable) {
        console.warn(`expandable.close: expandable with id ${id} was not found`);

        return false;
    }

    if (!expandable.isOpen) {
        console.warn(`expandable.close: expandable with id ${expandable.id} is closed`);

        return false;
    }

    if (expandable.expGrpParent) {
        const expGrpObj = _expandableGroups.find(eg => eg.elem === expandable.expGrpParent);

        expGrpObj._close(expandable);

        return expandable;
    }

    expandable._close();

    return expandable;
};

const init = id => {
    if (id) {
        const element = document.getElementById(id);

        if (!element) {
            console.warn(`No expandable-group or expandable with id ${id} found`);

            return null;
        }

        if (element.closest(".expandable-group")) {
            const expGrpObj = new ExpandableGroup(element);

            _expandableGroups.push(expGrpObj);

            return expGrpObj;
        }

        const expObj = new Expandable(element);

        expObj._initializeHeader();
        _expandables.push(expObj);

        return expObj;
    } else {
        const expandableGroups = document.querySelectorAll(".expandable-group");
        const expandables = [...document.querySelectorAll(".expandable")].filter(exp => !exp.closest(".expandable-group"));
        const returnVal = [];

        if (!expandableGroups.length && !expandables.length) {
            console.warn("expandable.init: No expandable-group or expandables found");

            return null;
        }

        if (expandableGroups.length) {
            [...expandableGroups].forEach(expGrp => {
                const expGrpObj = new ExpandableGroup(expGrp);

                returnVal.push(expGrpObj);

                expGrpObj ? _expandableGroups.push(expGrpObj) : null;
            });
        }

        if (expandables.length) {
            [...expandables].forEach(exp => {
                const expObj = new Expandable(exp);

                expObj._initializeHeader();

                returnVal.push(expObj);

                expObj ? _expandables.push(expObj) : null;
            });
        }

        return returnVal;
    }
};

export default {
    init,
    open,
    close
};
