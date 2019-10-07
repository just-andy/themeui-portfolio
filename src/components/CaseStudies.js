import React from 'react'
import { Link, graphql } from "gatsby"

const CaseStudies = ({data}) => {
    console.log(data);
}

export default CaseStudies
 

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
