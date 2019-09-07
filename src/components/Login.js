import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" className="email-form" />
        <input type="password" className="password-form" />
        <Link to="/top">
          <input type="button" className="login-submit" value="ログイン" />
        </Link>
      </form>
    </div>
  );
}

export default Login;
