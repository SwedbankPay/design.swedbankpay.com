export default [
    {
        title: "Home",
        path: "/",
        component: require("../Home"),
        exact: true
    },
    {
        title: "Documentation",
        path: "/docs",
        component: require("../Documentation"),
        exact: false
    },
    {
        title: "Examples",
        path: "/examples",
        component: require("../Examples"),
        exact: false
    },
    {
        title: "Templates",
        path: "/templates",
        component: require("../Templates"),
        exact: false
    }
];
