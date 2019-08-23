/** @jsx jsx */
import { jsx, Footer, Container } from "theme-ui"
import { Link } from "gatsby"

export default () => (
  <Footer>
    <Container>
      <footer
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          variant: "styles.footer",
        }}
      >
        <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
          Home
        </Link>
        <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
          Blog
        </Link>
        <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
          About
        </Link>
      </footer>
    </Container>
  </Footer>
)
