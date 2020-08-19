import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import "./blog-post.scss";
import Img from "gatsby-image";
import { Collapse } from 'antd';




const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const { Panel } = Collapse;
  const images = data.allCloudinaryMedia.edges;
  let gallery;

  //If there are images we will to create a panel for them
  if (images != null && images.length >0) {
    let allImages = [];
    for (var key in images) {
      let image = images[key];
      let {secure_url, public_id} = image.node;
      if (secure_url) {
        let url = secure_url.replace('q_auto,f_auto', 'c_scale,w_500');
        allImages.push (
          <div className='recipe-process-image' key= {`${key}-gallery`}>
            <img src = {url}></img>
          </div>
        );
      }
    }
    gallery = (
    <Collapse>
      <Panel header="Ver imágenes del proceso de esta receta" >
        <h4>{post.frontmatter.title}</h4>
        {allImages}
      </Panel>
    </Collapse>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="blog-post">
        <article>
          <header>
            <h1 style={{ marginTop: rhythm(1),marginBottom: 0}}>
              {post.frontmatter.title}
            </h1>
            <p className="date" style={{...scale(-1 / 5), display: `block`,marginBottom: rhythm(1)}}>
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          {gallery}
          <hr style={{ marginBottom: rhythm(1) }} />
          <Bio />
        </article>
      </div>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $folder: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImgAlt
        featuredImgUrl
      }
    }
    allCloudinaryMedia(filter: {public_id: { regex: $folder}}) {
      edges {
        node {
          secure_url
          public_id
        }
      }
    }
  }
`;
