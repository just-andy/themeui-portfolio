/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import Layout from "../components/Layout"

import SEO from "../components/Seo"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Design Systems"
      description="Andy has been around the digital block for a while and this is a bit of a potted history."
    />
    <Container>
      <Flex sx={{ alignItems: "center", my: 2 }}></Flex>
      this is a design system
    </Container>
  </Layout>
)