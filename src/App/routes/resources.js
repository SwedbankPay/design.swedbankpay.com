module.exports = [
    /**
     * Resources
     */
    {
        title: "Resources",
        path: "/resources",
        redirect: "/resources/introduction",
        appFolder: "Resources",
        routes: [
            {
                title: "Introduction",
                path: "/resources/introduction",
                componentPath: "Introduction"
            },
            {
                title: "Images",
                path: "/resources/images",
                componentPath: "resources/images"
            },
            {
                title: "Logotype",
                path: "/resources/logotype",
                componentPath: "resources/logotype"
            },
            {
                title: "Presentations",
                path: "/resources/presentations",
                componentPath: "resources/presentations"
            },
            {
                title: "Typography",
                path: "/resources/typography",
                componentPath: "resources/typography"
            }
        ]
    }
];
