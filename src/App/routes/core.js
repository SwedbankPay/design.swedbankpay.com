module.exports = [
    /**
     * Core
     */
    {
        title: "Core",
        icon: {
            name: "palette"
        },
        path: "/core",
        redirect: "/core/color",
        appFolder: "Core",
        routes: [
            {
                title: "Identity",
                path: "/core/identity",
                componentPath: "core/Identity"
            },
            {
                title: "Accessibility",
                path: "/core/accessibility",
                componentPath: "core/Accessibility"
            },
            {
                title: "Imagery",
                path: "/core/imagery",
                componentPath: "core/Imagery"
            },
            {
                title: "Color",
                path: "/core/color",
                componentPath: "core/Color"
            },
            {
                title: "Spacing",
                path: "/core/spacing",
                componentPath: "core/Spacing"
            },
            {
                title: "Copywriting",
                path: "/core/copywriting",
                componentPath: "core/Copywriting"
            },
            {
                title: "Logotype",
                path: "/core/logotype",
                componentPath: "core/Logotype",
                statusBadges: ["updated"]
            },
            {
                title: "Grid",
                path: "/core/grid",
                componentPath: "core/Grid"
            },
            {
                title: "Iconography",
                path: "/core/iconography",
                componentPath: "core/Iconography"
            },
            {
                title: "Images",
                path: "/core/images",
                componentPath: "core/Images"
            },
            {
                title: "Page layout",
                path: "/core/page-layout",
                componentPath: "core/Page-layout"
            },
            {
                title: "Typography",
                path: "/core/typography",
                componentPath: "core/Typography"
            }
        ]
    }
];
