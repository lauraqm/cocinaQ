import React, { useEffect } from "react";
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
  const [searchByIngredient, setSearchByIngredient] = useState(false);
  
  const filterData = (query) => {
    // return all filtered posts
    filteredData = allPosts.filter((post) => {
      const { description, title} = post.node.frontmatter;
      let { html } = post.node;
      if (searchByIngredient) {
        //Get the ingredients section
        html = html.substring(
          html.lastIndexOf("Ingredientes") + 1, 
          html.lastIndexOf("Indicaciones")
        );
        return (
          description.toLowerCase().includes(query.toLowerCase()) ||
          title.toLowerCase().includes(query.toLowerCase()) ||
          html.toLowerCase().includes(query.toLowerCase())
        );
      }
      else {
        return (
          description.toLowerCase().includes(query.toLowerCase()) ||
          title.toLowerCase().includes(query.toLowerCase())
        );
      }
    });
    setState({filteredData, query});
  }

  const handleInputChange = (event) => {
    const query = event.target.value;
    filterData (query);
  };

  const ingredientHandler = (isActive) => {
    setSearchByIngredient (isActive);
  };

  useEffect (() => {
    filterData (state.query);
  }, [searchByIngredient]);

 
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Recetas costarricenses" />
      <Helmet title="Todas las recetas" defer={false} />
      <SearchBar onInputChange={handleInputChange} onIngredientToggleChange={ingredientHandler}></SearchBar>
      {state.filteredData.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <React.Fragment>
            <SEO title={node.frontmatter.title}  />
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
          </React.Fragment>
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
          html
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
