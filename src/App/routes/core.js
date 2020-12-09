module.exports = [
    /**
     * Core
     */
    {
        title: "Core",
        path: "/core",
        redirect: "/core/color",
        appFolder: "Core",
        routes: [
            {
                title: "Accessibility",
                path: "/core/accessibility",
                componentPath: "core/Accessibility"
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
