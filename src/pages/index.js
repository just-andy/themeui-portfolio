/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import Layout from "../components/Layout"
import { Link } from "gatsby"

import Casestudies from "../components/Casestudies"

export default () => (
  <Layout>
    <Container>
      <h1
        sx={{
          fontFamily: "body",
          mx: [2, 0],
          mt: 0,
          fontWeight: 400,
          fontSize: [5, 6, 7],
          lineHeight: 1.25,
          textAlign: "center",
        }}
      >
        Andy is a Senior Product Designer from Auld Reekie*
      </h1>

      <Casestudies />

    </Container>

    

    <article>
      <Container>
        <header>
          <h2>A bit more about me</h2>
        </header>
        <div>
          <p>
            Please feel free to explore and find out what I’ve done for
            businesses big and small – and what I could do for you too. I won’t
            bore you with personal stuff – this is all about the work. However,
            some kind of potted CV is in order. So here goes:
          </p>

          <p>
            - I have over 16 years’ experience with a wide variety of online
            projects (including seven years in online gaming/sports/betting
            sector). You’ll find a snapshot of them here.
          </p>

          <p>
            - I love problem-solving UX/customer challenges; preferably working
            alongside product and dev teams - although I’m more than happy to
            fly solo if need be.
          </p>

          <p>
            - I’m always up for a challenge and am happy to discuss any
            opportunities or projects – so let's talk.
          </p>
        </div>
        <footer>
          <Link to="/profile" sx={{ variant: "styles.navlink" }}>
            A longer profile...
          </Link>
        </footer>
      </Container>
    </article>
  </Layout>
)
