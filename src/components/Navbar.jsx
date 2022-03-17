import {Link} from "react-router-dom"
const links = [
  {
    title: "Home",
    to: "/home",
    id: "header-link-home",
  },
  {
    title: "About",
    to: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    to: "/movies",
    id: "header-link-movies",
  },
 
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <>
      {links.map(({ title, to }, index) => {
        return (
          <Link key={index} to={to}>
            {title}
          </Link>
        );
      })}
    </>
    //map through the link ad display it in header
  );
};


export default Navbar;