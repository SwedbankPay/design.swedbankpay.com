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
                title: "Identity",
                path: "/identity/identity",
                componentPath: "identity/Identity"
            },
            {
                title: "Accessibility",
                path: "/identity/accessibility",
                componentPath: "identity/Accessibility"
            },
            {
                title: "Imagery",
                path: "/identity/imagery",
                componentPath: "identity/Imagery"
            },
            {
                title: "Color",
                path: "/identity/color",
                componentPath: "identity/Color"
            },
            {
                title: "Spacing",
                path: "/identity/spacing",
                componentPath: "identity/Spacing"
            },
            {
                title: "Copywriting",
                path: "/identity/copywriting",
                componentPath: "identity/Copywriting"
            },
            {
                title: "Logotype",
                path: "/identity/logotype",
                componentPath: "identity/Logotype",
                statusBadges: ["updated"]
            },
            {
                title: "Grid",
                path: "/identity/grid",
                componentPath: "identity/Grid"
            },
            {
                title: "Iconography",
                path: "/identity/iconography",
                componentPath: "identity/Iconography"
            },
            {
                title: "Images",
                path: "/identity/images",
                componentPath: "identity/Images"
            },
            {
                title: "Page layout",
                path: "/identity/page-layout",
                componentPath: "identity/Page-layout"
            },
            {
                title: "Typography",
                path: "/identity/typography",
                componentPath: "identity/Typography"
            }
        ]
    }
];
