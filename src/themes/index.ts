export interface Theme {
	accent: string
	background: string
	backgroundAccent: string
	buttonBackground: string
	buttonBackgroundHover: string
	buttonAccentBackground: string
	buttonAccentBackgroundHover: string
	buttonBorder: string
	buttonShadow: string
	buttonText: string
	dark: boolean
	icon: string
	iconSelected: string
	imgBorder: string
	separator: string
	stars: string
	text: string
	textAccent: string
}

const light: Theme = {
	accent: "red",
	background: "#0400ed",
	backgroundAccent: "#F6F6F4",
	buttonBackground: "white",
	buttonBackgroundHover: "#fafafa",
	buttonAccentBackground: "#E0E4E5",
	buttonAccentBackgroundHover: "#E0E4E5",
	buttonBorder: "rgba(172, 180, 188, 0.5)",
	buttonShadow: "rgba(21, 50, 83, 0.1)",
	buttonText: "rgb(17, 25, 36)",
	dark: false,
	icon: "#324657",
	iconSelected: "blue",
	imgBorder: "black",
	separator: "#d2d2d3",
	stars: "black",
	text: "white",
	textAccent: "blue",
}

const dark: Theme = {
	accent: "green",
	background: "#15161a",
	backgroundAccent: "#101519",
	buttonBackground: "#21262D",
	buttonBackgroundHover: "#293036",
	buttonAccentBackground: "#293036",
	buttonAccentBackgroundHover: "#E0E4E5",
	buttonBorder: "#393939",
	buttonShadow: "black",
	buttonText: "white",
	dark: true,
	icon: "#F6F6F6",
	iconSelected: "springgreen",
	imgBorder: "white",
	separator: "#454546",
	stars: "white",
	text: "#F6F6F6",
	textAccent: "#FFAD05",
}

export namespace Themes {
	export const Light = light
	export const Dark = dark
}
