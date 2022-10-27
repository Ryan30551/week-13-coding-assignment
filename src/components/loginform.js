import React from "react";
import "./loginform.css"


const LoginForm = () => {
    return (
        <div className="cover">
            <h3>Log In</h3>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn">Login</div>

            <p className="reset-btn">Reset Login</p>
        </div>
    )
}

export default LoginForm
