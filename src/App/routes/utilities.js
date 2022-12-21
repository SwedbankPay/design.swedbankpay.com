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
                componentPath: "utilities/Utilities"
            },
            {
                title: "Borders",
                path: "/utilities/borders",
                componentPath: "utilities/Borders",
                text: "Set borders that suit your needs",
                statusBadges: ["deprecated"],
                deprecated: true
            },
            {
                title: "Breakpoints",
                path: "/utilities/breakpoints",
                componentPath: "utilities/Breakpoints",
                text: "See our display breakpoints",
                statusBadges: ["deprecated"],
                deprecated: true
            },
            {
                title: "Colors",
                path: "/utilities/colors",
                componentPath: "utilities/Colors",
                text: "See our color utility classes",
                statusBadges: ["deprecated"],
                deprecated: true
            },
            {
                title: "Cheat sheet",
                path: "/utilities/cheatSheet",
                componentPath: "utilities/CheatSheet",
                text: "Overview of all utility classes"
            },
            {
                title: "Display",
                path: "/utilities/display",
                componentPath: "utilities/Display",
                text: "See our display properties",
                statusBadges: ["deprecated"],
                deprecated: true
            },
            {
                title: "Flex",
                path: "/utilities/flex",
                componentPath: "utilities/Flex",
                text: "Layout, alignment and grid",
                statusBadges: ["deprecated"],
                deprecated: true
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
                text: "Size according to your needs",
                statusBadges: ["deprecated"],
                deprecated: true
            },
            {
                title: "Text",
                path: "/utilities/text",
                componentPath: "utilities/Text",
                text: "Control wrapping, weight and more",
                statusBadges: ["deprecated"],
                deprecated: true
            },
            {
                title: "Visibility",
                path: "/utilities/visibility",
                componentPath: "utilities/Visibility",
                text: "Control visibilities of display",
                statusBadges: ["deprecated"],
                deprecated: true
            }
        ]
    }
];
