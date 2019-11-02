/** @jsx jsx */
import { jsx, Header, Container, Box } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../images/logo-black-circle.svg"


export default () => (
<Header>
  <Container>
  <Box sx={{mx: "auto"}}>
      <Link to="/">
        <img alt="UI Logo" src={Logo} width="64" height="64" />
      </Link>
    </Box>
<Box sx={{mx: "auto",    maxWidth: 768,
      mx: 'auto',
      px: 3,
      display: 'flex',
      alignItems: 'baseline',}}>
  <Link to='/'
  activeClassName='active'
  sx={{
    variant: 'styles.navlink',
  }}>
    Work
  </Link>
  <Link to='/profile'
  activeClassName='active'
  sx={{
    variant: 'styles.navlink', ml: [3,4]
  }}>
    About
  </Link>
  <a
    sx={{variant: 'styles.navlink', ml: [3,4]}}
    href="/andrew-cetnarskyj-oct-19.pdf"
    title="View the latest CV"
  >
    Resume
  </a>
</Box>

  </Container>
</Header>
)