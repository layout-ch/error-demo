import tailwind from "@astrojs/tailwind";
import i18n from "@astrolicious/i18n";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://astro-i18n-demo.netlify.app",
	integrations: [
		i18n({
			defaultLocale: "de",
			locales: ["fr", "en", "de"],
			strategy: "prefix",
			pages: {
				"/AGB": {
					fr: "/CGU",
					en: "/GTC",
				},
				"/datenschutzrichtlinie": {
					fr: "/politique-de-confidentialite",
					en: "/privacy-policy",
				},
				"/impressum": {
					fr: "/mentions-legales",
					en: "/imprint",
				},
			},

			client: {
				data: true,
				// paths: true,
				// translations: true
			},
			sitemap: true
		}),
		tailwind(),
	]

});
