const fetch = require("node-fetch");

const BASEURL = `https://design.${process.env.brand}.com/${process.env.basename}`;
const STATES = {
    SUCCESS: {
        COLOR: "#2da944",
        ICON: ":white_check_mark:"
    },
    WARNING: {
        COLOR: "#ff9f00",
        ICON: ":exclamation:"
    },
    ERROR: {
        COLOR: "#cd2e00",
        ICON: ":x:"
    }
};
const MS_THRESHOLDS = {
    ERROR: 500,
    WARNING: 300
};
const URL_LIST = [
    {
        name: "dg",
        path: "/scripts/dg.js"
    },
    {
        name: "dg-dashboard",
        path: "/scripts/dg-dashboard.js"
    },
    {
        name: "swedbankpay.css",
        path: "/styles/swedbankpay.css"
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
        text: `Response times for \`${process.env.basename}\` (\`<https://github.com/SwedbankPay/design.swedbankpay.com/commit/${process.env.GitVersion_ShortSha}|${process.env.GitVersion_ShortSha}>\`):`,
        attachments: []
    };
    let highMsWarning = false;

    await asyncForEach(URL_LIST, async url => {
        const { SUCCESS, WARNING, ERROR } = STATES;

        let responseTime = 9001;
        let timesChecked = 0;
        let responseColor = "";
        let responseIcon = "";

        while (responseTime > MS_THRESHOLDS.ERROR && timesChecked < 5) {
            timesChecked++;
            responseTime = await getResponseTime(BASEURL + url.path);
        }

        if (responseTime > MS_THRESHOLDS.ERROR) {
            responseColor = ERROR.COLOR;
            responseIcon = ERROR.ICON;
            highMsWarning = true;
        } else if (responseTime > MS_THRESHOLDS.WARNING) {
            responseColor = WARNING.COLOR;
            responseIcon = WARNING.ICON;
        } else {
            responseColor = SUCCESS.COLOR;
            responseIcon = SUCCESS.ICON;
        }

        slackMessageData.attachments.push({
            text: `${responseIcon} \`${url.name}\`: *${responseTime}ms*`,
            color: responseColor
        });
    });

    if (highMsWarning) {
        slackMessageData.attachments.push({
            text: "One or more high response times! :fire:",
            color: STATES.ERROR
        });
    }

    sendSlackMessage(slackMessageData);
};

let intervalCount = 0;
const interval = setInterval(() => {
    intervalCount++;

    if (intervalCount >= 120) {
        clearInterval(interval);
        sendSlackMessage({
            text: `Response time check for \`${process.env.basename}\` (\`<https://github.com/SwedbankPay/design.swedbankpay.com/commit/${process.env.GitVersion_ShortSha}|${process.env.GitVersion_ShortSha}>\`) timed out.`
        });
        console.log("Response time check timed out.");
    }

    fetch(BASEURL)
        .then(res => res.text())
        .then(res => {
            if (res.includes(process.env.GitVersion_Sha)) {
                console.log(`Commit "${process.env.GitVersion_ShortSha}" is deployed!`);
                clearInterval(interval);
                checkResponseTime();
            }
        });
}, 10000);
