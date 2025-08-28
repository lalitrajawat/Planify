import "../styles/LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        
        {/* Left Panel (Form Side) */}
        <div className="login-left">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtext">
            Don’t have an account? <Link to="/">Sign up here</Link>
          </p>

          <input type="email" placeholder="Email address" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />

          <div className="login-row">
            <div className="login-remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link to="/forgot-password" className="login-forgot">Forgot password?</Link>
          </div>

          <button className="login-btn">Login</button>

          <div className="login-row">
            <button className="login-btn small">Google</button>
            <button className="login-btn small">Apple</button>
          </div>
        </div>

        {/* Right Panel (Image Side) */}
        <div className="login-right">
          <img src="/assets/signupIMG1.png" alt="background" className="login-img" />
          <div className="login-overlay">
            <div className="login-header">
              <h1 className="logo">Planify</h1>
            </div>
            <p className="login-tagline">One step closer to your goals — log in now.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
