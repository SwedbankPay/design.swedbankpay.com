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
        entryCardText: "Learn about our fundamental principles",
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
                statusBadges: ["new"],
                text: "Principles & WCAG 2.1 guidelines"
            },
            {
                title: "Color",
                path: "/identity/color",
                componentPath: "identity/Color",
                statusBadges: ["updated"],
                text: "Our color palette with HEX codes"
            },
            {
                title: "Copywriting",
                path: "/identity/copywriting",
                componentPath: "identity/Copywriting",
                statusBadges: ["new"],
                text: "Tonality & UX copy in our products"
            },
            {
                title: "Grid",
                path: "/identity/grid",
                componentPath: "identity/Grid",
                statusBadges: ["new"],
                text: "Our grid and best practices"
            },
            {
                title: "Iconography",
                path: "/identity/iconography",
                componentPath: "identity/Iconography",
                statusBadges: ["updated"],
                text: "Guidelines and icon library"
            },
            {
                title: "Imagery",
                path: "/identity/imagery",
                componentPath: "identity/Imagery",
                statusBadges: ["new"],
                text: "Guidelines and image library"
            },
            {
                title: "Logotype",
                path: "/identity/logotype",
                componentPath: "identity/Logotype",
                statusBadges: ["updated"],
                text: "The Swedbank Pay logotype"
            },
            {
                title: "Page layout",
                path: "/identity/page-layout",
                componentPath: "identity/Page-layout",
                text: "See our layout structure"
            },
            {
                title: "Spacing",
                path: "/identity/spacing",
                componentPath: "identity/Spacing",
                statusBadges: ["new"],
                text: "8-point spacing system"
            },
            {
                title: "Typography",
                path: "/identity/typography",
                componentPath: "identity/Typography",
                statusBadges: ["updated"],
                text: "See our fronts and sizing"
            }
        ]
    }
];
