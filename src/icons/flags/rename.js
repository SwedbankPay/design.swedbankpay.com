
const {readdirSync, rename} = require('fs');

const { resolve } = require('path');

const imageDirPath = resolve(__dirname, "./1x1");

const files = readdirSync(imageDirPath);

files.forEach(file => rename(
    imageDirPath + `/${file}`,
    imageDirPath + `/${file.split(".")[0]}-squared.svg`,
    err => console.log(err)
));
