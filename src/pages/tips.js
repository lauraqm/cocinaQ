import React from "react";

// Components
import { graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import TipCard from "../components/tipCard"

const Tips = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout location={location} title={siteTitle}>
      <div className="tips">
        {
        edges.map((data) => {
          const title = data.node.frontmatter.title;
          const image = data.node.frontmatter.image;
          const content = data.node.excerpt.substring(0, 200);
            return (<TipCard key={title} title={title} content = {content} image={image}></TipCard>)
          })
        }
      </div>
      <Bio />
    </Layout>
  );
};



export default Tips;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { categories: { eq: "Tips" } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            image
          }
        }
      }
    }  
  }
`;
