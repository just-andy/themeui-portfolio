/** @jsx jsx */
import { jsx, Flex, Container, Box } from "theme-ui"
import Layout from "../components/Layout"

import SEO from "../components/Seo"
import { Link } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Got your mail"
      description="I've received your mail and will be in touch soon."
    />
    <Container>
      <Flex sx={{ alignItems: "center", my: 2 }}>
        <Box>
          <h1>Got your mail</h1>
          <p>
            Thanks for dropping me a email, I will get back to you as soon as
            possible.
          </p>
          <Box sx={{ pt: [2, 4] }}>
            <Link to="/" sx={{ variant: "styles.hollow" }}>
              Back to the homepage
            </Link>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Layout>
)
