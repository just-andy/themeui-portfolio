/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import Layout from "../Layout"
import SEO from "../Seo"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
      />
      <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />

      <Container>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Link sx={{ variant: "styles.hollow" }} to="/">
          Back to home
        </Link>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
