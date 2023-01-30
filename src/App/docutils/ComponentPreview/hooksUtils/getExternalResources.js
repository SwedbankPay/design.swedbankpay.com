
import packageJson from "~/package";

export const getExternalResources = () => {
    const version = process.env.version;
    const isDev = version === "LOCAL_DEV";
    const isSemverProd = temporaryIsProdChecker();
    let resourceVersion;

    if (isSemverProd) {
        resourceVersion = version;

        return [isSemverProd, resourceVersion];
    } else {
        // TODO: replace by actual files from codebase if doable
        // .less is picked upbuilt-in by sandpack
        // issue is to import local files to iframe
        // at first no prob since can develop with static, and in prod the corresponding npm package will be deployed and used by iframe
        resourceVersion = packageJson.version;

        return [isSemverProd, resourceVersion];
    }
};

const temporaryIsProdChecker = version => {
    if (!version || typeof(version) !== "string") { return false; }

    const startByStagePR =
    version.startsWith("develop") ||
    version.startsWith("feature") ||
    version.startsWith("release");

    if (startByStagePR) {
        return false;
    }

    const seemsProdSemver = (version.split(".").length === 3 && version.split(".").every(item => typeof Number(item) === "number"));

    return seemsProdSemver;
};
