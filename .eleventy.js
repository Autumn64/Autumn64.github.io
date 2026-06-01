
export default function(eleventyConfig) {
	// Carpetas que se copian directamente al output.
	eleventyConfig.addPassthroughCopy("alcanzalos-huesitos");
	eleventyConfig.addPassthroughCopy("contingencia-estelar");
	eleventyConfig.addPassthroughCopy("static");

	return {
		passthroughFileCopy: true,
		markdownTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"],
		dir: {
			input: "src",
			output: "public",
			includes: "includes"
		}
	};
}
