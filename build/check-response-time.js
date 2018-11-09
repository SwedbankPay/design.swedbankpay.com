console.log("Environment check:: ", process.env.release);

if (!process.env.basename) {
    console.log("basename not set!");
    process.argv.forEach(arg => {
        arg.match(/^basename=/) ? process.env.basename = arg.split("=")[1] : null;
    });
}
