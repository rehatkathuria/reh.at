module.exports = {
	distDir: "build",
	future: {
		webpack5: true,
	},
	target: "serverless",
	rules: [
		{
			test: /\.(glsl|vs|fs|vert|frag)$/,
			exclude: /node_modules/,
			use: ["raw-loader", "glslify-loader"],
		},
	],
}
