const initAll = px => {
    for (const key in px) {
        if (typeof px[key].init === "function") {
            px[key].init();
        } else {
            console.warn(`Module ${key} does not have an init function.`);
        }
    }
};

const script = { initAll };

export default script;
