import NavChildContainer from "./nav-child-container";
import NavBreadcrumbs from "./nav-breadcrumbs";

export default class NavHierarchy {
    constructor (nav) {
        this.childContainers = [];

        const breadcrumbContainer = nav.querySelector("ul[data-topbar-breadcrumbs='true']");
        if (breadcrumbContainer) {
            this.breadcrumbs = new NavBreadcrumbs(breadcrumbContainer);
        }

        nav.querySelectorAll("li[data-has-children='true']").forEach(li => {
            const container = new NavChildContainer(li);
            this.childContainers.push(container);
        });

        const rootBreadcrumbClick = () => {
            this.breadcrumbs.reset();
            this.childContainers.forEach(container => {
                container.reset();
            });
        };

        if (this.breadcrumbs) {
            this.breadcrumbs.rootBreadcrumb.addClick(rootBreadcrumbClick);
        }

        this.childContainers.forEach(container => {
            const containerClick = () => {
                container.setActive();

                if (this.breadcrumbs) {
                    this.breadcrumbs.add(container);
                }
            };

            const backClick = () => {
                container.goBack();

                if (this.breadcrumbs) {
                    this.breadcrumbs.removeLast();
                }
            };

            container.addClick(containerClick);
            container.backBtn.addClick(backClick);
        });
    }
}
