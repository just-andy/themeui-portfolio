/** @jsx jsx */
import { jsx, Header, Flex, Container } from "theme-ui"
import { Link } from "gatsby"

import Logo from "../images/logo-black-circle.svg"

export default () => (
  <Header>
    <Container>
      <header
        sx={{
          py: 4,
          variant: "styles.header",
        }}
      >
        <Flex
          sx={{
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Link to="/" title="Home">
            <img alt="UI Logo" src={Logo} width="94" height="94" />
            <span
              sx={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                top: -9999,
              }}
            >
              Home
            </span>
          </Link>
        </Flex>
        <Flex
          sx={{
            justifyContent: "center",
          }}
        >
          <Link
            to="/"
            sx={{
              variant: "styles.navlink",
              p: 2,
            }}
          >
            Work
          </Link>
          <Link
            to="/blog"
            sx={{
              variant: "styles.navlink",
              p: 2,
            }}
          >
            Blog
          </Link>
          <Link
            to="/about"
            sx={{
              variant: "styles.navlink",
              p: 2,
            }}
          >
            About
          </Link>
        </Flex>
      </header>
    </Container>
  </Header>
)
