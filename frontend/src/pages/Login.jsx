import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailErrorMessage("");
    setPasswordErrorMessage("");

    try {
      const response = await fetch("http://localhost:3100/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log("Login successful");
        navigate("/DonarProfile");
      } else if (response.status === 409) {
        setEmailErrorMessage("The email address is not registered");
      } else {
        setEmailErrorMessage("The email address or password is not valid");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleChange = (e) => {
    setEmailErrorMessage("");
    setPasswordErrorMessage("");

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div
          className="w-1/2 bg-cover md:block hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1619279148778-fbccc09f36b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)",
          }}
        />
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-gray-800 text-3xl font-medium text-center">
              Welcome Back.
            </h1>
          </div>
          <br />
          <form action="#" className="p-0" onSubmit={handleSubmit}>
            <div className="mt-5">
              <input
                type="email"
                name="email"
                required
                ref={emailInputRef}
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                name="password"
                required
                ref={passwordInputRef}
                value={formData.password}
                onChange={handleChange}
                className={`block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ${
                  passwordErrorMessage
                    ? "The email or password are not valid"
                    : ""
                }`}
                placeholder="Password"
              />
              <br></br>
              {emailErrorMessage && (
                <p className="text-red-500">{emailErrorMessage}</p>
              )}
            </div>
            <div className="mt-10">
              <input
                type="submit"
                value="Login"
                className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600 text-center cursor-pointer"
                style={{ backgroundColor: "#252B3F" }}
              />
            </div>
          </form>
          <Link to="/sginup">
            <span className="block p-5 text-center text-gray-800 text-l">
              Don't have an account ?{" "}
              <span className="text-l text-blue-600">Sign Up</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
