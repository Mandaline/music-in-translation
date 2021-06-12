import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card">
    <Link to={`/${post.frontmatter.slug}`}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={`/${post.frontmatter.slug}`} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
)
export default PostLink
