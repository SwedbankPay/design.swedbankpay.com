module.exports = [
	{
		title: "Get started",
		icon: {
			name: "at-electric-lightbulb",
		},
		entryCardText: "Get started by setting up the Design Guide!",
		path: "get-started",
		wideCard: true,
		redirect: "introduction",
		appFolder: "GetStarted",
		routes: [
			{
				title: "Introduction",
				path: "introduction",
				rootPath: "/get-started/introduction",
				componentPath: "get-started/Introduction",
			},
			{
				title: "For developers",
				path: "for-developers",
				rootPath: "/get-started/for-developers",
				componentPath: "get-started/ForDevelopers",
			},
			{
				title: "For designers",
				path: "for-designers",
				rootPath: "/get-started/for-designers",
				componentPath: "get-started/ForDesigners",
			},
		],
	},
];
