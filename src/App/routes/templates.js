module.exports = [
    /**
     * Getting Started
     */
    {
        title: "Getting Started",
        path: "/tmpl/getting-started",
        redirect: "/tmpl/getting-started/introduction",
        routes: [
            {
                title: "Introduction",
                path: "/tmpl/getting-started/introduction",
                componentPath: "getting-started/Introduction"
            }
        ]
    },

    /**
     * Resources
     */
    {
        title: "Templates",
        path: "/tmpl/templates",
        redirect: "/tmpl/templates/presentations",
        routes: [
            {
                title: "Presentations",
                path: "/tmpl/templates/presentations",
                componentPath: "templates/presentations"
            }
        ]
    }
];
