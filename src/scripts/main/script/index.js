import * as dg from "../index";

const script = (() => {
    const initAll = () => {

        for (const key in dg) {
            if (typeof dg[key].init === "function") {
                dg[key].init();
            } else if (key !== "script" && key !== "toast" && key !== "utils") {
                console.warn(`Module ${key} does not have an init method.`);
            }
        }

        return dg;
    };

    return { initAll };
})();

export default script;
