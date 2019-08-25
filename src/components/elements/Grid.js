/** @jsx jsx */
import { jsx } from "theme-ui"
export default props => (
  <div
    sx={{
      display: "grid",
      gridGap: [3,4], // theme.space[4]
      // use arrays for mobile-first responsive styles
      gridTemplateColumns: [
        "auto", // default to a stacked layout on small screens
        "1fr", // use columns for larger screens
        "1fr 1fr", // use columns for larger screens
      ],
    }}
  >
    {props.children}
  </div>
)
