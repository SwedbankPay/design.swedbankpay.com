export const spacingClasses = {
	margins: [
		{
			name: "m-0",
			css: "0",
			px: " ",
		},
		{
			name: "m-1",
			css: "0.25rem",
			px: "4px",
		},
		{
			name: "m-2",
			css: "0.5rem",
			px: "8px",
		},
		{
			name: "m-3",
			css: "1rem",
			px: "16px",
		},
		{
			name: "m-4",
			css: "1.5rem",
			px: "24px",
		},
		{
			name: "m-5",
			css: "3rem",
			px: "48px",
		},
	],

	paddings: [
		{
			name: "p-0",
			css: "0",
			px: " ",
		},
		{
			name: "p-1",
			css: "0.25rem",
			px: "4px",
		},
		{
			name: "p-2",
			css: "0.5rem",
			px: "8px",
		},
		{
			name: "p-3",
			css: "1rem",
			px: "16px",
		},
		{
			name: "p-4",
			css: "1.5rem",
			px: "24px",
		},
		{
			name: "p-5",
			css: "3rem",
			px: "48px",
		},
	],
};

export const borderClasses = [
	{
		name: "border",
		css: "border: 1px solid @light-brown",
	},
	{
		name: "border-top",
		css: "border-top: 1px solid @light-brown",
	},
	{
		name: "border-bottom",
		css: "border-bottom: 1px solid @light-brown",
	},
	{
		name: "border-left",
		css: "border-left: 1px solid @light-brown",
	},
	{
		name: "border-right",
		css: "border-right: 1px solid @light-brown",
	},
];

export const breakpointClasses = [
	{
		name: "xs",
		css: "0px",
		px: ".col-8 .d-block",
	},
	{
		name: "sm",
		css: "576px",
		px: ".col-sm-8 .d-sm-block",
	},
	{
		name: "md",
		css: "768px",
		px: ".col-md-8 .d-md-block",
	},
	{
		name: "lg",
		css: "992px",
		px: ".col-lg-8 .d-lg-block",
	},
	{
		name: "xl",
		css: "1200px",
		px: ".col-xl-8 .d-xl-block",
	},
	{
		name: "xxl",
		css: "1600px",
		px: ".col-xxl-8 .d-xxl-block",
	},
];

export const hidingElementClasses = {
	hidingElements: [
		{
			screenSize: "Hidden on all",
			dClass: "d-none",
		},
		{
			screenSize: "Hidden only on xs",
			dClass: "d-none d-sm-block",
		},
		{
			screenSize: "Hidden only on md",
			dClass: "d-md-none d-lg-block",
		},
		{
			screenSize: "Hidden only on xl",
			dClass: "d-xl-none d-xxl-block",
		},
		{
			screenSize: "Visible on all",
			dClass: "d-block",
		},
		{
			screenSize: "Visible only on sm",
			dClass: "d-sm-block d-md-none",
		},
		{
			screenSize: "Visible only on lg",
			dClass: "d-lg-block d-xl-none",
		},
		{
			screenSize: "Visble only on xxl",
			dClass: "d-xxl-block",
		},
	],

	notation: [
		{
			value: "d-none",
			css: "display: none",
		},
		{
			value: "d-inline",
			css: "display: inline",
		},
		{
			value: "d-inline-block",
			css: "display: inline-block",
		},
		{
			value: "d-block",
			css: "display: block",
		},
		{
			value: "d-table",
			css: "display: table",
		},
		{
			value: "d-table-cell",
			css: "display: table-cell",
		},
		{
			value: "d-table-row",
			css: "display: table-row",
		},
		{
			value: "d-flex",
			css: "display: flex",
		},
		{
			value: "d-inline-flex",
			css: "display: inline-flex",
		},
		{
			value: "d-grid",
			css: "display: grid",
		},
		{
			value: "d-inline-grid",
			css: "display: inline-grid",
		},
	],
};

