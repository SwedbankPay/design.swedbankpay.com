export const getExternalResources = () => {
    const version = process.env.version;
    const isDev = version === "LOCAL_DEV";

    // const isProd = version ===
    console.log(
        "😎env",
        process.env,
        process.env.version,
        process.env.isRelease,
        process.env.infoVersion,
        process.env.isProd,
        temporaryIsProdChecker(version)
    );
};

const temporaryIsProdChecker = version => {
    const startByStagePR =
    version.startsWith("develop") ||
    version.startsWith("feature") ||
    version.startsWith("release");

    if (startByStagePR) {
        return false;
    }

    const seemsProdSemver = (version.split(".").length =
    3 && version.split(".").every(item => typeof Number(item) === "number"));

    return seemsProdSemver;
};
