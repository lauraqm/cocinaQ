import React from "react";
import PropTypes from "prop-types";

// Components
import { Link, graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import groupBy from "lodash/groupBy";


const sortArrayByProperty = (array, property) => {
  return array.sort((a, b) => {
    return b[property] - a[property];
  });
}

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { category } = pageContext;
  const { edges } = data.allMarkdownRemark;

  //Group by first letter
  const groupByLetter = groupBy(edges, 'node.frontmatter.title[0]');
  console.log(groupByLetter);
  console.log ('First:::' , groupByLetter.A);
  return (
    <Layout location={location} title={siteTitle}>
      {edges.map(({ node }) => {
        const { slug } = node.fields;
        const { title } = node.frontmatter;
        return (
          <div key={slug}>
            <Link to={slug}>{title}</Link>
          </div>
        );
      })}

      <Link to="/categories">All tags</Link>

      <footer>
        <Bio />
      </footer>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
