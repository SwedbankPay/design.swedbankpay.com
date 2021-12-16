module.exports = [
    {
        title: "Patterns",
        icon: {
            name: "dashboard"
        },
        path: "/patterns",
        entryCardText: "Learn about how to we set up different structures",
        redirect: "/patterns/patterns",
        appFolder: "Patterns",
        routes: [
            {
                title: "Overview",
                path: "/patterns/patterns",
                componentPath: "content/Patterns"
            },
            {
                title: "Forms",
                path: "/patterns/forms",
                componentPath: "content/Forms",
                icon: "format_align_justify",
                outlined: true,
                statusBadges: ["new"]
            },
            {
                title: "Login",
                path: "/patterns/login",
                componentPath: "content/Login",
                icon: "account_circle",
                outlined: true,
                statusBadges: ["new"]
            },
            {
                title: "Filters",
                path: "/patterns/filters",
                componentPath: "content/Filters",
                icon: "filter_alt",
                outlined: true,
                statusBadges: ["new"]
            }
        ]
    }
];
