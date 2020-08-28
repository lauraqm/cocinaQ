import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link, graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SearchBar from "../components/searchBar";
import SEO from "../components/seo";
import "../styles/override-ant-desing.scss";
import { rhythm } from "../utils/typography";


const AllRecipes = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  let allPosts = data.allMarkdownRemark.edges || [];
  let filteredData = [];
  const [state, setState] = useState({ filteredData: allPosts, query: ""});

  const handleInputChange = (event) => {
    console.log("in here")
    const query = event.target.value;
    // return all filtered posts
    filteredData = allPosts.filter((post) => {
      const { description, title} = post.node.frontmatter;
      return (
        //description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) 
      );
    });
    setState({filteredData, query});
  };

 
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Recetas costarricenses" />
      <Helmet title="Todas las recetas" defer={false} />
      <SearchBar eventFunction={handleInputChange}></SearchBar>
      {state.filteredData.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug} style={{ marginTop: `40px` }}>
            <header>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
      <Bio />
    </Layout>
  );
};

export default AllRecipes;

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
    allMarkdownRemark(
      filter: { frontmatter: { categories: { ne: "Tips" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
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
`;
