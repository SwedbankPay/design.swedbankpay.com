module.exports = [
    {
        title: "Templates",
        icon: {
            name: "dashboard"
        },
        path: "/templates",
        entryCardText: "Learn about how to we set up different structures",
        redirect: "/templates/templates",
        appFolder: "Templates",
        routes: [
            {
                title: "Overview",
                path: "/templates/templates",
                componentPath: "content/Templates"
            },
            {
                title: "Forms",
                path: "/templates/forms",
                componentPath: "content/Forms",
                icon: "format_align_justify",
                outlined: true
            }
        ]
    }
];
