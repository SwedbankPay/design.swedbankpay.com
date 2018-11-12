const fetch = require("node-fetch");

// process.env.basename = "v/0.13.1";

console.log("double checking: ", process.env.basename);
console.log("checking secure var:: ", process.env.test_var);

const BASEURL = `https://design.payex.com/${process.env.basename}`;

const urlsToCheck = [
    {
        name: "px-script",
        path: "/scripts/px-script.js",
        responseTime: 0
    },
    {
        name: "px.css",
        path: "/styles/px.css",
        responseTime: 0
    }
];

const reportResponseTime = url => {
    console.log(`Responsetime for ${url.name}: ${url.responseTime}ms`);
};

const getResponseTime = url => {
    const startTime = new Date().getTime();

    fetch(BASEURL + url.path)
        .then(() => {
            url.responseTime = new Date().getTime() - startTime;
            reportResponseTime(url);
        });
};

const checkResponseTime = async () => {
    await urlsToCheck.forEach(url => getResponseTime(url));
};

checkResponseTime();
