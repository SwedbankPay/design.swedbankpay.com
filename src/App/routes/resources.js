module.exports = [
    /**
     * Getting Started
     */
    {
        title: "Getting Started",
        path: "/res/getting-started",
        redirect: "/res/getting-started/introduction",
        routes: [
            {
                title: "Introduction",
                path: "/res/getting-started/introduction",
                componentPath: "getting-started/Introduction"
            }
        ]
    },

    /**
     * Resources
     */
    {
        title: "Resources",
        path: "/res/resources",
        redirect: "/res/resources/logotype",
        routes: [
            {
                title: "Logotype",
                path: "/res/resources/logotype",
                componentPath: "resources/logotype"
            },
            {
                title: "Presentations",
                path: "/res/resources/presentations",
                componentPath: "resources/presentations"
            },
            {
                title: "Typography",
                path: "/res/resources/typography",
                componentPath: "resources/typography"
            }
        ]
    }
];
