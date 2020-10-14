require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Recetas Cocina Q.`,
    author: {
      name: `Laura Quesada`,
      summary: `costarricense amante de la comida 
      y el buen comer! Adoro compartir recetas con mis
      amigos y familia, la idea de este recetario como yo
      lo llamo, es para poder llevar mi pasión por la cocina
      con más personas, de una forma fácil y sin tecnicismos abrumadores.
      La mayoría de recetas que encontrarás aquí son una fusión de comida típica
      costarricense y otras cocinas del mundo que he tenido
      el privilegio de degustar. Espero disfruten de este proyecto que he realizado
      con todo el amor para ustedes.`,
    },
    description: `Recetas inspiradas en la cocina costarricense y del mundo`,
    siteUrl: `https://www.cocinaq.com/`,
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
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              enableCustomId: true,
              removeAccents: true, 
              icon: false
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
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cocina Q.`,
        short_name: `CocinaQ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#19807A`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176742320-1",
      },
    },
    
  
    
  ],
}
