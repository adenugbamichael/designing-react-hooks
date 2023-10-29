import MenuItem from "./menuItem"
import { useData } from "../context/Context"

function Menu() {
  const { links } = useData()
  return (
    <nav>
      <ul className='menu'>
        {links.map(({ title, ...props }) => (
          <MenuItem key={title} {...props}>
            {title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
