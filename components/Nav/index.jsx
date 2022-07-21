import ArchiveIcon from "@mui/icons-material/Archive";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
    <Nav className="nav">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <h2 className="nav-logo">JustForKicks</h2>
          </li>
          <li className="nav-item">Products</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Collab</li>
        </ul>

        <ul className="nav-icons">
          <li className="nav-icon">
            <ArchiveIcon />
          </li>
          <li className="nav-icon">
            <SearchIcon />
          </li>
          <li className="nav-icon">
            <MenuIcon />
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Nav;
