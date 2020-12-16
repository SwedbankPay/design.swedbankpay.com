module.exports = [
    {
        title: "Getting Started",
        icon: {
            name: "wb_incandescent",
            rotated: true
        },
        path: "/getting-started",
        redirect: "/getting-started/introduction",
        appFolder: "GettingStarted",
        routes: [
            {
                title: "Introduction",
                path: "/getting-started/introduction",
                componentPath: "getting-started/Introduction"
            },
            {
                title: "For developers",
                path: "/getting-started/for-developers",
                componentPath: "getting-started/ForDevelopers"
            },
            {
                title: "For designers",
                path: "/getting-started/for-designers",
                componentPath: "getting-started/ForDesigners"
            }
        ]
    }
];
