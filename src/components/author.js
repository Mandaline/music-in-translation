import React from "react"


const Author = ({
  info: {
    frontmatter: { name, shortbio, authorimage }
  },
}) => {
  return (
    <div className="author">
      <img src={authorimage.publicURL} alt={name}/>
      <div className="author-meta">
        <h3>{name}</h3>
        <p>{shortbio}</p>
      </div>
   </div>
  )
}
export default Author