/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"


const Card = () => (
  <article
    sx={{
      backgroundColor: "white",
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.125)',
    }}
  >
    <div sx={{ backgroundColor: "#ccc", height: 200 }}>Image</div>
    <div sx={{p:[2,3]}}>
      <Styled.h3><Link to="/" sx={{variant: "styles.navlink"}}>Card Title</Link></Styled.h3>
      <p>lorem impsum</p>
      <footer sx={{ mt: 2, fontSize: 2 }}>
        <Link to="/" sx={{variant: "styles.navlink"}}>View Article</Link>
      </footer>
    </div>
  </article>
)

export default Card