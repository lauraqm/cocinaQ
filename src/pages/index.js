import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import CategoryCard from "../components/categoryCard"
// import SEO from "../components/seo"
import "../fonts/AnticSlab/antic-font.scss";
import "../fonts/photograph-signature/photograph-signature.scss";
import "../styles/override-ant-desing.scss"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  console.log (data);

  return (
    <Layout location={location} title={siteTitle}>
      <div >
        <CategoryCard></CategoryCard>
      </div>
      {/* <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3 style={{marginBottom: rhythm(1 / 4)}}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            </header>
            <section>
              <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt}}/>
            </section>
          </article>
        )
      })} */}

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