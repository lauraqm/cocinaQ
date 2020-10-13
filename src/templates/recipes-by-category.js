import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "./recipes-by-category.scss";

// Components
import { Link, graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import groupBy from "lodash/groupBy";
import SEO from "../components/seo";

const RecipesByCategory = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { edges } = data.allMarkdownRemark;


  //Group by first letter
  const groupByLetter = groupBy(edges, "node.frontmatter.title[0]");

  //Process data to organize by first letter
  const result = [];
  for (var key in groupByLetter) {
    let group = groupByLetter[key];
    const nodes = [];
    group.map(({ node }) => {
      const { slug } = node.fields;
      const { title } = node.frontmatter;
      nodes.push(
        <div className='recipe-title' key={slug}>
          <Link to={slug}>{title}</Link>
        </div>
      );
    });

    result.push(
      <div className='alphabeth-container'>
        <div key="key" className="index-letter">
          {key}
        </div>
        {nodes}
      </div>
    );
  }
  debugger
  let title;
  if (pageContext.category) {
    title = pageContext.category.replaceAll('/', '');
  }
  else {
    title = siteTitle;
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Recetas costarricenses" />
      <Helmet title={title} defer={false} />
      <div className='recipe-index'>
        {result}
      </div>
      <Bio />
    </Layout>
  );
};

RecipesByCategory.propTypes = {
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

export default RecipesByCategory;

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
      filter: { frontmatter: { categories: {  regex: $category } } }
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
