import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import "./blog-post.scss";
import Img from "gatsby-image";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  const images = data.allCloudinaryMedia.edges;
  console.log(images);

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
          {/* <Img
              className='featured-image'
              fixed={data.markdownRemark.featuredImg.childImageSharp.fixed}
              alt={data.markdownRemark.frontmatter.featuredImgAlt}
              style={{position: 'relative', height: '150px', width: '150px'}}
            /> */}
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
        }
      }
    }
  }
`;
