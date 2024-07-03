import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const Navbar = () => {
  console.log(`Navbar rendered`);
  return (
    <div className="flex justify-between px-5 my-5">
      <NavLinks />
      <NavSearch />
    </div>
  );
};