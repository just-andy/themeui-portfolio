/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
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
        description={mdx.frontmatter.description}
      />
      <Img
        sx={{ mt: [3, 4] }}
        fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
      />

      <Container>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Flex sx={{ my: 2, justifyContent: "center", alignContent: "center" }}>
          <Link sx={{ variant: "styles.hollow" }} to="/">
            Back to home
          </Link>
        </Flex>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
      body
    }
  }
`
