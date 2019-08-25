/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import Layout from "../components/Layout"

import Profile from "../images/profile.jpg"
import Button from "../components/elements/Button"

export default () => (
  <Layout>
<Container>
  <Flex sx={{alignItems:"center", my: 2, }} >
    <img src={Profile} alt="Andrew Cetnarskyj and family" />
    </Flex>


    <h1>About Andy</h1>
    <p>
      Please feel free to explore and find out what I’ve done for businesses big
      and small – and what I could do for you too. I won’t bore you with
      personal stuff – this is all about the work. However, some kind of potted
      CV is in order. So here goes:
    </p>

    <p>
      I have over 16 years’ experience with a wide variety of online projects
      (including seven years in online gaming/sports/betting sector). You’ll
      find a snapshot of them here.
    </p>

    <p>
      I love problem-solving UX/customer challenges; preferably working
      alongside product and dev teams - although I’m more than happy to fly solo
      if need be.
    </p>

    <p>
      I’m always up for a challenge and am happy to discuss any opportunities or
      projects – so let’s talk.
    </p>
    <Button sx={{variant: "buttons.primary"}}>View CV</Button>
  </Container>
  </Layout>
)
