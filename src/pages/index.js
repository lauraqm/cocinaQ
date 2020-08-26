import React from "react"
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import CategoryCard from "../components/categoryCard"
import "../fonts/AnticSlab/antic-font.scss";
import "../fonts/photograph-signature/photograph-signature.scss";
import "../styles/override-ant-desing.scss"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet title="Cocina Q" defer={false} />
      <div >
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