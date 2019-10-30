/** @jsx jsx */
import { jsx,Container} from "theme-ui"
import Layout from "../Layout"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PageTemplate({ data: { mdx } }) {
 
 <Layout>
        <Container>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Link to="/">Back to home</Link>
        </Container>
</Layout>
  
}

export const pageQuery = graphql`
  query projectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`