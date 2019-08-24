/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"


const Card = () => (
  <article
    sx={{
      backgroundColor: "white",
      padding: 2,
      borderRadius: "0.5em"
    }}
  >
    <div sx={{ backgroundColor: "#ccc", height: 200 }}>Image</div>
    <Styled.h3><Link to="/">Card Title</Link></Styled.h3>
    <p>lorem impsum</p>
    <footer sx={{ mt: 2, fontSize: 2 }}>
      <Link to="/" sx={{variant: "styles.navlink"}}>View Article</Link>
    </footer>
  </article>
)

export default Card
