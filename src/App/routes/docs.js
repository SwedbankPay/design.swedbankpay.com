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
                title: "Favicons",
                path: "/docs/core/favicons",
                component: require("../Documentation/core/Favicons")
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
        redirect: "/docs/components/action-list",
        routes: [
            {
                title: "Action List (experimental)",
                path: "/docs/components/action-list",
                component: require("../Documentation/components/ActionList")
            },
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
                title: "Dialog",
                path: "/docs/components/dialog",
                component: require("../Documentation/components/Dialog")
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
                title: "Media Object",
                path: "/docs/components/media-object",
                component: require("../Documentation/components/MediaObject")
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
                title: "Progress Tracker",
                path: "/docs/components/progress-tracker",
                component: require("../Documentation/components/ProgressTracker")
            },
            {
                title: "Sheet",
                path: "/docs/components/sheet",
                component: require("../Documentation/components/Sheet")
            },
            {
                title: "Status",
                path: "/docs/components/status",
                component: require("../Documentation/components/Status")
            },
            {
                title: "Step Bar",
                path: "/docs/components/step-bar",
                component: require("../Documentation/components/StepBar")
            },
            {
                title: "Tabs",
                path: "/docs/components/tabs",
                component: require("../Documentation/components/Tabs")
            },
            {
                title: "Toast (experimental)",
                path: "/docs/components/toast",
                component: require("../Documentation/components/Toast")
            },
            {
                title: "Tooltips",
                path: "/docs/components/tooltips",
                component: require("../Documentation/components/Tooltips")
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
        redirect: "/docs/utilities/colors",
        routes: [
            {
                title: "Colors",
                path: "/docs/utilities/colors",
                component: require("../Documentation/utilities/Colors")
            },
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
