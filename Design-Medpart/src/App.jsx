import "./App.css";
import Footer from "./components/layouts/Footer.jsx";
import Header from "./components/layouts/Header.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MediaPartner from "./pages/MediaPartner.jsx";
import KerjaSama from "./pages/KerjaSama.jsx";
import KerjaSamaLogin from "./pages/KerjaSamaLogin.jsx";
import Berita from "./pages/Berita.jsx";
import BeritaDetail from "./pages/BeritaDetail.jsx";
import { ScriptHandler } from "../src/Content.js";
import Login from "./pages/autentikasi/Login.jsx";
import SignUp from "./pages/autentikasi/SignUp.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MediaPartner" element={<MediaPartner />} />
        <Route path="/KerjaSama" element={<KerjaSama />} />
        <Route path="/Berita" element={<Berita />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/KerjaSamaLogin" element={<KerjaSamaLogin />} />
      </Routes>
      <Footer />
      <ScriptHandler /> {/* ✅ Tambahkan di sini */}
    </>
  );
}
