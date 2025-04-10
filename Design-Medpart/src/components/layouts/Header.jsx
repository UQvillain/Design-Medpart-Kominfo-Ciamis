import { Routes, Route, Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../../assets/images/logo-icon.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Mitra Kominfo Logo" className="logo" />

          <div className="tulisan">
            <h4>Mitra Kominfo</h4>
            <span>Dinas Komunikasi dan Informatika Ciamis</span>
          </div>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/MediaPartner">Media Partner</Link>
          <Link to="/KerjaSama">Kerja Sama</Link>
          <Link to="/Berita">Berita</Link>
        </nav>

        <div className="right-nav">
          

      

          <div className="account-dropdown">
            <button className="account-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              +Account
            </button>

            <div className="dropdown-menu" id="dropdownMenu">
              <Link to="/SignUp">Register</Link>
              <Link to="/Login">Login</Link>
            </div>
          </div>
          <HamburgerMenu />
        </div>
      </header>
    </>
  );
}
