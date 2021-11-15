module.exports = [
    {
        title: "Get started",
        icon: {
            name: "wb_incandescent",
            rotate: true
        },
        entryCardText: "Get started by setting up the Design Guide!",
        path: "/get-started",
        wideCard: true,
        redirect: "/get-started/introduction",
        appFolder: "GetStarted",
        routes: [
            {
                title: "Introduction",
                path: "/get-started/introduction",
                componentPath: "get-started/Introduction",
                statusBadges: ["updated"]
            },
            {
                title: "For developers",
                path: "/get-started/for-developers",
                componentPath: "get-started/ForDevelopers",
                statusBadges: ["updated"]
            },
            {
                title: "For designers",
                path: "/get-started/for-designers",
                componentPath: "get-started/ForDesigners"
            }
        ]
    }
];
