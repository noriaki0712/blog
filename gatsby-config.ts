/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  graphqlTypegen: true,
  flags: {
    DEV_SSR: false 
  },
  siteMetadata: {
    title: `Up Bumboo Blog`,
    author: {
      name: `Noriaki Kamitake`,
      summary: `noriaki is work as developer`,
    },
    description: `個人で勉強している技術を投稿する。フロントはjavascript,typescript,react,vue,バックはruby,php,rust,rails,laravelなど。`,
    siteUrl: `https://noriaki-blog-9784f.web.app`,
    social: {
      twitter: `CoZ26pxgxtXVBSz`,
      github: `https://github.com/noriaki0712`
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-prismjs-title",
          "gatsby-plugin-sass",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      //   resolve: `gatsby-plugin-feed-mdx`,
      //   options: {
      //     query: `
      //       {
      //         site {
      //           siteMetadata {
      //             title
      //             description
      //             siteUrl
      //             site_url: siteUrl
      //           }
      //         }
      //       }
      //     `,
      //   },
      // },
      // {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
