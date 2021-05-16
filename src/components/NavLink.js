import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      style: { color: isCurrent ? "#00A19C" : "#000" }
    })}
  />
);

export default NavLink
