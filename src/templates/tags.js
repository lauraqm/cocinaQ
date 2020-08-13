// import React from "react"
// import PropTypes from "prop-types"

// // Utilities
// import kebabCase from "lodash/kebabCase"

// // Components
// import { Helmet } from "react-helmet"
// import { Link, graphql } from "gatsby"

// const TagsPage = ({
//   data: {
//     allMarkdownRemark: { group },
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }) => (
//   <div>
//     <Helmet title={title} />
//     <div>
//       <h1>Categories</h1>
//       <ul>
//         {group.map(tag => (
//           <li key={tag.fieldValue}>
//             <Link to={`/categories/${kebabCase(tag.fieldValue)}/`}>
//               {tag.fieldValue} ({tag.totalCount})
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// )

// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

// export default TagsPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 2000) {
//       group(field: frontmatter___categories) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `


import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/categories">All tags</Link>
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
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
}

export default Tags

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
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
`