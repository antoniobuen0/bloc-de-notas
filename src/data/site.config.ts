interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://libretica.netlify.app/', // Write here your website url
	author: 'Antonio Bueno', // Site author
	title: 'La libretica', // Site title.
	description: 'Para apuntar cosas.', // Description to display in the meta tags
	lang: 'es-ES',
	ogLocale: 'es-ES',
	shareMessage: 'Compartir', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
