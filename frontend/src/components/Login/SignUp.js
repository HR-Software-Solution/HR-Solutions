import React from 'react'

export default function SignUp() {
  return (
     <div className="login-container">
      <h1>הרשמה</h1>
      <div className="login-box">
        <input type="text" placeholder="name" required/>
        <input type="text" placeholder="last name" required/>
        <input type="password" inputMode="numeric"   pattern="\d*" placeholder="Password" required/>
        <input type="password" inputMode="numeric"   pattern="\d*" placeholder="Password" required/>
        <button>הרשם</button>

        <p>הרשמה באמצעות גוגל</p>
        
     
      </div>
    </div>
  )
}
