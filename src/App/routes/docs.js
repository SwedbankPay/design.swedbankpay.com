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
                title: "Contributing",
                path: "/docs/getting-started/contributing",
                component: require("../Documentation/GettingStarted/Contributing")
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
                title: "Lists",
                path: "/docs/core/lists",
                component: require("../Documentation/Core/Lists")
            },
            {
                title: "Tables",
                path: "/docs/core/tables",
                component: require("../Documentation/Core/Tables")
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
            // {
            //     title: "Cards",
            //     path: "/docs/components/cards",
            //     component: require("../Documentation/Components/Cards")
            // },
            {
                title: "Forms",
                path: "/docs/components/forms",
                component: require("../Documentation/Components/Forms")
            },
            {
                title: "Input Group",
                path: "/docs/components/input-group",
                component: require("../Documentation/Components/InputGroup")
            },
            {
                title: "Loaders",
                path: "/docs/components/loaders",
                component: require("../Documentation/Components/Loaders")
            },
            {
                title: "Modal",
                path: "/docs/components/modal",
                component: require("../Documentation/Components/Modal")
            },
            {
                title: "Pagination",
                path: "/docs/components/pagination",
                component: require("../Documentation/Components/Pagination")
            },
            {
                title: "Panel",
                path: "/docs/components/panel",
                component: require("../Documentation/Components/Panel")
            },
            {
                title: "Status",
                path: "/docs/components/status",
                component: require("../Documentation/Components/Status")
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
