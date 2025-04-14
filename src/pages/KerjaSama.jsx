import React from "react";
import PageTitle from "../components/layouts/PageTitle";
import { Link } from "react-router-dom"; // pastikan ini ada di paling atas

export default function KerjaSama() {
  return (
    <>
      <main className="main-content-kerjasama">
        <PageTitle />

        <div className="content-center">
          <p className="content-text">
            Tautkan akun terlebih dahulu untuk mulai bekerja sama dengan kami.
            Ikuti langkah-langkah bekerja sama pada menu home, atau klik tombol
            <strong> “Bekerja sama”</strong> di bawah ini.
          </p>
          <Link to="/KerjaSamaLogin" className="bekerja-sama-btn">
            Bekerja sama
          </Link>
        </div>
      </main>
    </>
  );
}
