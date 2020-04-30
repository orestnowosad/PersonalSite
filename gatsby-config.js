module.exports = {
  siteMetadata: {
    title: `Orest Nowosad`,
    description: `Software Developer`,
    siteUrl: `https://orestnowosad.ca`,
    author: `Orest Nowosad`,
    siteNav: [
      {
        label: `About`,
        path: `/about/`,
      },
      {
        label: `Blog`,
        path: `/blog/`
      },
      {
        label: `Work`,
        path: `/work/`
      },
    ],
    social: {
      email: `nowosad.orest@gmail.com`,
      twitter: `orestnowosad`,
      github: `orestnowosad`,
      linkedin: `orestnowosad`,
    },
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
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
        // This path is relative to the root of the site.
        icon: `src/assets/images/brand-icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://orestnowosad.ca`,
        sitemap: `https://orestnowosad.ca/sitemap.xml`,
        policy: [{
          userAgent: `*`,
          allow: `/`,
        }],
      },
    },
    // this (optional) plugin enables Progressive Web App
    // + Offline functionality.
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
