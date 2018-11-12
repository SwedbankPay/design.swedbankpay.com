const fetch = require("node-fetch");

const BASEURL = `https://design.payex.com/${process.env.basename}`;
const STATES = {
    SUCCESS: "#2da944",
    WARNING: "#ff9f00",
    ERROR: "#cd2e00"
};

const urlsToCheck = [
    {
        name: "px-script",
        path: "/scripts/px-script.js"
    },
    {
        name: "px.css",
        path: "/styles/px.css"
    }
];

const asyncForEach = async (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
    }
};

const sendSlackMessage = messageData => {
    fetch(process.env.slack_designguide_webhook, {
        method: "POST",
        body: JSON.stringify(messageData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(() => {
            console.log("Reported response time to slack.");
        })
        .catch(console.error);
};

const getResponseTime = async url => {
    const startTime = new Date().getTime();
    const endTime = await fetch(url)
        .then(() => new Date().getTime())
        .catch(error => {
            console.error(`Error fetching ${url}: ${error}`);
        });

    return endTime - startTime;
};

const checkResponseTime = async () => {
    const slackMessageData = {
        text: `Response times for *${process.env.basename}*:`,
        attachments: []
    };
    let highMsWarning = false;

    await asyncForEach(urlsToCheck, async url => {
        const responseTime = await getResponseTime(BASEURL + url.path);

        const responseTimeData = {
            text: `${url.name}: *${responseTime}ms*`,
            color: STATES.SUCCESS
        };

        if (responseTime > 500) {
            responseTimeData.color = STATES.ERROR;
            highMsWarning = true;
        } else if (responseTime > 300) {
            responseTimeData.color = STATES.WARNING;
        }

        slackMessageData.attachments.push(responseTimeData);
    });

    sendSlackMessage(slackMessageData);

    if (highMsWarning) {
        sendSlackMessage({ text: "@channel Investigate response times!" });
    }
};

checkResponseTime();
