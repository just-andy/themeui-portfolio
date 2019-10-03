/** @jsx jsx */
import { jsx, Header, Flex, Container } from "theme-ui"
import { Link } from "gatsby"

import Logo from "../images/logo-black-circle.svg"

export default () => (
  <Header>
    <Container sx={{ pb: 0 }}>
      <Flex
        sx={{
          justifyContent: "center",
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
            variant: "styles.hollow",
          }}
        >
          Work
        </Link>
        <Link
          to="/blog"
          sx={{
            variant: "styles.hollow",
          }}
        >
          Blog
        </Link>
        <Link
          to="/profile"
          sx={{
            variant: "styles.hollow",
          }}
        >
          Profile
        </Link>
      </Flex>
    </Container>
  </Header>
)
