export default [
    /**
     * Getting Started
     */
    {
        title: "Getting Started",
        path: "/docs/getting-started",
        redirect: "/docs/getting-started/introduction",
        routes: [
            {
                title: "Introduction",
                path: "/docs/getting-started/introduction",
                component: require("../Documentation/GettingStarted/Introduction")
            },
            {
                title: "Browser Support",
                path: "/docs/getting-started/browser-support",
                component: require("../Documentation/GettingStarted/BrowserSupport")
            }
        ]
    },

    /**
     * Core
     */
    {
        title: "Core",
        path: "/docs/core",
        redirect: "/docs/core/color",
        routes: [
            {
                title: "Color",
                path: "/docs/core/color",
                component: require("../Documentation/Core/Color")
            },
            {
                title: "Typography",
                path: "/docs/core/typography",
                component: require("../Documentation/Core/Typography")
            }
        ]
    },

    /**
     * Components
     */
    {
        title: "Components",
        path: "/docs/components",
        redirect: "/docs/components/alerts",
        routes: [
            {
                title: "Alerts",
                path: "/docs/components/alerts",
                component: require("../Documentation/Components/Alerts")
            },
            {
                title: "Breadcrumb",
                path: "/docs/components/breadcrumb",
                component: require("../Documentation/Components/Breadcrumb")
            },
            {
                title: "Buttons",
                path: "/docs/components/buttons",
                component: require("../Documentation/Components/Buttons")
            },
            {
                title: "Loaders",
                path: "/docs/components/loaders",
                component: require("../Documentation/Components/Loaders")
            }
        ]
    },

    /**
     * Utilities
     */
    {
        title: "Utilities",
        path: "/docs/utilities",
        redirect: "/docs/getting-started/introduction",
        routes: []
    }
];
