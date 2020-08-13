import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../fonts/AnticSlab/antic-font.scss";
import "../fonts/photograph-signature/photograph-signature.scss";
import "../styles/override-ant-desing.scss";
import { rhythm } from "../utils/typography";
import queryString from 'query-string';

const AllPost = ({ data, location }) => {
  console.log('----data', data);
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const params = location.search ? queryString.parse(location.search) : {};
  const category = params.category;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All post by category" />
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
      })}
      <Bio />
    </Layout>
  )
}

export default AllPost;

export const pageQuery = graphql`
  query ($categories: String) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: $categories}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
            categories
          }
        }
      }
    }
  }
`