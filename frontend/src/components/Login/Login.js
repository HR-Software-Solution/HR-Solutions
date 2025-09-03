import React from "react";
import "./style/Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <h1>ניהול השמה וגיוס</h1>
      <div className="login-box">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>הכנס</button>
      <div className="links">
        <a href="#">שכחת סיסמה?</a>
        <a href="#">הרשמה</a>
      </div>
      </div>
    </div>
  );
}
