module.exports = {
  siteMetadata: {
    title: `Using external API's`,
    description: `Bring in pictures from Pixabay and filtering through them `,
    author: `Kahil`,
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
        q: "blue flowers",
      },
    },
    { // lunr search plugin
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [{name: 'en'}],
        fields: [
          { name: 'tags', store: true, attributes: { boost: 20 } }, // This allos you to boost the search prioritisation
          { name: 'user', store: true, attributes: { boost: 5 } }, // This would be 5 times more relavant
          { name: 'largeImageURL', store: true, attributes: { boost: 5 } }, // This would be 5 times more relavant
        ],
        resolvers: {
          PixabayPhoto: {
            tags: node => node.tags, 
            user: node => node.user,
            largeImageURL: node => node.largeImageURL,
          },
        },
        filename: 'search_index_json',
      },
    },
    {
      resolve: "medication-finder-api",
      options: {
        key: "",
        q: "",
      },
    },
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
