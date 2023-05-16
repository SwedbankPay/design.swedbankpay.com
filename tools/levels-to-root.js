module.exports = (basename) => {
	if (basename === "/") {
		return basename;
	}

	// Removes everything except "/", removes first occurence of "/" and replaces remaining "/" with "../"
	return basename
		.replace(/[a-zA-Z0-9 -.:-@[-`{-~]/gi, "")
		.replace("/", "")
		.replace(/\//g, "../");
};
