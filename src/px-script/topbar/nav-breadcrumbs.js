export default class NavBreadcrumbs {
    constructor (container) {
        this.container = container;
        this.rootBreadcrumb = new _RootBreadCrumb(this.container.firstElementChild);
    }

    add (container) {
        const breadcrumb = new _BreadCrumb();
        breadcrumb.create(container.link.innerText);

        const breadcrumbClick = () => {
            this.removeBelow(breadcrumb.element);
            container.setActive();
        };

        breadcrumb.addClick(breadcrumbClick);

        this.container.appendChild(breadcrumb.element);
    }

    removeLast () {
        this.container.lastElementChild.remove();
    }

    // TODO: Rename this [EH]
    removeBelow (element) {
        while (element.nextElementSibling) {
            element.nextElementSibling.remove();
        }
    }

    reset () {
        this.removeBelow(this.rootBreadcrumb.element);
    }
}

// PRIVATE CLASSES

class _RootBreadCrumb {
    constructor (element) {
        if (element) {
            this.element = element;
            this.link = element.firstElementChild;
        }
    }

    addClick (fn) {
        this.link.addEventListener("click", e => {
            e.preventDefault();
            fn();
        });
    }
}

class _BreadCrumb extends _RootBreadCrumb {
    constructor () {
        super();
    }

    create (text) {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.href = "#";
        link.innerText = text;
        li.appendChild(link);

        this.link = link;
        this.element = li;
    }
}
