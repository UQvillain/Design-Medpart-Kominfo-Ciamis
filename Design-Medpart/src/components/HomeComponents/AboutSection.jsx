import { Newspaper, Handshake, Megaphone } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      <section className="section section-blue">
        <div className="container">
          <div className="about-text">
            <h2>Tentang Website</h2>
            <p>
              Kerjasama Media Dinas Komunikasi dan Informatika Kabupaten Ciamis
              adalah inisiatif strategis yang bertujuan untuk membangun
              kemitraan yang kuat antara pemerintah daerah dan media. Melalui
              kerjasama ini, diharapkan tercipta sinergi yang positif dalam
              penyebaran informasi, edukasi masyarakat, serta peningkatan
              transparansi dan akuntabilitas publik.
              <span>
                <br />
                <br />
                Program kerjasama ini mencakup berbagai kegiatan, seperti
                pelatihan media, penyebaran berita dan informasi resmi, serta
                kolaborasi dalam kampanye publik.
              </span>
              <span>
                <br />
                <br />
                Kerjasama Media Dinas Komunikasi dan Informatika Kabupaten
                Ciamis berperan penting dalam mendukung kemajuan daerah melalui
                penyebaran informasi yang berkualitas dan menjalin hubungan yang
                harmonis antara pemerintah dan media.
              </span>
            </p>
          </div>
          <div className="services">
            <h2>Layanan Website</h2>

            <div className="service-card">
              <div className="service-icon-circle">
                <Newspaper size={32} />
              </div>
              <div className="service-content">
                <h3>Media Partner</h3>
                <p>
                  Program kerjasama untuk menjalin hubungan dengan Dinas
                  Komunikasi dan Informatika Kabupaten Ciamis
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon-circle">
                <Handshake size={32} />
              </div>
              <div className="service-content">
                <h3>Cara Kerja Sama</h3>
                <p>
                  Panduan lengkap untuk menjalin kerjasama dengan Dinas Kominfo
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon-circle">
                <Megaphone size={32} />
              </div>
              <div className="service-content">
                <h3>Berita</h3>
                <p>
                  Informasi terkini seputar program dan kegiatan Kominfo Ciamis
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
