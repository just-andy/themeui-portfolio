import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"

const CaseStudies = ({data}) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <h1>Awesome MDX Blog</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
  
}


export const studiesQuery = graphql`
query studiesIndex {
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
`
export default CaseStudies