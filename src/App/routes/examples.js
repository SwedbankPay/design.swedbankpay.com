module.exports = [
    /**
     * Getting Started
     */
    {
        title: "Getting Started",
        path: "/examples/getting-started",
        redirect: "/examples/getting-started/introduction",
        routes: [
            {
                title: "Introduction",
                path: "/examples/getting-started/introduction",
                componentPath: "getting-started/Introduction"
            }
        ]
    },

    /**
     * Web pages
     */
    {
        title: "Web pages",
        path: "/examples/web",
        redirect: "/examples/web/login",
        routes: [
            {
                title: "Login",
                path: "/examples/web/login",
                componentPath: "web/login"
            },
            {
                title: "Settings",
                path: "/examples/web/settings",
                componentPath: "web/settings"
            },
            {
                title: "FAQ",
                path: "/examples/web/faq",
                componentPath: "web/faq"
            }
        ]
    },

    /**
     * Template usage
     */
    {
        title: "Template usage",
        path: "/examples/templates",
        redirect: "/examples/templates/presentations",
        routes: [
            {
                title: "Presentations",
                path: "/examples/templates/presentations",
                componentPath: "templates/presentations"
            },
            {
                title: "Posters",
                path: "/examples/templates/posters",
                componentPath: "templates/posters"
            }
        ]
    }
];
