module.exports = [
    /**
     * Getting Started
     */
    {
        title: "Getting Started",
        path: "/Resources/getting-started",
        redirect: "/Resources/getting-started/introduction",
        routes: [
            {
                title: "Introduction",
                path: "/Resources/getting-started/introduction",
                componentPath: "getting-started/Introduction"
            }
        ]
    },

    /**
     * Resources
     */
    {
        title: "Resources",
        path: "/Resources/resources",
        redirect: "/Resources/getting-started/introduction",
        routes: [
            {
                title: "Logos",
                path: "/Resources/resources/logos",
                componentPath: "resources/logos"
            }
        ]
    }
];
