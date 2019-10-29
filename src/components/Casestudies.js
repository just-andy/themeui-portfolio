/** @jsx jsx */
import { jsx} from "theme-ui"
import Grid from "../components/elements/Grid"
import Card from "../components/elements/Card"

import { graphql, useStaticQuery } from "gatsby"


const Casestudies = ({data}) => {
    
    const response = useStaticQuery(pageQuery);
    const posts = response.allMdx.edges
    
    

    return (
        <Grid>
            {posts.map(({node:post}) => (
                 <Card id={post.id} title={post.frontmatter.title} slug={post.frontmatter.slug} excerpt={post.excerpt} />
            ))}
        </Grid>
    )
}

export default Casestudies

export const pageQuery = graphql`
query caseIndex {
    allMdx {
      edges {
        node {
            excerpt
            id
          frontmatter {
            title
            slug
            category
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            
            }
          }
        }
      }
    }
  }
`