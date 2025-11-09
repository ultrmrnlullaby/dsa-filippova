import { spacers } from "./spacers";

export const typography = {
	fontFamily: {
		base: `"Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		heading: `"Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		monospace: `'Space Mono', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
	},

	fontSize: {
		h1: spacers[48],
		h2: spacers[40],
		h3: spacers[32],
		h4: spacers[24],
		h5: spacers[20],
		h6: spacers[16],
		body: spacers[16],
		smallBody: spacers[14],
		smallText: spacers[12],
		extraSmallText: spacers[10],
	},

	lineHeight: {
		h1: spacers[60],
		h2: spacers[48],
		h3: spacers[36],
		h4: spacers[32],
		h5: spacers[28],
		h6: spacers[24],
		body: spacers[24],
		smallBody: spacers[20],
		smallText: spacers[16],
		extraSmallText: spacers[12],
	},

	fontWeight: {
		regular: "400",
		medium: "500",
		semiBold: "600",
	},
};
