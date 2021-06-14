import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Author from "../components/author"
import { postContent } from  '../styles/components/blog-template.module.scss';

export default function Template({
  data, pageContext
}) {
  const { site, markdownRemark } = data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark
  const author = pageContext.author.node

  //const image = frontmatter.thumbnail.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-author">{frontmatter.author}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail.publicURL})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-author">{frontmatter.author}</div>
            </div>
          )}
          <div
            className={postContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <Author info={author}/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        country
        tags
        thumbnail {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 786)
          }
        }
        metaDescription
      }
    }
  }
`