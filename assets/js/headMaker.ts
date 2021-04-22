export interface headMakerParameters{
	title :string,
	description :string,
	meta :Record<string, string>,
	htmlAttrs :Record<string, string>,
	script :any[],
	link :any[],
}

export interface metaMap {
	property :string
	content :any
}

export default ({
	title = '',
	description = '',
	meta = {},
	htmlAttrs = {},
	script = [],
	link = [],
} :headMakerParameters) :any => {
	const metaArray :metaMap[] = [];
	for (let m in {
		...meta,
		"og:title": title,
		"og:description": description,
		"og:type": "website",
	})
		if (meta.hasOwnProperty(m))
			metaArray.push({
				property: m,
				content: meta[m]
			});

	return {
		title: title,
		htmlAttrs: htmlAttrs,
		meta: [
			{
				name: 'description',
				description: description,
			},
			//SVG
			{
				name: 'msapplication-TileColor',
				content: '#ffffff'
			},
			{
				name: 'msapplication-config',
				content: '/images/favicon/browserconfig.xml'
			},
			{
				name: 'theme-color',
				content: '#ffffff'
			},
			...metaArray,
		],
		link: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				type: 'image/png',
				href: '/images/favicon/apple-touch-icon.png'
			},
			{
				rel: 'icon',
				sizes: '32x32',
				type: 'image/png',
				href: '/images/favicon/favicon-32x32.png'
			},
			{
				rel: 'icon',
				sizes: '16x16',
				type: 'image/png',
				href: '/images/favicon/favicon-16x16.png'
			},
			{
				rel: 'manifest',
				type: 'image/x-icon',
				href: '/images/favicon/site.webmanifest'
			},
			{
				rel: 'shortcut icon',
				type: 'image/x-icon',
				color: "#00bcd4",
				href: '/images/favicon/safari-pinned-tab.svg'
			},
			...link,
		],
		script: [
			...script
		],
	}
};
