import React from "react";
import { Helmet } from "react-helmet";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import "./blog-post.scss";
import { Collapse } from 'antd';
import ImageModal from '../components/imageModal';


const BlogPostTemplate = (props) => {
  const { data, pageContext, location } = props;
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { Panel } = Collapse;
  const images = data.allCloudinaryMedia.edges;
  let gallery;

  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [modalUrl,setModalUrl] = React.useState();

  const handleClick = (url) => {
    openModal(url);
  }
 
  const openModal = (url)=> {
    setIsOpen(true);
    setModalUrl(url);
  }

  const closeModal = ()=>{
    setIsOpen(false);
  }


  //If there are images we will to create a panel for them
  if (images != null && images.length >0) {
    let allImages = [];
    for (var key in images) {
      let image = images[key];
      let {secure_url} = image.node;
      if (secure_url) {
        let url = secure_url.replace('q_auto,f_auto', 'c_scale,w_500');
        allImages.push (
          <div className='recipe-process-image' key= {`${key}-gallery`} onClick={ () => { handleClick (url) } } >
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
      <Helmet title= {post.frontmatter.title} defer={false} />
      <div className="blog-post" id = "recipe">
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
      <ImageModal 
        isOpen={modalIsOpen}
        url={modalUrl}
        onClose ={closeModal}
      >
      </ImageModal>
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
    markdownRemark(fields: { slug: { eq: $slug } } ) {
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
