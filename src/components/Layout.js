/** @jsx jsx */
import { jsx, ThemeProvider, Styled, Layout as DefaultLayout, Main, Container } from "theme-ui"
import { Global, css } from "@emotion/core"
import theme from "../theme"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>
   
      <Global styles={css`
          body: {
            margin:0;
          }
      `} />
      <Helmet>
          <meta charSet="utf-8" />
          <title>Andrew Cetnarskyj</title>
        </Helmet>

      <DefaultLayout>
        <Global />
        <Header />
        <Main>
          {props.children}
        </Main>
        <Footer />
      </DefaultLayout>

    </Styled.root>
  </ThemeProvider>
)
