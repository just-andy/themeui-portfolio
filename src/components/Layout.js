/** @jsx jsx */
import { jsx, ThemeProvider, Styled, Layout, Main, Container } from "theme-ui"
import { Global } from "@emotion/core"
import theme from "../theme"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Global />
      <Layout>
        <Global />
        <Header />
        <Main>
          <Container>{props.children}</Container>
        </Main>
        <Footer />
      </Layout>
    </Styled.root>
  </ThemeProvider>
)
