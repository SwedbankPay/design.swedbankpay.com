module.exports = [
    /**
     * Identity
     */
    {
        title: "Identity",
        icon: {
            name: "palette"
        },
        path: "identity",
        entryCardText: "Learn about our fundamental principles",
        redirect: "identity",
        appFolder: "Identity",
        routes: [
            {
                title: "Overview",
                path: "identity",
                rootPath: "/identity/identity",
                componentPath: "identity/Identity"
            },
            {
                title: "Accessibility",
                path: "accessibility",
                rootPath: "/identity/accessibility",
                componentPath: "identity/Accessibility",
                text: "Principles & WCAG 2.1 guidelines"
            },
            {
                title: "Color",
                path: "color",
                rootPath: "/identity/color",
                componentPath: "identity/Color",
                text: "Our color palette with HEX codes"
            },
            {
                title: "Copywriting",
                path: "copywriting",
                rootPath: "/identity/copywriting",
                componentPath: "identity/Copywriting",
                text: "Tonality & UX copy in our products"
            },
            {
                title: "Grid",
                path: "grid",
                rootPath: "/identity/grid",
                componentPath: "identity/Grid",
                text: "Our grid and best practices"
            },
            {
                title: "Iconography",
                path: "iconography",
                rootPath: "/identity/iconography",
                componentPath: "identity/Iconography",
                text: "Guidelines and icon library"
            },
            {
                title: "Imagery",
                path: "imagery",
                rootPath: "/identity/imagery",
                componentPath: "identity/Imagery",
                text: "Guidelines and image library"
            },
            {
                title: "Logotype",
                path: "logotype",
                rootPath: "/identity/logotype",
                componentPath: "identity/Logotype",
                statusBadges: ["updated"],
                text: `The ${process.env.brandTitle} logotype`
            },
            {
                title: "Page layout",
                path: "page-layout",
                rootPath: "/identity/page-layout",
                componentPath: "identity/Page-layout",
                text: "See our layout structure"
            },
            {
                title: "Spacing",
                path: "spacing",
                rootPath: "/identity/spacing",
                componentPath: "identity/Spacing",
                text: "8-point spacing system"
            },
            {
                title: "Typography",
                path: "typography",
                rootPath: "/identity/typography",
                componentPath: "identity/Typography",
                statusBadges: ["updated"],
                text: "See our fronts and sizing"
            }
        ]
    }
];
