const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Blog',
    author: 'Kyle Mathews',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  // pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: ['react-dom']
      }
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: path.join(__dirname, 'src', 'uploads'),
        destination: '/uploads'
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src', 'uploads'),
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src', 'pages'),
        name: 'content',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer"
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
