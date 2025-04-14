import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const location = useLocation();
  const pathname = location.pathname;

  // Tentukan judul dan path breadcrumb berdasarkan URL
  let title = "";
  let breadcrumb = "";

  if (pathname === "/MediaPartner") {
    title = "Media Partner";
    breadcrumb = "Media Partner";
  } else if (pathname === "/KerjaSama") {
    title = "Form Kerja Sama";
    breadcrumb = "Kerja Sama";
  } else if (pathname === "/Berita") {
    title = "Berita";
    breadcrumb = "Berita";
  } else {
    title = "Halaman";
    breadcrumb = "Halaman";
  }

  return (
    <>
      <div className="breadcrumb">
        <a href="#">Pages</a>
        <span>/</span>
        <span>{breadcrumb}</span>
      </div>
      <h1 className="page-title">{title}</h1>
    </>
  );
}
