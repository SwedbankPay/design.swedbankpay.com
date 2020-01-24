export const SidebarNavList = [
    {
        title: "Introduction",
        lastParent: true,
        subList: [
            {
                title: "Introduction",
                page: "IntroPage"
            },
            {
                title: "FAQ",
                page: "IntroFAQ"
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
