module.exports = [
    {
        title: "Get started",
        icon: {
            name: "wb_incandescent",
            rotated: true
        },
        path: "/get-started",
        redirect: "/get-started/introduction",
        appFolder: "GettingStarted",
        routes: [
            {
                title: "Introduction",
                path: "/get-started/introduction",
                componentPath: "getting-started/Introduction"
            },
            {
                title: "For developers",
                path: "/get-started/for-developers",
                componentPath: "getting-started/ForDevelopers"
            },
            {
                title: "For designers",
                path: "/get-started/for-designers",
                componentPath: "getting-started/ForDesigners"
            }
        ]
    }
];
