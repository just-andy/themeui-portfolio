/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-theme-ui", `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Anton`,
        `400` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }
],
}
