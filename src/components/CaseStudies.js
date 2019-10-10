import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query Studies {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                featureImage
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>Awesome MDX Blog</h1>
        <ul>
          <li>
            <Link to={data.edges.node.fields.slug}>
              <h2>{data.edges.node.frontmatter.title}</h2>
            </Link>
            <p>{data.edges.node.excerpt}</p>
          </li>
        </ul>
      </div>
    )}
  />
)
