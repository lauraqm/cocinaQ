import React from "react";
import { Helmet } from "react-helmet";

// Components
import { graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import TraditionalCard from "../components/traditionalCard"
import FlagDivider from "../components/flagDivider";

const Traditional = (props) => {
  //debugger
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout location={location} title={siteTitle} specialDivider={<FlagDivider/>}>
      <Helmet title="Típicos costarricenses" defer={false} />
      
      <div className="traditional-food">
        {
        edges.map((data) => {
          const title = data.node.frontmatter.title;
          const image = data.node.frontmatter.image;
          const content = data.node.excerpt.substring(0, 200);
            return (<TraditionalCard key={title} title={title} content = {content} image={image}></TraditionalCard>)
          })
        }
      </div>
      <Bio />
    </Layout>
  );
};



export default Traditional;

export const pageQuery = graphql`
  query traditional {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { categories: { eq: "Típicos costarricenses" } } }) {
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

// export const pageQuery = graphql`
//   query traditional ($folder: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(frontmatter: {categories: {eq: "Típicos costarricenses"}}) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//         featuredImgAlt
//         featuredImgUrl
//       }
//     }
//     allCloudinaryMedia(filter: {public_id: { regex: $folder}}) {
//       edges {
//         node {
//           secure_url
//           public_id
//         }
//       }
//     }
//   }
// `;

