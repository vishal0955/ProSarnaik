import React, { useState } from 'react';


export default function Login() {
  // State to hold form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data
    console.log('Form Data:', { email, password });
    // You can perform your authentication logic here
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-header text-center">
          <h4>Login</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" onClick={()=>navigate()}>
              Login
            </button>
          </form>
          <div className="mt-3 text-center">
            <p>
              Don't have an account?{' '}
              <a href="/signup" className="text-primary">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
