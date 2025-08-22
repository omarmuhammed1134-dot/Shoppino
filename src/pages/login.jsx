import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from '../assets/images/login-v2.svg';
import {login} from '../services/authService'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordTextType, setPasswordTextType] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    setError("");
    setLoading(true);

    login(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setError(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });

 
  };

  return (
    <div className="auth-wrapper auth-v2 d-flex align-items-center justify-content-center">
      <div className="auth-inner row m-0">


        {/* Left Text */}
        <div className="d-none d-lg-flex col-lg-7 align-items-center p-5">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img
              className="img-fluid"
              src={loginImg}
              alt="Login V2"
            />
          </div>
        </div>

        {/* Login */}
<div className="d-flex col-lg-5 align-items-center justify-content-center auth-bg px-3 p-lg-5 " 

>
  <div className="  p-4 w-100  h-100 mt-3" style={cardStyle}>
    <div className="text-center mb-4">
      <h2 className="fw-bold">Welcome to <small className="text-primary">SHOPPINO !</small> 👋</h2>
      <p className="text-muted">Please sign-in to your account and start the adventure</p>
    </div>

    {error && (
      <div className="alert alert-danger text-center">{error}</div>
    )}

    <form onSubmit={handleSubmit} className="mt-3">
      {/* Email */}
      <div className="mb-3">
        <label htmlFor="login-email" className="form-label">Email</label>
        <input
          type="text"
          id="login-email"
          className={`form-control ${submitted && !email ? "is-invalid" : ""}`}
          placeholder="admin@demo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />

      </div>

      {/* Password */}
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="login-password" className="form-label">Password</label>
          <Link to="/forgot-password" className="small text-decoration-none">
            Forgot Password?
          </Link>
        </div>
        <div className="input-group">
          <input
            type={passwordTextType ? "text" : "password"}
            id="login-password"
            className={`form-control ${submitted && !password ? "is-invalid" : ""}`}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setPasswordTextType(!passwordTextType)}
          >
            <i className={`bi bi-${passwordTextType ? "eye-slash" : "eye"}`}></i>
          </button>
          {submitted && !password && (
            <div className="invalid-feedback d-block">Password is required</div>
          )}
        </div>
      </div>

      {/* Remember Me */}
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="remember-me" />
        <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
      </div>

      {/* Submit Button */}
      <button
        disabled={loading}
        className="btn btn-primary w-100"
        type="submit"
      >
        {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
        Sign in
      </button>
    </form>



    {/* Divider */}
    <div className="text-center my-3">
      <span className="text-muted">──────── or ────────</span>
    </div>

    {/* Social Buttons */}
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-outline-primary">
        <i className="bi bi-facebook"></i>
      </button>
      <button className="btn btn-outline-info">
        <i className="bi bi-twitter"></i>
      </button>
      <button className="btn btn-outline-danger">
        <i className="bi bi-google"></i>
      </button>
      <button className="btn btn-outline-dark">
        <i className="bi bi-github"></i>
      </button>
    </div>
  </div>
</div>

        {/* /Login */}
      </div>
    </div>
  );
}

const cardStyle = {
  boxShadow: '4px 4px 12px 12px rgba(0, 0, 0, 0.15)', 
  borderRadius: '12px',                    
  padding: '20px',                             
  backgroundColor: '#fff',                    
};



export default Login;


