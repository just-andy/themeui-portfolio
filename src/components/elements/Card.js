/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Card = ({ id, title, slug, excerpt, img }) => (
  <article
    id={id}
    sx={{
      backgroundColor: "white",
      boxShadow: "0 0 4px rgba(0, 0, 0, 0.125)",
    }}
  >
    <Link to={slug}>
      <Img fluid={img} title={title} alt="Project Thumbnail" />
    </Link>

    <div sx={{ p: [2, 3] }}>
      <Styled.h3>
        <Link to={slug} sx={{ variant: "styles.navlink" }}>
          {title}
        </Link>
      </Styled.h3>
      <p>{excerpt}</p>
      <footer sx={{ mt: 2, fontSize: 2 }}>
        <Link to={slug} sx={{ variant: "styles.navlink" }}>
          Read on...
        </Link>
      </footer>
    </div>
  </article>
)

export default Card
