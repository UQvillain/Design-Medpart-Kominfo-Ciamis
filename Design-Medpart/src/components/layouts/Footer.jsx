import logo from "../../assets/images/logoDiskominfo.png";
import { Link } from "react-router-dom";
import { Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Kontak */}
        <div className="footer-section">
          <h3>Kontak</h3>
          <p>
            <i className="fa-solid fa-map-marker-alt"></i> Jl. Ciamis
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +62 1212 2322 122
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> Diskominfo@gmail.com
          </p>
          <div className="social-links">
            <a
              href="https://www.youtube.com/channel/UCSb8P6dEXQbRdrnOXhE3UWQ"
              aria-label="Youtube"
            >
              <i className="fa-brands fa-youtube fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/diskominfo_cms/"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://www.tiktok.com/@diskominfo_ciamis"
              aria-label="Tiktok"
            >
              <i className="fa-brands fa-tiktok fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="footer-section">
          <h3>Info</h3>
          <p>
            Website ini dirancang dengan tujuan memperkenalkan media partner
            antara dinas yang bersangkutan dengan Diskominfo Kabupaten Ciamis.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Links</h3>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <br />
          <Link
            to="/MediaPartner"
            style={{ color: "white", textDecoration: "none" }}
          >
            Media Partner
          </Link>
          <br />
          <Link
            to="/KerjaSama"
            style={{ color: "white", textDecoration: "none" }}
          >
            Kerja Sama
          </Link>
          <br />
          <Link to="/Berita" style={{ color: "white", textDecoration: "none" }}>
            Berita
          </Link>
        </div>

        {/* Logo */}
        <div className="footer-section">
          <img
            src={logo}
            alt="Mitra Kominfo Logo"
            className="logo"
            style={{ maxWidth: "13rem" }}
          />
          <br />
          <span>Copyright © 2025 Pendaftaran Kerjasama Media Version 1.0</span>
        </div>
      </div>
    </footer>
  );
}
