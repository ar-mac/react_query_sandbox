import { Link } from '@reach/router'
import cn from 'classnames'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      className: cn('NavLink', { ActiveNavLink: isCurrent }),
    })}
  />
)

export default NavLink
