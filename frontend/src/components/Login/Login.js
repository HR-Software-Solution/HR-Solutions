import React from "react";
import "./style/Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <h1>ניהול השמה וגיוס</h1>
      <div className="login-box">
        <input
          type="email"
          placeholder="Email"
          pattern="^[\w\.-]+@[\w\.-]+\.\w{2,}$"
          required
        />
        <input
          type="password"
          inputMode="numeric"
          pattern="\d*"
          placeholder="Password"
          required
        />
        <button className="login-box-button">הכנס</button>
        <button className="google-signup">
          <img
            src={`${process.env.PUBLIC_URL}/logo_google_icon.png`}
            alt="Google"
          />
          <span>Google</span>
        </button>
        <div className="links">
          <a href="#">שכחת סיסמה?</a>
          <a href="#">הרשמה</a>
        </div>
      </div>
    </div>
  );
}
