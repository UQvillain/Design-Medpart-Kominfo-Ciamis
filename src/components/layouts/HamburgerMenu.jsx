import { useState } from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="hamburger-wrapper">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {isOpen && (
        <div className="hamburger-menu">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/MediaPartner" onClick={toggleMenu}>
            Media Partner
          </Link>
          <Link to="/KerjaSama" onClick={toggleMenu}>
            Kerja Sama
          </Link>
          <Link to="/Berita" onClick={toggleMenu}>
            Berita
          </Link>
        </div>
      )}
    </div>
  );
}
