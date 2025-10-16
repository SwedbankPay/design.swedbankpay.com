import chalk from "chalk";

const log = console.log;

log(
	chalk.yellow(`
-----------------------
-       Sweet!        -
-    You now have     -
-    Design Guide     -
-----------------------
`),
);

log(
	chalk.magenta(`
MMMMMMMMMMM      MMMMMMMMMMMM           _   _
I          I____I          I           (.)_(.)
 '----_____       ____----'         _ (   _   ) _
           | 0 0  I_               / I/'-----'I/ I
           |     I               __I ( (     ) ) I__
         _/     / I              )   /I I._.I /I   (
        /o)  (o/l I_              )_/ /|I   /|I I_(
        I=====//
`),
);

log(
	chalk.green(
		`Check out the documentation for more information. ${chalk.blue.underline.bold(
			"https://design.swedbankpay.com",
		)}`,
	),
);
