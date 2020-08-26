const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  // This GraphQL query is used to retrieve the list of posts 
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  // This GraphQL query is used to retrieve the list of categories to generate 
  const categoryTemplate = path.resolve("./src/templates/recipes-by-category.js");

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
                title
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
        folder: `/${post.node.frontmatter.title}/`, //To get photos from cloudinary
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

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField, createNode } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }

};



