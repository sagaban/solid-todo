import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devtools from "solid-devtools/vite";

export default defineConfig({
	plugins: [
		devtools({
			autoname: true, // e.g. enable autoname
		}),
		solid(),
	],
	resolve: {
		alias: {
			ui: "/src/ui",
		},
	},
});
