import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import { stylexPlugin } from "vite-plugin-stylex-dev";

export default defineConfig({
	plugins: [
		devtools({
			autoname: true, // e.g. enable autoname
		}),
		stylexPlugin(),
		solid(),
	],
	resolve: {
		alias: {
			ui: "/src/ui",
		},
	},
});
