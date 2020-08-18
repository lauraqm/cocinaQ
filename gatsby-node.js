const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  // This GraphQL query is used to retrieve the list of posts 
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  // This GraphQL query is used to retrieve the list of categories to generate 
  const categoryTemplate = path.resolve("./src/templates/category-list.js");

  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(limit: 2000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                featuredImgAlt
                featuredImgUrl
              }
            }
          }
        }
        categoryGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.postsRemark.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
        categories: post.node.categories,
      },
    });
  });

  // Extract tag data from query
  const categories = result.data.categoryGroup.group;
  // Make tag pages
  categories.forEach((cat) => {
    createPage({
      path: `/categories/${_.kebabCase(cat.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: cat.fieldValue,
      },
    });
  });
};

exports.onCreateNode = async ({ node, actions, getNode, store,cache,createNodeId, }) => {
  const { createNodeField, createNode } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }

  if (node.internal.type === "MarkdownRemark" && node.frontmatter.featuredImgUrl !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }

};


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }
    type Frontmatter {
      title: String!
      featuredImgUrl: String
      featuredImgAlt: String
    }
  `)
}

