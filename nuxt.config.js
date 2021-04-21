import colors from 'vuetify/es5/util/colors'

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000',
		apiUrl: process.env.API_URL || 'localhost',
		//enviroment: process.env.ENVIROMENT || 'development',
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s - guebbit',
		title: 'guebbit',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			// Internet Explorer visualizza come Edge
			{ 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
			// WindowsPhone disabilità highlight dei link su mobile
			{ name: 'msapplication-tap-highlight', content: 'no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: []
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		/*
		['@nuxtjs/gtm', {
			id: 'GTM-PXX6WJH'
		}]
		*/
		// https://go.nuxtjs.dev/vuetify
		['@nuxtjs/vuetify', {
			treeShake: true,
		}],
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://github.com/nuxt-community/svg-module
		'@nuxtjs/svg',
		//'@bazzite/nuxt-optimized-images',	// https://github.com/bazzite/nuxt-optimized-images
		['nuxt-i18n', {						// https://github.com/nuxt-community/nuxt-i18n
			baseUrl: 'https://guebbit.com/',
			locales: [
				{
					code: 'it',
					iso: 'it-IT',
					file: 'it.json'
				}
			],
			lazy: true,
			langDir: 'locales/',
			defaultLocale: 'it',
			//detectBrowserLanguage: true
		}]
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: true,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true,
		extend (config, ctx) {
			config.module.rules.push({
				test: /\.(ico|xml|webmanifest)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name]-[hash:7].[ext]'
				}
			});
		}
	},
}