export const flexClasses = {
	flexBehaviour: [
		{
			code: "d-flex",
		},
		{
			code: "d-inline-flex",
		},
		{
			code: "d-{breakpoint}-flex",
		},
		{
			code: "d-{breakpoint}-inline-flex",
		},
	],

	direction: [
		{
			code: "flex-row",
		},
		{
			code: "flex-row-reverse",
		},
		{
			code: "flex-column",
		},
		{
			code: "flex-column-reverse",
		},
		{
			code: "flex-{breakpoint}-row",
		},
		{
			code: "flex-{breakpoint}-row-reverse",
		},
		{
			code: "flex-{breakpoint}-column",
		},
		{
			code: "flex-{breakpoint}-column-reverse",
		},
	],

	justifyContent: [
		{
			code: "justify-content-start",
		},
		{
			code: "justify-content-end",
		},
		{
			code: "justify-content-center",
		},
		{
			code: "justify-content-between",
		},
		{
			code: "justify-content-around",
		},
		{
			code: "justify-content-evenly",
		},
		{
			code: "justify-content-{breakpoint}-start",
		},
		{
			code: "justify-content-{breakpoint}-end",
		},
		{
			code: "justify-content-{breakpoint}-center",
		},
		{
			code: "justify-content-{breakpoint}-between",
		},
		{
			code: "justify-content-{breakpoint}-around",
		},
		{
			code: "justify-content-{breakpoint}-evenly",
		},
	],

	alignItems: [
		{
			code: "align-items-start",
		},
		{
			code: "align-items-end",
		},
		{
			code: "align-items-baseline",
		},
		{
			code: "align-items-stretch",
		},
		{
			code: "align-items-{breakpoint}-start",
		},
		{
			code: "align-items-{breakpoint}-end",
		},
		{
			code: "align-items-{breakpoint}-center",
		},
		{
			code: "align-items-{breakpoint}-baseline",
		},
		{
			code: "align-items-{breakpoint}-stretch",
		},
	],

	alignSelf: [
		{
			code: "align-self-start",
		},
		{
			code: "align-self-end",
		},
		{
			code: "align-self-center",
		},
		{
			code: "align-self-baseline",
		},
		{
			code: "align-self-stretch",
		},
		{
			code: "align-self-{breakpoint}-start",
		},
		{
			code: "align-self-{breakpoint}-end",
		},
		{
			code: "align-self-{breakpoint}-center",
		},
		{
			code: "align-self-{breakpoint}-baseline",
		},
		{
			code: "align-self-{breakpoint}-stretch",
		},
	],

	fill: [
		{
			code: "flex-fill",
		},
		{
			code: "flex-{breakpoint}-fill",
		},
	],

	growAndShrink: [
		{
			code: "flex-{grow|shrink}-0",
		},
		{
			code: "flex-{grow|shrink}-1",
		},
		{
			code: "flex-{breakpoint}-{grow|shrink}-0",
		},
		{
			code: "flex-{breakpoint}-{grow|shrink}-1",
		},
	],

	wrap: [
		{
			code: "flex-wrap",
		},
		{
			code: "flex-nowrap",
		},
		{
			code: "flex-wrap-reverse",
		},
	],

	order: [
		{
			code: "order-{0-12}",
		},
		{
			code: "order-{breakpoint}-{0-12}",
		},
	],

	alignContent: [
		{
			code: "align-content-start",
		},
		{
			code: "align-content-end",
		},
		{
			code: "align-content-center",
		},
		{
			code: "align-content-around",
		},
		{
			code: "align-content-stretch",
		},
		{
			code: "align-content-{breakpoint}-start",
		},
		{
			code: "align-content-{breakpoint}-end",
		},
		{
			code: "align-content-{breakpoint}-center",
		},
		{
			code: "align-content-{breakpoint}-around",
		},
		{
			code: "align-content-{breakpoint}-stretch",
		},
	],
};

export const imageClasses = [
	{
		code: "img-fluid",
		explaination: "Scales to parent",
	},
	{
		code: "img-rounded",
		explaination: "Rounded corners",
	},
	{
		code: "img-circle",
		explaination: "Perfect circle",
	},
	{
		code: "img-thumbnail",
		explaination: "Adds border and padding",
	},
];

export const sizingClasses = [
	{
		code: "{w|h}-25",
	},
	{
		code: "{w|h}-50",
	},
	{
		code: "{w|h}-75",
	},
	{
		code: "{w|h}-100",
	},
];

export const textClasses = [
	{
		code: "text-justify",
	},
	{
		code: "text-left",
	},
	{
		code: "text-center",
	},
	{
		code: "text-right",
	},
	{
		code: "text-{breakpoint}-left",
	},
	{
		code: "text-nowrap",
	},
	{
		code: "text-truncate",
	},
	{
		code: "text-lowercase",
	},
	{
		code: "text-uppercase",
	},
	{
		code: "text-capitalize",
	},
	{
		code: "font-weight-bold",
	},
	{
		code: "font-weight-normal",
	},
	{
		code: "font-weight-light",
	},
	{
		code: "font-italic",
	},
];

export const visibilityClasses = [
	{
		code: "visible",
	},
	{
		code: "invisible",
	},
];
