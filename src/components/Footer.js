/** @jsx jsx */
import { jsx, Footer, Flex, Container } from "theme-ui"
import {
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiCodepen,
  FiGithub,
} from "react-icons/fi"


const SiteFooter = () => (

  const d = new Date();
  const thisYear = d.getFullYear();
  
  <Footer>
    <Container>
      <hr />
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          variant: "styles.footer",
          mt: 3,
        }}
      >
        Stalk me at:
      </Flex>
      <Flex
        sx={{
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          variant: "styles.footer",
          py: 3,
        }}
      >
        <a
          sx={{ variant: "styles.navlink", fontSize: 4, mx: [2, 3] }}
          href="https://twitter.com/justandydesign1"
          title="Just Andy Twitter Page"
          target="_blank"
          rel="noopener noreferrer me"
        >
          <FiTwitter />
        </a>
        <a
          sx={{ variant: "styles.navlink", fontSize: 4, mx: [2, 3] }}
          href="https://www.instagram.com/gunkdesign/"
          title="Andrew Cetnarskyj's Instagram"
          target="_blank"
          rel="noopener noreferrer me"
        >
          <FiInstagram />
        </a>
        <a
          sx={{ variant: "styles.navlink", fontSize: 4, mx: [2, 3] }}
          href="https://www.linkedin.com/in/andrewcetnarskyj/"
          title="Andrew Cetnarskyj Linked In Profile"
          target="_blank"
          rel="noopener noreferrer me"
        >
          <FiLinkedin />
        </a>
        <a
          sx={{ variant: "styles.navlink", fontSize: 4, mx: [2, 3] }}
          href="https://codepen.io/andy_cet"
          title="Andrew Cetnarskyj Codepen Profile"
          target="_blank"
          rel="noopener noreferrer me"
        >
          <FiCodepen />
        </a>
        <a
          sx={{ variant: "styles.navlink", fontSize: 4, mx: [2, 3] }}
          href="https://github.com/just-andy"
          title="Andrew Cetnarskyj Github Profile"
          target="_blank"
          rel="noopener noreferrer me"
        >
          <FiGithub />
        </a>
      </Flex>
      <Flex
        sx={{
          color: "text",
          fontSize: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        &copy; {thisYear} Andrew Cetnarskyj &middot; * Auld Reekie = Edinburgh
      </Flex>
    </Container>
  </Footer>
)

export default SiteFooter