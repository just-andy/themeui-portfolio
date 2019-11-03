/** @jsx jsx */
import { jsx, Flex, Container, Box } from "theme-ui"
import Layout from "../components/Layout"

import SEO from "../components/Seo"
import Form from "../components/Form"

import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <SEO
      title="About Andy Cetnarskyj"
      description="Andy has been around the digital block for a while and this is a bit of a potted history."
    />
    <Container>
      <Flex sx={{ alignItems: "center", my: 2 }}></Flex>
      <h1 sx={{variant:"styles.h2"}}>The Backstory</h1>
      <Img
        sx={{ mb: 4 }}
        fluid={data.file.childImageSharp.fluid}
        sizes={{ ...data.file.childImageSharp.fluid, aspectRatio: 21 / 9 }}
        alt="Family photo"
        title="Photo"
      />
      <p>
        A bit more about me After completing an Honours Degree in Consumer
        Product Design, I started freelancing in Web Design and paid my dues to
        a few agencies. Remember IE6 bug's and designing with tables... yes I
        did that.
      </p>
      <p>
        I was fortunate enough to land a role based in Gibraltar with William
        Hill, one of the UK's largest bookmakers. During my eight years, I
        worked my way up to the Sportsbook UX Lead. My time in the Med allowed
        me to make significant strides in my career. Building teams, managing in
        remote and in-house teams all the while championing UX with changing
        leadership.
      </p>
      <h2 sx={{variant:"styles.h3"}}>Back home</h2>
      <p>
        After a long time away, it was time to return home with my wife and son
        into the growing tech scene in Scotland. I'm now fortunate enough to be
        focused on building out the design system for Wood Mackenzie, one of the
        world's leading energy consultancies.
      </p>
      <p>
        Throughout my career, I've always loved the technical side of digital
        design. I continue to build out small sites and side projects to keep my
        skills on point; you are more likely to find me in Github that Dribbble.
        Thanks for taking the time to check out my work, if you would like to
        discuss a project, please get in touch.
      </p>
      <p> My full career history is on <a title="Linked In Profile" sx={{variant: "styles.navlink"}} href="https://www.linkedin.com/in/andrewcetnarskyj/">Linked In</a> or you can dowload my <a title="Latest CV" sx={{variant: "styles.navlink"}}   href="/andrew-cetnarskyj-oct-19.pdf">most recent resume.</a></p>
      <Box>
        <Form />
      </Box>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "profile-photo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
