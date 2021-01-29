module.exports = [
    {
        title: "Utilities",
        icon: {
            name: "build"
        },
        entryCardText: "See all available CSS classes",
        path: "/utilities",
        redirect: "/utilities/utilities",
        appFolder: "Utilities",
        routes: [
            {
                title: "Overview",
                path: "/utilities/utilities",
                componentPath: "utilities/Utilities",
                statusBadges: ["new"]
            },
            {
                title: "Borders",
                path: "/utilities/borders",
                componentPath: "utilities/Borders",
                text: "Set borders that suit your needs"
            },
            {
                title: "Breakpoints",
                path: "/utilities/breakpoints",
                componentPath: "utilities/Breakpoints",
                text: "See our display breakpoints"
            },
            {
                title: "Colors",
                path: "/utilities/colors",
                componentPath: "utilities/Colors",
                text: "See our color utility classes"
            },
            {
                title: "Display",
                path: "/utilities/display",
                componentPath: "utilities/Display",
                text: "See our display properties"
            },
            {
                title: "Flex",
                path: "/utilities/flex",
                componentPath: "utilities/Flex",
                text: "Layout, alignment and grid"
            },
            {
                title: "Images",
                path: "/utilities/images",
                componentPath: "utilities/Images",
                text: "Modify how images are displayed"
            },
            {
                title: "Sizing",
                path: "/utilities/sizing",
                componentPath: "utilities/Sizing",
                text: "Size according to your needs"
            },
            {
                title: "Text",
                path: "/utilities/text",
                componentPath: "utilities/Text",
                text: "Control wrapping, weight and more"
            },
            {
                title: "Visibility",
                path: "/utilities/visibility",
                componentPath: "utilities/Visibility",
                text: "Control visibilities of display"
            }
        ]
    }
];
