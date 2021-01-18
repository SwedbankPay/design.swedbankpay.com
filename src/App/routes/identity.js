module.exports = [
    /**
     * Identity
     */
    {
        title: "Identity",
        icon: {
            name: "palette"
        },
        path: "/identity",
        redirect: "/identity/identity",
        appFolder: "Identity",
        routes: [
            {
                title: "Overview",
                path: "/identity/identity",
                componentPath: "identity/Identity",
                statusBadges: ["new"]
            },
            {
                title: "Accessibility",
                path: "/identity/accessibility",
                componentPath: "identity/Accessibility",
                statusBadges: ["new"]
            },
            {
                title: "Color",
                path: "/identity/color",
                componentPath: "identity/Color",
                statusBadges: ["updated"]
            },
            {
                title: "Copywriting",
                path: "/identity/copywriting",
                componentPath: "identity/Copywriting",
                statusBadges: ["new"]
            },
            {
                title: "Grid",
                path: "/identity/grid",
                componentPath: "identity/Grid",
                statusBadges: ["new"]
            },
            {
                title: "Iconography",
                path: "/identity/iconography",
                componentPath: "identity/Iconography",
                statusBadges: ["updated"]
            },
            {
                title: "Imagery",
                path: "/identity/imagery",
                componentPath: "identity/Imagery",
                statusBadges: ["new"]
            },
            {
                title: "Logotype",
                path: "/identity/logotype",
                componentPath: "identity/Logotype",
                statusBadges: ["updated"]
            },
            {
                title: "Page layout",
                path: "/identity/page-layout",
                componentPath: "identity/Page-layout"
            },
            {
                title: "Spacing",
                path: "/identity/spacing",
                componentPath: "identity/Spacing",
                statusBadges: ["new"]
            },
            {
                title: "Typography",
                path: "/identity/typography",
                componentPath: "identity/Typography",
                statusBadges: ["updated"]
            }
        ]
    }
];
