import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <p className="login-text">
        JIka kamu sudah punya akun
        <br />
        Klik disini <a href="#">Login !</a>
      </p>

      <form>
        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <div className="input-container">
            <span className="input-icon">
              {/* Email icon */}
              📧
            </span>
            <input type="email" placeholder="Enter your email address" />
          </div>
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label>Nama Perusahaan</label>
          <div className="input-container">
            <span className="input-icon">🏢</span>
            <input type="text" placeholder="Masukan nama perusahaan anda" />
          </div>
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <div className="input-container">
            <span className="input-icon">🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password</label>
          <div className="input-container">
            <span className="input-icon">🔒</span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              👁
            </button>
          </div>
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}
