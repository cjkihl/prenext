#!/usr/bin/env node

const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild.build({
	entryPoints: ["next.config.ts"],
	bundle: true,
	platform: "node",
	format: "esm",
	outfile: "next.config.mjs",
	plugins: [
		nodeExternalsPlugin({
			allowWorkspaces: true,
		}),
	],
});
