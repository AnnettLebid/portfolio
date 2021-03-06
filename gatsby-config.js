module.exports = {
  siteMetadata: {
    title: 'Anna Lebid Portfolio',
    description: 'Anna Lebid Portfolio Web Site',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
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
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anna Lebid`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/logo.png',
        icons: [
          {
            src: `favicons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
