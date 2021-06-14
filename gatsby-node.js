const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              author
              name
              shortbio
              authorimage {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.allMarkdownRemark.edges;
  const blogs = posts.filter(post => post.node.frontmatter.template === 'BlogPost');
  const authors = posts.filter(post => post.node.frontmatter.template === 'Author');
  console.log("blogs", blogs)

  blogs.forEach(edge => {
    const url = `/${edge.node.frontmatter.slug}`
    createPage({
      path: url,
      component: blogPostTemplate,
      context: {
        slug: edge.node.frontmatter.slug,
        author: authors.find((author) => author.node.frontmatter.name === edge.node.frontmatter.author)
      }
    })
  })
}