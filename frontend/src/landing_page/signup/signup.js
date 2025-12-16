import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api/axios"; // ✅ shared axios instance

function Signup() {
  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Signup
      const res = await api.post("/signup", newUser);
      toast.success(res.data.message || "Signup successful");

      // 2️⃣ Auto-login
      const loginRes = await api.post("/login", {
        email: newUser.email,
        password: newUser.password,
      });

      // 3️⃣ Store auth data
      localStorage.setItem("token", loginRes.data.token);
      localStorage.setItem("user", JSON.stringify(loginRes.data.user));

      // 4️⃣ Redirect to Dashboard (separate Vercel app)
      window.location.href = "https://your-dashboard-name.vercel.app";

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  return (
    <div className="container" style={{ marginTop: "20vh" }}>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="mb-5 text-center">
        <h1 className="text-muted" style={{ fontSize: "3.1rem" }}>
          Open a free demat and trading account online
        </h1>
        <p className="fs-4 text-muted">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>

      <div className="row mt-4">
        <div className="col-6 text-center">
          <img
            src="media/signup.svg"
            alt="signup"
            className="img-fluid"
            style={{ width: "98%" }}
          />
        </div>

        <div className="col-6 text-center mt-4 p-3">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4">Signup Now</h1>

            <div className="mb-3 fs-5">
              <label htmlFor="fullName">Full Name :</label>
              <br />
              <input
                type="text"
                id="fullName"
                value={newUser.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="fs-5 mb-3">
              <label htmlFor="email">Email :</label>
              <br />
              <input
                type="email"
                id="email"
                value={newUser.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="fs-5 mb-3">
              <label htmlFor="password">Create Password :</label>
              <br />
              <input
                type="password"
                id="password"
                value={newUser.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary fs-5 px-4">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
