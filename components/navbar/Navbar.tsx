import Logo from "./Logo";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

function Navbar() {
  return <nav className="border-b">
    <div className='container flex flex-col sm:flex-row sm: justify-between
    sm:items-center py-4 flex-wrap gap-4'>
        <Logo />
        <NavSearch />
        <div className="flex items-center gap-4">
            <DarkMode />
            <LinksDropdown />
        </div>
    </div>
  </nav>
}

export default Navbar;

