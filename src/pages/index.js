import React from "react"
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Bio from "../components/bio"
import Layout from "../components/layout"
import CategoryCard from "../components/categoryCard"
import "../fonts/AnticSlab/antic-font.scss";
import "../fonts/Balista/balista-font.scss";
import "../fonts/photograph-signature/photograph-signature.scss";
import "../styles/override-ant-desing.scss"
import "./index.scss"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Recetas Costa Rica"
        description="Recetas típicas o tradicionales de Costa Rica y el mundo"
      />
      <Helmet title="Cocina Q" defer={false} />
      <div className="main-page">
        <div className="description-container">
          <h1 className="title">Recetas inspiradas en la comida costarricense y del mundo</h1>
          <p className="description">Una forma fácil de aprender a preparar comida, sin tecnisismos y de forma casera</p>
        </div>
        <CategoryCard></CategoryCard>
      </div>
      <Bio />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`