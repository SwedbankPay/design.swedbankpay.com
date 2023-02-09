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
                path: "introduction",
                componentPath: "get-started/Introduction"
            },
            {
                title: "For developers",
                path: "for-developers",
                componentPath: "get-started/ForDevelopers"
            },
            {
                title: "For designers",
                path: "for-designers",
                componentPath: "get-started/ForDesigners"
            }
        ]
    }
];
