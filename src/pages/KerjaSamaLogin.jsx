import React, { useState } from "react";

export default function FormKerjasama() {
  const [logoName, setLogoName] = useState("No file chosen");
  const [docName, setDocName] = useState("No file chosen");

  const handleFileChange = (e, setFileName) => {
    setFileName(e.target.files[0]?.name || "No file chosen");
  };

  return (
    <div className="form-kerjasama-login">
      <h1 className="form-title">
        📄 Isi data pada form untuk mulai bekerja sama
      </h1>

      <form>
        <div className="form-group-login">
          <label htmlFor="company-name">🏢 Nama Perusahaan</label>
          <input
            type="text"
            id="company-name"
            className="form-control-login"
            required
          />
        </div>

        <div className="form-group-login">
          <label htmlFor="leader-name">👤 Nama Pimpinan Instansi</label>
          <input
            type="text"
            id="leader-name"
            className="form-control-login"
            required
          />
        </div>

        <div className="form-group-login">
          <label htmlFor="company-address">📍 Alamat Perusahaan</label>
          <textarea
            id="company-address"
            className="form-control-login"
            required
          ></textarea>
        </div>

        <div className="form-group-login">
          <label htmlFor="logo-upload">🖼️ Upload Logo</label>
          <div className="file-upload-login">
            <label htmlFor="logo-upload" className="choose-label">
              📂 Choose File
            </label>
            <input
              type="file"
              id="logo-upload"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setLogoName)}
            />
            <div className="file-name-login">{logoName}</div>
          </div>
        </div>

        <div className="form-group-login">
          <label htmlFor="document-upload">📑 Upload Surat</label>
          <div className="file-upload-login">
            <label htmlFor="document-upload" className="choose-label">
              📂 Choose File
            </label>
            <input
              type="file"
              id="document-upload"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, setDocName)}
            />
            <div className="file-name-login">{docName}</div>
          </div>
        </div>
      </form>
    </div>
  );
}
