import { DateTime } from "luxon";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import readingTime from "eleventy-plugin-reading-time";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {
	// Filtro que, al ser pasado desde nunjucks, convierte la fecha a formato ISO 8601.
	eleventyConfig.addFilter("iso8601", (dateString) => {
		return DateTime.fromJSDate(new Date(dateString), { zone: "utc" }).toFormat('yyyy-MM-dd');
	});

	// Plugin para el tiempo de lectura de un post.
	eleventyConfig.addPlugin(readingTime);

	// Plugin del coloreado de sintaxis.
	eleventyConfig.addPlugin(syntaxHighlight);

	// Plugin para el feed RSS
	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 20,     // 0 means no limit
		},
		metadata: {
			language: "es",
			title: "Autumn's Blog",
			subtitle: "El nuevo desafío de Autumn64",
			base: "https://www.autumn64.xyz/",
			author: {
				name: "Mónica Gómez",
				email: "autumn64@disroot.org",
			}
		}
	});

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
