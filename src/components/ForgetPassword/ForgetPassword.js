import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = (event) => {
    event.preventDefault();
    setMessage(`Password reset email sent to ${email}`);
  };

  return (
    <div className="ForgotPassword-form-container">
      <h2>Forgot Password</h2>
      <form className="ForgotPassword-form" onSubmit={handleResetPassword}>
        <div className="ForgotPassword-form-content">
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </div>
          {message && <p className="mt-3">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
