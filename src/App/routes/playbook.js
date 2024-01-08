module.exports = [
	/**
	 * Playbook
	 */
	{
		title: "Playbook",
		icon: {
			name: "at-chess-piece",
		},
		path: "playbook",
		entryCardText: "Discover our visual language and principles",
		redirect: "playbook",
		appFolder: "Playbook",
		routes: [
			{
				title: "Overview",
				path: "playbook",
				rootPath: "/playbook/playbook",
				componentPath: "content/Playbook",
			},
			{
				title: "Design Vision",
				path: "design-vision",
				rootPath: "/playbook/design-vision",
				componentPath: "content/DesignVision",
				text: "A high-level north star for all new products created in the Swedbank Pay portfolio",
			},
			{
				title: "Principles",
				path: "principles",
				rootPath: "/playbook/principles",
				componentPath: "content/Principles",
				text: "Best practices mainly for product design that are clear and easy to follow. Free advice, if you will",
			},
			{
				title: "Profiles",
				path: "profiles",
				rootPath: "/playbook/profiles",
				componentPath: "content/Profiles",
				text: "The profiles are UI/UX styles that speak to different products, contexts and user groups",
			},
			{
				title: "Showroom",
				path: "showroom",
				rootPath: "/playbook/showroom",
				componentPath: "content/Showroom",
				text: "See examples from our visual language",
			},
		],
	},
];
