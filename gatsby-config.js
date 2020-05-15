module.exports = {
  siteMetadata: {
    title: `Orest Nowosad`,
    subtitle: `<Insert subtitle here>`,
    description: `Software Developer`,
    siteUrl: `https://orestnowosad.ca`,
    author: `Orest Nowosad`,
    siteNav: [
      {
        label: `About Me`,
        path: `/about`,
      },
      {
        label: `Archive`,
        path: `/blog`
      },
    ],
    social: {
      email: `mailto:nowosad.orest@gmail.com`,
      twitter: `https://twitter.com/orestnowosad`,
      github: `https://github.com/orestnowosad`,
      linkedin: `https://linkedin.com/in/orestnowosad`,
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
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-transformer-remark`,
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
