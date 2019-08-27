/** @jsx jsx */
import { jsx, Footer, Flex, Container } from "theme-ui"
import {FiTwitter, FiInstagram, FiLinkedin} from "react-icons/fi"

export default () => (
  <Footer>
    <Container>
      <hr />
      <Flex
        sx={{
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          variant: "styles.footer",
          py:3
        }}
      >
        <a sx={{variant: "styles.navlink", fontSize: 4, mx:2}} href="https://twitter.com/justandydesign1" title="Just Andy Twitter Page" target="_blank" rel="noopener noreferrer">
          <FiTwitter/>
        </a>
        <a sx={{variant: "styles.navlink", fontSize: 4, mx:2}} href="https://example.com" target="_blank" rel="noopener noreferrer">
        <FiInstagram/>
        </a>
        <a sx={{variant: "styles.navlink", fontSize: 4, mx:2}} href="https://example.com" target="_blank" rel="noopener noreferrer">
        <FiLinkedin/>
        </a>
      </Flex>
      <Flex sx={{color: "text", fontSize:1, alignItems: "center",
          justifyContent: "center",}}>
        &copy; 2019 Andrew Cetnarskyj &middot; * Auld Reekie = Edinburgh
      </Flex>
    </Container>
  </Footer>
)
