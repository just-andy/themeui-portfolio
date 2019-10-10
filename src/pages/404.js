/** @jsx jsx */
import { jsx, Flex, Container, Box } from "theme-ui"
import Layout from "../components/Layout"

import SEO from "../components/Seo"
import { Link } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO
      title="404 Page"
      description="Sorry, it looks like you found a broken page."
    />
    <Container>
      <Flex sx={{ alignItems: "center", justifyContent: "center", my: 2 }}>
        <Box>
          <h1>Oops something has gone wrong</h1>
          <p>
            Sorry, it looks like something hasn't went to plan. Maybe the link
            is old or has been update.
          </p>
          <Box sx={{ pt: [2, 4] }}>
            <Link to="/" sx={{ variant: "styles.hollow" }}>
              Head to the homepage
            </Link>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Layout>
)
