import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostLink = ({ post }) => {
  const image = post.frontmatter.thumbnail.childImageSharp.gatsbyImageData
  console.log(post.frontmatter.thumbnail)
  return (
  <article className="card">
    <Link to={`/${post.frontmatter.slug}`}>
      {!!post.frontmatter.thumbnail && (
        <GatsbyImage image={image} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      
        <h2 className="post-title">
          <Link to={`/${post.frontmatter.slug}`} className="post-link">
            {post.frontmatter.title}
          </Link>
        </h2>
      <div className="post-meta">
        <span className="post-author">{post.frontmatter.author}</span>
        <span className="post-country">{post.frontmatter.country}</span>
      </div>  
    </header>
  </article>
  )
}
export default PostLink
