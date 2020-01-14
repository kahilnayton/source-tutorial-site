module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `This is where i write stuff `,
    author: `@gatsbyjs`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: "pixabay-api",
      options: {
        key: "14903148-cb3d617e2c3ce488c88c79d7d",
        q: "yellow flowers",
      },
    },
    // {
    //   resolve: "medication-finder-api",
    //   options: {
    //     key: "",
    //     q: "",
    //   },
    // },
    // {
    //   resolve: "news-api",
    //   options: {
    //     key: "8ff8c1536f0645d68c258fc65e3a77b8",
    //     q: "bitcoin",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
