/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `src/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Work Sans`,
          `400`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Andrew Cetnarskyj",
    titleTemplate: "%s · Andrew Cetnarskyj",
    description:
      "Andrew Cetnarskyj is a Senior UX designer based in Edinburgh and currently building design systems at Wood Mackenzie.",
    url: "https://www.andrewcetnarskyj.co.uk", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@just-andy",
  },
}
