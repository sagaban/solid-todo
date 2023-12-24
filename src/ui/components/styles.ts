import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
	root: {
		appearance: "none",
		display: "inline-flex",
		justifyContent: "center",
		alignItems: "center",
		height: "40px",
		width: "auto",
		outline: {
			default: "none",
			":focus-visible": "2px solid hsl(200 98% 39%)",
		},
		outlineOffset: {
			":focus-visible": "2px",
		},
		borderRadius: "6px",
		padding: "0 16px",
		backgroundColor: {
			default: "hsl(200 98% 39%)",
			":hover": "hsl(201 96% 32%)",
			":active": "hsl(201 90% 27%)",
		},
		color: "white",
		fontSize: "16px",
		lineHeight: "0",
		transition: "250ms background-color",
	},
});
