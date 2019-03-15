import { handleScrollbar } from "../utils";

const SELECTORS = {
    COMPONENT: ".topbar",
    CLOSEBTN: "[data-topbar-close]",
    OPENBTN: "[data-topbar-open]",
    CLOSEICON: ".topbar-close"
};

const topbarmenu = element => {
    const el = element;
    const id = el.id;
    const closeIcon = el.querySelector(SELECTORS.CLOSEICON);
    let isOpen = el.classList.contains(".topbar-nav-open");

    closeIcon ?
        closeIcon.addEventListener("click", e => {
            handleScrollbar();
            e.preventDefault();
            close();
        }) : null;

    if (isOpen) {
        handleScrollbar();
        el.classList.add("d-flex");
        document.body.classList.add("overlay-open");
    }

    const open = () => {
        handleScrollbar();
        isOpen = true;
        el.classList.add("d-flex");
        document.body.classList.add("overlay-open");
        setTimeout(() => {
            el.classList.add("topbar-nav-open");
        }, 10);
    };

    const close = () => {
        isOpen = false;
        el.classList.remove("topbar-nav-open");
        document.body.classList.remove("overlay-open");
        setTimeout(() => {
            el.classList.remove("d-flex");
        }, 300);
    };

    return {
        el,
        id,
        open,
        close
    };
};

export default topbarmenu;
