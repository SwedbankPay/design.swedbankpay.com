export const SidebarNavList = [
    {
        title: "Introduction",
        lastParent: true,
        subList: [
            {
                title: "Introduction",
                page: "IntroPage",
                pagePosition: "introduction"
            },
            {
                title: "FAQ",
                page: "IntroPage",
                pagePosition: "faq"
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
                pagePosition: "what"
            },
            {
                title: "Why",
                page: "LoremIpsum",
                pagePosition: "why"
            },
            {
                title: "Where",
                page: "LoremIpsum",
                pagePosition: "where"
            },
            {
                title: "Where more",
                page: "LoremIpsum",
                pagePosition: "where-more"
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
