if (!process.env.basename) {
    console.log("basename not set!");
    process.argv.forEach(arg => {
        arg.match(/^basename=/) ? process.env.basename = arg.split("=")[1] : null;
    });
} else {
    console.log("basename already set!");
}

console.log(process.env.basename);
