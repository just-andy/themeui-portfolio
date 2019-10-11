import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "../components/elements/Grid"
import Card from "../components/elements/Card"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              title
              featureImage
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
    <Grid>
      {posts.map(({ node: post }) => (
        <Card
          id={post.id}
          title={post.frontmatter.title}
          excerpt={post.excerpt}
          slug={post.fields.slug}
        />
      ))}
    </Grid>
  )
}
