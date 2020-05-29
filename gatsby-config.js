const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
// console.log(`Using environment config: '${activeEnv}'`);

module.exports = {
	siteMetadata: {
		title: `Child of Mercy Orphanage Centre`,
		description: `Child of Mercy Orphanage Centre (COMOC) was formed in 2010 and is situated in the Likoni slum area south of Mombasa.`,
		url: "https://child-of-mercy-orphanage-centre-kenya.com", // No trailing slash allowed!
		image: "/opengraph-default.jpg", // Path to your image you placed in the 'static' folder
		author: `@larswittenberg`,
		georegion: `KE-300`,
		geoplacename: `Mombasa`,
		geoposition: `-4.085521,39.672258`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
	},
	`gatsby-transformer-json`,
	{
	  resolve: `gatsby-source-filesystem`,
	  options: {
		path: `./src/data/`,
	  },
	},
	`gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
