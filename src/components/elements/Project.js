/** @jsx jsx */
import { jsx } from "theme-ui"

import thumb from "../../experience/user-experience/images/sketching.jpeg"

const Project = () => {
    return (
  <div sx={{p: [2, 3], display:["block", "flex"], justifyContent: "space-between", alignItems: "center"}}>
    <aside sx={{flex:[0, 0, "50%", "50%"]}} >
      <div sx={{display: "block", textAlign: "center", p:2}} >
        <img alt="dummy" sx={{width:"100%", height:"auto"}} src={thumb} />
      </div>
    </aside>
    <div sx={{flex:[0, 0, "50%", "50%"], mr:[0,0,4]}} >
      <h3>Header</h3>
      <p>But if I'm not Ada,' she said, `for her hair goes in such long ringlets, and mine doesn't go in ringlets at all; and I'm sure I can't be Mabel, for I know all sorts of things, and she, oh! `Are you--are you fond--of--of dogs?'</p>
      <p>The Mouse did not notice this question, but hurriedly went on, `"--found it advisable to go with Edgar Atheling to meet William and offer him the crown. "William the Conqueror, whose cause was favoured by the pope, was soon submitted to by the pope, was soon submitted to by the English, who wanted leaders, and had been running half an hour or so, and were quite dry again.
      </p>
    </div>
  </div>
    )
}

export default Project
