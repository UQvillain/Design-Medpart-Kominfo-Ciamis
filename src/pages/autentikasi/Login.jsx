import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p className="login-text">
        Jika kamu belum punya akun
        <br />
        Klik disini <a href="#">Registrasi akun !</a>
      </p>

      <form>
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

        <div className="form-group">
          <label>Password</label>
          <div className="input-container">
          <span className="input-icon">🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePassword}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="remember-forgot">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="register-button">
          Login
        </button>
      </form>
    </div>
  );
}
