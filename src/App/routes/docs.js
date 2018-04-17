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
                component: require("../Documentation/getting-started/Introduction/index.js")
            },
            {
                title: "Contributing",
                path: "/docs/getting-started/contributing",
                component: require("../Documentation/getting-started/Contributing/index.js")
            },
            {
                title: "Browser Support",
                path: "/docs/getting-started/browser-support",
                component: require("../Documentation/getting-started/BrowserSupport/index.js")
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
                component: require("../Documentation/core/Color/index.js")
            },
            {
                title: "Lists",
                path: "/docs/core/lists",
                component: require("../Documentation/core/Lists/index.js")
            },
            {
                title: "Tables",
                path: "/docs/core/tables",
                component: require("../Documentation/core/Tables/index.js")
            },
            {
                title: "Typography",
                path: "/docs/core/typography",
                component: require("../Documentation/core/Typography/index.js")
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
                component: require("../Documentation/components/Alerts/index.js")
            },
            {
                title: "Breadcrumb",
                path: "/docs/components/breadcrumb",
                component: require("../Documentation/components/Breadcrumb/index.js")
            },
            {
                title: "Buttons",
                path: "/docs/components/buttons",
                component: require("../Documentation/components/Buttons/index.js")
            },
            // {
            //     title: "Cards",
            //     path: "/docs/components/cards",
            //     component: require("../Documentation/components/Cards/index.js")
            // },
            {
                title: "Forms",
                path: "/docs/components/forms",
                component: require("../Documentation/components/Forms/index.js")
            },
            {
                title: "Input Group",
                path: "/docs/components/input-group",
                component: require("../Documentation/components/InputGroup/index.js")
            },
            {
                title: "Loaders",
                path: "/docs/components/loaders",
                component: require("../Documentation/components/Loaders/index.js")
            },
            {
                title: "Modal",
                path: "/docs/components/modal",
                component: require("../Documentation/components/Modal/index.js")
            },
            {
                title: "Pagination",
                path: "/docs/components/pagination",
                component: require("../Documentation/components/Pagination/index.js")
            },
            {
                title: "Panel",
                path: "/docs/components/panel",
                component: require("../Documentation/components/Panel/index.js")
            },
            {
                title: "Status",
                path: "/docs/components/status",
                component: require("../Documentation/components/Status/index.js")
            },
            {
                title: "Tabs",
                path: "/docs/components/tabs",
                component: require("../Documentation/components/Tabs/index.js")
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
