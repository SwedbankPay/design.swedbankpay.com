import { useState, useEffect } from "react";

export const useJsSandboxInitCode = (outerElementCssClasses, removeOuterTag) => {
    const [jsInitCode, setJsInitCode] = useState("");

    useEffect(() => {
        const needBodyClassesFromOuterTagRemoved = removeOuterTag && outerElementCssClasses.length;
        let bodyClassesFnCalls = "";

        const createBodyClasses = cssClass => {
            if (!needBodyClassesFromOuterTagRemoved) {
                return "";
            }

            return `
applyOuterElementToRemoveClassesToBody('${cssClass}');`;
        };

        outerElementCssClasses.map(cssClass => bodyClassesFnCalls += createBodyClasses(cssClass));

        setJsInitCode(
            `import "./styles.css";
import dg from "@swedbankpay/design-guide";

// needed to set the classes from the eventual removed outerTag to the iframe body
const body = document.querySelector('body');
body.classList = [];
function applyOuterElementToRemoveClassesToBody (cssClass) {
  body.classList.add(cssClass);
}
${bodyClassesFnCalls}

dg.script.initAll();
/* but if can adapt for each examples then the best would be to use the recommended way, i.e. importing only the specific element. But for this first iteration let's go wide with the whole bundle, as before 😬
EXAMPLE:
import { accordion } from "@swedbankpay/design-guide";
accordion.init();
*/`);
    }, [outerElementCssClasses, removeOuterTag]);

    return jsInitCode;
};
