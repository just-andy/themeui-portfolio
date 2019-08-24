/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

import Grid from "../components/elements/Grid"
import Card from "../components/elements/Card"

export default () => (
  <Layout>
    <div sx={{fontFamily:"heading", fontSize:[6,8], textAlign:["left", "center"]}}>
      I make things online
    </div>

    <div>
    <h1>Heading 1</h1>
    <p>
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
    </div>
    <h2>Case Studies</h2>
    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
  
    </Grid>
  </Layout>
)
