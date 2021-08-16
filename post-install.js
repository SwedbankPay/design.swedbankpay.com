const chalk = require("chalk");

const log = console.log;

log(chalk.yellow(`
-----------------------
-       Sweet!        -
-    You now have     -
-    Design Guide     -
-----------------------
`));

log(chalk.green(
    `Remember to copy our assets to your static folder! Recommended with a ${
        chalk.green.underline.bold("postinstall")
    } script!`
));

log(chalk.green(
    `Check out the documentation for more information. ${chalk.blue.underline.bold("https://design.swedbankpay.com")}`
));
