import React, { useState } from "react";

export default function Auth(props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (authMode === "signin") {
      const email = event.target.email.value;
      const password = event.target.password.value;

      const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
      const userExists = usersData.find(user => user.Email === email && user.Password === password);

      if (userExists) {
        alert('Login successful');
      } else {
        alert('Invalid credentials');
      }
    } else if (authMode === "signup") {
      const email = event.target.email.value;
      const password = event.target.password.value;
      const fullname = event.target.fullname.value;

      const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
      const emailExists = usersData.some(user => user.Email === email);

      if (emailExists) {
        alert('Email already exists. Please choose a different email.');
      } else {
        const userData = {
          Fullname: fullname,
          Email: email,
          Password: password,
        };
        usersData.push(userData);
        localStorage.setItem('usersData', JSON.stringify(usersData));

        alert('Sign Up successful');
      }
    }
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleFormSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
           
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="../ForgetPassword">password?</a>
            </p>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleFormSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="Fullname"
              id="fullname"
            />
          </div>
          
         
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
