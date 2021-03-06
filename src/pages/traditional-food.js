import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

// Components
import SEO from "../components/seo";
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
      <SEO
        title="Típicos costarricenses"
        description="Recetas típicas o tradicionales de Costa Rica"
      />
      <Helmet title="Típicos costarricenses" defer={false} />
      <div className="description">
        <p>En esta sección podrás encontrar una selección de recetas de los platos costarricenses más famosos, elaborados de la manera más típica y casera posible, los cuales se han transmitido 
          de generación en generación. ¡Simplemente un gusto para el paladar!
        </p>
      </div>
      
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
      filter: { frontmatter: { categories: { regex: "/Típicos costarricenses/" } } }) {
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

