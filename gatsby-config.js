require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Cocina Q.`,
    author: {
      name: `Laura Quesada`,
      summary: `costarricense amante de la comida 
      y el buen comer! Adoro compartir recetas con mis
      amigos y familia, la idea de este recetario como yo
      lo llamo, es para poder llevar mi pasión por la cocina
      con mas personas. La mayoria de recetas que
      encontrarás aqui son una fusión de comida típica
      costarricense y otras cocinas del mundo que he tenido
      el privilegio de degustar.`,
    },
    description: `Blog de cocina costarricense`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `lauraqmpz`,
    },
  },
  plugins: [
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        name: `Cocina Q.`,
        short_name: `CocinaQ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/fav-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#19807A',
            'link-color': '#19807A',
            'success-color': '#1fdba6',
            
          },
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: 'cocinaQ/',
        maxResults: 2000
      }
    },
  ],
}
