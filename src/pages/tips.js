import React from "react";
import { Helmet } from "react-helmet";

// Components
import { graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import TipCard from "../components/tipCard";
import SEO from "../components/seo";

const Tips = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tips de cocina"  description="Tips de cocina valiosos para principiantes"/>
      <Helmet title="Tips de cocina" defer={false} />
      <div>
        <p>Uno de los factores que hacen que las personas se sientan abrumadas por la cocina, es que 
          generalmente hay pequeños trucos o tips que desconocen. Esta sección esta destinada a dar consejos
          prácticos para ayudarnos a la hora de cocinar o incluso de seleccionar los ingredientes para 
          crear las mejores recetas. 
        </p>
      </div>
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { regex: "/Tips/" } } }) {
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
