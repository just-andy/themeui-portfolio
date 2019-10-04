/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title}/>
      <Container>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      </Container>
      
    </Layout>
  )
}

export const pageQuery = graphql`
  query CasePostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`