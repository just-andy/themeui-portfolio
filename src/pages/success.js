/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import Layout from "../components/Layout"

import SEO from "../components/Seo"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Got your mail"
      description="I've received your mail and will be in touch soon."
    />
    <Container>
      <Flex sx={{ alignItems: "center", my: 2 }}></Flex>
      <h1>Got your mail</h1>
    </Container>
  </Layout>
)
