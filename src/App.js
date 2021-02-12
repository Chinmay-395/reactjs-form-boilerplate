import React, { useState } from "react";
import "./style.css";
import LoginForm from "./components/LoginForm";

export default function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details did not matched!!!");
      setError("Details did not matched!!!");
    }
  };

  const Logout = () => {
    console.log("LOGOUT");
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
