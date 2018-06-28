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
                component: require("../Documentation/getting-started/Introduction")
            },
            {
                title: "Contributing",
                path: "/docs/getting-started/contributing",
                component: require("../Documentation/getting-started/Contributing")
            },
            {
                title: "Browser Support",
                path: "/docs/getting-started/browser-support",
                component: require("../Documentation/getting-started/BrowserSupport")
            }
        ]
    },

    /**
     * Core
     */
    {
        title: "Core",
        path: "/docs/core",
        redirect: "/docs/core/breakpoints",
        routes: [
            {
                title: "Breakpoints",
                path: "/docs/core/breakpoints",
                component: require("../Documentation/core/Breakpoints")
            },
            {
                title: "Color",
                path: "/docs/core/color",
                component: require("../Documentation/core/Color")
            },
            {
                title: "Grid",
                path: "/docs/core/grid",
                component: require("../Documentation/core/Grid")
            },
            {
                title: "Icons",
                path: "/docs/core/icons",
                component: require("../Documentation/core/Icons")
            },
            {
                title: "Lists",
                path: "/docs/core/lists",
                component: require("../Documentation/core/Lists")
            },
            {
                title: "Tables",
                path: "/docs/core/tables",
                component: require("../Documentation/core/Tables")
            },
            {
                title: "Typography",
                path: "/docs/core/typography",
                component: require("../Documentation/core/Typography")
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
                component: require("../Documentation/components/Alerts")
            },
            {
                title: "Badge",
                path: "/docs/components/badge",
                component: require("../Documentation/components/Badge")
            },
            {
                title: "Breadcrumb",
                path: "/docs/components/breadcrumb",
                component: require("../Documentation/components/Breadcrumb")
            },
            {
                title: "Buttons",
                path: "/docs/components/buttons",
                component: require("../Documentation/components/Buttons")
            },
            {
                title: "Card (experimental)",
                path: "/docs/components/card",
                component: require("../Documentation/components/Card")
            },
            {
                title: "Datepickers",
                path: "/docs/components/datepickers",
                component: require("../Documentation/components/Datepickers")
            },
            {
                title: "Forms",
                path: "/docs/components/forms",
                component: require("../Documentation/components/Forms")
            },
            {
                title: "Input Group",
                path: "/docs/components/input-group",
                component: require("../Documentation/components/InputGroup")
            },
            {
                title: "Loaders",
                path: "/docs/components/loaders",
                component: require("../Documentation/components/Loaders")
            },
            {
                title: "Modal",
                path: "/docs/components/modal",
                component: require("../Documentation/components/Modal")
            },
            {
                title: "Pagination",
                path: "/docs/components/pagination",
                component: require("../Documentation/components/Pagination")
            },
            {
                title: "Panel",
                path: "/docs/components/panel",
                component: require("../Documentation/components/Panel")
            },
            {
                title: "Status",
                path: "/docs/components/status",
                component: require("../Documentation/components/Status")
            },
            {
                title: "Tabs",
                path: "/docs/components/tabs",
                component: require("../Documentation/components/Tabs")
            },
            {
                title: "Topbar",
                path: "/docs/components/topbar",
                component: require("../Documentation/components/Topbar")
            },
            {
                title: "Well (experimental)",
                path: "/docs/components/well",
                component: require("../Documentation/components/Well")
            }
        ]
    },

    /**
     * Utilities
     */
    {
        title: "Utilities",
        path: "/docs/utilities",
        redirect: "/docs/utilities/display",
        routes: [
            {
                title: "Display",
                path: "/docs/utilities/display",
                component: require("../Documentation/utilities/Display")
            },
            {
                title: "Visibility",
                path: "/docs/utilities/visibility",
                component: require("../Documentation/utilities/Visibility")
            }
        ]
    }
];
