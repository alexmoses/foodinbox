require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
 
  siteMetadata: {
    title: 'Food Inbox',
    siteUrl: `https://www.foodinbox.com.au`,
    
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-172429071-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    { resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-WRPW7G8",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

     

      // Name of the event that is triggered
      // on every Gatsby route change.
      //
    
      // Defaults to false
      enableWebVitalsTracking: true,
    },},
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.foodinbox.com.au`,
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-plugin-fontawesome-css`,
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  
  ],
}

