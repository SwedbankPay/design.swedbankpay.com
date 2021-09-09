module.exports = [

    /**
     * Components
     */
    {
        title: "Components",
        icon: {
            name: "category"
        },
        entryCardText: "Find all currently available components here",
        path: "/components",
        redirect: "/components/components",
        appFolder: "ComponentsDocumentation",
        routes: [
            {
                title: "Overview",
                path: "/components/components",
                componentPath: "components/Components"
            },
            {
                title: "Accordion",
                path: "/components/accordion",
                componentPath: "components/Accordion",
                icon: "calendar_view_day",
                outlined: true,
                statusBadges: ["javascript"]
            },
            {
                title: "Action list",
                path: "/components/action-list",
                componentPath: "components/ActionList",
                icon: "list",
                statusBadges: ["javascript"]
            },
            {
                title: "Alerts",
                path: "/components/alerts",
                componentPath: "components/Alerts",
                icon: "error_outlined",
                statusBadges: ["javascript"]
            },
            {
                title: "Badges",
                path: "/components/badge",
                componentPath: "components/Badge",
                icon: "more",
                outlined: true
            },
            {
                title: "Breadcrumb",
                path: "/components/breadcrumb",
                componentPath: "components/Breadcrumb",
                icon: "last_page",
                outlined: true
            },
            {
                title: "Buttons",
                path: "/components/buttons",
                componentPath: "components/Buttons",
                icon: "touch_app",
                outlined: true
            },
            {
                title: "Cards",
                path: "/components/cards",
                componentPath: "components/Card",
                icon: "view_agenda",
                outlined: true,
                statusBadges: ["updated"]
            },
            {
                title: "Charts",
                path: "/components/charts",
                componentPath: "components/Charts",
                icon: "bar_chart",
                outlined: true,
                statusBadges: ["javascript"]
            },
            {
                title: "Checkbox",
                path: "/components/checkbox",
                componentPath: "components/Checkbox",
                icon: "check_box",
                outlined: true
            },
            {
                title: "Code tags",
                path: "/components/code-tags",
                componentPath: "components/CodeTags",
                icon: "code",
                outlined: true
            },
            {
                title: "Datepickers",
                path: "/components/datepickers",
                componentPath: "components/Datepickers",
                icon: "event",
                outlined: true,
                statusBadges: ["javascript"]
            },
            {
                title: "Dialog",
                path: "/components/dialog",
                componentPath: "components/Dialog",
                icon: "picture_in_picture",
                outlined: true,
                statusBadges: ["javascript"]
            },
            {
                title: "Expandable",
                path: "/components/expandable",
                componentPath: "components/Expandable",
                statusBadges: ["javascript"]
            },
            {
                title: "Forms",
                path: "/components/forms",
                componentPath: "components/Forms",
                icon: "text_snippet",
                outlined: true,
                statusBadges: ["javascript"]
            },
            /* {
                title: "Footer",
                path: "/components/footer",
                componentPath: "components/Footer",
                icon: "call_to_action",
                outlined: true
            }, */
            {
                title: "Input field",
                path: "/components/input-field",
                componentPath: "components/InputField",
                icon: "text_fields"
            },
            /* {
                title: "Lightbox",
                path: "/components/lightbox",
                componentPath: "components/Lightbox"
            }, */
            {
                title: "Links",
                path: "/components/links",
                componentPath: "components/Links",
                icon: "link",
                outlined: true
            },
            {
                title: "Lists",
                path: "/components/lists",
                componentPath: "components/Lists",
                icon: "sort",
                outlined: true
            },
            {
                title: "Loader",
                path: "/components/loader",
                componentPath: "components/Loader",
                icon: "loop",
                outlined: true
            },
            {
                title: "Media Object",
                path: "/components/media-object",
                componentPath: "components/MediaObject",
                icon: "account_circle",
                outlined: true
            },
            {
                title: "Navigation",
                path: "/components/nav",
                componentPath: "components/Nav",
                icon: "explore",
                outlined: true,
                statusBadges: ["javascript"]
            },
            {
                title: "Pagination",
                path: "/components/pagination",
                componentPath: "components/Pagination",
                icon: "power_input",
                outlined: true
            },
            {
                title: "Panel",
                path: "/components/panel",
                componentPath: "components/Panel",
                icon: "table_rows",
                outlined: true
            },
            {
                title: "Progress steps",
                path: "/components/progress-steps",
                componentPath: "components/ProgressSteps",
                icon: "hdr_strong"
            },
            {
                title: "Radio button",
                path: "/components/radio-button",
                componentPath: "components/RadioButton",
                icon: "radio_button_checked"
            },
            {
                title: "Rangeslider",
                path: "/components/rangeslider",
                componentPath: "components/Rangeslider",
                icon: "tune",
                outlined: true
            },
            {
                title: "Sheet",
                path: "/components/sheet",
                componentPath: "components/Sheet",
                icon: "vertical_split",
                outlined: true,
                statusBadges: ["javascript"]
            },
            {
                title: "Select",
                path: "/components/select",
                componentPath: "components/Select",
                icon: "arrow_drop_down_circle",
                outlined: true
            },
            {
                title: "Sidebar",
                path: "/components/sidebar",
                componentPath: "components/Sidebar",
                icon: "view_sidebar",
                outlined: true,
                statusBadges: "javascript"
            },
            {
                title: "Slab",
                path: "/components/slab",
                componentPath: "components/Slab",
                icon: "crop_landscape",
                outlined: true
            },
            {
                title: "Status",
                path: "/components/status",
                componentPath: "components/Status",
                icon: "check_circle",
                outlined: true
            },
            {
                title: "Tables",
                path: "/components/tables",
                componentPath: "components/Tables",
                icon: "view_list",
                outlined: true
            },
            {
                title: "Tabs",
                path: "/components/tabs",
                componentPath: "components/Tabs",
                icon: "folder",
                outlined: true,
                statusBadges: ["javascript"]
            },
            {
                title: "Toast",
                path: "/components/toast",
                componentPath: "components/Toast",
                icon: "picture_in_picture",
                outlined: true,
                statusBadges: ["javascript", "updated"]
            },
            {
                title: "Togglebox",
                path: "/components/togglebox",
                componentPath: "components/Togglebox",
                icon: "toggle_off",
                outlined: true
            },
            {
                title: "Tooltips",
                path: "/components/tooltips",
                componentPath: "components/Tooltips",
                icon: "filter_frames",
                outlined: true,
                statusBadges: ["javascript"]
            },
            {
                title: "Topbar",
                path: "/components/topbar",
                componentPath: "components/Topbar",
                icon: "call_to_action",
                outlined: true,
                statusBadges: "javascript"
            }
        ]
    }
];
