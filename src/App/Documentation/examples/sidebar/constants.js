export const SidebarNavList = [
    {
        title: "Introduction",
        lastParent: true,
        subList: [
            {
                title: "Introduction",
                page: "IntroPage",
                pagePosition: "sidebar-intro"
            },
            {
                title: "FAQ",
                page: "IntroPage",
                pagePosition: "sidebar-intro-faq"
            }
        ]
    },
    {
        title: "Lorem Ipsum",
        lastParent: true,
        subList: [
            {
                title: "What",
                page: "LoremIpsum",
                pagePosition: "sidebar-lorem-what"
            },
            {
                title: "Why",
                page: "LoremIpsum",
                pagePosition: "sidebar-lorem-why"
            },
            {
                title: "Where",
                page: "LoremIpsum",
                pagePosition: "sidebar-lorem-where"
            },
            {
                title: "Where more",
                page: "LoremIpsum",
                pagePosition: "sidebar-lorem-where2"
            }
        ]
    },
    {
        title: "Customers",
        lastParent: false,
        subList: [
            {
                title: "Customers overview",
                lastParent: true,
                subList: [
                    {
                        title: "Overview",
                        page: "COOverview"
                    },
                    {
                        title: "Settings",
                        page: "COSettings"
                    }
                ]
            },
            {
                title: "Customers detailed",
                lastParent: true,
                subList: [
                    {
                        title: "Order history",
                        page: "CDOrderHistory"
                    },
                    {
                        title: "Inquiries",
                        page: "CDInquiries"
                    },
                    {
                        title: "Summary charts",
                        page: "CDSummaryCharts"
                    },
                    {
                        title: "Settings",
                        page: "CDSettings"
                    }
                ]
            }
        ]
    }
];
