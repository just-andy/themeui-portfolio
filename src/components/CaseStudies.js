import React from "react"
import {Link, useStaticQuery, graphql } from "gatsby"


export default () => {
  const data = useStaticQuery(graphql`
  {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  // Clean up the data
  const { edges: posts } = data.allMdx

  return (
    <header>
       {posts.map(({ node: post }) => (
         <li id={post.id}>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.excerpt}</p>
      <Link to={post.fields.slug} >Read more </Link>
      </li>
  ))}
    </header>
  )
}