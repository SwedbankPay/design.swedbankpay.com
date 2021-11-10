module.exports = [
    {
        title: "Get started",
        icon: {
            name: "wb_incandescent",
            rotate: true
        },
        path: "/get-started",
        wideCard: true,
        redirect: "/get-started/introduction",
        appFolder: "GettingStarted",
        routes: [
            {
                title: "Introduction",
                path: "/get-started/introduction",
                componentPath: "getting-started/Introduction",
                statusBadges: ["updated"]
            },
            {
                title: "For developers",
                path: "/get-started/for-developers",
                componentPath: "getting-started/ForDevelopers",
                statusBadges: ["updated"]
            },
            {
                title: "For designers",
                path: "/get-started/for-designers",
                componentPath: "getting-started/ForDesigners"
            }
        ]
    }
];
