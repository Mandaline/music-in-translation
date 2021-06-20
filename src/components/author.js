import React from "react"
import { authorWrap, imageWrap, authorMeta } from '../styles/components/author.module.scss';

const Author = ({
  info: {
    frontmatter: { name, shortbio, authorimage }
  },
}) => {
  return (
    <div className={authorWrap}>
      <div className={imageWrap}>
        <img src={authorimage.publicURL} alt={name}/>
      </div>
      <div className={authorMeta}>
        <h3>{name}</h3>
        <p>{shortbio}</p>
      </div>
   </div>
  )
}
export default Author