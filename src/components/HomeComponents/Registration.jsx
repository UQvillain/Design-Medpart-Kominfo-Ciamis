import { useState } from "react";
import { Link } from "react-router-dom"; // pastikan ini ada di paling atas

export default function Registration() {
  const [step, setStep] = useState(1);

  return (
    <section className="registration">
      <h2>Ikuti langkah-langkahnya untuk bekerja sama dengan kami</h2>

      {/* Step 1 */}
      {step === 1 && (
        <div className="registration-card active" id="step-1">
          <div className="step-content">
            <div className="number-circle">1</div>
            <div>
              <h3>Registrasi Akun</h3>
              <p>
                Silakan lakukan registrasi akun jika Anda belum memiliki akun.
                Proses registrasi membutuhkan beberapa langkah sederhana. Klik
                tombol untuk melakukan registrasi akun.
              </p>
              <Link
                to="/SignUp"
                className="register-btn"
                onClick={() => setStep(2)}
              >
                Registrasi
              </Link>
            </div>
          </div>
          <div className="button-group">
            <button className="next-btn" onClick={() => setStep(2)}>
              ➡
            </button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="registration-card active" id="step-2">
          <div className="step-content">
            <div className="number-circle">2</div>
            <div>
              <h3>Login</h3>
              <p>
                Masukkan email dan kata sandi yang sudah Anda buat untuk login
                ke akun Anda. Pastikan informasi yang Anda masukkan benar untuk
                menghindari kesalahan akses.
              </p>
              <Link
                to="/SignUp"
                className="register-btn"
                onClick={() => setStep(3)}
              >
                Login
              </Link>
            </div>
          </div>
          <div className="button-group">
            <button className="back-btn" onClick={() => setStep(1)}>
              ⬅
            </button>
            <button className="next-btn" onClick={() => setStep(3)}>
              ➡
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="registration-card active" id="step-3">
          <div className="step-content">
            <div className="number-circle">3</div>
            <div>
              <h3>Pergi ke halaman kerja sama</h3>
              <p>
                Pergi ke halaman “Form kerja sama” lalu isi form dan unggah
                file-file yang diperlukan sesuai dengan persyaratan yang telah
                ditetapkan.
              </p>
              <Link
                to="/KerjaSamaLogin"
                className="register-btn"
                onClick={() => setStep(3)}
              >
                Login
              </Link>
            </div>
          </div>
          <div className="button-group">
            <button className="back-btn" onClick={() => setStep(2)}>
              ⬅
            </button>
            <button className="next-btn" onClick={() => setStep(4)}>
              ➡
            </button>
          </div>
        </div>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <div className="registration-card active" id="step-4">
          <div className="step-content">
            <div className="number-circle">4</div>
            <div>
              <h3>Tunggu notifikasi berhasil</h3>
              <p>
                Silakan tunggu notifikasi yang mengonfirmasi keberhasilan
                proses. Kami akan mengirimkan pemberitahuan segera setelah
                proses selesai.
              </p>
            </div>
          </div>
          <div className="button-group">
            <button className="back-btn" onClick={() => setStep(3)}>
              ⬅
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
