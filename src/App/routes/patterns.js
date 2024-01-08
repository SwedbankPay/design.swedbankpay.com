module.exports = [
	{
		title: "Patterns",
		icon: {
			name: "at-pattern-security",
		},
		path: "patterns",
		entryCardText: "Learn about how to we set up different structures",
		redirect: "patterns",
		appFolder: "Patterns",
		routes: [
			{
				title: "Overview",
				path: "patterns",
				rootPath: "/patterns/patterns",
				componentPath: "content/Patterns",
			},
			{
				title: "Forms",
				path: "forms",
				rootPath: "/patterns/forms",
				componentPath: "content/Forms",
				icon: "at-newspaper-newsletter",
				statusBadges: ["updated"],
			},
			{
				title: "Login",
				path: "login",
				rootPath: "/patterns/login",
				componentPath: "content/Login",
				icon: "at-account",
			},
		],
	},
];
