/** @jsx jsx */
import { jsx, ThemeProvider, Styled, Layout, Main, Container } from "theme-ui"
import { Global } from "@emotion/core"
import theme from "../theme"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>
   
      <Global />
      <Helmet>
          <meta charSet="utf-8" />
          <title>Andrew Cetnarskyj</title>
        </Helmet>

      <Layout>
        <Global />
        <Header />
        <Main>
          {props.children}
        </Main>
        <Footer />
      </Layout>

    </Styled.root>
  </ThemeProvider>
)
