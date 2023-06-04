import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import iconsPlugin from "unplugin-icons/vite";

export default defineConfig({
	base: "/palantir",
	plugins: [
		solidPlugin(),
		iconsPlugin({
			scale: 1.2,
			compiler: "solid",
			defaultStyle: "vertical-align: sub"
		})
	],
	server: {
		port: 3000
	},
	build: {
		target: "esnext"
	}
});
